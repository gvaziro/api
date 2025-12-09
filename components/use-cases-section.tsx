"use client"

import type React from "react"

import { Check, Search, DollarSign } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref, threshold])

  return isInView
}

function AnimatedCounter({
  value,
  duration = 2000,
  suffix = "",
}: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const incrementTime = duration / end
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function AnimatedProgress({ progress, delay = 0 }: { progress: number; delay?: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return
    const timer = setTimeout(() => setWidth(progress), delay)
    return () => clearTimeout(timer)
  }, [isInView, progress, delay])

  return (
    <div ref={ref} className="h-1 w-24 rounded-full bg-muted overflow-hidden">
      <div
        className="h-1 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

function AnimatedCheckmark({ delay }: { delay: number }) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [isInView, delay])

  return (
    <div
      ref={ref}
      className={`mb-1 flex h-6 w-6 items-center justify-center rounded bg-cyan-500/20 transition-all duration-500 ${
        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <Check className={`h-4 w-4 text-cyan-400 transition-all duration-300 ${show ? "scale-100" : "scale-0"}`} />
    </div>
  )
}

function AnimatedBarChart() {
  const [heights, setHeights] = useState<number[]>(Array(20).fill(0))
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const targetHeights = [30, 35, 25, 40, 38, 45, 50, 48, 55, 60, 58, 70, 75, 80, 78, 85, 90, 88, 95, 100]

  useEffect(() => {
    if (!isInView) return
    targetHeights.forEach((h, i) => {
      setTimeout(() => {
        setHeights((prev) => {
          const newHeights = [...prev]
          newHeights[i] = h
          return newHeights
        })
      }, i * 50)
    })
  }, [isInView])

  return (
    <div ref={ref} className="flex h-16 items-end gap-0.5">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-green-500/60 transition-all duration-500 ease-out"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}

function AnimatedPill({ children, delay, className }: { children: React.ReactNode; delay: number; className: string }) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [isInView, delay])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500 ${
        show ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-2"
      }`}
    >
      {children}
    </div>
  )
}

function AnimatedGrowthBars() {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return
    const timer = setTimeout(() => setShow(true), 500)
    return () => clearTimeout(timer)
  }, [isInView])

  return (
    <div ref={ref} className="mt-3 flex items-end gap-1">
      {[2, 3, 4, 6].map((h, i) => (
        <div
          key={i}
          className={`w-2 rounded-full transition-all duration-500 ease-out ${i === 3 ? "bg-pink" : "bg-muted"}`}
          style={{
            height: show ? `${h * 4}px` : "0px",
            transitionDelay: `${i * 100}ms`,
          }}
        />
      ))}
    </div>
  )
}

function PulsingDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
    </span>
  )
}

export function UseCasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, 0.1)

  return (
    <section id="use-cases" className="border-t border-border/50 py-20 md:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Use Cases</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Powerful tools for every X/Twitter intelligence need
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Run your social campaign */}
          <div
            className={`rounded-xl border border-border bg-card/50 p-6 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="mb-2 text-xl font-bold">Run your social campaign</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Validate social tasks like following, retweeting and commenting to promote your brand
            </p>

            {/* User card with subtle float animation */}
            <div className="mb-4 flex items-center gap-3 animate-[float_3s_ease-in-out_infinite]">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 animate-pulse" />
              <div>
                <p className="text-xs text-muted-foreground">@241445</p>
                <p className="font-semibold">Next Gem 1000%</p>
              </div>
            </div>

            {/* Progress and tasks with animated counters and checkmarks */}
            <div className="grid grid-cols-4 gap-3">
              <div className="rounded-lg bg-background/50 p-3 text-center">
                <p className="text-2xl font-bold text-pink">
                  <AnimatedCounter value={100} duration={1500} suffix="%" />
                </p>
                <p className="text-xs text-muted-foreground">task complete</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-background/50 p-3">
                <AnimatedCheckmark delay={800} />
                <p className="text-xs text-muted-foreground">Followed</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-background/50 p-3">
                <AnimatedCheckmark delay={1100} />
                <p className="text-xs text-muted-foreground">Retweeted</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-background/50 p-3">
                <AnimatedCheckmark delay={1400} />
                <p className="text-xs text-muted-foreground">Commented</p>
              </div>
            </div>
          </div>

          {/* Analyze your audience */}
          <div
            className={`rounded-xl border border-border bg-card/50 p-6 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="mb-2 text-xl font-bold">Analyze your audience</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Analyze your audience and your competitors&apos; audiences to create the best targeted ads.
            </p>

            <div className="flex gap-4">
              {/* User stats */}
              <div className="flex-1 rounded-lg bg-background/50 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">@project_X</p>
                    <p className="text-sm font-medium">Next Gem 1000%</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-4 text-center">
                  <div>
                    <p className="font-bold">
                      <AnimatedCounter value={17} suffix="k" />
                    </p>
                    <p className="text-xs text-muted-foreground">followers</p>
                  </div>
                  <div>
                    <p className="font-bold">
                      <AnimatedCounter value={890} duration={1500} />
                    </p>
                    <p className="text-xs text-muted-foreground">following</p>
                  </div>
                  <div>
                    <p className="font-bold">
                      <AnimatedCounter value={137} suffix="k" />
                    </p>
                    <p className="text-xs text-muted-foreground">tweets</p>
                  </div>
                </div>
                {/* Animated pills */}
                <div className="flex justify-center gap-2 flex-wrap">
                  <AnimatedPill delay={600} className="flex items-center gap-1 rounded-full bg-cyan-500/20 px-2 py-1">
                    <span className="text-xs font-medium text-cyan-400">50</span>
                    <span className="text-xs text-muted-foreground">KOLs</span>
                  </AnimatedPill>
                  <AnimatedPill delay={800} className="flex items-center gap-1 rounded-full bg-purple-500/20 px-2 py-1">
                    <span className="text-xs font-medium text-purple-400">26</span>
                    <span className="text-xs text-muted-foreground">Project</span>
                  </AnimatedPill>
                  <AnimatedPill delay={1000} className="flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-1">
                    <span className="text-xs font-medium text-green-400">13</span>
                    <span className="text-xs text-muted-foreground">VCs</span>
                  </AnimatedPill>
                </div>
              </div>
              {/* Category breakdown */}
              <div className="space-y-2">
                {[
                  { label: "KOLs", value: 50, delay: 400 },
                  { label: "Project", value: 26, delay: 600 },
                  { label: "VCs", value: 13, delay: 800 },
                ].map((item) => (
                  <AnimatedPill
                    key={item.label}
                    delay={item.delay}
                    className="flex items-center justify-between gap-4 rounded-lg bg-background/50 px-3 py-2"
                  >
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="font-medium">
                      <AnimatedCounter value={item.value} />
                    </span>
                  </AnimatedPill>
                ))}
              </div>
            </div>
          </div>

          {/* Delve into X Insights */}
          <div
            className={`rounded-xl border border-border bg-card/50 p-6 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="mb-2 text-xl font-bold">Delve into X Insights</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Collect extensive Twitter data to stay ahead of trends as they emerge
            </p>

            <div className="flex gap-4">
              {/* Score card with animated counter and progress */}
              <div className="rounded-lg bg-background/50 p-4">
                <p className="mb-1 text-xs text-muted-foreground">Twetscout score</p>
                <p className="mb-2 text-3xl font-bold">
                  <AnimatedCounter value={3924} duration={2000} />
                </p>
                <AnimatedProgress progress={67} delay={500} />
              </div>
              {/* User growth card */}
              <div className="flex-1 rounded-lg bg-background/50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">@241445</p>
                    <p className="text-sm font-medium">Next Gem 1000%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-semibold text-green-400 flex items-center gap-1">
                    <PulsingDot />
                    +42%
                  </span>
                  <span className="text-muted-foreground">last week</span>
                  <span className="text-muted-foreground">17k</span>
                  <span className="text-muted-foreground">4567k</span>
                  <span className="text-muted-foreground">137k</span>
                </div>
                <AnimatedGrowthBars />
              </div>
            </div>
          </div>

          {/* Research and Earn */}
          <div
            className={`rounded-xl border border-border bg-card/50 p-6 transition-all duration-700 delay-[400ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="mb-2 text-xl font-bold">Research and Earn</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Build predictive strategies using insights from KOLs, insiders, and founders to maximize your gains
            </p>

            <div className="flex gap-4">
              {/* Sentiment analysis */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 rounded-lg bg-background/50 px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">ProjectX</span>
                </div>
                <AnimatedPill delay={600} className="flex items-center justify-between rounded-lg bg-pink/20 px-3 py-2">
                  <span className="text-sm text-pink">Positive tweets</span>
                  <span className="font-medium text-pink">
                    <AnimatedCounter value={54} />
                  </span>
                </AnimatedPill>
                <AnimatedPill
                  delay={800}
                  className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2"
                >
                  <span className="text-sm text-muted-foreground">Negative tweets</span>
                  <span className="font-medium">
                    <AnimatedCounter value={12} />
                  </span>
                </AnimatedPill>
              </div>
              {/* Price chart */}
              <div className="flex-1 rounded-lg bg-background/50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">
                      $<AnimatedCounter value={25} />
                      .21
                    </span>
                    <span className="text-sm font-medium text-green-400 flex items-center gap-1">
                      <PulsingDot />
                      +42%
                    </span>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 animate-bounce">
                    <DollarSign className="h-4 w-4 text-green-400" />
                  </div>
                </div>
                <AnimatedBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
