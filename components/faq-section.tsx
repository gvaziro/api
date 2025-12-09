import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What kind of data can I collect?",
    answer:
      "TweetScout provides comprehensive data including follower analysis, audience composition, engagement metrics, growth trends, bot detection, sentiment analysis, and social graph mapping. You can analyze any public X/Twitter account or track specific topics and keywords.",
  },
  {
    question: "How is this different from using basic follower counts?",
    answer:
      "Follower counts can be easily gamed with bots and fake accounts. TweetScout Score analyzes the quality and composition of an account's audience — who specifically follows them, their credibility, and their influence. An account with 2,000 influential followers often has higher real value than one with 200,000 low-quality followers.",
  },
  {
    question: "What industries can use TweetScout?",
    answer:
      "TweetScout works for any industry that needs Twitter intelligence: marketing agencies, brand management, influencer marketing, competitive analysis, market research, PR monitoring, journalism, financial research, and more. Our models are trained on diverse data to provide accurate insights across all sectors.",
  },
  {
    question: "What are typical latency and rate limits?",
    answer:
      "Response times are typically under 200ms for cached accounts and 1-2 seconds for fresh lookups. Rate limits vary by plan — Starter plans include several thousand requests per month, while Enterprise plans support custom limits optimized for bulk analysis and real-time monitoring.",
  },
  {
    question: "Can you build custom models or custom scoring for our use case?",
    answer:
      "Yes, Enterprise customers can work with our team to develop custom scoring models, specific audience classifications, or tailored signals for your industry. Contact our sales team to discuss your requirements.",
  },
  {
    question: "How do you handle data updates and accuracy?",
    answer:
      "Our models are continuously updated as the X/Twitter landscape evolves. Account scores refresh based on activity patterns — highly active accounts update more frequently. We maintain high accuracy through continuous model training and validation.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border/50 py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Everything you need to know about TweetScout API and how it works</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-card/50 px-6 transition-all hover:bg-card hover:shadow-md data-[state=open]:border-pink/50 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-pink py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
