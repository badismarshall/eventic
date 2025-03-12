import Link from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Separator } from "../ui/separator"
import { SidebarTrigger } from "../ui/sidebar"

export  default function HeaderInsetSidebar({pathnames} : {pathnames: string[]}) {
  return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {            
                pathnames.map((path, index) => {
                const isActive = index === pathnames.length - 1
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
            </div>
        </header>
  )
}

