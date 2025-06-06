
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative rounded-xl backdrop-blur-sm border border-transparent hover:border-border/30 hover:shadow-lg transition-all duration-300"
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-border/30 hover:shadow-lg group overflow-hidden"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 group-hover:text-primary dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 group-hover:text-primary dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
      
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Dark mode specific glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl opacity-0 dark:group-hover:opacity-50 transition-opacity duration-500" />
      
      {/* Subtle animation ring */}
      <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/20 transition-all duration-500 animate-pulse-gentle" />
    </Button>
  )
}
