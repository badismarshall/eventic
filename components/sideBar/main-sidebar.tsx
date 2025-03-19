'use client'

import {
    Sidebar,
  } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { NavMain } from "./nav-main"
import { adminSidebarItemsGeneralSetting, adminSideBarItemsPromotionManagement, attendeeSidebarItems, organizerSidebarItems, pointofsaleSidebarItems, scannerSidebarItems } from "@/constants/dashboard/sidebaritmes"

const getRoleSpecificSidebar = (role: string) => {
  switch (role) {
    case 'organizer':
      return <NavMain items={organizerSidebarItems} groupeLabel='Eventic'/>;
    case 'pointofsale':
      return <NavMain items={pointofsaleSidebarItems} groupeLabel="Eventic"/>;
    case 'scanner':
      return <NavMain items={scannerSidebarItems} groupeLabel="Eventic"/>;
    case 'attendee':
      return <NavMain items={attendeeSidebarItems} groupeLabel="Eventic"/>;
    default:
      return (
        <div>
          <NavMain items={adminSidebarItemsGeneralSetting} groupeLabel="Paramètres généraux"/>
          <NavMain items={adminSideBarItemsPromotionManagement} groupeLabel="Gestion des promotions"/>
        </div>
      )
  }
};

export default function MainSidebar ({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const userrole: string = 'admin';
  return (
    <AppSidebar {...props}>
        {
          getRoleSpecificSidebar(userrole)
        }
    </AppSidebar>
  )
}