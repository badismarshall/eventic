
import MainSidebar from "@/components/sideBar/main-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cookies } from "next/headers"
import HeaderInsetSidebar from "@/components/sideBar/header-inset-sidebare";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
      <div>
        <TooltipProvider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <MainSidebar />
            <SidebarInset>
                <HeaderInsetSidebar />
                {children}
              </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
      </div>
    );
}