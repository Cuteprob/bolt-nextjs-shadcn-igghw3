import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, Users, Calendar, Zap, Shield, Headphones } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    { title: 'Advanced Analytics', icon: BarChart2, description: 'Gain deep insights into your projects with our powerful analytics tools.' },
    { title: 'Team Collaboration', icon: Users, description: 'Foster seamless teamwork with real-time communication and file sharing.' },
    { title: 'Smart Scheduling', icon: Calendar, description: 'Optimize your team\'s time with AI-powered scheduling and resource allocation.' },
    { title: 'Automation', icon: Zap, description: 'Streamline workflows with customizable automation rules and triggers.' },
    { title: 'Enterprise-grade Security', icon: Shield, description: 'Keep your data safe with our robust security measures and compliance.' },
    { title: '24/7 Support', icon: Headphones, description: 'Get help anytime with our round-the-clock customer support team.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">TaskMaster Pro Features</h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Discover the powerful features that make TaskMaster Pro the ultimate project management solution.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Ready to boost your productivity?</h2>
          <Button size="lg">Start Your Free Trial</Button>
        </div>
      </main>
    </div>
  )
}