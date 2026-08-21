'use client'
import { motion } from 'framer-motion'
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,   // :white_check_mark: Corrected import
  Facebook,
  Instagram
} from 'lucide-react'
const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
    { name: 'API', href: '#api' },
    { name: 'Integrations', href: '#integrations' }
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
    { name: 'Partners', href: '#partners' }
  ],
  support: [
    { name: 'Help Center', href: '#help' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Contact', href: '#contact' },
    { name: 'Status', href: '#status' },
    { name: 'Community', href: '#community' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' },
    { name: 'Security', href: '#security' }
  ]
}
const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#twitter' },
  { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
  { name: 'Facebook', icon: Facebook, href: '#facebook' },
  { name: 'Instagram', icon: Instagram, href: '#instagram' }
]
export default function Footer() {   // :white_check_mark: Default export
  return (
    <footer className="text-white bg-primary-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Intro */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-6 space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent-600 to-accent-700">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MDM Security</span>
            </motion.div>
            <p className="mb-6 leading-relaxed text-primary-300">
              The future of employee monitoring and HR management.
              Track, manage, and secure your workforce with our comprehensive platform.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-primary-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@mdmsecurity.com</span>
              </div>
              <div className="flex items-center text-primary-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-primary-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 text-primary-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 text-primary-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 text-primary-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 text-primary-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-primary-800"
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-primary-400 md:mb-0">
              © 2024 MDM Security. All rights reserved.
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-full bg-primary-800 hover:bg-accent-600"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}