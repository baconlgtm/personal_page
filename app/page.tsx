"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Twitter, User, Download, MoveRight, Code, Briefcase, Cpu } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
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
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#513b3c] dark:text-[#ede4dd]">
              Hi, I'm <span className="text-[#de8786]">Peigen Luo</span>
            </h1>
            <p className="text-xl text-[#513b3c]/80 dark:text-[#f2bcbc]">Engineer, tech enthusiast, cat lover</p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-[#de8786] hover:bg-[#f2bcbc] text-white dark:text-[#513b3c]" asChild>
                <Link href="/projects" className="flex items-center gap-2">
                  View Projects <MoveRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="text-[#513b3c] border-[#d5bdaf] hover:bg-[#d5bdaf]/10 dark:text-[#f2bcbc] dark:border-[#de8786] dark:hover:bg-[#de8786]/10"
                asChild
              >
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-[#d5bdaf] dark:border-[#de8786]/20">
              <Image src="/images/profile.png" alt="Peigen Luo" fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <div className="flex items-center gap-2 mb-8">
            <User className="h-6 w-6 text-[#de8786]" />
            <h2 className="text-3xl font-bold tracking-tight text-[#513b3c] dark:text-[#ede4dd]">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[#513b3c]/80 dark:text-[#f2bcbc]">
                I'm a Software Engineer at Google Fi with over 3 years of experience specializing in complex data
                pipelines (Flume, Spark, SQL), backend systems (C++, Java, Go), and cloud infrastructure (AWS,
                Kubernetes).
              </p>
              <p className="text-[#513b3c]/80 dark:text-[#f2bcbc]">
                My work focuses on developing and maintaining core data infrastructure to support key business growth
                initiatives, improving pipeline stability, and enhancing metrics development workflows. I have a proven
                track record of optimizing data processing and improving deployment efficiency.
              </p>
              <div className="pt-4">
                <h3 className="font-medium mb-2 text-[#513b3c] dark:text-[#ede4dd]">Personal Information:</h3>
                <ul className="space-y-2 text-[#513b3c]/80 dark:text-[#f2bcbc]">
                  <li>
                    <span className="font-medium">Name:</span> Peigen Luo
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> Mountain View, CA
                  </li>
                  <li>
                    <span className="font-medium">Email:</span> peigenwork@gmail.com
                  </li>
                  <li>
                    <span className="font-medium">Phone:</span> 612-417-5020
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium mb-2 text-[#513b3c] dark:text-[#ede4dd]">Education:</h3>
              <div className="space-y-4">
                <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="rounded-full bg-[#f2bcbc]/30 dark:bg-[#de8786]/20 p-2">
                        <User className="h-5 w-5 text-[#de8786]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">
                          Master of Science in Electrical and Computer Engineering
                        </h4>
                        <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80">
                          Carnegie Mellon University | 2021
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="rounded-full bg-[#f2bcbc]/30 dark:bg-[#de8786]/20 p-2">
                        <User className="h-5 w-5 text-[#de8786]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">
                          Courses towards Master of Computer Science
                        </h4>
                        <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80">
                          University of Illinois, Urbana-Champaign | 2020
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="rounded-full bg-[#f2bcbc]/30 dark:bg-[#de8786]/20 p-2">
                        <User className="h-5 w-5 text-[#de8786]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">
                          Bachelor of Science in Computer Science
                        </h4>
                        <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80">
                          University of Minnesota Twin Cities | 2020
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="rounded-full bg-[#f2bcbc]/30 dark:bg-[#de8786]/20 p-2">
                        <User className="h-5 w-5 text-[#de8786]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">
                          Bachelor of Science in Communication Engineering
                        </h4>
                        <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80">UESTC, China | 2015-2017</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex gap-4 pt-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#d5bdaf] dark:border-[#de8786]/30"
                  asChild
                >
                  <Link href="https://github.com" target="_blank" aria-label="GitHub">
                    <Github className="h-4 w-4 text-[#513b3c]/70 dark:text-[#f2bcbc]" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#d5bdaf] dark:border-[#de8786]/30"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/peigen-luo" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4 text-[#513b3c]/70 dark:text-[#f2bcbc]" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#d5bdaf] dark:border-[#de8786]/30"
                  asChild
                >
                  <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                    <Twitter className="h-4 w-4 text-[#513b3c]/70 dark:text-[#f2bcbc]" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#d5bdaf] dark:border-[#de8786]/30"
                  asChild
                >
                  <Link href="mailto:peigenwork@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4 text-[#513b3c]/70 dark:text-[#f2bcbc]" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="h-5 w-5 text-[#de8786]" />
              <h3 className="text-xl font-semibold text-[#513b3c] dark:text-[#ede4dd]">Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-[#513b3c] dark:text-[#ede4dd] mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["C++", "SQL", "Python", "Java", "C", "C#", "Go"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-[#513b3c] dark:text-[#ede4dd] mb-3">Tools & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Apache Spark",
                    "Flume",
                    "Kubernetes",
                    "AWS",
                    "Plx",
                    "ProtoBuffer",
                    "Git",
                    "Linux",
                    "UML",
                    "OpenCV",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5 text-[#de8786]" />
              <h3 className="text-xl font-semibold text-[#513b3c] dark:text-[#ede4dd]">Work Experience</h3>
            </div>
            <div className="space-y-4">
              <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-[#513b3c] dark:text-[#ede4dd]">Software Engineer</h4>
                      <p className="text-[#513b3c]/80 dark:text-[#f2bcbc]">Google Fi, Mountain View, CA</p>
                    </div>
                    <p className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1 md:mt-0">Feb 2022 - Present</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-[#513b3c] dark:text-[#ede4dd]">
                        Software Engineer Intern
                      </h4>
                      <p className="text-[#513b3c]/80 dark:text-[#f2bcbc]">Cognistx, Pittsburgh, PA</p>
                    </div>
                    <p className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1 md:mt-0">May 2021 - Aug 2021</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-[#513b3c] dark:text-[#ede4dd]">Research Assistant</h4>
                      <p className="text-[#513b3c]/80 dark:text-[#f2bcbc]">
                        Interactive Robotics and Vision Lab, Minneapolis, MN
                      </p>
                    </div>
                    <p className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1 md:mt-0">Sep 2018 - May 2020</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Projects Preview Section */}
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <Code className="h-5 w-5 text-[#de8786]" />
              <h3 className="text-xl font-semibold text-[#513b3c] dark:text-[#ede4dd]">Featured Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-[#d5bdaf] bg-white/80 shadow-sm dark:bg-[#513b3c]/40 dark:border-[#de8786]/20">
                <CardContent className="p-6">
                  <h4 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">Kubernetes Job Scheduling</h4>
                  <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1">CMU | Spring 2021</p>
                  <p className="text-[#513b3c]/80 dark:text-[#f2bcbc] mt-3">
                    Implemented K8s scheduling extenders using Kube-batch with various scheduling policies for simulated
                    job traces with multi-task. Optimized the scheduling process by 50%.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
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
                <CardContent className="p-6">
                  <h4 className="font-medium text-[#513b3c] dark:text-[#ede4dd]">Extensible Java Data Framework</h4>
                  <p className="text-sm text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1">CMU | Spring 2021</p>
                  <p className="text-[#513b3c]/80 dark:text-[#f2bcbc] mt-3">
                    Designed an extensible Java framework for customizable Data Plugins and Display Plugins with
                    consistent data workflow and prediction functions with given data.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                      Java
                    </Badge>
                    <Badge className="bg-[#f2bcbc]/30 text-[#513b3c] hover:bg-[#f2bcbc]/40 dark:bg-[#de8786]/20 dark:text-[#f2bcbc] dark:hover:bg-[#de8786]/30">
                      UML Design
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-[#de8786] hover:bg-[#f2bcbc] text-white dark:text-[#513b3c]" asChild>
                <Link href="/projects" className="flex items-center gap-2">
                  View All Projects <MoveRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 p-6 border border-[#d5bdaf] dark:border-[#de8786]/20 rounded-lg bg-white/80 dark:bg-[#513b3c]/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[#513b3c] dark:text-[#ede4dd]">Download My Resume</h3>
                <p className="text-[#513b3c]/70 dark:text-[#f2bcbc]/80 mt-1">
                  Get a comprehensive overview of my skills, experience, and education.
                </p>
              </div>
              <Button className="bg-[#de8786] hover:bg-[#f2bcbc] text-white dark:text-[#513b3c] mt-4 md:mt-0" asChild>
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
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
