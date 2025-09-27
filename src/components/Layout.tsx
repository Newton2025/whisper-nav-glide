import { useState, ReactNode } from "react"
import { AppSidebar } from "@/components/AppSidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { Search, Camera, Mic, Sparkles, Globe, Book, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  // Mobile-first layout like Perplexity
  if (isMobile) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Mobile Header */}
        <header className="p-4 border-b border-border/20">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
              AI Assistant
            </h1>
            <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
          </div>
        </header>

        {/* Mobile Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
          {children}
          
          {/* Search Input - Perplexity Style */}
          <div className="w-full max-w-md mb-8">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                placeholder="Ask anything..."
                className="w-full h-14 pl-12 pr-12 rounded-full bg-muted/50 border-border/20 text-lg placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Mic className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Feature Buttons */}
          <div className="grid grid-cols-4 gap-6 w-full max-w-sm">
            <Button
              variant="ghost"
              size="lg"
              className="h-16 w-16 rounded-full bg-muted/30 hover:bg-muted/50 flex-col gap-2 p-0"
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-16 w-16 rounded-full bg-muted/30 hover:bg-muted/50 flex-col gap-2 p-0"
            >
              <Globe className="h-6 w-6 text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-16 w-16 rounded-full bg-muted/30 hover:bg-muted/50 flex-col gap-2 p-0"
            >
              <Book className="h-6 w-6 text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-16 w-16 rounded-full bg-muted/30 hover:bg-muted/50 flex-col gap-2 p-0"
            >
              <Code className="h-6 w-6 text-primary" />
            </Button>
          </div>
        </main>
      </div>
    )
  }

  // Desktop layout with sidebar
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
        {/* Desktop Top Header */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-border/50 bg-gradient-subtle backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-soft">
          <div className="flex items-center gap-3">
            <h1 className="font-semibold text-foreground text-lg bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              AI Assistant
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-primary shadow-glow animate-glow-pulse"></div>
          </div>
        </header>

        {/* Desktop Main Content Area */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
  )
}