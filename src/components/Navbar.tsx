import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: '/properties', label: 'Properties' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b border-outline-variant/30 transition-all duration-500 ${
          scrolled ? 'bg-surface-container-lowest/95 backdrop-blur-md shadow-sm' : 'bg-surface-container-lowest/90 backdrop-blur-md'
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 py-5 md:px-12 md:py-8 max-w-container-max mx-auto">
          <Link
            to="/"
            className="text-xl font-light tracking-[0.25em] text-primary uppercase transition-opacity duration-500 hover:opacity-60"
          >
            ABK REAL ESTATE MONACO
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ to, label }) => {
              const active = location.pathname === to || (to === '/properties' && location.pathname.startsWith('/property'))
              return (
                <Link
                  key={to}
                  to={to}
                  className={`font-serif tracking-[0.15em] text-[11px] uppercase pb-1 transition-all duration-700 hover:opacity-60 ${
                    active
                      ? 'text-primary border-b border-primary'
                      : 'text-outline hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/properties"
              className="text-outline hover:text-primary transition-colors duration-700"
              aria-label="Search"
            >
              <span className="material-symbols-outlined">search</span>
            </Link>
            <Link
              to="/contact"
              className="font-serif tracking-[0.15em] text-[11px] uppercase text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-all duration-500"
            >
              Private Office
            </Link>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-[66px] left-0 right-0 z-40 bg-surface-container-lowest/98 backdrop-blur-md border-b border-outline-variant/30 md:hidden"
          >
            <div className="flex flex-col px-6 pt-10 pb-8 gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-serif tracking-[0.15em] text-[11px] uppercase text-primary"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="font-serif tracking-[0.15em] text-[11px] uppercase text-primary border border-primary px-6 py-3 text-center hover:bg-primary hover:text-on-primary transition-all duration-500"
              >
                Private Office
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
