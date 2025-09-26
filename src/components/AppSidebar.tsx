import { NavLink, useLocation } from "react-router-dom"
import { Plus, Home, Globe, Calendar, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

// Navigation items
const navigationItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Discover", icon: Globe, url: "/discover" },
  { title: "Spaces", icon: Calendar, url: "/spaces" },
  { title: "Settings", icon: Settings, url: "/settings" },
]

export function AppSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-background border-r border-border/50 flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          className="w-12 h-12 rounded-2xl bg-muted/20 hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:shadow-hover hover:scale-105 group border border-border/20"
        >
          <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
        </Button>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-6">
        {navigationItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={({ isActive }) => 
              `flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 hover:bg-muted/30 hover:scale-105 group ${
                isActive ? 'text-brand-primary bg-brand-primary/10' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <item.icon className="h-5 w-5 transition-colors duration-300" />
            <span className="text-xs font-medium leading-none">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}