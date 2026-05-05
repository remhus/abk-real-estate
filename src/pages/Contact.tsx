import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageTransition from '../components/PageTransition'

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <main className="pt-[80px] md:pt-[140px] pb-16 md:pb-section-padding min-h-screen">
        {/* Header */}
        <header className="max-w-container-max mx-auto px-6 md:px-12 mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block font-label-caps text-label-caps text-outline uppercase mb-6">Private Office</span>
            <h1 className="font-display-lg text-4xl md:text-display-lg text-primary max-w-2xl leading-tight">
              Begin a Confidential Conversation.
            </h1>
          </motion.div>
        </header>

        <div className="max-w-container-max mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left Info */}
          <FadeIn className="lg:col-span-4">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-headline-md text-2xl md:text-headline-md text-on-background mb-6">Monaco Office</h2>
                <div className="flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant">
                  <p>Le Carré d'Or</p>
                  <p>1 Avenue des Beaux-Arts</p>
                  <p>98000 Monaco, MC</p>
                </div>
              </div>

              <div>
                <h3 className="font-label-caps text-label-caps text-on-background uppercase mb-4">Office Hours</h3>
                <div className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
                  <div className="flex justify-between border-b border-outline-variant pb-2">
                    <span>Monday – Friday</span>
                    <span>09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant pb-2">
                    <span>Saturday</span>
                    <span>By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-label-caps text-label-caps text-on-background uppercase mb-4">Direct Contact</h3>
                <div className="flex flex-col gap-3 font-body-md text-body-md">
                  <a href="tel:+37799000000" className="text-primary hover:opacity-70 transition-opacity">
                    +377 99 00 00 00
                  </a>
                  <a href="mailto:office@abkrealestate.mc" className="text-primary hover:opacity-70 transition-opacity">
                    office@abkrealestate.mc
                  </a>
                </div>
              </div>

              <div className="aspect-[4/3] bg-surface-container overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKCleZL9KmorifeWARgOSC3F5iJVatWSZV76aj_PKpbv-BzSKm-y1JBE4_oW9L8KKWoeFjuuLLGjqlQqAi5YhY7M3XhH-q4yFWqXwBqZg-qMqRLbXjklN1GVU6a9sF5JExkVHb7GZb3BxuuvSsVMq8NHi1L7U0FqLvs1gj8IW9vXXz0Ru6XhC_nITg-ksqLk8sKX5fv3Dm7B6G8m8TsBbGXdvKKl4UjgT5Fxm5UrWqRBm"
                  alt="Monaco Office"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15} className="lg:col-span-7 lg:col-start-6">
            <div className="bg-surface-container-low p-6 md:p-12">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center h-full gap-6 py-24"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                  <h3 className="font-headline-md text-headline-md text-on-background">Message Received</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-sm">
                    Thank you for reaching out. A member of our Private Office team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                  <h2 className="font-headline-md text-2xl md:text-headline-md text-on-background mb-4">
                    Request a Private Consultation
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { label: 'Full Name', placeholder: 'Jean-Pierre Dupont', type: 'text', key: 'name' as const },
                      { label: 'Email Address', placeholder: 'jp.dupont@example.com', type: 'email', key: 'email' as const },
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
                          required
                        />
                      </div>
                    ))}
                  </div>

                  <div className="relative pt-6">
                    <label className="absolute top-0 left-0 font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">
                      Telephone
                    </label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-2 md:py-3 font-body-md text-sm md:text-body-md text-on-background transition-colors placeholder:text-outline-variant outline-none"
                      placeholder="+377 00 00 00 00"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="relative pt-6">
                    <label className="absolute top-0 left-0 font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">
                      Area of Interest
                    </label>
                    <select
                      className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-2 md:py-3 font-body-md text-sm md:text-body-md text-on-background transition-colors outline-none appearance-none cursor-pointer"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="">Select a property type</option>
                      <option>Penthouse</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Off-Market Portfolio</option>
                    </select>
                  </div>

                  <div className="relative pt-6">
                    <label className="absolute top-0 left-0 font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">
                      Message
                    </label>
                    <textarea
                      className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-2 md:py-3 font-body-md text-sm md:text-body-md text-on-background transition-colors placeholder:text-outline-variant resize-none h-24 md:h-28 outline-none"
                      placeholder="Please tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    className="w-full md:w-auto self-start font-label-caps text-[10px] md:text-label-caps uppercase text-primary border border-primary px-8 py-3 md:px-10 md:py-4 hover:bg-primary hover:text-white transition-all duration-500 tracking-[0.15em] mt-4"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </main>
    </PageTransition>
  )
}
