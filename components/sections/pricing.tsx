'use client'

import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '14 days',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 employees',
      'Basic time tracking',
      'Standard reports',
      'Email support',
      'Mobile app access'
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per employee/month',
    description: 'Best for growing businesses',
    features: [
      'Unlimited employees',
      'Advanced monitoring',
      'Real-time screenshots',
      'Custom reports',
      'Priority support',
      'API access',
      'Integrations',
      'Advanced analytics'
    ],
    popular: true,
    color: 'from-accent-600 to-accent-700'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    description: 'For large organizations with custom needs',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'On-premise option',
      'Custom branding',
      'Advanced security',
      'Compliance tools'
    ],
    popular: false,
    color: 'from-purple-600 to-purple-700'
  }
]

export function PricingSection() {
  const router = useRouter();
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white via-primary-50/90 to-accent-50/90">
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
            Pricing Plans
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-primary-900">
            Simple,{' '}
            <span className="text-transparent bg-gradient-to-r from-accent-600 via-accent-700 to-accent-800 bg-clip-text">
              Transparent Pricing
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-primary-600">
            Choose the perfect plan for your team. Start free, scale as you grow with enterprise-grade features.
          </p>
        </motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute z-10 transform -translate-x-1/2 -top-6 left-1/2">
                  <div className="flex items-center px-6 py-3 text-sm font-bold text-white rounded-full shadow-xl bg-gradient-to-r from-accent-600 to-accent-700">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full relative overflow-hidden rounded-2xl ${
                plan.popular 
                  ? 'border-2 border-accent-200 shadow-2xl scale-105 bg-gradient-to-br from-white to-accent-50/90' 
                  : 'border border-primary-200 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-600 to-accent-700" />
                )}
                
                <div className="p-8">
                  <div className="mb-8 text-center">
                    <h3 className="mb-2 text-2xl font-bold text-primary-900">
                      {plan.name}
                    </h3>
                    <p className="mb-6 text-primary-600">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-primary-900">
                        {plan.price}
                      </div>
                      <div className="text-primary-600">
                        {plan.period}
                      </div>
                    </div>
                  </div>

                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-primary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800'
                        : 'bg-primary-100 text-white hover:bg-primary-200'
                    }`}
                    size="lg"
                    onClick={plan.name === 'Free Trial' ? () => router.push('/free-trial') : undefined}
                  >
                    {plan.name === 'Free Trial' ? 'Start Free Trial' :
                     plan.name === 'Pro' ? 'Get Started' : 'Contact Sales'}
                  </Button>
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
          className="mt-16 text-center"
        >
          <div className="max-w-2xl p-8 mx-auto bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-primary-900">
              Need a Custom Solution?
            </h3>
            <p className="mb-6 text-primary-600">
              Our enterprise team can create a tailored plan that fits your specific requirements.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="outline" size="lg"   onClick={() => window.location.href = '/demo'} className="px-12 py-5 text-lg font-bold transition-all duration-300 transform border-2 text-primary-900 border-primary-200 hover:bg-primary-100 hover:text-primary-800 hover:shadow-lg rounded-xl"
>
                
                Schedule Demo
              </Button>
              <Button size="lg">
                Contact Sales
              </Button>
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
          <p className="mb-4 text-primary-600">
            Questions about pricing?
          </p>
          <Button variant="ghost" className="text-accent-600 hover:text-accent-700">
            View FAQ →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
