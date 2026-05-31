"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-6 w-[68px]" />; // placeholder width for sun + switch + moon
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Sun className="text-muted-foreground hover:text-foreground h-4 w-4 transition-colors" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <Moon className="text-muted-foreground hover:text-foreground h-4 w-4 transition-colors" />
    </div>
  );
}
