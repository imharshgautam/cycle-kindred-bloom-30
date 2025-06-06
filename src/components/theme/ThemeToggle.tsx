
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
      className="relative rounded-xl hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-transparent hover:border-border/30 hover:shadow-lg group overflow-hidden"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-700 group-hover:text-primary dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-700 group-hover:text-primary dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
      
      {/* Enhanced background gradient with cute colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Enhanced dark mode specific glow effect with cute colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-blue-400/30 rounded-xl opacity-0 dark:group-hover:opacity-70 transition-all duration-700 blur-sm" />
      
      {/* Cute animation ring with colorful gradient */}
      <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-pink-400/40 dark:group-hover:border-purple-400/50 transition-all duration-700 animate-pulse-gentle" />
      
      {/* Additional cute sparkle effect for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent rounded-xl opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
    </Button>
  )
}
