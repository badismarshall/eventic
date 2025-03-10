'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { adminSidebarItems } from "@/constants/dashboard/sidebaritmes"
import { cn } from "@/lib/utils";
import { Package2, PanelLeft, Search, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname()
    const pathNames = pathname.split('/').filter(path => path && path !== 'administrator');

    return (
        <div className="flex min-h-[94vh] w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-50 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            {
                adminSidebarItems.map((item, index) =>{
                    const isActive = pathname === item.route
                    return(
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.route}
                                    className={cn(isActive ? 'bg-accent' : '',"flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8")}
                                > 
                                <item.icon className="size-5"/>
                                <span className="sr-only">{item.label}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">{item.label}</TooltipContent>
                        </Tooltip>
                    )
                })
            }
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Paramètres</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Paramètres</TooltipContent>
            </Tooltip>
            </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                {
                    adminSidebarItems.map((item, index) =>{
                        const isActive = pathname === item.route
                        return(
                            <Link
                            key={index}
                            href={item.route}
                            className={cn(isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',"flex items-center gap-4 px-2.5")}
                          >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                          </Link>
                        )
                    })
                }
              </nav>
            </SheetContent>
          </Sheet>
          {
            pathNames.map((path, index) => {
                const isActive = index === pathNames.length - 1
                return(
                    <Breadcrumb key={index} className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">{path.charAt(0).toUpperCase() + path.slice(1)}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </BreadcrumbList>
                    </Breadcrumb>
                )
            })
          }
          {/* <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div> */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src=""
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </header>
            {children}
        </div>
      </div>
    );
}