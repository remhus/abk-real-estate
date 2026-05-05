import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { propertyDetails, properties } from '../data/properties'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const property = slug === propertyDetails.slug
    ? propertyDetails
    : (() => {
        const p = properties.find((pr) => pr.slug === slug)
        if (!p) return propertyDetails
        return {
          ...propertyDetails,
          ...p,
          title: p.title,
          price: p.price,
          location: p.location,
          image: p.image,
          imageAlt: p.imageAlt,
        }
      })()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <main className="pt-[80px] md:pt-[100px]">
        {/* Hero */}
        <section className="w-full h-[500px] md:h-[819px] relative mb-12 md:mb-section-padding">
          <motion.img
            alt={property.imageAlt}
            className="w-full h-full object-cover"
            src={property.image}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background via-background/80 to-transparent pt-24 pb-6 px-6 md:pt-32 md:pb-12 md:px-24">
            <div className="max-w-container-max mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-stack-lg">
              <motion.div
                className="flex flex-col gap-2 md:gap-stack-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">
                  {property.location}
                </span>
                <h1 className="font-display-lg text-4xl md:text-display-lg text-on-background">{property.title}</h1>
              </motion.div>
              <motion.div
                className="flex flex-col gap-1 md:gap-stack-sm md:text-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-headline-md text-2xl md:text-headline-md text-primary">{property.price}</span>
                {'subtitle' in property && (
                  <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">
                    {(property as typeof propertyDetails).subtitle}
                  </span>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Description & Specs */}
        <section className="max-w-container-max mx-auto px-6 md:px-24 mb-12 md:mb-section-padding grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter">
          <FadeIn className="lg:col-span-7">
            <div className="flex flex-col gap-4 md:gap-stack-md">
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-background">A Masterpiece of Modernism</h2>
              {'description' in property && (property as typeof propertyDetails).description.map((para, i) => (
                <p key={i} className={`font-${i === 0 ? 'body-lg' : 'body-md'} ${i === 0 ? 'text-base md:text-body-lg' : 'text-sm md:text-body-md'} text-on-surface-variant leading-relaxed`}>
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <div className="bg-surface-container-low p-6 md:p-12 flex flex-col gap-4 md:gap-stack-md border border-outline-variant/30">
              <h3 className="font-label-caps text-[10px] md:text-label-caps text-on-background uppercase border-b border-outline-variant pb-4">
                Property Details
              </h3>
              <ul className="flex flex-col gap-4 md:gap-6">
                {[
                  { label: 'Interior Space', value: `${property.sqm} m²` },
                  { label: 'Terraces', value: 'terraces' in property ? `${(property as typeof propertyDetails).terraces} m²` : '—' },
                  { label: 'Bedrooms', value: property.beds ?? '—' },
                  { label: 'Bathrooms', value: 'baths' in property ? (property as typeof propertyDetails).baths : '—' },
                  { label: 'Parking', value: 'parking' in property ? (property as typeof propertyDetails).parking : '—' },
                ].map(({ label, value }) => (
                  <li key={label} className="flex justify-between items-center">
                    <span className="font-body-md text-sm md:text-body-md text-on-surface-variant">{label}</span>
                    <span className="font-headline-md text-lg md:text-xl text-on-background">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* Gallery */}
        {'gallery' in property && (
          <FadeIn>
            <section className="mb-12 md:mb-section-padding w-full overflow-hidden pl-6 md:pl-24">
              <div className="flex gap-4 md:gap-gutter overflow-x-auto hide-scrollbar pb-8 pr-6 md:pr-24 cursor-ew-resize">
                {(property as typeof propertyDetails).gallery.map((img, i) => {
                  const widths = ['w-[85vw] md:w-[60vw]', 'w-[75vw] md:w-[40vw]', 'w-[80vw] md:w-[50vw]', 'w-[75vw] md:w-[40vw]']
                  const w = widths[i % widths.length]
                  return (
                    <motion.div
                      key={i}
                      className={`flex-none ${w} h-[350px] md:h-[614px] relative group`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <img
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                        src={img.src}
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-label-caps text-label-caps text-on-background uppercase text-[10px]">
                          {img.label}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              <div className="flex justify-end pr-6 md:pr-24 mt-2 md:mt-4">
                <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant flex items-center gap-2 uppercase tracking-widest">
                  Scroll to explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </section>
          </FadeIn>
        )}

        {/* Amenities */}
        {'amenities' in property && (
          <FadeIn>
            <section className="max-w-container-max mx-auto px-6 md:px-24 mb-12 md:mb-section-padding">
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-background mb-6 md:mb-stack-lg">Amenities & Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-outline-variant/30 border border-outline-variant/30">
                {(property as typeof propertyDetails).amenities.map((a) => (
                  <div
                    key={a.title}
                    className="bg-background p-6 md:p-12 flex flex-col gap-2 md:gap-stack-sm hover:bg-surface-container-low transition-colors duration-500"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl md:text-3xl mb-2 md:mb-4 font-light">{a.icon}</span>
                    <h4 className="font-headline-md text-xl md:text-2xl text-on-background">{a.title}</h4>
                    <p className="font-body-md text-sm md:text-body-md text-on-surface-variant">{a.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        )}

        {/* Inquiry Form */}
        <FadeIn>
          <section className="max-w-container-max mx-auto px-6 md:px-24 mb-12 md:mb-section-padding">
            <div className="bg-surface-container p-6 md:p-24 flex flex-col lg:flex-row gap-8 md:gap-gutter">
              <div className="lg:w-1/2 flex flex-col gap-4 md:gap-stack-md pr-0 lg:pr-24">
                <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-background">Private Inquiry</h2>
                <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant">
                  To request a private viewing or comprehensive dossier, please provide your details. Our Private Office director will contact you discreetly.
                </p>
              </div>
              <div className="lg:w-1/2">
                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full gap-6 py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                    <h3 className="font-headline-md text-headline-md text-on-background">Inquiry Received</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-center">
                      Our Private Office will be in contact with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form className="flex flex-col gap-4 md:gap-stack-md" onSubmit={handleSubmit}>
                    {[
                      { label: 'Full Name', placeholder: 'e.g. Jean-Pierre Dupont', type: 'text', key: 'name' as const },
                      { label: 'Email Address', placeholder: 'jp.dupont@example.com', type: 'email', key: 'email' as const },
                      { label: 'Telephone', placeholder: '+377 00 00 00 00', type: 'tel', key: 'phone' as const },
                    ].map(({ label, placeholder, type, key }) => (
                      <div key={key} className="relative pt-6">
                        <label className="absolute top-0 left-0 font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">
                          {label}
                        </label>
                        <input
                          className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-2 md:py-3 font-body-md text-sm md:text-body-md text-on-background transition-colors placeholder:text-outline-variant outline-none"
                          placeholder={placeholder}
                          type={type}
                          value={formData[key]}
                          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        />
                      </div>
                    ))}
                    <div className="relative pt-6 mb-4 md:mb-8">
                      <label className="absolute top-0 left-0 font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">
                        Message (Optional)
                      </label>
                      <textarea
                        className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-2 md:py-3 font-body-md text-sm md:text-body-md text-on-background transition-colors placeholder:text-outline-variant resize-none h-20 md:h-24 outline-none"
                        placeholder="I am interested in arranging a private viewing..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button
                      className="w-full md:w-auto self-start font-label-caps text-[10px] md:text-label-caps uppercase text-primary border border-primary px-6 py-3 md:px-8 md:py-4 hover:bg-primary hover:text-white transition-all duration-500 tracking-[0.15em]"
                      type="submit"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Related Properties */}
        <FadeIn>
          <section className="max-w-container-max mx-auto px-6 md:px-24 mb-12 md:mb-section-padding">
            <div className="flex justify-between items-end border-b border-outline-variant pb-6 mb-8 md:mb-12">
              <h2 className="font-headline-md text-2xl md:text-headline-md text-on-background">More Properties</h2>
              <Link
                to="/properties"
                className="font-label-caps text-[10px] md:text-label-caps text-primary uppercase flex items-center gap-2 hover:opacity-60 transition-opacity"
              >
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-10 md:gap-y-[3rem]">
              {properties.filter((p) => p.slug !== slug).slice(0, 3).map((p) => (
                <Link key={p.id} to={`/property/${p.slug}`} className="block group cursor-pointer">
                  <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden mb-4 bg-surface-container">
                    <img
                      alt={p.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      src={p.image}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-headline-md text-[22px] text-primary">{p.price}</span>
                    <span className="font-body-md text-body-md text-on-surface truncate">{p.title}</span>
                    <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">{p.location}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>
      </main>
    </PageTransition>
  )
}
