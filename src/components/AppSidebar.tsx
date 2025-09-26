import { useState } from "react"
import { Menu, Plus, MessageSquare, Settings, HelpCircle, ChevronRight, Home, Globe, Calendar, Bell, User, ArrowUp, Download } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Mock recent chats data
const recentChats = [
  { id: "1", title: "React components help", timestamp: "2 hours ago" },
  { id: "2", title: "TypeScript best practices", timestamp: "Yesterday" },
  { id: "3", title: "CSS Grid layouts", timestamp: "3 days ago" },
  { id: "4", title: "API integration guide", timestamp: "1 week ago" },
]

// Main navigation items
const navigationItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Discover", icon: Globe, url: "/discover" },
  { title: "Spaces", icon: Calendar, url: "/spaces" },
]

// Bottom navigation items
const bottomItems = [
  { title: "Notifications", icon: Bell, url: "/notifications" },
  { title: "Account", icon: User, url: "/account" },
  { title: "Upgrade", icon: ArrowUp, url: "/upgrade" },
  { title: "Install", icon: Download, url: "/install" },
]

const settingsItems = [
  { title: "Settings & help", icon: Settings, url: "/settings" },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-chat-active text-brand-primary font-medium" : "hover:bg-chat-hover"

  return (
    <Sidebar
      collapsible="icon"
      className="border-sidebar-border bg-gradient-subtle backdrop-blur-sm"
    >
      <SidebarContent className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border/50 bg-gradient-to-r from-transparent to-sidebar-accent/30">
          <div className="flex items-center justify-center">
            {!isCollapsed && (
              <div className="animate-fade-in text-center">
                <h1 className="text-lg font-semibold text-sidebar-foreground bg-gradient-primary bg-clip-text text-transparent">
                  Gemini
                </h1>
                <p className="text-sm text-brand-secondary font-medium">2.5 Flash</p>
              </div>
            )}
          </div>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <Button 
            variant="ghost" 
            className={`w-full ${isCollapsed ? 'justify-center px-2' : 'justify-start gap-3'} h-12 text-sidebar-foreground font-medium rounded-xl transition-all duration-300 hover:bg-gradient-primary hover:text-white hover:shadow-hover hover:scale-[1.02] group`}
          >
            <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90 flex-shrink-0" />
            {!isCollapsed && <span className="animate-fade-in">New chat</span>}
          </Button>
        </div>

        {/* Main Navigation */}
        <div className="px-3 mb-2">
          <SidebarMenu className="space-y-1">
            {navigationItems.map((item, index) => (
              <SidebarMenuItem key={item.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.url} className={({ isActive }) => `${isActive ? "bg-chat-active text-brand-primary font-medium" : "hover:bg-chat-hover"} group rounded-xl transition-all duration-300 hover:shadow-soft hover:scale-[1.01] p-3`}>
                    <item.icon className="h-5 w-5 flex-shrink-0 transition-colors duration-300 group-hover:text-brand-primary" />
                    {!isCollapsed && (
                      <span className="text-sm font-medium group-hover:text-foreground transition-colors duration-300 animate-fade-in">
                        {item.title}
                      </span>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>

        {/* Recent Chats - Only show when expanded */}
        {!isCollapsed && (
          <div className="flex-1 px-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-sidebar-foreground font-semibold mb-3 text-xs uppercase tracking-wider opacity-70 animate-fade-in">
                Recent
              </SidebarGroupLabel>
              
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {recentChats.map((chat, index) => (
                    <SidebarMenuItem key={chat.id} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                      <SidebarMenuButton asChild>
                        <NavLink to={`/chat/${chat.id}`} className={`${getNavCls} group rounded-xl transition-all duration-300 hover:shadow-soft hover:scale-[1.01] p-3`}>
                          <MessageSquare className="h-4 w-4 flex-shrink-0 transition-colors duration-300 group-hover:text-brand-primary" />
                          <div className="flex-1 min-w-0 animate-fade-in">
                            <p className="truncate text-sm font-medium group-hover:text-foreground transition-colors duration-300">
                              {chat.title}
                            </p>
                            <p className="text-xs text-brand-secondary group-hover:text-brand-primary/70 transition-colors duration-300">
                              {chat.timestamp}
                            </p>
                          </div>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Auth Section */}
            <div className="mt-6 p-4 bg-gradient-subtle rounded-2xl border border-sidebar-border/50 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in">
              <p className="text-sm text-sidebar-foreground mb-3 font-medium">
                Sign in to start saving your chats
              </p>
              <p className="text-xs text-brand-secondary mb-4 leading-relaxed">
                Once you're signed in, you can access your recent chats here.
              </p>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-brand-primary hover:bg-brand-primary hover:text-white font-semibold transition-all duration-300 hover:shadow-hover hover:scale-105 rounded-xl"
              >
                Sign in
              </Button>
            </div>
          </div>
        )}

        {/* Spacer for collapsed state */}
        {isCollapsed && <div className="flex-1" />}

        <Separator className="bg-gradient-to-r from-transparent via-sidebar-border to-transparent my-2" />

        {/* Bottom Navigation */}
        <div className="p-3">
          <SidebarMenu className="space-y-1">
            {bottomItems.map((item, index) => (
              <SidebarMenuItem key={item.title} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.url} className={({ isActive }) => `${isActive ? "bg-chat-active text-brand-primary font-medium" : "hover:bg-chat-hover"} group rounded-xl transition-all duration-300 hover:shadow-soft hover:scale-[1.01] p-3`}>
                    <item.icon className="h-4 w-4 transition-colors duration-300 group-hover:text-brand-primary" />
                    {!isCollapsed && (
                      <span className="text-sm font-medium group-hover:text-foreground transition-colors duration-300 animate-fade-in">
                        {item.title}
                      </span>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>

        {/* Settings Section */}
        <div className="p-3">
          <SidebarMenu>
            {settingsItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.url} className={({ isActive }) => `${isActive ? "bg-chat-active text-brand-primary font-medium" : "hover:bg-chat-hover"} group rounded-xl transition-all duration-300 hover:shadow-soft hover:scale-[1.01] p-3`}>
                    <item.icon className="h-4 w-4 transition-colors duration-300 group-hover:text-brand-primary" />
                    {!isCollapsed && (
                      <span className="text-sm font-medium group-hover:text-foreground transition-colors duration-300 animate-fade-in">
                        {item.title}
                      </span>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}