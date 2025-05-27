
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
      <Button variant="ghost" size="icon" className="relative rounded-xl backdrop-blur-sm border border-transparent hover:border-border/30 hover:shadow-lg">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-border/30 hover:shadow-lg group"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all group-hover:text-primary dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all group-hover:text-primary dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  )
}
