import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
                <div className="bg-emerald-500 rounded-tl-md"></div>
                <div className="bg-blue-600 rounded-tr-md"></div>
                <div className="bg-blue-600 rounded-bl-md"></div>
                <div className="bg-emerald-500 rounded-br-md"></div>
              </div>
              <div className="absolute inset-1 bg-white rounded-sm"></div>
              <div className="absolute inset-2 grid grid-cols-2 gap-0.5">
                <div className="bg-emerald-400"></div>
                <div className="bg-blue-500"></div>
                <div className="bg-blue-500"></div>
                <div className="bg-emerald-400"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">Ledger Lite</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Why Ledger Lite?
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/work" className="text-gray-600 hover:text-gray-900 transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full">
              Get started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Let's Start a
            <br />
            <span className="text-purple-600">Conversation.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to transform your SaaS company's financial future? Get in touch and we'll be back to you within 24
            hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                  First Name
                </label>
                <Input
                  id="first-name"
                  className="border-gray-200 rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Input
                  id="last-name"
                  className="border-gray-200 rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                className="border-gray-200 rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                placeholder="john@yourcompany.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company Name
              </label>
              <Input
                id="company"
                className="border-gray-200 rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                placeholder="Your SaaS Company"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="revenue" className="text-sm font-medium text-gray-700">
                Annual Recurring Revenue (Optional)
              </label>
              <select
                id="revenue"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              >
                <option value="">Select ARR range</option>
                <option value="under-1m">Under $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="5m-10m">$5M - $10M</option>
                <option value="10m-25m">$10M - $25M</option>
                <option value="25m-plus">$25M+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Tell us about your needs
              </label>
              <Textarea
                id="message"
                className="min-h-[120px] border-gray-200 rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                placeholder="What financial challenges are you facing? What are your goals?"
              />
            </div>

            <div className="pt-4">
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full text-lg font-medium">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">Prefer to reach out directly? Here's how to contact us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
              <a
                href="mailto:susana@ledger-lite.com"
                className="text-lg text-gray-600 hover:text-emerald-600 transition-colors"
              >
                susana@ledger-lite.com
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
              <a href="tel:+17866309202" className="text-lg text-gray-600 hover:text-emerald-600 transition-colors">
                +1 (786) 630 9202
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Call</h3>
              <a
                href="https://calendly.com/susana-ledger-lite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Book 30-min consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center bg-white/50 backdrop-blur-sm rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to scale your financial operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 200+ SaaS companies that trust Ledger Lite with their financial strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/susana-ledger-lite" target="_blank" rel="noopener noreferrer">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg">
                Book a call
              </Button>
            </a>
            <Link href="/work">
              <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg">
                View case studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
                    <div className="bg-emerald-500 rounded-tl-md"></div>
                    <div className="bg-blue-600 rounded-tr-md"></div>
                    <div className="bg-blue-600 rounded-bl-md"></div>
                    <div className="bg-emerald-500 rounded-br-md"></div>
                  </div>
                  <div className="absolute inset-1 bg-white rounded-sm"></div>
                  <div className="absolute inset-2 grid grid-cols-2 gap-0.5">
                    <div className="bg-emerald-400"></div>
                    <div className="bg-blue-500"></div>
                    <div className="bg-blue-500"></div>
                    <div className="bg-emerald-400"></div>
                  </div>
                </div>
                <span className="text-xl font-bold">Ledger Lite</span>
              </div>
              <p className="text-gray-400">
                Expert fractional CFO services for SaaS companies at every stage of growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Financial Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    SaaS Metrics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Fundraising Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Board Relations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ledger Lite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
