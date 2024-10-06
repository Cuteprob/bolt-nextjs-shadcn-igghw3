import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskMaster Pro - Streamline Your Project Management',
  description: 'TaskMaster Pro is the ultimate project management solution for teams of all sizes. Collaborate, plan, and deliver projects on time with our intuitive tools and powerful features.',
  keywords: 'project management, task management, team collaboration, productivity tools, workflow optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">TaskMaster Pro</Link>
              <div className="space-x-4 hidden md:block">
                <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</Link>
                <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                <Button variant="default">Sign Up</Button>
              </div>
              <Button variant="outline" className="md:hidden">Menu</Button>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">TaskMaster Pro</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Empowering teams to achieve more, together.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Github size={20} /></a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><Link href="/features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">Features</Link></li>
                    <li><Link href="/pricing" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">Pricing</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">Integrations</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">API</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">Documentation</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">Guides</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">Blog</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500">Support</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Stay updated with our latest features and releases.</p>
                  <form className="flex">
                    <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                    <Button type="submit" className="rounded-l-none">Subscribe</Button>
                  </form>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                  © {new Date().getFullYear()} TaskMaster Pro. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}