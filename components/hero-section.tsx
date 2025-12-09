"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedLines, setTypedLines] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && typedLines < 14) {
      const timer = setTimeout(() => {
        setTypedLines((prev) => prev + 1)
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [isVisible, typedLines])

  const codeLines = [
    { content: "{", delay: 0 },
    { content: '  "handle": "@elonmusk",', delay: 1 },
    { content: '  "tweetscout_score": 9924,', delay: 2 },
    { content: '  "bot_percentage": 1.8,', delay: 3 },
    { content: '  "audience_quality": "exceptional",', delay: 4 },
    { content: '  "top_followers": {', delay: 5 },
    { content: '    "influencers": 2841,', delay: 6 },
    { content: '    "brands": 1523,', delay: 7 },
    { content: '    "media": 892', delay: 8 },
    { content: "  },", delay: 9 },
    { content: '  "growth_trend": "+42%",', delay: 10 },
    { content: '  "credibility_level": "legendary"', delay: 11 },
    { content: "}", delay: 12 },
  ]

  const renderCodeLine = (line: string, index: number) => {
    // Color coding for JSON
    const coloredLine = line
      .replace(/"([^"]+)":/g, '<span class="text-pink">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
      .replace(/: (\d+\.?\d*)/g, ': <span class="text-foreground">$1</span>')

    return (
      <div
        key={index}
        className="transition-all duration-300"
        style={{
          opacity: typedLines > index ? 1 : 0,
          transform: typedLines > index ? "translateX(0)" : "translateX(-10px)",
        }}
        dangerouslySetInnerHTML={{ __html: coloredLine }}
      />
    )
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/10 blur-[120px] transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.5)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content with staggered animations */}
          <div className="text-center lg:text-left">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-4 py-1.5 transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-pink" />
              <span className="text-sm font-medium text-pink">AI-Powered X Social Intelligence</span>
            </div>

            <h1
              className="mb-6 text-balance text-4xl font-bold tracking-tight transition-all duration-700 delay-100 md:text-5xl lg:text-6xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              The most powerful <span className="text-pink">X data collection</span> infrastructure
            </h1>

            <p
              className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground transition-all duration-700 delay-200 lg:mx-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              TweetScout API gives you structured analytics on any X/Twitter account: reputation scores, audience
              quality, engagement patterns, sentiment analysis, bot detection and growth signals — ready to plug into
              your dashboards, marketing tools and analytics systems.
            </p>

            <div
              className="flex flex-col items-center gap-4 transition-all duration-700 delay-300 sm:flex-row lg:justify-start"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <Link href="https://app.tweetscout.io/developer" target="_blank">
                <Button size="lg" className="group bg-pink text-white hover:bg-pink/90">
                  Get API access
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="https://api.tweetscout.io/v2/docs/" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border bg-transparent text-foreground hover:bg-accent"
                >
                  View API docs
                </Button>
              </Link>
            </div>

            <p
              className="mt-6 text-sm text-muted-foreground transition-all duration-700 delay-400"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Comprehensive data. Real-time insights. Production ready.
            </p>
          </div>

          <div
            className="relative transition-all duration-1000 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0) rotate(0deg)" : "translateX(50px) rotate(2deg)",
            }}
          >
            <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground">api.tweetscout.io/v1/account</span>
              </div>
              <pre className="overflow-x-auto text-sm font-mono">
                <code className="text-muted-foreground">
                  {codeLines.map((line, i) => renderCodeLine(line.content, i))}
                </code>
              </pre>
              <div
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-pink/20 px-3 py-1 transition-all duration-500"
                style={{
                  opacity: typedLines >= 13 ? 1 : 0,
                  transform: typedLines >= 13 ? "scale(1)" : "scale(0.8)",
                }}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-pink" />
                <span className="text-xs font-medium text-pink">High Growth Detected</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 animate-float rounded-full bg-pink/20 blur-2xl" />
            <div
              className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-pink/10 blur-3xl"
              style={{ animation: "float 4s ease-in-out infinite 0.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
