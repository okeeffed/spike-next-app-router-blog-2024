'use client'
import Link from "next/link"
import { TwitterIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()
  
  return (
    <footer className="mt-24 flex justify-center">
      <div className="space-y-12 pt-16">
        <nav className="space-x-6 text-center text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="flex items-center justify-center">
          <a
            target="_blank"
            href="https://twitter.com/nextjs"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className={cn("px-4 hover:text-blue-500", {
              'text-gray-800': theme === 'light',
              'text-gray-200': theme === 'dark',
            })}
          >
            <TwitterIcon className="size-8 fill-current" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; <Link href="/">{process.env.NEXT_PUBLIC_SITE_NAME}</Link>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
