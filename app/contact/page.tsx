import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function ContactPage() {
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

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-6">GET IN TOUCH</p>
            <h1 className={`${playfair.className} text-5xl md:text-6xl leading-tight mb-8`}>
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Ready to transform your SaaS company's financial future? Fill out the form below and we'll be in touch
              within 24 hours.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm uppercase tracking-wide">
                  First Name
                </label>
                <Input
                  id="first-name"
                  className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm uppercase tracking-wide">
                  Last Name
                </label>
                <Input
                  id="last-name"
                  className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm uppercase tracking-wide">
                Email
              </label>
              <Input
                id="email"
                type="email"
                className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm uppercase tracking-wide">
                Company
              </label>
              <Input
                id="company"
                className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                placeholder="Your SaaS Company"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm uppercase tracking-wide">
                Message
              </label>
              <Textarea
                id="message"
                className="min-h-[150px] border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                placeholder="Tell us about your financial needs and goals"
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4">Email</h3>
              <p className="text-lg">hello@ledgerlite.com</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4">Phone</h3>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4">Location</h3>
              <p className="text-lg">San Francisco, CA</p>
            </div>
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
