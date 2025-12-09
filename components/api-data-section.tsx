import { Badge } from "@/components/ui/badge"

const dataTypes = [
  {
    name: "TweetScout Score",
    description:
      "Numerical score of authority and 'social capital' of the account, based on who follows and engages with it across any industry.",
  },
  {
    name: "Audience Composition",
    description:
      "Breakdown of followers by type: influencers, brands, journalists, verified accounts, industry leaders, general users.",
  },
  {
    name: "Top Followers & Entities",
    description:
      "List of notable accounts, brands and influential individuals that follow the account, with their own weights.",
  },
  {
    name: "Growth Dynamics",
    description: "Time series of audience and score — organic growth vs suspicious spikes, week-over-week trends.",
  },
  {
    name: "Bot & Fake Audience Signals",
    description: "Percent of likely bots and low quality followers, red flags for abnormal patterns.",
  },
  {
    name: "Sentiment & Engagement Signals",
    description:
      "Track positive vs negative mentions, engagement rates, and overall sentiment around any account or topic.",
  },
]

export function ApiDataSection() {
  const codeString = `{
  "account": "@techbrand",
  "score": 7842,
  "bot_percentage": 1.8,
  "audience_quality": "exceptional",
  "top_followers": {
    "influencers": 2841,
    "brands": 1523,
    "media": 892
  },
  "growth_trend": "+42%",
  "credibility_level": "legendary"
}`

  const renderColoredCode = (code: string) => {
    return code.split("\n").map((line, index) => {
      const coloredLine = line
        .replace(/"([^"]+)":/g, '<span class="text-pink">"$1"</span>:')
        .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
        .replace(/: (\d+\.?\d*)/g, ': <span class="text-foreground">$1</span>')

      return <div key={index} dangerouslySetInnerHTML={{ __html: coloredLine || " " }} />
    })
  }

  return (
    <section className="border-t border-border/50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-pink/30 text-pink">
            API Reference
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Structured X/Twitter intelligence in one API</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Access comprehensive social graph data for any application
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Data types list */}
          <div className="space-y-6">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink" />
                <div>
                  <h3 className="mb-1 font-semibold">{dataType.name}</h3>
                  <p className="text-sm text-muted-foreground">{dataType.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Code block - updated example */}
          <div className="relative">
            <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-muted-foreground">api.tweetscout.io/v1/account</span>
                </div>
                <Badge variant="outline" className="border-pink/30 text-pink text-xs">
                  JSON
                </Badge>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-black/40 p-4 border border-border/20 font-mono text-xs sm:text-sm leading-relaxed">
                <code className="text-muted-foreground">{renderColoredCode(codeString)}</code>
              </pre>
            </div>
            
            {/* Background effects */}
            <div className="absolute -top-4 -right-4 -z-10 h-24 w-24 rounded-full bg-pink/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-pink/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
