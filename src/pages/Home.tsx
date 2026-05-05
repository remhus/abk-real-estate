import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { featuredProperties } from '../data/properties'

const heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpeRTKMQQnVoDPH1_xqAvLkZrXid-xRNHxGJk9fgWzpYIWkmm1tC-i7T_r5u44mvI1PjD9fm3xh9MVS_V_GvTBQA9tzWRDbRUnmP8eWc1Sj8er_PenlqXoTCB8NcHZOPbHEXYaMyPi3XYW7Ogt7oiL0IFImNrzYvnnI6XuuFbq03ZsXSr-yrPcQUwF5vcOcKA6BEOaFSzImPuWBD2OQevoslla44FkdJ7sJfi0ZBnOadQwzKnWCx-BETPhrrkugy84ov7gr6yK0jE'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <PageTransition>
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative h-[85vh] md:h-screen min-h-[600px] md:min-h-[800px] w-full flex items-end pb-12 md:pb-24 px-6 md:px-12 pt-24 md:pt-32">
          <div className="absolute inset-0 z-0 bg-surface-container">
            <img
              alt="Monaco Penthouse View"
              className="w-full h-full object-cover"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-tertiary/40 md:via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end gap-8 md:gap-stack-lg text-on-tertiary">
            <motion.div
              className="max-w-3xl w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display-lg text-5xl md:text-display-lg mb-6 md:mb-stack-md text-surface-container-lowest leading-tight">
                Curated Estates in the Principality.
              </h1>
              <p className="font-body-lg text-base md:text-body-lg text-surface-container-lowest/90 max-w-xl mb-8 md:mb-0">
                Experience an unparalleled portfolio of off-market properties, penthouses, and heritage villas, managed with absolute discretion.
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-auto bg-surface-container-lowest/10 backdrop-blur-md p-6 border border-surface-container-lowest/20 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <form className="flex flex-col gap-6 w-full md:w-80">
                <div className="relative border-b border-surface-container-lowest/50 pb-2">
                  <label className="block font-label-caps text-label-caps text-surface-container-lowest/70 mb-2">Location</label>
                  <input
                    className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-lg text-body-lg text-surface-container-lowest placeholder-surface-container-lowest/50 py-2 outline-none"
                    placeholder="Monte Carlo"
                    type="text"
                  />
                </div>
                <div className="relative border-b border-surface-container-lowest/50 pb-2">
                  <label className="block font-label-caps text-label-caps text-surface-container-lowest/70 mb-2">Property Type</label>
                  <input
                    className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-lg text-body-lg text-surface-container-lowest placeholder-surface-container-lowest/50 py-2 outline-none"
                    placeholder="Penthouse"
                    type="text"
                  />
                </div>
                <Link
                  to="/properties"
                  className="w-full py-5 md:py-4 border border-surface-container-lowest text-surface-container-lowest font-label-caps text-label-caps uppercase text-center hover:bg-surface-container-lowest hover:text-primary transition-colors duration-500 mt-2"
                >
                  Explore Collection
                </Link>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-section-padding px-6 md:px-12 bg-background flex flex-col items-center text-center">
          <FadeIn>
            <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-stack-md">
              <h2 className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
                Monaco's Private Office
              </h2>
              <p className="font-headline-lg text-3xl md:text-headline-lg text-on-background leading-tight">
                A distinguished approach to real estate. We guide our clientele through the world's most exclusive market with precision, heritage, and architectural insight.
              </p>
              <div className="mt-8 md:mt-stack-md w-full md:w-auto">
                <Link
                  to="/about"
                  className="block md:inline-block w-full md:w-auto py-5 md:py-4 px-8 border border-primary text-primary font-label-caps text-label-caps uppercase text-center hover:bg-primary hover:text-on-primary transition-colors duration-500"
                >
                  Discover Our Heritage
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Featured Estates Bento Grid */}
        <section className="py-16 md:py-section-padding px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-container-max mx-auto flex flex-col gap-12 md:gap-stack-lg">
            <FadeIn>
              <div className="flex justify-between items-end border-b border-outline-variant pb-6">
                <h2 className="font-headline-md text-2xl md:text-headline-md text-on-background">Featured Estates</h2>
                <Link
                  to="/properties"
                  className="font-label-caps text-label-caps text-primary uppercase flex items-center gap-2 hover:opacity-60 transition-opacity duration-500"
                >
                  View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
              {/* Main Feature Card */}
              <FadeIn delay={0.1} className="md:col-span-8">
                <Link to={`/property/${featuredProperties[0].slug}`} className="block group cursor-pointer">
                  <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden bg-surface-variant mb-6">
                    <img
                      alt={featuredProperties[0].title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      src={featuredProperties[0].image}
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:gap-stack-sm">
                    <span className="font-headline-md text-2xl md:text-headline-md text-on-background">
                      {featuredProperties[0].price}
                    </span>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-outline font-label-caps text-[10px] md:text-label-caps uppercase">
                      <span>{featuredProperties[0].location}</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant" />
                      <span>{featuredProperties[0].beds} Beds</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant" />
                      <span>{featuredProperties[0].sqm} sqm</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>

              {/* Secondary Feature Cards */}
              <div className="md:col-span-4 flex flex-col gap-8 md:gap-gutter">
                {featuredProperties.slice(1).map((prop, i) => (
                  <FadeIn key={prop.id} delay={0.2 + i * 0.1}>
                    <Link to={`/property/${prop.slug}`} className="block group cursor-pointer">
                      <div className="relative aspect-[4/3] md:aspect-[3/2] w-full overflow-hidden bg-surface-variant mb-4">
                        <img
                          alt={prop.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          src={prop.image}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-headline-md text-xl md:text-[24px] text-on-background">
                          {prop.price}
                        </span>
                        <span className="font-label-caps text-[10px] md:text-label-caps text-outline uppercase">
                          {prop.location}
                        </span>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services / Philosophy Section */}
        <section className="py-16 md:py-section-padding px-6 md:px-12 bg-background">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-section-padding items-center">
            <FadeIn>
              <div className="relative aspect-square md:aspect-[4/5] w-full bg-surface-variant overflow-hidden order-2 md:order-1">
                <img
                  alt="Architectural Detail"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKCleZL9KmorifeWARgOSC3F5iJVatWSZV76aj_PKpbv-BjmSXL3h0mVpAWVGREvwz_c_kCCBDbEliBneuPNcGqojWNKegh_EMJitDRJZBc22pkDxG4ITxqW60lLLE7izPphcT90pqWHBl-sjJEUnfMpIlv1osvlMfYIugn3oY_bB47oYBgouX4Xos_bWcZ8529yetzgxV0QbrUFv_zSBssaxdMVGm-mjdxA-qAg57UxnW4L-adXxVw1rsRDQkkuBf7pAfkHY47gU"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-8 md:gap-stack-lg max-w-xl order-1 md:order-2">
                <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-background leading-tight">
                  Architectural Integrity.
                </h2>
                <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant">
                  We believe that true luxury lies in the details. Our portfolio is meticulously curated to include only properties that demonstrate exceptional architectural merit, premium materials, and flawless execution. We do not just sell space; we represent monumental design.
                </p>
                <div className="flex flex-col gap-6 mt-4 md:mt-stack-md">
                  {['Acquisition Strategy', 'Off-Market Access', 'Relocation Services'].map((service) => (
                    <Link
                      key={service}
                      to="/about"
                      className="border-b border-outline-variant pb-6 flex justify-between items-center group cursor-pointer py-2"
                    >
                      <span className="font-label-caps text-[10px] md:text-label-caps text-on-background uppercase tracking-widest group-hover:text-primary transition-colors">
                        {service}
                      </span>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                        arrow_outward
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Band */}
        <FadeIn>
          <section className="bg-primary py-16 md:py-24 px-6 md:px-12">
            <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-headline-lg text-3xl md:text-headline-lg text-on-primary mb-3 leading-tight">
                  Begin Your Private Search
                </h3>
                <p className="font-body-lg text-base md:text-body-lg text-on-primary/70">
                  Our specialists are available for confidential consultations.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 w-full md:w-auto py-5 px-12 border border-on-primary text-on-primary font-label-caps text-label-caps uppercase text-center hover:bg-on-primary hover:text-primary transition-colors duration-500"
              >
                Contact Private Office
              </Link>
            </div>
          </section>
        </FadeIn>

      </main>
    </PageTransition>
  )
}
