import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, DollarSign, Users, BarChart3, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
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
            <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Why Ledger Lite?
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="#case-studies" className="text-gray-600 hover:text-gray-900 transition-colors">
              Case Studies
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/signin" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign in
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
            Financial Operations & Automation—
            <br />
            <span className="text-purple-600">that scale with you.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg">
              Start free consultation
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg">
              Book a call
            </Button>
          </div>

          <p className="text-gray-600 text-lg mb-12">
            Expert financial leadership and data-driven automation for modern SaaS companies
          </p>

          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Stripe</div>
            <div className="text-2xl font-bold text-gray-400">Gusto</div>
            <div className="text-2xl font-bold text-gray-400">Mercury</div>
            <div className="text-2xl font-bold text-gray-400">Brex</div>
            <div className="text-2xl font-bold text-gray-400">Ramp</div>
            <div className="text-2xl font-bold text-gray-400">QuickBooks</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why choose automated financial operations?
          </h2>
          <p className="text-xl text-gray-600">
            Get senior-level financial expertise without the senior-level price tag
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">SaaS Financial Operations</h3>
            <p className="text-gray-600">
              Full-cycle accounting, revenue recognition, and financial reporting for SaaS companies with $10M+ ARR
            </p>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Data & Automation</h3>
            <p className="text-gray-600">
              Advanced ERP implementations, SQL-powered reporting, and automated workflows that eliminate manual
              processes
            </p>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Finance & M&A</h3>
            <p className="text-gray-600">
              C-suite advisory, private equity transactions, due diligence, and quality of earnings for high-growth
              companies
            </p>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-24 bg-white/50 backdrop-blur-sm rounded-3xl mx-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pricing that scales with your business</h2>
          <p className="text-xl text-gray-600">Choose the level of support that matches your current stage</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-2 border-gray-200 p-8">
            <CardHeader className="pb-4">
              <Badge variant="secondary" className="w-fit mb-4">
                Startup
              </Badge>
              <CardTitle className="text-3xl font-bold">
                $2,500<span className="text-lg font-normal text-gray-500">/mo</span>
              </CardTitle>
              <p className="text-gray-600">Perfect for SaaS companies ready to scale operations</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Financial operations setup</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Basic automation workflows</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Monthly financial reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Strategic finance guidance</span>
              </div>
              <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">Get started</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white">
              Most Popular
            </Badge>
            <CardHeader className="pb-4">
              <Badge variant="secondary" className="w-fit mb-4 bg-white/20 text-white">
                Growth
              </Badge>
              <CardTitle className="text-3xl font-bold">
                $5,000<span className="text-lg font-normal opacity-80">/mo</span>
              </CardTitle>
              <p className="opacity-90">For scaling SaaS companies preparing for funding or acquisition</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-300" />
                <span>Advanced ERP implementation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-300" />
                <span>Revenue recognition automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-300" />
                <span>Investor-ready reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-300" />
                <span>Due diligence preparation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-300" />
                <span>C-suite advisory</span>
              </div>
              <Button className="w-full mt-6 bg-white text-purple-600 hover:bg-gray-100">Get started</Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-gray-200 p-8">
            <CardHeader className="pb-4">
              <Badge variant="secondary" className="w-fit mb-4">
                Enterprise
              </Badge>
              <CardTitle className="text-3xl font-bold">
                $10,000<span className="text-lg font-normal text-gray-500">/mo</span>
              </CardTitle>
              <p className="text-gray-600">For established SaaS companies with complex operations</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Full finance department leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>M&A transaction support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Multi-entity consolidations</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Advanced data analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Private equity readiness</span>
              </div>
              <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">Get started</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Proven track record with SaaS leaders</h2>
          <p className="text-xl text-gray-600">From startup to $180M acquisition - expertise you can trust</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Built Uscreen's Finance Department</h3>
                  <p className="text-gray-600">
                    Scaled financial operations for a $30M+ ARR global SaaS company from ground zero
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Led $180M Private Equity Acquisition</h3>
                  <p className="text-gray-600">
                    Managed seller-side financial processes for successful private equity exit
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced ERP & Automation Expert</h3>
                  <p className="text-gray-600">
                    NetSuite, Sage Intacct, SQL, Python - building automated financial workflows that scale
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">ERP Systems</h4>
                <p className="text-sm text-gray-600">NetSuite, Sage Intacct, QuickBooks</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Data & Analytics</h4>
                <p className="text-sm text-gray-600">SQL, Python, Tableau, Looker</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">SaaS Expertise</h4>
                <p className="text-sm text-gray-600">Revenue Recognition, ASC606</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">M&A Experience</h4>
                <p className="text-sm text-gray-600">Due Diligence, Quality of Earnings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to scale your financial operations?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join 200+ SaaS companies that trust Ledger Lite with their financial strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg">
              Start free consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg">
              View case studies
            </Button>
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
                  <Link href="#" className="hover:text-white transition-colors">
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
                  <Link href="#" className="hover:text-white transition-colors">
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
