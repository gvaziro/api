import { Key, Code, Plug } from "lucide-react"

const steps = [
  {
    icon: Key,
    step: "01",
    title: "Get API key",
    description: "Just sign up, buy a plan and get access to all the endpoints.",
  },
  {
    icon: Code,
    step: "02",
    title: "Call TweetScout endpoints",
    description:
      "Use our API and docs to fetch scores, audience breakdowns and attention signals for accounts and project lists.",
  },
  {
    icon: Plug,
    step: "03",
    title: "Plug data into your models and UI",
    description:
      "Enrich your dashboards, risk modules, scoring systems and alerts with social intelligence.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="border-t border-border/50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Simple integration, powerful results</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="mx-auto mb-6 inline-flex rounded-xl bg-pink/10 p-4">
                <step.icon className="h-8 w-8 text-pink" />
              </div>
              <div className="mb-2 text-sm font-medium text-pink">{step.step}</div>
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-1/2 bg-gradient-to-r from-border to-transparent md:block" />
              )}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}
