import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { properties } from '../data/properties'

type Filter = 'All' | 'Penthouse' | 'Apartment' | 'Villa'
type District = 'All' | 'Monte Carlo' | 'Fontvieille' | 'La Rousse' | 'La Condamine'

function PropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/property/${property.slug}`}>
        <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden mb-4 md:mb-6 bg-surface-container">
          {property.tag && (
            <div className="absolute top-4 left-4 z-10 bg-surface px-3 py-1 font-label-caps text-[10px] uppercase text-primary tracking-widest border border-outline-variant">
              {property.tag}
            </div>
          )}
          <img
            alt={property.imageAlt}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src={property.image}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-headline-md text-[28px] md:text-headline-md text-primary">{property.price}</h2>
          <h3 className="font-body-lg text-[16px] md:text-body-lg text-on-surface truncate">{property.title}</h3>
          <div className="flex flex-wrap items-center gap-2 md:gap-4 font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase mt-1 md:mt-2">
            <span>{property.location}</span>
            {property.beds && (
              <>
                <span className="w-[3px] h-[3px] rounded-full bg-outline-variant" />
                <span>{property.beds} Bed</span>
              </>
            )}
            {property.sqm && (
              <>
                <span className="w-[3px] h-[3px] rounded-full bg-outline-variant" />
                <span>{property.sqm} sqm</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function Properties() {
  const [typeFilter, setTypeFilter] = useState<Filter>('All')
  const [districtFilter, setDistrictFilter] = useState<District>('All')
  const [typeOpen, setTypeOpen] = useState(false)
  const [neighborhoodOpen, setNeighborhoodOpen] = useState(false)

  const filtered = properties.filter((p) => {
    const typeMatch = typeFilter === 'All' || p.category === typeFilter.toLowerCase()
    const districtMatch = districtFilter === 'All' || p.district === districtFilter
    return typeMatch && districtMatch
  })

  return (
    <PageTransition>
      <main className="pt-[120px] md:pt-[140px] pb-24 md:pb-section-padding min-h-screen">
        <header className="max-w-container-max mx-auto px-6 md:px-12 mb-12 md:mb-24">
          <motion.h1
            className="font-display-lg text-[40px] md:text-display-lg leading-tight text-primary mb-8 md:mb-12"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Exclusive Properties
          </motion.h1>

          {/* Mobile filter drawer */}
          <div className="md:hidden w-full mb-8">
            <details className="group bg-surface-container rounded-lg overflow-hidden border border-surface-variant">
              <summary className="flex justify-between items-center p-4 font-label-caps text-label-caps text-primary cursor-pointer list-none">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">tune</span>
                  <span>Filter Properties</span>
                </div>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="p-4 border-t border-surface-variant flex flex-col gap-4 bg-surface">
                <select
                  className="w-full bg-surface border border-outline-variant rounded px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary"
                  value={districtFilter}
                  onChange={(e) => setDistrictFilter(e.target.value as District)}
                >
                  <option value="All">Neighborhood</option>
                  <option>Monte Carlo</option>
                  <option>Fontvieille</option>
                  <option>La Rousse</option>
                  <option>La Condamine</option>
                </select>
                <select
                  className="w-full bg-surface border border-outline-variant rounded px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as Filter)}
                >
                  <option value="All">Property Type</option>
                  <option>Penthouse</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
                <select className="w-full bg-surface border border-outline-variant rounded px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary">
                  <option>Price Range</option>
                  <option>Under €5M</option>
                  <option>€5M – €10M</option>
                  <option>€10M+</option>
                </select>
              </div>
            </details>
          </div>

          {/* Desktop filter bar */}
          <motion.div
            className="hidden md:flex flex-wrap items-center justify-between gap-8 border-b border-surface-variant pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-8">
              <div className="relative">
                <button
                  className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
                  onClick={() => { setNeighborhoodOpen(!neighborhoodOpen); setTypeOpen(false) }}
                >
                  <span>Neighborhood</span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </button>
                {neighborhoodOpen && (
                  <div className="absolute top-full left-0 mt-4 w-48 bg-surface border border-surface-variant z-10 shadow-sm">
                    {(['All', 'Monte Carlo', 'Fontvieille', 'La Rousse', 'La Condamine'] as District[]).map((d) => (
                      <button
                        key={d}
                        onClick={() => { setDistrictFilter(d); setNeighborhoodOpen(false) }}
                        className={`block w-full text-left px-6 py-4 font-body-md text-body-md hover:bg-surface-container transition-colors ${districtFilter === d ? 'text-primary' : 'text-on-surface'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
                  onClick={() => { setTypeOpen(!typeOpen); setNeighborhoodOpen(false) }}
                >
                  <span>Property Type</span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </button>
                {typeOpen && (
                  <div className="absolute top-full left-0 mt-4 w-48 bg-surface border border-surface-variant z-10 shadow-sm">
                    {(['All', 'Penthouse', 'Apartment', 'Villa'] as Filter[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => { setTypeFilter(t); setTypeOpen(false) }}
                        className={`block w-full text-left px-6 py-4 font-body-md text-body-md hover:bg-surface-container transition-colors ${typeFilter === t ? 'text-primary' : 'text-on-surface'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase">
                <span>Price Range</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-primary">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">map</span>
              </button>
            </div>
          </motion.div>
        </header>

        <section className="max-w-container-max mx-auto px-6 md:px-12">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-12 md:gap-y-[4rem]">
              {filtered.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}

              {/* Private Collection Card */}
              <motion.article
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden mb-4 md:mb-6 bg-surface-variant flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <span className="material-symbols-outlined text-[40px] md:text-[48px] text-on-surface-variant mb-4 block">lock</span>
                    <h3 className="font-headline-lg text-[20px] md:text-[24px] text-primary mb-2">Private Collection</h3>
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-[250px] md:max-w-xs mx-auto">
                      Off-market properties available exclusively upon request to our Private Office.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    to="/contact"
                    className="w-full border border-primary text-primary py-4 font-label-caps text-label-caps uppercase text-center hover:bg-primary hover:text-on-primary transition-colors duration-500"
                  >
                    Inquire for Access
                  </Link>
                </div>
              </motion.article>
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-body-lg text-body-lg text-on-surface-variant">No properties match the selected filters.</p>
              <button
                onClick={() => { setTypeFilter('All'); setDistrictFilter('All') }}
                className="mt-8 border border-primary text-primary px-8 py-3 font-label-caps text-label-caps uppercase hover:bg-primary hover:text-on-primary transition-colors duration-500"
              >
                Clear Filters
              </button>
            </div>
          )}

          <div className="mt-16 md:mt-24 flex justify-center">
            <button className="w-full md:w-auto border border-primary text-primary px-12 py-4 font-label-caps text-label-caps uppercase hover:bg-primary hover:text-on-primary transition-colors duration-500">
              Load More Properties
            </button>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
