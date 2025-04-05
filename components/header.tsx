"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  About Us
                </Link>
                <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Projects
                </Link>
                <Link href="/agriculture" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Farmer Support
                </Link>
                <Link href="/women-empowerment" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Women Empowerment
                </Link>
                <Link href="/education" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Education Hub
                </Link>
                <Link href="/report-issues" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Report Issues
                </Link>
                <Link href="/volunteer" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Volunteer
                </Link>
                <Link href="/donate" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Donate
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Smart Hatadi Foundation</span>
          </Link>
        </div>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Work</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Projects</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our completed and ongoing projects making a difference in rural communities.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/agriculture" title="Farmer Support">
                    Technology-based farming solutions and resources
                  </ListItem>
                  <ListItem href="/women-empowerment" title="Women Empowerment">
                    Skills training and entrepreneurial support
                  </ListItem>
                  <ListItem href="/education" title="Education Hub">
                    Educational resources and scholarship opportunities
                  </ListItem>
                  <ListItem href="/social-impact" title="Social Impact">
                    Health camps and community development initiatives
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[200px]">
                  <ListItem href="/volunteer" title="Volunteer">
                    Join our volunteer program
                  </ListItem>
                  <ListItem href="/donate" title="Donate">
                    Support our mission
                  </ListItem>
                  <ListItem href="/report-issues" title="Report Issues">
                    Report village problems
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>हिंदी (Hindi)</DropdownMenuItem>
              <DropdownMenuItem>मराठी (Marathi)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
          <Link href="/donate" className="hidden sm:inline-flex">
            <Button>Donate Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

