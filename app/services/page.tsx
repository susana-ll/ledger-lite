import Link from "next/link"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function ServicesPage() {
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
          <p className="text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className={`${playfair.className} text-5xl md:text-6xl leading-tight mb-12`}>
            Financial Expertise for SaaS Companies
          </h1>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className={`${playfair.className} text-3xl md:text-4xl mb-8`}>Financial Strategy</h2>
              <p className="text-lg leading-relaxed mb-8">
                Our strategic financial planning services help SaaS companies navigate growth challenges, optimize
                resource allocation, and prepare for fundraising or exit events.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li>• Long-term financial roadmapping</li>
                <li>• Growth modeling and scenario planning</li>
                <li>• Investment and fundraising strategy</li>
                <li>• Board and investor relations</li>
              </ul>
            </div>
            <div className="aspect-square">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Financial strategy session"
                className="object-cover w-full h-full"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1 aspect-square">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="SaaS metrics dashboard"
                className="object-cover w-full h-full"
                width={600}
                height={600}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className={`${playfair.className} text-3xl md:text-4xl mb-8`}>SaaS Metrics & Reporting</h2>
              <p className="text-lg leading-relaxed mb-8">
                We help you track, analyze, and optimize the key metrics that drive SaaS business success, providing
                clear insights and actionable recommendations.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li>• MRR/ARR analysis and forecasting</li>
                <li>• Customer acquisition cost (CAC) optimization</li>
                <li>• Lifetime value (LTV) calculation</li>
                <li>• Churn analysis and retention strategies</li>
                <li>• Custom executive dashboards</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl md:text-4xl mb-8`}>Cash Flow Management</h2>
              <p className="text-lg leading-relaxed mb-8">
                Optimize your cash flow to extend runway, improve operational efficiency, and ensure sustainable growth
                for your SaaS business.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li>• Cash flow forecasting and modeling</li>
                <li>• Burn rate optimization</li>
                <li>• Working capital management</li>
                <li>• Revenue recognition strategies</li>
                <li>• Subscription billing optimization</li>
              </ul>
            </div>
            <div className="aspect-square">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Cash flow management"
                className="object-cover w-full h-full"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#d3d7c1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={`${playfair.className} text-4xl text-center mb-16`}>ENGAGEMENT OPTIONS</h2>

            <div className="space-y-16">
              <div className="bg-white p-12">
                <h3 className={`${playfair.className} text-2xl mb-4`}>Startup</h3>
                <p className="text-3xl mb-8">
                  $2,500<span className="text-lg text-gray-500">/month</span>
                </p>
                <p className="text-gray-600 mb-8">
                  For early-stage SaaS companies seeking foundational financial guidance.
                </p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li>• 10 hours monthly support</li>
                  <li>• Basic financial reporting</li>
                  <li>• Cash flow management</li>
                  <li>• Monthly review meetings</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block border-b border-black pb-1 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Get Started
                </Link>
              </div>

              <div className="bg-white p-12">
                <h3 className={`${playfair.className} text-2xl mb-4`}>Growth</h3>
                <p className="text-3xl mb-8">
                  $5,000<span className="text-lg text-gray-500">/month</span>
                </p>
                <p className="text-gray-600 mb-8">
                  For scaling SaaS companies preparing for significant growth or fundraising.
                </p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li>• 20 hours monthly support</li>
                  <li>• Advanced SaaS metrics dashboard</li>
                  <li>• Financial strategy development</li>
                  <li>• Investor-ready reporting</li>
                  <li>• Bi-weekly review meetings</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block border-b border-black pb-1 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Get Started
                </Link>
              </div>

              <div className="bg-white p-12">
                <h3 className={`${playfair.className} text-2xl mb-4`}>Enterprise</h3>
                <p className="text-3xl mb-8">
                  $10,000<span className="text-lg text-gray-500">/month</span>
                </p>
                <p className="text-gray-600 mb-8">
                  For established SaaS companies requiring comprehensive financial leadership.
                </p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li>• 40+ hours monthly support</li>
                  <li>• Comprehensive financial management</li>
                  <li>• Board & investor relations</li>
                  <li>• M&A and fundraising support</li>
                  <li>• Weekly strategic meetings</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block border-b border-black pb-1 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className={`${playfair.className} text-4xl mb-8`}>Ready to Transform Your Finances?</h2>
            <p className="text-lg mb-12">Schedule a consultation to discuss your specific needs and how we can help.</p>
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
