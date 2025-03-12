'use client'

import {
    Sidebar,
  } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { NavMain } from "./nav-main"
import { adminSidebarItems, organizerSidebarItems } from "@/constants/dashboard/sidebaritmes"


export default function MainSidebar ({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const userrole: string = 'admin'
  return (
    <AppSidebar {...props}>
        {
            userrole === 'organizer' 
            ?  <NavMain items={organizerSidebarItems} /> 
            :  <NavMain items={adminSidebarItems} />
        }
    </AppSidebar>
  )
}