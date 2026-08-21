'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Play, Shield, Users, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const router = useRouter();
  const handleDemoClick = () => {
    router.push('/demo');
  };
  const handleFreeTrialClick = () => {
    router.push('/free-trial');
  };
  return (
         <section className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white/90">
         <div className="absolute inset-0 bg-white/90">
           <div className="absolute w-3 h-3 rounded-full top-20 left-20 bg-accent-400 blur-sm"></div>
           <div className="absolute w-2 h-2 rounded-full top-40 right-40 bg-primary-300 blur-sm"></div>
           <div className="absolute bottom-20 left-40 w-2.5 h-2.5 bg-accent-300 rounded-full blur-sm"></div>
           <div className="absolute bottom-40 right-20 w-1.5 h-1.5 bg-primary-300 rounded-full blur-sm"></div>
           <div className="absolute w-1 h-1 rounded-full top-1/3 left-1/4 bg-success-400"></div>
           <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-warning-400 rounded-full"></div>
         </div>
         
         <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
       </div>

      <motion.div
        className="absolute w-20 h-20 rounded-full top-20 left-10 bg-accent-100 bg-white/90"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-16 h-16 rounded-full top-40 right-20 bg-primary-200 bg-white/90"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-12 h-12 rounded-full bottom-40 left-20 bg-accent-200 bg-white/90"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold border rounded-full shadow-lg bg-gradient-to-r from-accent-100 to-accent-200 text-accent-800 border-accent-200/50"
         >
           <Shield className="w-4 h-4 mr-2 text-accent-600" />
           Trusted by 10,000+ companies worldwide
           <div className="w-2 h-2 ml-2 rounded-full bg-success-500 animate-pulse"></div>
         </motion.div>

            
         <motion.h1
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-primary-900"
         >
           The Future of{' '}
           <span className="text-transparent bg-gradient-to-r from-accent-600 via-accent-700 to-accent-800 bg-clip-text drop-shadow-sm">
             Employee Monitoring
           </span>{' '}
           & HR Management
         </motion.h1>

       
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12 text-xl leading-relaxed md:text-2xl text-primary-600"
        >
          Track, Manage, and Secure  All in One Platform. 
          Streamline your workforce with intelligent monitoring and comprehensive HR tools.
        </motion.p>

               
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="flex flex-col items-center justify-center gap-6 mb-16 sm:flex-row"
         >
           <Button 
             size="lg" 
             className="px-10 py-5 text-lg transition-all duration-300 transform shadow-xl bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 hover:shadow-2xl hover:-translate-y-1"
             onClick={handleFreeTrialClick}
           >
             Start Free Trial
             <div className="w-2 h-2 ml-2 bg-white rounded-full animate-pulse"></div>
           </Button>
           <Button 
             variant="outline" 
             size="lg" 
             className="px-10 py-5 text-lg transition-all duration-300 transform border-2 shadow-lg border-primary-300 hover:border-accent-500 hover:bg-accent-50/50 hover:shadow-xl hover:-translate-y-1"
             onClick={handleDemoClick}
           >
             <Play className="w-5 h-5 mr-2 text-accent-600" />
             Watch Demo
           </Button>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-3"
         >
           <div className="p-6 text-center transition-all duration-300 border shadow-lg rounded-2xl bg-white/60 backdrop-blur-sm border-white/20 hover:shadow-xl hover:-translate-y-1">
             <div className="mb-2 text-4xl font-bold text-transparent text-primary-900 bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text">10,000+</div>
             <div className="font-medium text-primary-600">Active Companies</div>
           </div>
           <div className="p-6 text-center transition-all duration-300 border shadow-lg rounded-2xl bg-white/60 backdrop-blur-sm border-white/20 hover:shadow-xl hover:-translate-y-1">
             <div className="mb-2 text-4xl font-bold text-transparent text-primary-900 bg-gradient-to-r from-success-600 to-success-700 bg-clip-text">500K+</div>
             <div className="font-medium text-primary-600">Employees Monitored</div>
           </div>
           <div className="p-6 text-center transition-all duration-300 border shadow-lg rounded-2xl bg-white/60 backdrop-blur-sm border-white/20 hover:shadow-xl hover:-translate-y-1">
             <div className="mb-2 text-4xl font-bold text-transparent text-primary-900 bg-gradient-to-r from-warning-600 to-warning-700 bg-clip-text">99.9%</div>
             <div className="font-medium text-primary-600">Uptime Guarantee</div>
           </div>
         </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-primary-400"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
