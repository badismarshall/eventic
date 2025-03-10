'use client'
 
import { navbarItems } from '@/constants/Navbar/navbarItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import {  LogIn, UserPlus } from 'lucide-react'
import { ThemeToggle } from '../header/ThemeToggle'

function NavBar()  {
    const pathname = usePathname()

  return (
    <header className="px-12  z-40 max-2xl:text-[13px] sticky top-0  w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className='flex justify-between items-center'>
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4  md:flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                </div>
                <div className="flex items-center space-x-4 list-none">
                    {
                        navbarItems.map((link) => {
                            const isActive = pathname === link.route
                            return (
                                <li key={link.route} className='hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'>
                                    <Link
                                        href={link.route}
                                        >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <div className='flex items-center gap-1 '>
                    <Button  size='sm' asChild>
                        <Link href='/login'>
                            <LogIn className="h-5 w-5 lg:hidden block"/>
                            <span className='lg:block hidden'>Se connecter</span>
                        </Link>
                    </Button>
                        <Button variant='outline' className='gap-1' size='sm' asChild>
                            <Link href='sign-up'>
                                <UserPlus className="h-5 w-5 lg:hidden block"/>
                                <span className='lg:block hidden'>S'inscrire</span>
                            </Link>
                        </Button>
                    <div className='hidden xl:block'>
                        <ThemeToggle/>
                    </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar

