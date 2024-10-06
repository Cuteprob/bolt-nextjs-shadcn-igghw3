import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: '$19',
      description: 'Perfect for small teams and startups',
      features: ['Up to 10 users', '5 projects', 'Basic analytics', 'Email support'],
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'Ideal for growing businesses',
      features: ['Up to 50 users', 'Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom integrations'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: ['Unlimited users', 'Unlimited projects', 'Advanced analytics & reporting', '24/7 dedicated support', 'Custom development', 'On-premise deployment option'],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Simple, Transparent Pricing</h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Choose the plan that fits your team's needs. All plans come with a 14-day free trial.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-lg">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal">{plan.price !== 'Custom' && '/month'}</span></p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  {index === 2 ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Need a custom plan?</h2>
          <p className="mb-4">Contact our sales team for a tailored solution that meets your specific requirements.</p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </main>
    </div>
  )
}