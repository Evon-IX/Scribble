"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Coffee, Star, Sparkles, Download } from "lucide-react";

interface SupportDialogProps {
  children: React.ReactNode;
}

const supportOptions = [
  {
    icon: Coffee,
    title: "Buy me a coffee",
    amount: "$5",
    description: "A small thank you",
  },
  {
    icon: Heart,
    title: "Support the project",
    amount: "$10",
    description: "Help keep development going",
  },
  {
    icon: Star,
    title: "Become a supporter",
    amount: "$25",
    description: "Get early access to new features",
  },
  {
    icon: Sparkles,
    title: "Super supporter",
    amount: "$50",
    description: "Your name in the credits",
  },
];

export function SupportDialog({ children }: SupportDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSupport = (amount: string) => {
    // In a real app, this would redirect to a payment processor
    alert(`Thank you for choosing to support with ${amount}! Payment integration coming soon.`);
  };

  const handleSkip = () => {
    // Direct download - replace with your actual download link
    setOpen(false);
    window.open("https://github.com/your-repo/scribble/releases", "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="w-6 h-6 text-accent" />
            Would you like to support me?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            Scribble is free to use. If you find it helpful, consider
            supporting the development!
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 py-4">
          {supportOptions.map((option) => (
            <button
              key={option.title}
              onClick={() => handleSupport(option.amount)}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-accent/50 transition-all text-left group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <option.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">{option.title}</div>
                <div className="text-sm text-muted-foreground">
                  {option.description}
                </div>
              </div>
              <div className="text-lg font-bold text-accent">{option.amount}</div>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-2 border-t border-border">
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="w-full text-muted-foreground hover:text-foreground"
          >
            <Download className="w-4 h-4 mr-2" />
            No thanks, just download
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
