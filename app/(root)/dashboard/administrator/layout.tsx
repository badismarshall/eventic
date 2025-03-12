'use client'

import HeaderInsetSidebar from "@/components/sideBar/header-inset-sidebare";
import { usePathname } from "next/navigation";

export default function AdminDashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  const pathname = usePathname()
  const pathNames = pathname.split('/').filter(path => path && path !== 'administrator');
  return (
    <div>
      <HeaderInsetSidebar pathnames={pathNames} />
       {children}
    </div>
  )
}

