import { Button } from "@/components/ui/button"

const plans = [
  {
    title: "10K REQUESTS",
    price: "$49",
    summary: "For startups, AI experiments, and dev previews.",
    features: ["Access to core endpoints", "Email support", "Weekly usage insights"],
    featured: false,
  },
  {
    title: "100K REQUESTS",
    price: "$200",
    summary: "Balanced limit for growing teams and research work.",
    features: ["Batch analysis endpoints", "Bot detection signals", "Priority email response"],
    featured: true,
  },
  {
    title: "500K REQUESTS",
    price: "$900",
    summary: "Scale, reliability, and priority support for large workflows.",
    features: ["Dedicated capacity", "Custom rate limits", "Phone/Slack support"],
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border/50 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink/80">Pricing</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">
            Plans scaled to how you use the API
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
            Choose a package with the request volume that fits your team, then pay with card or crypto and get immediate access.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-2xl border p-8 shadow-lg transition hover:-translate-y-1 ${
                plan.featured
                  ? "border-pink bg-gradient-to-br from-pink-500/10 to-transparent"
                  : "border-border bg-card/60"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {plan.title}
                  </h3>
                  
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground md:text-6xl">{plan.price}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">USD</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.summary}</p>
              </div>

              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-pink" aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  className={`cursor-pointer w-full rounded-2xl px-4 py-3 text-sm font-bold shadow ${
                    plan.featured
                      ? "bg-white/90 text-slate-900 hover:bg-pink/90"
                      : "border border-border bg-transparent text-foreground hover:bg-accent"
                  }`}
                >
                  Get now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-pink/40 bg-gradient-to-br from-pink-500/10 to-transparent p-8 text-center text-sm text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink/70">Need more requests?</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Bigger tiers unlock extra savings</h3>
          <p className="mt-2 text-white/80">
            Tell us how much volume you need — message us on Discord or drop a line at&nbsp;
            <a className="font-semibold text-white underline decoration-dotted decoration-pink/90" href="mailto:contacts@tweetscout.io">
              contacts@tweetscout.io
            </a>
            . We will reply with a tailored offer and deeper discounts.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button
              className="rounded-full border border-white/40 bg-white/10 px-8 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              asChild
            >
              <a href="https://discord.com/invite/uwAefKCj7X" target="_blank" rel="noreferrer">
                Join Discord
              </a>
            </Button>
            <Button
              className="rounded-full border border-white/40 bg-white/10 px-8 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              asChild
            >
              <a href="mailto:contacts@tweetscout.io">Email us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

