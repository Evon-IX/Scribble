"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SupportDialog } from "./support-dialog";

export function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
          Ready to automate your typing?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Download Scribble for free and let the bot handle your typing tasks.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <SupportDialog>
            <Button size="lg" className="h-12 px-8 text-base font-medium">
              <Download className="mr-2 h-4 w-4" />
              Download Free
            </Button>
          </SupportDialog>
        </div>
      </div>
    </section>
  );
}
