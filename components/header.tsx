import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image src="/images/logotip.png" alt="TweetScout" width={140} height={36} className="h-9 w-auto" />
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#use-cases" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Use Cases
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="https://api.tweetscout.io/v2/docs/" target="_blank">
            <Button
              variant="outline"
              className="hidden border-border text-foreground hover:bg-accent sm:inline-flex bg-transparent"
            >
              View Docs
            </Button>
          </Link>
          <Link href="https://app.tweetscout.io/developer" target="_blank">
            <Button className="bg-pink text-white hover:bg-pink/90">Get Access</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
