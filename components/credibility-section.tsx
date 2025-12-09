import Image from "next/image"
import Link from "next/link"

const stats = [
  { value: "3+", label: "Years focused on Twitter analytics" },
  { value: "10M+", label: "Profiles analyzed" },
  { value: "1000+", label: "Funds, traders and analytics teams served" },
]

const partners = [
  { name: "Pharos", href: "https://x.com/pharos_network", image: "/images/Pharos.jpg" },
  { name: "Tunnl", href: "https://x.com/Tunnl_io", image: "/images/Tunnl.jpg" },
  { name: "GoMining", href: "https://x.com/GoMining_token", image: "/images/GoMining.jpg" },
  { name: "Rally", href: "https://x.com/RallyOnChain", image: "/images/Rally.jpg" },
  { name: "DropsTab", href: "https://x.com/Dropstab_com", image: "/images/dropstab.jpg" },
]

export function CredibilitySection() {
  return (
    <section className="border-t border-border/50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trained on millions of Twitter accounts</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            For three years TweetScout has processed tens of millions of accounts, helped users find thousands of early
            projects, and filtered out millions of bots from their audiences. Our scoring models are built and constantly
            updated on real Twitter data, not generic social noise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-pink">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Logo placeholder section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">Trusted by leading teams</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-border bg-white/5 shadow-lg transition hover:border-pink hover:shadow-pink/40"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={80}
                  height={80}
                  className="relative h-16 w-16 rounded-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/70 text-xs font-semibold uppercase tracking-[0.3em] text-white opacity-0 transition group-hover:opacity-100">
                  {partner.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
