import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// This endpoint is called by the desktop app to report active usage
// It increments active_users counter
export async function POST() {
  const supabase = await createClient();

  // Get current stats
  const { data: currentStats, error: fetchError } = await supabase
    .from("app_stats")
    .select("active_users")
    .eq("id", 1)
    .single();

  if (fetchError) {
    return NextResponse.json(
      { error: "Failed to fetch current stats" },
      { status: 500 }
    );
  }

  // Increment active users
  const { data, error } = await supabase
    .from("app_stats")
    .update({
      active_users: (currentStats?.active_users || 0) + 1,
      updated_at: new Date().toISOString(),
    })
    .eq("id", 1)
    .select()
    .single();

  if (error) {
    console.error("Error updating active users:", error);
    return NextResponse.json(
      { error: "Failed to update active users" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
