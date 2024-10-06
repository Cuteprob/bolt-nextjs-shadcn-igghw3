import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BarChart2, Calendar, Users, MessageSquare, Lock, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-20">
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Manage Projects Like a Pro with TaskMaster</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 animate-fade-in-delay max-w-3xl mx-auto">TaskMaster Pro helps teams collaborate, plan, and deliver on time - every time. Boost productivity and streamline your workflow today.</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="animate-bounce">Start Free Trial</Button>
            <Button size="lg" variant="outline" className="animate-pulse">Watch Demo</Button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Streamline Your Workflow</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">TaskMaster Pro brings all your tasks, team members, and tools together to get projects done faster and smarter. Experience the power of efficient project management.</p>
            <ul className="space-y-4">
              {['Intuitive Kanban Boards', 'Time Tracking', 'Resource Management', 'Automated Reports', 'Team Collaboration', 'Customizable Workflows'].map((feature, index) => (
                <li key={index} className="flex items-center text-lg transition-transform duration-300 hover:translate-x-2">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 md:h-auto overflow-hidden rounded-lg shadow-lg animate-slide-in-right">
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="TaskMaster Pro Dashboard"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Advanced Analytics', icon: BarChart2, description: 'Gain insights with powerful project analytics and customizable dashboards.' },
              { title: 'Team Collaboration', icon: Users, description: 'Foster teamwork with real-time communication and file sharing capabilities.' },
              { title: 'Smart Scheduling', icon: Calendar, description: 'Optimize your team\'s time with AI-powered scheduling and resource allocation.' },
              { title: 'Real-time Updates', icon: Zap, description: 'Stay on top of your projects with instant notifications and live updates.' },
              { title: 'Secure Data', icon: Lock, description: 'Keep your project data safe with enterprise-grade security and encryption.' },
              { title: 'Integration Hub', icon: MessageSquare, description: 'Connect TaskMaster Pro with your favorite tools for a seamless workflow.' },
            ].map((feature, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Project Manager, TechCorp', quote: 'TaskMaster Pro has revolutionized how we manage projects. It\'s intuitive, powerful, and has significantly improved our team\'s productivity.' },
              { name: 'Michael Chen', role: 'CEO, StartupX', quote: 'As a fast-growing startup, we needed a tool that could scale with us. TaskMaster Pro has been the perfect solution, adapting to our changing needs.' },
              { name: 'Emily Rodriguez', role: 'Team Lead, DesignHub', quote: 'The collaboration features in TaskMaster Pro are unparalleled. It\'s brought our remote team closer and made project coordination a breeze.' },
            ].map((testimonial, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
                <CardContent className="pt-6">
                  <p className="italic mb-4 text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['TechCorp', 'GlobalMedia', 'InnovateCo', 'FintechPro', 'HealthTech', 'EduSolutions'].map((company, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900 animate-fade-in">{company}</Badge>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: 'What is TaskMaster Pro?', a: 'TaskMaster Pro is a comprehensive project management tool designed to help teams collaborate, plan, and execute projects efficiently.' },
              { q: 'How can TaskMaster Pro benefit my team?', a: 'TaskMaster Pro streamlines workflows, enhances communication, and provides powerful analytics to help your team deliver projects on time and within budget.' },
              { q: 'Is TaskMaster Pro suitable for small teams?', a: 'Absolutely! TaskMaster Pro is scalable and can be used by teams of all sizes, from small startups to large enterprises.' },
              { q: 'Can I integrate TaskMaster Pro with other tools?', a: 'Yes, TaskMaster Pro offers a wide range of integrations with popular tools and platforms to fit seamlessly into your existing workflow.' },
              { q: 'Is there a free trial available?', a: 'Yes, we offer a 14-day free trial so you can experience the full power of TaskMaster Pro before making a commitment.' },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Master Your Projects?</h2>
          <p className="text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Join thousands of teams already using TaskMaster Pro to deliver exceptional results.</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="animate-bounce">Start Your Free Trial</Button>
            <Link href="/pricing" passHref>
              <Button size="lg" variant="outline" className="animate-pulse">View Pricing</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}