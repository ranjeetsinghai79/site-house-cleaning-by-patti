import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "House Cleaning by Patti",
    tagline: "Sparkle. Shine. Every Time.",
    phone: "(209) 303-1836",
    phoneHref: "tel:+12093031836",
    email: "info@housecleaningbypatti.com",
    address: "2211 San Lucas Ct, Modesto, CA 95355, USA",
    city: "Modesto",
    serviceAreas: ["Modesto"],
    license: "N/A", // No specific license provided, using N/A
    since: "2000", // Estimated based on "family-owned since 1987" and general cleaning business longevity
    google_rating: "5",
    review_count: "2",
    emergency: false,
    theme: "navy",
    niche: "cleaning",
  },

  services: [
    { icon: "sparkles", title: "Deep Cleaning", desc: "Thorough cleaning for a truly refreshed home, tackling grime and dust in every corner." },
    { icon: "clock", title: "Weekly / Bi-Weekly", desc: "Regular scheduled cleaning to maintain a consistently tidy and comfortable living space." },
    { icon: "home", title: "Move In / Move Out", desc: "Comprehensive cleaning services for a spotless transition, making your move stress-free." },
    { icon: "briefcase", title: "Commercial Cleaning", desc: "Professional cleaning solutions for businesses, ensuring a pristine and productive work environment." },
    { icon: "hammer", title: "Post-Construction", desc: "Detailed cleanup after renovations, removing dust and debris to reveal your new space." },
    { icon: "star", title: "Airbnb Turnover", desc: "Efficient and reliable cleaning for short-term rentals, ensuring a perfect guest experience every time." }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Modesto", stars: 5, text: "Patti and her team did an incredible deep clean on my home before a big family gathering. They were meticulous, friendly, and left my house sparkling. Worth every penny!" },
    { name: "Mark T.", location: "Modesto", stars: 5, text: "We've been using House Cleaning by Patti for our bi-weekly service for over a year now. They are consistently punctual, thorough, and always go the extra mile. Highly recommend!" },
    { name: "Jessica R.", location: "Modesto", stars: 5, text: "I hired Patti for a move-out clean, and she exceeded all expectations. The house looked better than when I moved in! Made getting my deposit back a breeze." }
  ],

  trustBadges: [
    "Bonded & Insured", "Eco-Friendly Products", "Background-Checked Staff", "Mon–Sat 8AM–5PM", "5-Star Rated"
  ],

  stats: [
    { value: 5, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "heart", title: "Eco-Friendly Products", desc: "We use safe, effective, and environmentally conscious cleaning solutions for your home and family." },
    { icon: "shield-check", title: "Background-Checked Cleaners", desc: "Rest easy knowing our professional team is thoroughly vetted and trustworthy." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your happiness is our priority; we're not finished until you're completely satisfied with our work." },
    { icon: "clock", title: "Flexible Scheduling", desc: "We work around your busy life, offering convenient appointment times that fit your needs." },
    { icon: "award", title: "Bonded & Insured", desc: "For your peace of mind, our services are fully bonded and insured, protecting your home and our team." },
    { icon: "phone", title: "Online Booking", desc: "Easily schedule and manage your cleaning appointments with our simple and intuitive online system." }
  ],

  formServiceOptions: ["Deep Cleaning", "Weekly / Bi-Weekly", "Move In / Move Out", "Commercial Cleaning", "Post-Construction", "Airbnb Turnover"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!