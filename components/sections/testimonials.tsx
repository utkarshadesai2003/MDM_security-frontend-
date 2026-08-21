'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'HR Director',
    company: 'TechCorp Inc.',
    avatar: '/api/placeholder/60/60',
    content: 'MDM Security has revolutionized how we manage our remote workforce. The productivity insights are invaluable, and the setup was incredibly smooth.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    company: 'Global Solutions',
    avatar: '/api/placeholder/60/60',
    content: 'The real-time monitoring capabilities and comprehensive reporting have given us unprecedented visibility into our team performance. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO',
    company: 'StartupXYZ',
    avatar: '/api/placeholder/60/60',
    content: 'As a growing company, we needed a solution that could scale with us. MDM Security has exceeded our expectations in every way.',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'IT Director',
    company: 'Enterprise Corp',
    avatar: '/api/placeholder/60/60',
    content: 'The security features and compliance capabilities are top-notch. We feel confident knowing our data is protected with enterprise-grade security.',
    rating: 5
  },
  {
    name: 'Lisa Wang',
    role: 'VP of People',
    company: 'Innovation Labs',
    avatar: '/api/placeholder/60/60',
    content: 'The employee dashboards and time-off management features have streamlined our HR processes significantly. Our team loves the user-friendly interface.',
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-primary-900">
            Trusted by{' '}
            <span className="text-transparent bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text">
              Industry Leaders
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-primary-600">
            See what our customers have to say about their experience with MDM Security.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-white border-0 shadow-xl md:p-12">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-accent-600 to-accent-700">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="mb-8 text-xl italic leading-relaxed md:text-2xl text-primary-700">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent-600 to-accent-700">
                      <span className="text-lg font-bold text-white">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-primary-900">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-primary-600">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute flex items-center justify-center w-12 h-12 transition-all duration-200 transform -translate-y-1/2 bg-white rounded-full shadow-lg left-4 top-1/2 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-primary-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute flex items-center justify-center w-12 h-12 transition-all duration-200 transform -translate-y-1/2 bg-white rounded-full shadow-lg right-4 top-1/2 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-primary-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-accent-600 w-8'
                    : 'bg-primary-300 hover:bg-primary-400'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-primary-900">4.9/5</div>
              <div className="text-primary-600">Average Rating</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary-900">98%</div>
              <div className="text-primary-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary-900">10K+</div>
              <div className="text-primary-600">Happy Customers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
