
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full hover:scale-110 transition-all duration-300 backdrop-blur-sm border-border/50 hover:border-border group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 dark:from-blue-600/20 dark:to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
