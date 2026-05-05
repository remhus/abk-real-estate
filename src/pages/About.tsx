import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import PageTransition from '../components/PageTransition'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const team = [
  {
    name: 'Arthur B. Klein',
    role: 'Managing Director',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnhxjXLfXPtJ78n2ym9WwnOyxAConba9P859iMC6HmX7mnmCuxxlkW49LsM0Bsnptjf2sNQ2riSgXKZOozSrZymmr_z9Le7TTRMo7xF_IevrE1sEioW41UM8ed7gW2V0tnFhnbP2XMo_qZIiTCnRwprpL2LQ17yNGQ1_lGwb5ssf874tptY5nUQHs6ZwXvjfRvQs3rmzlfw2LtuWQtTEp2VBSmLNSZdJ983NBom_ePuOhrtl_P_Bk7YlPyNwHAZXSC5y7Y9V699_w',
    offset: false,
  },
  {
    name: 'Eleanor Vance',
    role: 'Head of Acquisitions',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcCsYufpH7wPKSnc9qHFZ3F38DtrgtuCz0fflFsjTakexB0pBjeFpG-9lL1B1t1vVBWgvF3kf_08yilb7cSMyNUsj8YWBkDMxzG1qwuU4DSMKnkCJ5z0T-E9Voq4ivXDDh3ZIX2QRQ2cnT32U26Ilm-OsmD0baKeO78uFMWgYTDwDUA8eK5qUy2IVFv8xq-KHEhKym74vG7tF_6R9MKkt6SJrtQ2uKR0xg25-MtGoQQ4ODU30Dpt7lr9UQgA65BiFIA3QIxouEmlY',
    offset: true,
  },
  {
    name: 'Julian Sterling',
    role: 'Director, Private Office',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzZKb47rxn-i6NCxx6HiY2oXiADtg6gn1QOy4TwkU_LAlzO8Siuz3rDFpzTcjrfUHi3Ys-LmgVNiO3Ik_0SfkHPwD_nrKMhECZJGz2eGRRUj5vHxGVCxiFZKY9Vxh0LYFAzWLdAOmcuP-vVhQJ5fJC_tVCbqfDdpRwzuVUiV2TqAfXRQw4t3KyIIJvdTJBZGJF8H6n3eM2cQtWm3eFVmD-QO3kxK7Fz2SXuIA',
    offset: false,
  },
]

const values = [
  {
    num: '01',
    title: 'Absolute Discretion',
    desc: 'Every client relationship is governed by strict confidentiality. Our off-market portfolio is never publicly advertised.',
  },
  {
    num: '02',
    title: 'Architectural Merit',
    desc: 'We curate only properties that demonstrate exceptional design, premium materials, and flawless execution.',
  },
  {
    num: '03',
    title: 'Heritage Knowledge',
    desc: 'Decades of experience within the Principality grant our clients unparalleled access and institutional insight.',
  },
]

export default function About() {
  return (
    <PageTransition>
      <main className="pt-[80px] md:pt-[140px]">
        {/* Hero */}
        <section className="relative w-full h-[60vh] md:h-[716px] min-h-[400px] md:min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 z-0 bg-surface-container-low">
            <motion.img
              alt="Monaco Cityscape"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZSl_vJ7GYA1g3GFB__Hqc6kQv-KcT9ENtuomPjKP81PSO4c8unOuO0EKUVUazpPrE6o0FydB4y_n3l_Hc8Ie6rBfvRmq703uknTovr_HY3u9vIVv98mXu55Fia1uhtfOb2fwveqhEOVQenHJJsIkj13cf_XbK10RIbfcGZeyUOHgtH6NmsqLp17WphJRFxiGEtwnjU-MojVYYF1lby-jZTLm5wDeQWHbdDJCumhFDNJsw1CdcAzcHqIJMmKmL6B7PaN9gBRxy7gw"
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/90" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-12 text-center">
            <motion.span
              className="block font-label-caps text-label-caps text-primary-container mb-4 md:mb-stack-md uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Heritage & Vision
            </motion.span>
            <motion.h1
              className="font-display-lg text-4xl md:text-display-lg text-primary max-w-4xl mx-auto leading-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Architects of the Monaco Lifestyle.
            </motion.h1>
          </div>
        </section>

        {/* History */}
        <section className="py-16 md:py-section-padding px-4 md:px-12 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter items-center">
            <FadeIn className="lg:col-span-5 lg:col-start-2">
              <div>
                <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-6 md:mb-stack-md">
                  A Legacy Built on Discretion.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-4 md:mb-stack-md">
                  Since our inception, ABK Real Estate has operated at the intersection of architectural heritage and modern luxury. We do not merely facilitate transactions; we curate environments that define the pinnacle of Mediterranean living.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our approach is rooted in the principles of quiet luxury—where substance is felt rather than announced. We serve a discerning global clientele seeking not just a property, but a sanctuary within the Principality.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-5 lg:col-start-8 mt-8 lg:mt-0 relative">
              <div className="aspect-[3/4] bg-surface-container w-full overflow-hidden group">
                <img
                  alt="Luxury Interior Detail"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjNg3DKcSVjJbt1Np95Q2lU2Z3HMnQYzF3Jt-WtH8uw8pjCBCHpiY9DjCRPSDZS-C1xJdFg3pKoboqILRRrgRzig5ni4mxUb5kAsMHMFU5MgSqZeEiGrmDmpHb3Gx_KlCvBeAA_zX_m77UKSpd4AMQlAuC2MErDSePLtKDkG_9FvzPwDXFeAVwCVDSIdG4lFi1is0fr0z5YG7puPjW_1ybcNQ37bO2QjaTlCQ1EA0M26EUQjTv8zqaN9XfECMjBgRBdWD1Qa5ZzPo"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-section-padding px-4 md:px-12 bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <FadeIn>
              <div className="border-b border-outline-variant pb-6 mb-12 md:mb-16">
                <h2 className="font-headline-md text-2xl md:text-headline-md text-on-background">Our Principles</h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {values.map((v, i) => (
                <FadeIn key={v.num} delay={i * 0.1}>
                  <div className="flex flex-col gap-6">
                    <span className="font-label-caps text-label-caps text-outline">{v.num}</span>
                    <h3 className="font-headline-md text-xl md:text-[24px] text-on-background">{v.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-section-padding px-4 md:px-12 max-w-container-max mx-auto bg-surface-container-low md:rounded-xl">
          <FadeIn>
            <div className="text-center mb-12 md:mb-stack-lg">
              <span className="block font-label-caps text-label-caps text-primary-container mb-2 md:mb-stack-sm uppercase">
                Our People
              </span>
              <h2 className="font-headline-md text-3xl md:text-headline-md text-primary">The Principals</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-gutter">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.12}>
                <div className={`group flex flex-col items-center ${member.offset ? 'lg:-mt-12' : ''}`}>
                  <div className="w-full aspect-[3/4] overflow-hidden mb-6 md:mb-stack-md bg-surface">
                    <img
                      alt={`${member.name} portrait`}
                      className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                      src={member.image}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-headline-md text-2xl md:text-headline-md text-primary text-center">{member.name}</h3>
                  <span className="font-label-caps text-label-caps text-outline uppercase mt-2">{member.role}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-section-padding px-4 md:px-12 bg-primary">
          <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: '20+', label: 'Years in Monaco' },
              { num: '€2.4B', label: 'Properties Transacted' },
              { num: '340+', label: 'Clients Served' },
              { num: '100%', label: 'Discreet Service' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <div className="font-display-lg text-[40px] md:text-[48px] text-on-primary mb-2 leading-none">{stat.num}</div>
                  <div className="font-label-caps text-[10px] md:text-label-caps text-on-primary/60 uppercase">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <FadeIn>
          <section className="py-16 md:py-section-padding px-4 md:px-12 bg-background text-center">
            <div className="max-w-2xl mx-auto flex flex-col gap-stack-md items-center">
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-background">
                Begin Your Private Consultation
              </h2>
              <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant">
                Our team is available for confidential discussions about your real estate objectives in Monaco.
              </p>
              <Link
                to="/contact"
                className="mt-4 w-full md:w-auto py-5 px-12 border border-primary text-primary font-label-caps text-label-caps uppercase text-center hover:bg-primary hover:text-on-primary transition-colors duration-500"
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
