'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  UserPlus, 
  Download, 
  Monitor, 
  BarChart3,
  ArrowRight
} from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account in minutes with our simple onboarding process.',
    color: 'from-blue-500 to-blue-600',
    step: '01'
  },
  {
    icon: Download,
    title: 'Install App',
    description: 'Deploy our lightweight monitoring app across your organization seamlessly.',
    color: 'from-green-500 to-green-600',
    step: '02'
  },
  {
    icon: Monitor,
    title: 'Monitor & Manage',
    description: 'Start tracking productivity, managing time off, and monitoring activities in real-time.',
    color: 'from-purple-500 to-purple-600',
    step: '03'
  },
  {
    icon: BarChart3,
    title: 'View Reports',
    description: 'Access comprehensive analytics and insights to optimize your workforce performance.',
    color: 'from-orange-500 to-orange-600',
    step: '04'
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-primary-50/90 to-accent-50/90">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent-100 text-accent-700">
            <div className="w-2 h-2 mr-2 rounded-full bg-accent-500 animate-pulse"></div>
            Simple Setup
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-primary-900">
            Get Started in{' '}
            <span className="text-transparent bg-gradient-to-r from-accent-600 via-accent-700 to-accent-800 bg-clip-text">
              4 Simple Steps
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-primary-600">
            From setup to insights, our streamlined process gets you up and running in no time with enterprise-grade security.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 z-0 hidden h-1 transform -translate-y-1/2 rounded-full lg:block top-1/2 bg-gradient-to-r from-accent-500 via-accent-300 to-accent-200" />
          
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full p-8 text-center transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl rounded-2xl hover-lift">
                  <div className="absolute transform -translate-x-1/2 -top-6 left-1/2">
                    <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-accent-600 to-accent-700">
                      {step.step}
                    </div>
                  </div>

                  <div className={`w-24 h-24 mx-auto mb-8 mt-6 rounded-3xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-primary-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary-600">
                    {step.description}
                  </p>
                  
                  <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent-800 to-accent-900"></div>
                </Card>

                {index < steps.length - 1 && (
                  <div className="absolute z-20 hidden transform -translate-y-1/2 lg:block top-1/2 -right-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-white border-2 rounded-full shadow-lg border-accent-200">
                      <ArrowRight className="w-6 h-6 text-accent-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl p-10 mx-auto border shadow-xl bg-gradient-to-r from-accent-50 to-primary-50 rounded-3xl border-accent-200/50">
            <h3 className="mb-6 text-3xl font-bold text-primary-900">
              Ready to Get Started?
            </h3>
            <p className="mb-8 text-xl leading-relaxed text-primary-600">
              Join thousands of companies already using MDM Security to transform their workforce management with enterprise-grade security.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
                         onClick={() => window.location.href = '/free-trial'}

              className="px-12 py-5 text-lg font-bold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl hover:shadow-xl"
            >

              Start Your Free Trial
              <div className="w-2 h-2 ml-2 bg-white rounded-full animate-pulse " ></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
