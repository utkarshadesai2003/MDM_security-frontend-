'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-primary-200/50" 
          : "bg-white/10 backdrop-blur-sm border-b border-white/20"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center w-10 h-10 shadow-lg bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-primary-900 to-accent-700 bg-clip-text">MDM Security</span>
          </motion.div>

          <nav className="items-center hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-medium transition-colors duration-200 text-primary-700 hover:text-accent-600"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="items-center hidden space-x-4 md:flex">
            <Link href="/Login" passHref legacyBehavior>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-primary-700 hover:text-accent-600 hover:bg-accent-50/50"
              >
                Login
              </Button>
            </Link>
            
            <Link href="/free-trial" passHref legacyBehavior>
              <Button 
                size="sm"
                className="shadow-lg bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 hover:shadow-xl"
              >
                Start Free Trial
              </Button>
            </Link>
             <Link href="" passHref legacyBehavior>
              <Button 
                size="sm"
                className="shadow-lg bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 hover:shadow-xl"
              >
Download Desktop App           </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="bg-white border-t md:hidden border-primary-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 font-medium transition-colors duration-200 text-primary-700 hover:text-accent-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                  <Link href="/Login" passHref legacyBehavior>
                    <Button variant="ghost" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/free-trial" passHref legacyBehavior>
                    <Button className="w-full">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="" passHref legacyBehavior>
                    <Button className="w-full">
              Download Desktop App 
                    </Button>
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
