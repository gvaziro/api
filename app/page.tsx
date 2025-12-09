import { HeroSection } from "@/components/hero-section"
import { WhyTweetScoutSection } from "@/components/why-tweetscout-section"
import { ApiDataSection } from "@/components/api-data-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ComparisonSection } from "@/components/comparison-section"
import { PricingSection } from "@/components/pricing-section"
import { CredibilitySection } from "@/components/credibility-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ComparisonSection />
        <CredibilitySection />
        <ApiDataSection />
        <UseCasesSection />
        <WhyTweetScoutSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
