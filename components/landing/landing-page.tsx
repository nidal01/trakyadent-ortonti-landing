"use client"

import { StickyHeader } from "./top-bar"
import { HeroSlider } from "./hero-slider"
import { ContactForm } from "./contact-form"
import { Treatments } from "./treatments"
import { InlineCTA } from "./inline-cta"
import { Clinics } from "./clinics"
import { WhyTrakyadent } from "./why-trakyadent"
import { DoctorTeam } from "./doctor-team"
import { FAQ } from "./faq"
import { CTABanner } from "./cta-banner"
import { Footer } from "./footer"
import { StickyButtons } from "./sticky-buttons"


export function LandingPage() {
  return (
    <>
      <StickyHeader />
      <main className="pb-16 lg:pb-0">
        <HeroSlider />
        <ContactForm />
        <Treatments />
        <Clinics />
        <WhyTrakyadent />
        <InlineCTA
          title="Randevunuzu Oluşturun"
          subtitle="36 yıllık deneyim ve uzman ortodonti ekibimizle, Maslak kliniğimizde size özel tedavi planınızı birlikte oluşturalım."
          image="/images/smile-design.webp"
          imageAlt="Trakyadent Maslak Ortodonti Kliniği"
          reversed
        />
        <DoctorTeam />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyButtons />
    </>
  )
}
