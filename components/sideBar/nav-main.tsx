"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Eventic</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {

        const isActive = pathname === item.url
        return (
            <div key={item.title}>
                {
                    (!item.items || item.items.length === 0 ) ? (
                        <Tooltip key={item.title}>
                          <TooltipTrigger asChild>
                              <SidebarMenuItem key={item.title}>
                                  <SidebarMenuButton asChild>
                                      <a href={item.url} className={cn(isActive ? 'bg-secondary' : '',"transition-colors hover:text-foreground")}>
                                          {item.icon && <item.icon />}    
                                          <span>{item.title}</span>
                                      </a>
                                  </SidebarMenuButton>
                              </SidebarMenuItem>
                          </TooltipTrigger>
                          <TooltipContent side="right">{item.title}</TooltipContent>
                        </Tooltip>
                    ) : (
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={item.isActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                {item.items?.map((subItem) => {
                                  const isActive = pathname === subItem.url
                                  return (
                                    <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton asChild>
                                        <a href={subItem.url} className={cn(isActive ? 'bg-secondary' : '',"transition-colors hover:text-foreground")}>
                                        <span>{subItem.title}</span>
                                        </a>
                                    </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                )})}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    )   
                }
          </div>
        )})}
      </SidebarMenu>
    </SidebarGroup>
  )
}
