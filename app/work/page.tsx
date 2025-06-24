import Link from "next/link"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div>
          <Link href="/" className="text-4xl font-bold">
            L
          </Link>
        </div>
        <nav className="flex gap-8">
          <Link href="/services" className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
            Services
          </Link>
          <Link href="/work" className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
            Work
          </Link>
          <Link href="/contact" className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest mb-6">OUR WORK</p>
          <h1 className={`${playfair.className} text-5xl md:text-6xl leading-tight mb-12`}>Case Studies</h1>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Case Study 1 */}
          <div className="mb-32">
            <div className="aspect-[16/9] mb-16">
              <img
                src="/placeholder.svg?height=900&width=1600"
                alt="GrowthMetrics case study"
                className="object-cover w-full h-full"
                width={1600}
                height={900}
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-widest mb-4">CASE STUDY</p>
              <h2 className={`${playfair.className} text-4xl mb-8`}>GROWTHMETRICS</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <p className="text-sm uppercase tracking-widest mb-2">Services</p>
                  <p className="text-gray-600">Financial Strategy, SaaS Metrics, Fundraising Support</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest mb-2">Timeline</p>
                  <p className="text-gray-600">6 Months</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest mb-2">Results</p>
                  <p className="text-gray-600">$8.5M Series A, 3x Valuation</p>
                </div>
              </div>

              <div className="space-y-6 text-lg">
                <p>
                  GrowthMetrics came to us with a challenge: they needed to prepare for Series A funding but lacked the
                  financial infrastructure to impress investors. Their product was gaining traction, but their financial
                  story wasn't compelling.
                </p>
                <p>
                  Our approach began with a comprehensive audit of their financial systems and metrics tracking. We
                  implemented a robust SaaS metrics dashboard that provided real-time insights into key performance
                  indicators.
                </p>
                <p>
                  Next, we restructured their pricing strategy to optimize revenue and improve unit economics. This led
                  to a 40% increase in average contract value within three months.
                </p>
                <p>
                  Finally, we prepared investor-ready financial models and presentations that clearly communicated their
                  growth story and future potential.
                </p>
                <p>
                  The result? They secured $8.5M in Series A funding and increased their valuation by 3x compared to
                  their seed round just 18 months earlier.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-block border-b border-black pb-1 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="mb-32">
            <div className="aspect-[16/9] mb-16">
              <img
                src="/placeholder.svg?height=900&width=1600"
                alt="CloudStack case study"
                className="object-cover w-full h-full"
                width={1600}
                height={900}
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-widest mb-4">CASE STUDY</p>
              <h2 className={`${playfair.className} text-4xl mb-8`}>CLOUDSTACK</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <p className="text-sm uppercase tracking-widest mb-2">Services</p>
                  <p className="text-gray-600">Cash Flow Management, Financial Strategy</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest mb-2">Timeline</p>
                  <p className="text-gray-600">12 Months</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest mb-2">Results</p>
                  <p className="text-gray-600">Extended Runway by 8 Months, 2x ARR</p>
                </div>
              </div>

              <div className="space-y-6 text-lg">
                <p>
                  CloudStack was growing rapidly but burning through cash at an unsustainable rate. They needed to
                  extend their runway without sacrificing growth to reach profitability before their next funding round.
                </p>
                <p>
                  We implemented a comprehensive cash flow management strategy that identified inefficiencies and
                  optimized spending across the organization.
                </p>
                <p>
                  By restructuring their billing cycles and improving collections processes, we reduced days sales
                  outstanding from 45 to 28 days, significantly improving cash flow.
                </p>
                <p>
                  We also developed a strategic growth plan that focused resources on the highest-ROI activities,
                  allowing them to maintain growth while reducing burn rate by 35%.
                </p>
                <p>
                  The result? CloudStack extended their runway by 8 months while simultaneously doubling their ARR,
                  ultimately reaching profitability without requiring additional funding.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-block border-b border-black pb-1 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#d3d7c1]">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className={`${playfair.className} text-4xl mb-8`}>Ready to Write Your Success Story?</h2>
            <p className="text-lg mb-12">
              Let's discuss how our fractional financial leadership can transform your SaaS business.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-2xl font-bold">
                Ledger Lite
              </Link>
            </div>
            <div className="flex gap-8">
              <Link href="/services" className="text-sm text-gray-600 hover:text-black transition-colors">
                Services
              </Link>
              <Link href="/work" className="text-sm text-gray-600 hover:text-black transition-colors">
                Work
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
            </div>
            <div className="mt-6 md:mt-0 text-sm text-gray-600">© 2025 Ledger Lite</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
