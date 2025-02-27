"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { ThemeSwitcher } from "./theme-switcher"
import Image from 'next/image'

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <nav className="mb-12">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="size-5" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className="flex shrink-0 items-center space-x-2">
              <Link href="/" className="text-3xl font-black ">
                
                <Image className="rounded-full" src="/logo.png" alt="Working Out Loud logo" width={96} height={96} />
                {/* {process.env.NEXT_PUBLIC_SITE_NAME} */}
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:items-center">
              <div className="space-x-6 text-sm font-medium">
                <Link href="/" className="font-bold hover:underline">Home</Link>
                <Link href="/about" className="font-bold  hover:underline">About</Link>
              </div>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      <div
        className={`space-y-4 px-2 sm:hidden ${
          isMobileOpen ? "block" : "hidden"
        }`}
        id="mobile-menu"
      >
        <div>
          <Link href="/" onClick={toggleMobileMenu}>
            Home
          </Link>
        </div>
        <div>
          <Link href="/about" onClick={toggleMobileMenu}>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
