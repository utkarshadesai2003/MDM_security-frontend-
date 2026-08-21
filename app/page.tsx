import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { WhyChooseSection } from '@/components/sections/why-choose'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { PricingSection } from '@/components/sections/pricing'
import { CTASection } from '@/components/sections/cta'
import Footer from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { ScrollProgress } from '@/components/ui/scroll-progress'


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-br from-white via-primary-50/90 to-accent-50/90">
  <div className="absolute inset-0 bg-white/90">
          <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-accent-200 blur-3xl"></div>
          <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-primary-200 blur-3xl"></div>
          <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-success-200 blur-2xl"></div>
        </div>
      </div>

      <main className="relative z-10">
        <Header />
        
        <section className="relative">
          <HeroSection />
        </section>

        <div className="space-y-32">
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/90 to-transparent"></div>
            <div className="relative">
              <FeaturesSection />
            </div>
          </section>

          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-50/90 to-transparent"></div>
            <div className="relative">
              <HowItWorksSection />
            </div>
          </section>

          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/90 to-transparent"></div>
            <div className="relative">
              <WhyChooseSection />
            </div>
          </section>

          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/90 to-transparent"></div>
            <div className="relative">
              <TestimonialsSection />
            </div>
          </section>

          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-50/90 to-transparent"></div>
            <div className="relative">
              <PricingSection />
            </div>
          </section>
        </div>

        <section className="relative mt-32">
          <CTASection />
        </section>

        <section className="relative">
          <Footer />
        </section>
      </main>

      <ScrollProgress />
    </div>
  )
}
