import { Check, X } from "lucide-react"

const comparisonItems = [
  {
    twitter: "Price is high and unpredictable",
    tweetscout: "On average 3x cheaper than Twitter Enterprise",
  },
  {
    twitter: "Forced to buy large packages upfront",
    tweetscout: "Flexible pricing — pick only what you need",
  },
  {
    twitter: "Scattered docs and steep learning curve",
    tweetscout: "Clear docs make it easy to get started",
  },
  {
    twitter: "Limited rate limits",
    tweetscout: "Reliable 20 reqs/sec without manual approval",
  },
  {
    twitter: "Unstable uptime",
    tweetscout: "Consistent availability for over three years",
  },
]

export function ComparisonSection() {
  return (
    <section className="border-t border-border/50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why not just use the raw Twitter API?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Save months of development time and infrastructure costs
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-4xl rounded-[32px] border border-pink/50 bg-gradient-to-r from-pink-500/20 to-transparent p-6 text-center text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Cost advantage</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">On average 3x cheaper than Twitter Enterprise</h3>
          <p className="mt-2 text-sm text-white/80">
            We bundle enriched signals, infrastructure, and support so you pay less for more relevant data.
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-2">
            <div className="border-r border-border bg-card/30 p-4 text-center">
              <span className="text-sm font-medium text-muted-foreground">Raw Twitter / X API</span>
            </div>
            <div className="bg-pink/10 p-4 text-center">
              <span className="text-sm font-medium text-pink">TweetScout API</span>
            </div>
          </div>
          {comparisonItems.map((item, index) => (
            <div key={index} className="grid grid-cols-2 border-t border-border">
              <div className="flex items-center gap-3 border-r border-border p-4">
                <X className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{item.twitter}</span>
              </div>
              <div className="flex items-center gap-3 bg-pink/5 p-4">
                <Check className="h-4 w-4 shrink-0 text-pink" />
                <span className="text-sm text-foreground">{item.tweetscout}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
