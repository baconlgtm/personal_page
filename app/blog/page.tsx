"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Twitter, BookOpen, ArrowLeft } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export default function Blog() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Handle scroll position for dimming effect
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate background opacity based on scroll position
  const calculateBgOpacity = () => {
    const maxScroll = 500 // Adjust this value to control dimming speed
    const minOpacity = 0.9 // Minimum opacity (darker)
    const scrollRatio = Math.min(scrollPosition / maxScroll, 1)
    return 1 - scrollRatio * (1 - minOpacity)
  }

  // Handle theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#ede4dd] dark:bg-[#513b3c] transition-colors duration-300">
      {/* Header */}
      <header
        className="sticky top-0 z-40 w-full border-b border-[#d5bdaf] dark:border-[#513b3c]/50 backdrop-blur supports-[backdrop-filter]:bg-[#ede4dd]/60 dark:supports-[backdrop-filter]:bg-[#513b3c]/60"
        style={{
          backgroundColor:
            theme === "dark"
              ? `rgba(81, 59, 60, ${calculateBgOpacity()})`
              : `rgba(237, 228, 221, ${calculateBgOpacity()})`,
        }}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-[#513b3c] dark:text-[#ede4dd]">Peigen Luo</div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-[#513b3c] dark:text-[#f2bcbc] hover:text-[#de8786] dark:hover:text-[#de8786] transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-[#513b3c] dark:text-[#f2bcbc] hover:text-[#de8786] dark:hover:text-[#de8786] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-[#513b3c] dark:text-[#f2bcbc] hover:text-[#de8786] dark:hover:text-[#de8786] transition-colors"
            >
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#513b3c] dark:text-[#f2bcbc]">{theme === "dark" ? "Dark" : "Light"}</span>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="data-[state=checked]:bg-[#de8786] data-[state=unchecked]:bg-[#d5bdaf]"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Blog Header */}
        <div className="py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-[#de8786]" />
            <h1 className="text-3xl font-bold tracking-tight text-[#513b3c] dark:text-[#ede4dd]">Blog</h1>
          </div>
          <Button
            variant="outline"
            className="text-[#513b3c] border-[#d5bdaf] hover:bg-[#d5bdaf]/10 dark:text-[#f2bcbc] dark:border-[#de8786] dark:hover:bg-[#de8786]/10"
            asChild
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>

        {/* Blog Content - Single Placeholder */}
        <div className="flex justify-center items-center py-16">
          <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20 max-w-2xl w-full">
            <CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-[#de8786] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#513b3c] dark:text-[#ede4dd] mb-4">Coming Soon</h2>
              <p className="text-[#513b3c]/80 dark:text-[#f2bcbc] mb-6">
                I'm currently working on some exciting blog posts to share my thoughts and experiences. Check back soon
                for updates on tech, engineering, and more!
              </p>
              <Button className="bg-[#de8786] hover:bg-[#f2bcbc] text-white dark:text-[#513b3c]" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-[#ede4dd] dark:bg-[#513b3c] border-[#d5bdaf] dark:border-[#de8786]/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg text-[#513b3c] dark:text-[#ede4dd]">Peigen Luo</div>
              <Separator orientation="vertical" className="h-6 hidden md:block" />
              <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80">Software Engineer at Google Fi</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#513b3c]/70 hover:text-[#de8786] dark:text-[#f2bcbc]/80 dark:hover:text-[#de8786]"
                asChild
              >
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#513b3c]/70 hover:text-[#de8786] dark:text-[#f2bcbc]/80 dark:hover:text-[#de8786]"
                asChild
              >
                <Link href="https://www.linkedin.com/in/peigen-luo" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#513b3c]/70 hover:text-[#de8786] dark:text-[#f2bcbc]/80 dark:hover:text-[#de8786]"
                asChild
              >
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#513b3c]/70 hover:text-[#de8786] dark:text-[#f2bcbc]/80 dark:hover:text-[#de8786]"
                asChild
              >
                <Link href="mailto:peigenwork@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <Separator className="my-4 bg-[#d5bdaf] dark:bg-[#de8786]/20" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80 md:text-left">
              © {new Date().getFullYear()} Peigen Luo. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm text-[#513b3c]/70 hover:text-[#de8786] dark:text-[#f2bcbc]/80 dark:hover:text-[#de8786]"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-[#513b3c]/70 hover:text-[#de8786] dark:text-[#f2bcbc]/80 dark:hover:text-[#de8786]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
