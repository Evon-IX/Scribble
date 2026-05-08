import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("app_stats")
    .select("total_words_typed, active_users, updated_at")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const supabase = await createClient();

  const body = await request.json();
  const { words_typed } = body;

  if (typeof words_typed !== "number" || words_typed < 0) {
    return NextResponse.json(
      { error: "Invalid words_typed value" },
      { status: 400 }
    );
  }

  // Get current stats
  const { data: currentStats, error: fetchError } = await supabase
    .from("app_stats")
    .select("total_words_typed")
    .eq("id", 1)
    .single();

  if (fetchError) {
    return NextResponse.json(
      { error: "Failed to fetch current stats" },
      { status: 500 }
    );
  }

  // Update with new total
  const { data, error } = await supabase
    .from("app_stats")
    .update({
      total_words_typed: (currentStats?.total_words_typed || 0) + words_typed,
      updated_at: new Date().toISOString(),
    })
    .eq("id", 1)
    .select()
    .single();

  if (error) {
    console.error("Error updating stats:", error);
    return NextResponse.json(
      { error: "Failed to update stats" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
