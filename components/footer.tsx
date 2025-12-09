import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image src="/images/logotip.png" alt="TweetScout" width={120} height={30} className="mb-4 h-8 w-auto" />
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              The most powerful X/Twitter data collection and social intelligence platform.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/TweetscoutApp"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-pink"
                aria-label="X"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 7L17 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 7L7 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://discord.com/invite/uwAefKCj7X"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-pink"
                aria-label="Discord"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 6.5c-1.06-.74-2.38-1.1-3.75-1.1s-2.69.36-3.75 1.1C8.6 7 8 8.03 8 9.2v4.6c0 1.17.6 2.2 1.75 2.7 1.06.45 2.24.6 3.45.45 1.13-.13 2.25-.45 3.25-.95 1.15-.56 1.75-1.55 1.75-2.7V9.2c0-1.17-.6-2.2-1.75-2.7zM10 10.5a.85.85 0 0 1-.75-.4.74.74 0 0 1 .04-1 .85.85 0 0 1 1.35-.04c.28.33.27.82-.04 1.12-.28.3-.67.32-.8.32zm4 0a.85.85 0 0 1-.75-.4.74.74 0 0 1 .04-1 .85.85 0 0 1 1.35-.04c.28.33.27.82-.04 1.12-.28.3-.67.32-.8.32z" />
                  <path d="M4 17c-.44 0-.8-.36-.8-.8V8.8c0-2.59 2.1-4.7 4.7-4.7h10.2c2.59 0 4.7 2.1 4.7 4.7v7.4c0 .44-.36.8-.8.8H4z" opacity=".3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://api.tweetscout.io/v2/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Documentation
                </a>
              </li>
              
              <li>
                <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://tweetscout.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://app.tweetscout.io/developer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Developer portal
                </a>
              </li>
              
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contacts</h4>
            <ul className="space-y-2 text-sm">
            <li>
                <a
                  href="mailto:contacts@tweetscout.io"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  contacts@tweetscout.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TweetScout. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
