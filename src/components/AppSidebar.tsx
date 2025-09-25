import { useState } from "react"
import { Menu, Plus, MessageSquare, Settings, HelpCircle, ChevronRight } from "lucide-react"
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
      className="border-sidebar-border"
    >
      <SidebarContent className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            <SidebarTrigger className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors" />
            {!isCollapsed && (
              <div className="ml-3">
                <h1 className="text-lg font-semibold text-sidebar-foreground">Gemini</h1>
                <p className="text-sm text-brand-secondary">2.5 Flash</p>
              </div>
            )}
          </div>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 h-12 hover:bg-sidebar-accent text-sidebar-foreground"
          >
            <Plus className="h-5 w-5" />
            {!isCollapsed && <span>New chat</span>}
          </Button>
        </div>

        {/* Recent Chats */}
        <div className="flex-1 px-3">
          <SidebarGroup>
            {!isCollapsed && (
              <SidebarGroupLabel className="text-sidebar-foreground font-medium mb-2">
                Recent
              </SidebarGroupLabel>
            )}
            
            <SidebarGroupContent>
              <SidebarMenu>
                {recentChats.map((chat) => (
                  <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton asChild>
                      <NavLink to={`/chat/${chat.id}`} className={getNavCls}>
                        <MessageSquare className="h-4 w-4 flex-shrink-0" />
                        {!isCollapsed && (
                          <div className="flex-1 min-w-0">
                            <p className="truncate text-sm">{chat.title}</p>
                            <p className="text-xs text-brand-secondary">{chat.timestamp}</p>
                          </div>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Auth Section */}
          {!isCollapsed && (
            <div className="mt-6 p-4 bg-sidebar-accent rounded-lg">
              <p className="text-sm text-sidebar-foreground mb-3">
                Sign in to start saving your chats
              </p>
              <p className="text-xs text-brand-secondary mb-4">
                Once you're signed in, you can access your recent chats here.
              </p>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-brand-primary hover:bg-brand-primary/10 font-medium"
              >
                Sign in
              </Button>
            </div>
          )}
        </div>

        <Separator className="bg-sidebar-border" />

        {/* Bottom Section */}
        <div className="p-3">
          <SidebarMenu>
            {settingsItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.url} className={getNavCls}>
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && <span className="text-sm">{item.title}</span>}
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