"use client"
import { useRouter } from 'next/navigation';

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, ChevronDown, Database, FileSpreadsheet, LineChart, Menu, PieChart, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const router = useRouter();
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F8FAFC]">
        {/* Sidebar */}
        <Sidebar variant="floating" className="hidden lg:flex">
          <SidebarHeader className="flex flex-col items-center py-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-teal-500 text-white p-2 rounded-lg">
                <Database className="h-6 w-6" />
              </div>
              <span className="font-bold text-2xl text-teal-600">Dina</span>
            </div>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeSection === "hero"} className="w-full justify-start">
                  <Link href="#hero">Home</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeSection === "features"} className="w-full justify-start">
                  <Link href="#features">Features</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeSection === "how-it-works"} className="w-full justify-start">
                  <Link href="#how-it-works">How It Works</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeSection === "testimonials"} className="w-full justify-start">
                  <Link href="#testimonials">Testimonials</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeSection === "pricing"} className="w-full justify-start">
                  <Link href="#pricing">Pricing</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <div className="px-4 py-6">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Why Dina?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                  <span>No coding required</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                  <span>Beautiful visualizations</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                  <span>Accurate forecasting</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                  <span>Easy data upload</span>
                </li>
              </ul>
            </div>
            <div className="px-4 py-6 bg-teal-50 rounded-lg mx-4">
              <h3 className="font-medium text-teal-800 mb-2">Ready to get started?</h3>
              <p className="text-sm text-teal-700 mb-4">Transform your data into actionable insights today.</p>
              <Button variant="outline" className="w-full mt-4"
              onClick={() => router.push('/login')}
              >Start Free Trial</Button>
            </div>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-sm font-medium">Need help?</p>
                  <p className="text-xs text-gray-500">Contact support</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-50 bg-white transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="bg-teal-500 text-white p-2 rounded-lg">
                <Database className="h-6 w-6" />
              </div>
              <span className="font-bold text-2xl text-teal-600">Dina</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#hero"
                  className="block p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="block p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="block p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="block p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="block p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Start Free Trial</Button>
              <Button variant="outline" className="w-full mt-4"
              
              >
                Log in
              </Button>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          {/* Header for mobile */}
          <header className="sticky top-0 z-40 lg:hidden bg-white border-b">
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-2">
                <div className="bg-teal-500 text-white p-2 rounded-lg">
                  <Database className="h-6 w-6" />
                </div>
                <span className="font-bold text-2xl text-teal-600">Dina</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                  Log in
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </header>

          <main>
            {/* Hero Section */}
            <section id="hero" className="relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 rounded-bl-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-50 -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-teal-200 rounded-full opacity-30"></div>
              </div>

              <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2 space-y-8">
                    <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      <span>No-code data analytics</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      Transform your data into <span className="text-teal-600">actionable insights</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                      Upload your data, choose your visualizations, and get beautiful dashboards with forecasts in
                      minutes. No coding required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="w-full mt-4"
              onClick={() => router.push('/login')}
              >
                Start Free Trial
                      </Button>
                      <Button size="lg" variant="outline" className="border-teal-600 text-teal-600">
                        Watch Demo
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        Trusted by <span className="font-bold">2,000+</span> businesses
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                      <div className="h-8 bg-gray-100 flex items-center px-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Dashboard Preview"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-4 rounded-2xl shadow-lg">
                      <BarChart3 className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Brands Section */}
            <section className="py-12 bg-white border-y border-gray-100">
              <div className="container mx-auto px-4">
                <p className="text-center text-gray-500 mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-8 w-32 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 lg:py-32 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>Features</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Everything you need for data analysis
                  </h2>
                  <p className="text-xl text-gray-600">
                    Dina provides all the tools you need to transform your data into actionable insights.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Upload className="h-8 w-8 text-teal-600" />,
                      title: "Easy Data Upload",
                      description:
                        "Upload Excel, CSV, or QuickBooks exports with a simple drag and drop. No technical skills required.",
                    },
                    {
                      icon: <FileSpreadsheet className="h-8 w-8 text-teal-600" />,
                      title: "Automatic Processing",
                      description:
                        "Our system automatically processes and organizes your data for analysis, saving you hours of work.",
                    },
                    {
                      icon: <BarChart3 className="h-8 w-8 text-teal-600" />,
                      title: "Custom Visualizations",
                      description:
                        "Choose from bar charts, line graphs, pie charts, and more to visualize your data exactly how you want.",
                    },
                    {
                      icon: <LineChart className="h-8 w-8 text-teal-600" />,
                      title: "Accurate Forecasting",
                      description:
                        "Generate future projections based on historical data with adjustable time frames for better planning.",
                    },
                    {
                      icon: <PieChart className="h-8 w-8 text-teal-600" />,
                      title: "Interactive Dashboards",
                      description:
                        "Create dynamic dashboards that update in real-time as your data changes for always-current insights.",
                    },
                    {
                      icon: <Database className="h-8 w-8 text-teal-600" />,
                      title: "Data Security",
                      description:
                        "Your data is encrypted and secure. We follow industry best practices to protect your information.",
                    },
                  ].map((feature, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                    >
                      <CardContent className="p-8">
                        <div className="mb-6 p-3 bg-teal-50 rounded-2xl inline-block group-hover:bg-teal-100 transition-colors duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-50 translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>How It Works</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Three simple steps</h2>
                  <p className="text-xl text-gray-600">
                    Dina makes data analysis accessible to everyone, regardless of technical expertise.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                  {[
                    {
                      step: "01",
                      title: "Upload Your Data",
                      description:
                        "Simply drag and drop your Excel files, CSVs, or QuickBooks exports into Dina. Our system automatically recognizes your data structure.",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      step: "02",
                      title: "Select Visualizations",
                      description:
                        "Choose the types of charts and forecasts you want to see in your dashboard. Customize colors, labels, and time periods to match your needs.",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      step: "03",
                      title: "Get Your Dashboard",
                      description:
                        "Instantly receive a custom dashboard with interactive visualizations and forecasts. Share with your team or export for presentations.",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white rounded-3xl shadow-lg p-8 h-full">
                        <div className="text-5xl font-bold text-teal-100 mb-6">{step.step}</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 mb-8">{step.description}</p>
                        <div className="relative rounded-xl overflow-hidden">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            width={400}
                            height={300}
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent"></div>
                        </div>
                      </div>
                      {index < 2 && (
                        <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-teal-200"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 lg:py-32 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>Testimonials</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">What our customers say</h2>
                  <p className="text-xl text-gray-600">
                    Join thousands of satisfied users who have transformed their data analysis process.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      quote:
                        "Dina has transformed how we analyze our financial data. What used to take days now takes minutes. The forecasting feature is incredibly accurate.",
                      author: "Sarah Johnson",
                      role: "CFO, TechStart Inc.",
                    },
                    {
                      quote:
                        "As someone with no technical background, I was able to create beautiful dashboards in minutes. Dina has become an essential tool for our marketing team.",
                      author: "Michael Chen",
                      role: "Marketing Director, Growth Partners",
                    },
                    {
                      quote:
                        "The ability to quickly visualize our sales data and forecast trends has been game-changing for our business planning. Highly recommended!",
                      author: "Emily Rodriguez",
                      role: "CEO, Retail Plus",
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="text-4xl font-serif text-teal-300 mb-4">"</div>
                      <p className="mb-6 text-gray-700">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100"></div>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.author}</p>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>Pricing</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Simple, transparent pricing</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Choose the plan that's right for your business. All plans include a 14-day free trial.
                  </p>
                  <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200">
                    <button className="px-6 py-2 rounded-full bg-teal-500 text-white">Monthly</button>
                    <button className="px-6 py-2 rounded-full text-gray-700">Yearly (Save 20%)</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      name: "Starter",
                      price: "$29",
                      description: "Perfect for individuals and small teams",
                      features: [
                        "Up to 5 dashboards",
                        "Basic visualizations",
                        "30-day forecasting",
                        "Email support",
                        "1 user",
                      ],
                      popular: false,
                    },
                    {
                      name: "Professional",
                      price: "$79",
                      description: "Ideal for growing businesses",
                      features: [
                        "Up to 20 dashboards",
                        "Advanced visualizations",
                        "90-day forecasting",
                        "Priority support",
                        "5 users",
                        "Team collaboration",
                      ],
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      description: "For large organizations with complex needs",
                      features: [
                        "Unlimited dashboards",
                        "Custom visualizations",
                        "365-day forecasting",
                        "Dedicated support",
                        "Unlimited users",
                        "Custom integrations",
                        "White labeling",
                      ],
                      popular: false,
                    },
                  ].map((plan, index) => (
                    <div
                      key={index}
                      className={`relative rounded-3xl overflow-hidden ${
                        plan.popular
                          ? "bg-white border-2 border-teal-500 shadow-xl scale-105"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-teal-500 text-white text-center text-sm py-1 font-medium">
                          MOST POPULAR
                        </div>
                      )}
                      <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                        <p className="mb-6 text-gray-600">{plan.description}</p>
                        <div className="flex items-baseline mb-6">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="ml-2 text-gray-600">/month</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full py-6 rounded-xl text-lg ${
                            plan.popular
                              ? "bg-teal-600 hover:bg-teal-700 text-white"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                          }`}
                        >
                          {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-teal-50 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-50 -translate-x-1/2 translate-y-1/2"></div>

                  <div className="relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                          Ready to transform your data?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                          Join thousands of businesses that use Dina to turn data into actionable insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" className="w-full mt-4"
              onClick={() => router.push('/login')}
              >
                Start Free Trial
                          </Button>
                          <Button size="lg" variant="outline" className="border-teal-600 text-teal-600">
                            Schedule Demo
                          </Button>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Dashboard Preview"
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="bg-teal-500 text-white p-2 rounded-lg">
                      <Database className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-2xl">Dina</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Transform your data into beautiful dashboards and forecasts — no coding required.
                  </p>
                  <div className="flex gap-4">
                    {["twitter", "facebook", "linkedin", "instagram"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Product</h3>
                  <ul className="space-y-3">
                    {["Features", "Pricing", "Integrations", "FAQ", "Roadmap"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Company</h3>
                  <ul className="space-y-3">
                    {["About", "Blog", "Careers", "Press", "Contact"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {["Terms", "Privacy", "Cookies", "Licenses", "Settings"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400">© 2023 Dina. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  )
}
