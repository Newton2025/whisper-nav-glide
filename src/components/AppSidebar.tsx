import { NavLink, useLocation } from "react-router-dom"
import { Plus, Home, Globe, Calendar, Menu, MessageSquare, Download, Zap, Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Navigation items
const navigationItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Discover", icon: Globe, url: "/discover" },
  { title: "Spaces", icon: Calendar, url: "/spaces" },
]

// Bottom action buttons
const bottomButtons = [
  { title: "Install", icon: Download, action: () => console.log("Install") },
  { title: "Upgrade", icon: Zap, action: () => console.log("Upgrade") },
  { title: "Notifications", icon: Bell, action: () => console.log("Notifications") },
]

// Mock recent chats for expanded view
const recentChats = [
  { id: "1", title: "React components help", timestamp: "2 hours ago" },
  { id: "2", title: "TypeScript best practices", timestamp: "Yesterday" },
  { id: "3", title: "CSS Grid layouts", timestamp: "3 days ago" },
]

interface AppSidebarProps {
  isExpanded: boolean
  setIsExpanded: (expanded: boolean) => void
  isMobile?: boolean
}

export function AppSidebar({ isExpanded, setIsExpanded, isMobile = false }: AppSidebarProps) {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <div className={`${
      isMobile ? 'fixed' : 'fixed'
    } left-0 top-0 h-full bg-background border-r border-border/50 flex flex-col z-50 transition-all duration-300 ${
      isMobile ? 'w-72' : (isExpanded ? 'w-72' : 'w-20')
    }`}>
      {/* Header with Menu/Logo */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          {!isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-8 h-8 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          {(isExpanded || isMobile) && (
            <div className={`${isMobile ? '' : 'ml-3'} animate-fade-in`}>
              <h1 className="text-lg font-semibold text-foreground bg-gradient-primary bg-clip-text text-transparent">
                Gemini
              </h1>
              <p className="text-sm text-muted-foreground font-medium">2.5 Flash</p>
            </div>
          )}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsExpanded(false)}
              className="w-8 h-8 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-3">
        <Button 
          variant="ghost" 
          className={`w-full h-12 rounded-2xl bg-muted/20 hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:shadow-hover hover:scale-105 group border border-border/20 ${
            (isExpanded || isMobile) ? 'justify-start gap-3 px-4' : 'justify-center'
          }`}
        >
          <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90 flex-shrink-0" />
          {(isExpanded || isMobile) && <span className="animate-fade-in font-medium">New chat</span>}
        </Button>
      </div>

      {/* Navigation Items */}
      <div className="px-3 flex-1">
        <div className="flex flex-col gap-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 hover:bg-muted/30 hover:scale-105 group ${
                  isActive ? 'text-brand-primary bg-brand-primary/10' : 'text-muted-foreground hover:text-foreground'
                } ${(isExpanded || isMobile) ? 'justify-start' : 'justify-center flex-col gap-2'}`
              }
            >
              <item.icon className="h-5 w-5 transition-colors duration-300 flex-shrink-0" />
              <span className={`text-sm font-medium leading-none transition-colors duration-300 ${
                (isExpanded || isMobile) ? 'animate-fade-in' : 'text-xs'
              }`}>
                {item.title}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Recent Chats - Only show when expanded */}
        {(isExpanded || isMobile) && (
          <div className="mt-8 animate-fade-in">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
              Recent
            </h3>
            <div className="space-y-1">
              {recentChats.map((chat) => (
                <NavLink
                  key={chat.id}
                  to={`/chat/${chat.id}`}
                  className="flex items-center gap-3 p-3 rounded-2xl hover:bg-muted/30 transition-all duration-300 hover:scale-105 group"
                >
                  <MessageSquare className="h-4 w-4 text-muted-foreground group-hover:text-brand-primary transition-colors duration-300 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate group-hover:text-brand-primary transition-colors duration-300">
                      {chat.title}
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-brand-primary/70 transition-colors duration-300">
                      {chat.timestamp}
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Buttons */}
      <div className="p-3 border-t border-border/50">
        <div className={`flex gap-2 ${isExpanded ? 'flex-col' : 'flex-col'}`}>
          {bottomButtons.map((button) => (
            <Button
              key={button.title}
              variant="ghost"
              onClick={button.action}
              className={`transition-all duration-300 hover:bg-muted/30 hover:scale-105 group ${
                (isExpanded || isMobile)
                  ? 'justify-start gap-3 p-3 rounded-2xl text-muted-foreground hover:text-foreground' 
                  : 'justify-center flex-col gap-2 p-3 rounded-2xl text-muted-foreground hover:text-foreground'
              }`}
            >
              <button.icon className="h-5 w-5 transition-colors duration-300 flex-shrink-0" />
              <span className={`text-sm font-medium leading-none transition-colors duration-300 ${
                (isExpanded || isMobile) ? 'animate-fade-in' : 'text-xs'
              }`}>
                {button.title}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}