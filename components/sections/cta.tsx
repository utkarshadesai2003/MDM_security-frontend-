'use client'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Users, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function CTASection() {
  const router = useRouter();
  return (
         <section className="relative py-24 overflow-hidden bg-gradient-to-br from-accent-00 via-accent-700 to-accent-800">
  <div className="absolute inset-0 bg-accent-700">
         <div className="absolute w-3 h-3 rounded-full top-10 left-10 bg-white/90 blur-sm"></div>
         <div className="absolute w-2 h-2 rounded-full top-30 right-20 bg-white/90 blur-sm"></div>
         <div className="absolute bottom-30 left-30 w-2.5 h-2.5 bg-white/90 rounded-full blur-sm"></div>
         <div className="absolute bottom-10 right-40 w-1.5 h-1.5 bg-white/90 rounded-full blur-sm"></div>
         <div className="absolute w-1 h-1 rounded-full top-1/2 left-1/4 bg-success-300"></div>
         <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-warning-300 rounded-full"></div>
       </div>
       
       <div className="absolute inset-0 bg-gradient-to-t from-accent-900/20 via-transparent to-transparent"></div>

      <motion.div
        className="absolute w-32 h-32 rounded-full top-10 left-10 bg-white/30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-24 h-24 rounded-full bottom-10 right-10 bg-white/30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="mb-16"
           >
             <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-medium text-white border-2 rounded-full bg-white/10 backdrop-blur-sm border-white/30">
               <div className="w-2 h-2 mr-2 rounded-full bg-success-400 animate-pulse"></div>
               Ready to Get Started?
             </div>
             <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
               Start Managing{' '}
               <span className="text-transparent bg-gradient-to-r from-accent-600 to-white bg-clip-text">Smarter</span>{' '}
               Today
             </h2>
             <p className="max-w-4xl mx-auto mb-8 text-xl leading-relaxed md:text-2xl text-accent-100">
               Join 10,000+ companies that trust MDM Security to monitor, manage, and optimize their workforce with enterprise-grade security.
             </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
             className="flex flex-col items-center justify-center gap-6 mb-16 sm:flex-row"
           >
             <Button 
               size="lg" 
               className="px-12 py-5 text-lg font-bold text-white transition-all duration-300 transform bg-white shadow-2xl hover:bg-accent-50 hover:shadow-3xl hover:-translate-y-1 rounded-xl"
               onClick={() => router.push('/free-trial')}
             >
               Start Free Trial
               <ArrowRight className="w-5 h-5 ml-2" />
               <div className="w-2 h-2 ml-2 rounded-full bg-accent-900 animate-pulse"></div>
             </Button>
             <Button 
               variant="outline" 
               size="lg" 
               className="px-12 py-5 text-lg font-bold text-white transition-all duration-300 transform border-2 border-white shadow-xl hover:bg-white hover:text-accent-700 hover:shadow-2xl hover:-translate-y-1 rounded-xl"
               onClick={() => router.push('/demo')}
             >
               Schedule Demo
             </Button>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
             className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3"
           >
             <div className="p-6 text-center transition-all duration-300 border rounded-2xl bg-white/30 backdrop-blur-sm border-white/90 hover:bg-white/50">
               <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-r from-success-400 to-success-500">
                 <Shield className="w-10 h-10 text-white" />
               </div>
               <div className="mb-2 text-3xl font-bold text-white">99.9%</div>
               <div className="font-medium text-accent-100">Uptime Guarantee</div>
             </div>
             <div className="p-6 text-center transition-all duration-300 border rounded-2xl bg-white/30 backdrop-blur-sm border-white/90 hover:bg-white/50">
               <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-r from-accent-400 to-accent-500">
                 <Users className="w-10 h-10 text-white" />
               </div>
               <div className="mb-2 text-3xl font-bold text-white">10,000+</div>
               <div className="font-medium text-accent-100">Active Companies</div>
             </div>
             <div className="p-6 text-center transition-all duration-300 border rounded-2xl bg-white/30 backdrop-blur-sm border-white/90 hover:bg-white/50">
               <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-r from-warning-400 to-warning-500">
                 <Clock className="w-10 h-10 text-white" />
               </div>
               <div className="mb-2 text-3xl font-bold text-white">15min</div>
               <div className="font-medium text-accent-100">Setup Time</div>
             </div>
           </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-sm text-accent-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
