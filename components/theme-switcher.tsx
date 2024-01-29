"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("flex size-6 items-center justify-center rounded-md border", {
        "hover:bg-gray-700": theme === "dark",
        "hover:bg-gray-200": theme === "light",
      })}
    >
      <span className="sr-only">Toggle mode</span>
      {theme === "dark" ? (
        <SunIcon className="size-4 hover:bg-gray-700" />
      ) : (
        <MoonIcon className="size-4 hover:bg-gray-200" />
      )}
    </button>
  )
}
