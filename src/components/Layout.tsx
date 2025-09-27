import { useState, ReactNode } from "react"
import { AppSidebar } from "@/components/AppSidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar - Desktop: normal positioning, Mobile: overlay */}
      <div className={`${
        isMobile 
          ? `fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`
          : 'relative'
      }`}>
        <AppSidebar 
          isExpanded={isMobile ? true : isSidebarExpanded} 
          setIsExpanded={isMobile ? setIsMobileMenuOpen : setIsSidebarExpanded}
          isMobile={isMobile}
        />
      </div>
      
      <main className={`flex-1 flex flex-col transition-all duration-300 ${
        isMobile ? 'ml-0' : (isSidebarExpanded ? 'ml-72' : 'ml-20')
      }`}>
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-border/50 bg-gradient-subtle backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-soft">
          <div className="flex items-center gap-3">
            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-muted"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <h1 className="font-semibold text-foreground text-lg bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              AI Assistant
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-primary shadow-glow animate-glow-pulse"></div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
  )
}