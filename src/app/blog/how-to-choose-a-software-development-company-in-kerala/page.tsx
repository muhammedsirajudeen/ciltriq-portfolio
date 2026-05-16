import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://ciltriq.com"),
  title:
    "How to Choose a Good Software Development Company in Kerala (2026 Guide)",
  description:
    "Learn how to choose the right software development company in Kerala for your business. A practical guide covering technical expertise, communication, scalability, pricing, and long-term reliability.",
  alternates: {
    canonical:
      "https://ciltriq.com/blog/how-to-choose-a-good-software-development-company-in-kerala",
  },
  openGraph: {
    title:
      "How to Choose a Good Software Development Company in Kerala (2026 Guide)",
    description:
      "A practical guide for businesses looking to hire a software development company in Kerala.",
    type: "article",
    url: "https://ciltriq.com/blog/how-to-choose-a-good-software-development-company-in-kerala",
    siteName: "Ciltriq Technologies",
    images: [
      {
        url: "/blog/og-images/software-company-og.png",
        width: 1600,
        height: 900,
        alt: "How to Choose a Good Software Development Company in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Choose a Good Software Development Company in Kerala (2026 Guide)",
    description:
      "A practical guide for businesses looking to hire a software development company in Kerala.",
    images: ["/blog/og-images/software-company-og.png"],
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "How to Choose a Good Software Development Company in Kerala (2026 Guide)",
    description:
      "Learn how to choose the right software development company in Kerala for your business.",
    author: {
      "@type": "Organization",
      name: "Ciltriq Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "Ciltriq Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://ciltriq.com/logo.png",
      },
    },
    image: "https://ciltriq.com/blog/og-images/software-company-og.png",
    mainEntityOfPage:
      "https://ciltriq.com/blog/how-to-choose-a-good-software-development-company-in-kerala",
  };

  const tocItems = [
    { href: "#s1", num: "01", label: "Understand the Problem" },
    { href: "#s2", num: "02", label: "Evaluate Expertise" },
    { href: "#s3", num: "03", label: "Start With a Sprint" },
    { href: "#s4", num: "04", label: "Communication" },
    { href: "#s5", num: "05", label: "Long-Term Maintenance" },
    { href: "#s6", num: "06", label: "Avoid Buzzwords" },
    { href: "#final", num: "—", label: "Final Thoughts" },
  ];

  return (
    <main className="bg-white text-neutral-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO IMAGE */}
      <section className="mt-10 border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-6 md:px-8">
          <div className="overflow-hidden  bg-white ">
            <Image
              src="/blog/software-company-kerala1.png"
              alt="How to Choose a Good Software Development Company in Kerala"
              width={1400}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ARTICLE INTRO */}
      <header className="mx-auto max-w-4xl px-6 pb-10 pt-16 md:px-12">
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-red-700">
            Software Development
          </span>

          <span className="h-px w-10 bg-neutral-300" />

          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            2026 Guide
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 md:text-6xl">
          How to Choose a Good Software Development Company{" "}
          <span className="text-red-700">in Kerala</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 md:text-xl">
          Choosing the wrong software partner can cost far more than the
          original budget. Here&apos;s a practical guide to evaluating
          engineering capability, communication quality, scalability, and
          long-term reliability.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-neutral-200 pt-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
              CQ
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-800">
                Ciltriq Technologies
              </p>

              <p className="text-sm text-neutral-400">
                Published May 2026 · Kochi, Kerala
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 py-10 md:grid-cols-[220px_1fr] md:px-12">
        
        {/* SIDEBAR */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
              Table of Contents
            </p>

            <ul className="space-y-2">
              {tocItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 border-l border-transparent py-1 pl-3 text-sm text-neutral-400 transition-all hover:border-red-600 hover:text-neutral-900"
                  >
                    <span className="font-mono text-[11px] text-neutral-300 transition-colors group-hover:text-red-600">
                      {item.num}
                    </span>

                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ARTICLE */}
        <article className="min-w-0">
          <p className="mb-7 text-2xl font-light italic leading-relaxed text-neutral-800">
            Building software is not just about shipping features. It&apos;s
            about building operational infrastructure your business will depend
            on for years.
          </p>

          <p className="mb-5 text-base leading-[1.9] text-neutral-600">
            Whether you&apos;re building an ERP platform, mobile app, SaaS
            product, internal dashboard, or customer portal — the company you
            choose will directly affect scalability, reliability, maintenance
            costs, and business efficiency.
          </p>

          <div className="my-10 rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
            <p className="text-base leading-relaxed text-neutral-700">
              Most businesses make the mistake of evaluating software companies
              primarily based on pricing or visual design quality. That is how
              you end up with unstable systems, technical debt, rewrites, and
              operational bottlenecks later.
            </p>
          </div>

          {/* SECTION 1 */}
          <section id="s1" className="mt-20 scroll-mt-24">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-red-600">
                01
              </span>

              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
              Understand Business Problems First
            </h2>

            <p className="mb-5 text-base leading-[1.9] text-neutral-600">
              A serious engineering team does not immediately jump into writing
              code. They first understand workflows, bottlenecks, internal
              operations, scaling concerns, user flows, and future business
              requirements.
            </p>

            <p className="text-base leading-[1.9] text-neutral-600">
              Technology is simply a tool. The real goal is reducing operational
              friction and improving efficiency.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="s2" className="mt-20 scroll-mt-24">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-red-600">
                02
              </span>

              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
              Evaluate Technical Expertise Properly
            </h2>

            <p className="mb-6 text-base leading-[1.9] text-neutral-600">
              A polished UI does not automatically mean strong engineering.
              Verify whether the company actually understands scalability,
              security, maintainability, deployment, and infrastructure.
            </p>

            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              {[
                "What technologies are being used and why?",
                "Have they built similar systems before?",
                "How do they handle scaling and maintenance?",
                "Can they explain tradeoffs clearly?",
                "Can they share real implementations?",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 px-5 py-4 ${
                    index !== 4 ? "border-b border-neutral-100" : ""
                  }`}
                >
                  <div className="h-2 w-2 rounded-full bg-red-600" />

                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="s3" className="mt-20 scroll-mt-24">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-red-600">
                03
              </span>

              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
              Start With a Paid Sprint
            </h2>

            <p className="mb-6 text-base leading-[1.9] text-neutral-600">
              Instead of committing to a large project immediately, start with a
              paid sprint or MVP engagement.
            </p>

            <blockquote className="rounded-3xl border border-neutral-200 bg-white px-8 py-10 shadow-sm">
              <p className="text-2xl font-light italic leading-relaxed text-neutral-900">
                &ldquo;A short paid sprint reveals more about an engineering
                company than months of meetings.&rdquo;
              </p>
            </blockquote>
          </section>

          {/* SECTION 4 */}
          <section id="s4" className="mt-20 scroll-mt-24">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-red-600">
                04
              </span>

              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
              Communication Matters
            </h2>

            <p className="mb-6 text-base leading-[1.9] text-neutral-600">
              Many software projects fail because of poor communication rather
              than poor engineering. Before hiring a software company,
              understand how they handle updates, blockers, stakeholder
              communication, timelines, and feedback cycles.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Project updates and reporting",
                "Handling delays and blockers",
                "Feedback and iteration cycles",
                "Stakeholder communication process",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="s5" className="mt-20 scroll-mt-24">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-red-600">
                05
              </span>

              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
              Ask About Long-Term Maintenance
            </h2>

            <p className="mb-5 text-base leading-[1.9] text-neutral-600">
              Building software is only the beginning. The real operational
              challenges appear after deployment through maintenance, scaling,
              monitoring, infrastructure management, and future feature
              expansion.
            </p>

            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              {[
                "Who maintains the system after launch?",
                "Is proper documentation provided?",
                "Can future developers work on the codebase easily?",
                "How are updates and security patches handled?",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 px-5 py-4 ${
                    index !== 3 ? "border-b border-neutral-100" : ""
                  }`}
                >
                  <div className="h-2 w-2 rounded-full bg-red-600" />

                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="s6" className="mt-20 scroll-mt-24">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-red-600">
                06
              </span>

              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
              Avoid Buzzword Agencies
            </h2>

            <p className="mb-5 text-base leading-[1.9] text-neutral-600">
              In 2026, many agencies aggressively market AI, blockchain, and
              automation without understanding actual operational problems. Real
              engineering is about reducing friction, improving workflows, and
              building systems businesses can reliably depend on.
            </p>

            <div className="rounded-2xl border-l-4 border-red-600 bg-neutral-50 px-6 py-5">
              <p className="text-sm leading-relaxed text-neutral-700">
                Ask any agency to explain exactly how a proposed technology
                improves your workflow. Vague answers are usually a red flag.
              </p>
            </div>
          </section>

          {/* FINAL */}
          <section
            id="final"
            className="mt-24 border-t-2 border-neutral-950 pt-12"
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Final Thoughts
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-950">
              Cheap software usually becomes expensive software later.
            </h2>

            <p className="mt-6 text-base leading-[1.9] text-neutral-600">
              The right software partner helps simplify operations, reduce
              friction, improve reliability, and build systems your business can
              depend on long term.
            </p>
          </section>
        </article>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-8 md:px-12">
        <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-950 p-10 md:p-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                Ciltriq Technologies
              </p>

              <h3 className="text-3xl font-semibold leading-tight text-white">
                Planning a software project?
              </h3>

              <p className="mt-4 text-base leading-relaxed text-neutral-400">
                We help businesses build scalable software systems, automation
                platforms, internal dashboards, and modern web applications
                focused on long-term maintainability.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-7 py-3 text-center text-sm font-medium text-neutral-950 no-underline transition hover:opacity-90"
              >
                Contact Us
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border border-neutral-700 px-7 py-3 text-center text-sm font-medium text-neutral-300 no-underline transition hover:border-neutral-500 hover:text-white"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between md:px-12">
          <p>© 2026 Ciltriq Technologies</p>

          <a
            href="https://ciltriq.com"
            className="transition hover:text-neutral-800"
          >
            ciltriq.com ↗
          </a>
        </div>
      </footer>
    </main>
  );
}