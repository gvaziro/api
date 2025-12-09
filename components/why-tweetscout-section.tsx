import { Database, Users, TrendingUp, Zap } from "lucide-react"

const benefits = [
  {
    icon: Database,
    title: "Comprehensive X data, not generic social listening",
    description:
      "TweetScout is built specifically for deep X/Twitter intelligence. Our models analyze millions of accounts across every industry — giving you unmatched coverage and accuracy for any use case.",
  },
  {
    icon: Users,
    title: "Quality of audience, not vanity metrics",
    description:
      "We score accounts based on who follows them: influencers, brands, industry leaders, journalists, verified accounts. An account with 2K quality followers can outrank a profile with 200K farmed followers.",
  },
  {
    icon: TrendingUp,
    title: "Early signals before the noise",
    description:
      "Detect accounts and trends that start attracting serious attention long before they go viral or hit mainstream awareness.",
  },
  {
    icon: Zap,
    title: "Cheaper and cleaner than raw Twitter Enterprise",
    description:
      "We aggregate, clean and enrich the data for you, then expose it via a simple API. No need to build your own data pipelines and scoring models.",
  },
]

export function WhyTweetScoutSection() {
  return (
    <section id="features" className="border-t border-border/50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why TweetScout API</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Purpose-built infrastructure for X/Twitter social intelligence
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-pink/50 hover:bg-card"
            >
              <div className="mb-4 inline-flex rounded-lg bg-pink/10 p-3">
                <benefit.icon className="h-6 w-6 text-pink" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
