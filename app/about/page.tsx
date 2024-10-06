import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const teamMembers = [
    { name: 'Jane Doe', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' },
    { name: 'John Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' },
    { name: 'Emily Brown', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About TaskMaster Pro</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At TaskMaster Pro, we're on a mission to revolutionize project management. We believe that great things happen when teams work seamlessly together, and we're dedicated to providing the tools that make that possible.
          </p>
          <p className="text-lg mb-4">
            Our platform is designed to empower teams of all sizes to collaborate effectively, manage resources efficiently, and deliver projects on time, every time.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2018, TaskMaster Pro was born out of frustration with existing project management tools. Our founders, seasoned project managers themselves, set out to create a solution that addressed the real-world challenges teams face every day.
          </p>
          <p className="text-lg mb-4">
            What started as a simple task management app has grown into a comprehensive project management platform used by thousands of teams worldwide. We're proud of how far we've come, but we're even more excited about where we're going.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-lg mb-6">
            We're always looking for talented individuals to join our mission. If you're passionate about creating great software and helping teams succeed, we'd love to hear from you.
          </p>
          <Button size="lg">View Open Positions</Button>
        </section>
      </main>
    </div>
  )
}