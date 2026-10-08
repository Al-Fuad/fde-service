import CTASection from '../components/CTASection'
import { cta } from '../data/site'
import ContactSection from '../sections/ContactSection'
import HeroSection from '../sections/HeroSection'
import PortfolioSection from '../sections/PortfolioSection'
import ProcessSection from '../sections/ProcessSection'
import ServicesSection from '../sections/ServicesSection'
import TestimonialsSection from '../sections/TestimonialsSection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection {...cta} />
      <ContactSection />
    </>
  )
}
