'use client'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
  Clock,
  Camera,
  Users,
  Shield,
  BarChart3,
  Calendar,
  Activity,
  Database
} from 'lucide-react'
const features = [
  {
    icon: Clock,
    title: 'Check-in/Check-out',
    description: 'Automated time tracking with geolocation verification and customizable work schedules.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Camera,
    title: 'Instant & Scheduled Screenshots',
    description: 'Capture screenshots on-demand or set automated intervals for comprehensive activity monitoring.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Employee Dashboards',
    description: 'Personalized dashboards showing productivity metrics, time logs, and performance insights.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Admin Panel',
    description: 'Centralized control center for managing teams, setting policies, and monitoring security.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive reports and analytics to optimize productivity and identify improvement areas.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Calendar,
    title: 'Time Off Management',
    description: 'Streamlined leave requests, approval workflows, and calendar integration for better planning.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Live activity tracking with instant alerts and notifications for immediate response.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Database,
    title: 'Secure Storage',
    description: 'Enterprise-grade security with encrypted data storage and compliance with industry standards.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Calendar,
    title: 'Notification Feature',
    description: 'Coming soon...',
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
    <section id="features" className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            <div className="w-2 h-2 mr-2 bg-blue-500 rounded-full animate-pulse"></div>
            Core Features
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Powerful Features for{' '}
            <span className="text-transparent bg-gradient-to-r from-[#016795] via- to-[#016795] bg-clip-text">
              Modern Teams
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Everything you need to monitor, manage, and optimize your workforce in one comprehensive platform.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full p-8 text-center transition-all duration-300 bg-white border-0 shadow-lg hover:shadow-2xl backdrop-blur-sm rounded-2xl">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
                <div className="w-12 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
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
        </motion.div>
      </div>
    </section>
  )
}