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
          <div className="rounded-xl border border-border bg-card/50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Response Example</span>
              <Badge variant="outline" className="border-pink/30 text-pink">
                JSON
              </Badge>
            </div>
            <pre className="overflow-x-auto text-sm">
              <code className="text-muted-foreground">
                {`{`}
                {"\n"}
                {"  "}
                <span className="text-pink">"account"</span>: <span className="text-green-400">"@techbrand"</span>,
                {"\n"}
                {"  "}
                <span className="text-pink">"score"</span>: <span className="text-pink">7842</span>,{"\n"}
                {"  "}
                <span className="text-pink">"audience"</span>: {`{`}
                {"\n"}
                {"    "}
                <span className="text-muted-foreground">"total"</span>: <span className="text-foreground">48291</span>,
                {"\n"}
                {"    "}
                <span className="text-muted-foreground">"influencers"</span>:{" "}
                <span className="text-foreground">423</span>,{"\n"}
                {"    "}
                <span className="text-muted-foreground">"brands"</span>: <span className="text-foreground">89</span>,
                {"\n"}
                {"    "}
                <span className="text-muted-foreground">"verified"</span>: <span className="text-foreground">891</span>,
                {"\n"}
                {"    "}
                <span className="text-muted-foreground">"general"</span>: <span className="text-foreground">46888</span>
                {"\n"}
                {"  "}
                {`}`},{"\n"}
                {"  "}
                <span className="text-pink">"bot_risk"</span>: {`{`}
                {"\n"}
                {"    "}
                <span className="text-muted-foreground">"percentage"</span>:{" "}
                <span className="text-foreground">4.2</span>,{"\n"}
                {"    "}
                <span className="text-muted-foreground">"flags"</span>: <span className="text-foreground">[]</span>
                {"\n"}
                {"  "}
                {`}`},{"\n"}
                {"  "}
                <span className="text-pink">"growth"</span>: {`{`}
                {"\n"}
                {"    "}
                <span className="text-muted-foreground">"weekly_change"</span>:{" "}
                <span className="text-green-400">"+12.4%"</span>,{"\n"}
                {"    "}
                <span className="text-muted-foreground">"trending"</span>: <span className="text-pink">true</span>
                {"\n"}
                {"  "}
                {`}`}
                {"\n"}
                {`}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
