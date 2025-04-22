"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Twitter, BookOpen, ArrowLeft, FileText } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export default function Projects() {
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
        {/* Projects Header */}
        <div className="py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-[#de8786]" />
            <h1 className="text-3xl font-bold tracking-tight text-[#513b3c] dark:text-[#ede4dd]">Class Projects</h1>
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#513b3c] dark:text-[#ede4dd]">
                Spark-boosted Data Processing
              </CardTitle>
              <CardDescription className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80">CMU | Spring 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  Apache Spark
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  AWS
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  Python
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#513b3c] dark:text-[#ede4dd]">Kubernetes Job Scheduling</CardTitle>
              <CardDescription className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80">CMU | Spring 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  Kubernetes
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  Go
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#513b3c] dark:text-[#ede4dd]">
                Extensible Java Data Framework
              </CardTitle>
              <CardDescription className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80">CMU | Spring 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  Java
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  UML Design
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  Observer Pattern
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#513b3c] dark:text-[#ede4dd]">Stock Trade Application</CardTitle>
              <CardDescription className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80">UIUC | Fall 2020</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  React
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  MongoDB
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  MySQL
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#513b3c] dark:text-[#ede4dd]">Assembler Interpreter</CardTitle>
              <CardDescription className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80">CMU</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  Java
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  UML Design
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#513b3c] dark:text-[#ede4dd]">Turtlebot GoalKeeper</CardTitle>
              <CardDescription className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80">UMN | Spring 2020</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  ROS
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  Python
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#513b3c] dark:text-[#ede4dd]">SPH Fluid Simulation</CardTitle>
              <CardDescription className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80">UMN</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  OpenGL
                </Badge>
                <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                  C++
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Publications Section */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-6 w-6 text-[#de8786]" />
            <h2 className="text-2xl font-bold tracking-tight text-[#513b3c] dark:text-[#ede4dd]">Publications</h2>
          </div>
          <div className="space-y-4">
            <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">
                  Simultaneous Enhancement and Super-Resolution of Underwater Imagery for Improved Visual Perception
                </h3>
                <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1">
                  Second Author | Robotics: Science and Systems (RSS) | 2020
                </p>
              </CardContent>
            </Card>
            <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">
                  Underwater Image Super-Resolution using Deep Residual Multipliers
                </h3>
                <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1">Third Author | ICRA | 2019</p>
              </CardContent>
            </Card>
            <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">
                  Semantic Segmentation of Underwater Imagery: Dataset and Benchmark
                </h3>
                <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1">Fourth Author | IROS | 2020</p>
              </CardContent>
            </Card>
          </div>
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
