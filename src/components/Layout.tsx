import { ReactNode } from "react"
import { AppSidebar } from "@/components/AppSidebar"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <main className="flex-1 flex flex-col ml-20">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-border/50 bg-gradient-subtle backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-soft">
          <div className="flex items-center gap-3">
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