'use client'

import {
    Sidebar,
  } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { NavMain } from "./nav-main"
import { adminSidebarItems, attendeeSidebarItems, organizerSidebarItems, pointofsaleSidebarItems, scannerSidebarItems } from "@/constants/dashboard/sidebaritmes"

const getRoleSpecificSidebar = (role: string) => {
  switch (role) {
    case 'organizer':
      return <NavMain items={organizerSidebarItems} />;
    case 'pointofsale':
      return <NavMain items={pointofsaleSidebarItems} />;
    case 'scanner':
      return <NavMain items={scannerSidebarItems} />;
    case 'attendee':
      return <NavMain items={attendeeSidebarItems} />;
    default:
      return <NavMain items={adminSidebarItems} />;
  }
};

export default function MainSidebar ({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const userrole: string = 'attendee';
  return (
    <AppSidebar {...props}>
        {
          getRoleSpecificSidebar(userrole)
        }
    </AppSidebar>
  )
}