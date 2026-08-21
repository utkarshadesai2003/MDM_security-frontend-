'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { 

  Camera, 
  BarChart3, 
  Calendar,
 
} from 'lucide-react'

const features = [

  {
    icon: Camera,
    title: 'Screenshots Feature',
    description: 'Capture screenshots on-demand or set automated intervals for comprehensive activity monitoring.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Calendar,
    title: 'Time Of Management Feature',
    description: 'Streamlined leave requests, approval workflows, and calendar integration for better planning.',
    color: 'from-teal-500 to-teal-600'
  },
 
  {
    icon: BarChart3,
    title: 'Notification Feature',
    description: 'Comming soon...',
    color: 'from-orange-500 to-orange-600'
  }
  
  
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20">
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
            Core Features
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-primary-900">
            Powerful Features for{' '}
            <span className="text-transparent bg-gradient-to-r from-accent-600 via-accent-700 to-accent-800 bg-clip-text">
              Modern Teams
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-primary-600">
            Everything you need to monitor, manage, and optimize your workforce in one comprehensive platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-w-[280px] max-w-[350px]"
            >
              <Card className="h-full p-8 text-center transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-primary-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary-600">
                  {feature.description}
                </p>
                <div className="w-12 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent-400 to-accent-600"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-8 border bg-gradient-to-r from-accent-50 to-primary-50 rounded-3xl border-accent-200/50">
            <p className="mb-6 text-xl font-medium text-primary-700">
              Ready to transform your workforce management?
            </p>
            <Link href="/All_features" passHref legacyBehavior>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-lg font-bold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl hover:shadow-xl"
              >
                Explore All Features
                <div className="w-2 h-2 ml-2 bg-white rounded-full animate-pulse"></div>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
