'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Scale,
  CheckCircle
} from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliance, and GDPR-ready data protection ensure your information stays secure.',
    features: ['256-bit encryption', 'SOC 2 Type II certified', 'GDPR compliant', 'Regular security audits']
  },
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    description: 'Get up and running in under 15 minutes with our intuitive setup process and automated deployment.',
    features: ['15-minute setup', 'One-click deployment', 'Auto-discovery', 'Zero configuration']
  },
  {
    icon: TrendingUp,
    title: 'Boost Productivity',
    description: 'Increase team productivity by 40% with intelligent insights and automated workflow optimization.',
    features: ['40% productivity boost', 'Smart analytics', 'Automated workflows', 'Performance insights']
  },
  {
    icon: Scale,
    title: 'Scalable Solution',
    description: 'Grow from 10 to 10,000 employees seamlessly with our enterprise-grade infrastructure.',
    features: ['Unlimited scaling', 'Multi-tenant architecture', 'Global deployment', '99.9% uptime']
  }
]

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-primary-900">
            Why Choose{' '}
            <span className="text-transparent bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text">
              MDM Security?
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-primary-600">
            Built for modern businesses that demand security, speed, and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 border-0 bg-gradient-to-br from-white to-primary-50 hover:shadow-xl">
                <div className="flex items-start space-x-6">
                  <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-primary-900">
                      {benefit.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-primary-600">
                      {benefit.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-primary-600">
                          <CheckCircle className="flex-shrink-0 w-4 h-4 mr-2 text-accent-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-8 text-white bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl md:p-12"
        >
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold">99.9%</div>
              <div className="text-accent-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">24/7</div>
              <div className="text-accent-100">Support Available</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">15min</div>
              <div className="text-accent-100">Setup Time</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">40%</div>
              <div className="text-accent-100">Productivity Boost</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-primary-600">
            Join thousands of companies that trust MDM Security
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/free-trial'}
            className="px-8 py-4 text-lg font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-accent-600 to-accent-700 hover:shadow-lg"
          >
            Start Your Free Trial Today
            
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
