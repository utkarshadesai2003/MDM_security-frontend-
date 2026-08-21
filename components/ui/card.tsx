import React from 'react'
import { cn } from '@/lib/utils'
import { motion, MotionProps } from 'framer-motion'

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'glass'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-primary-200 rounded-xl shadow-sm",
      elevated: "bg-white border border-primary-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300",
      glass: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg"
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "p-6",
          variants[variant],
          className
        )}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
