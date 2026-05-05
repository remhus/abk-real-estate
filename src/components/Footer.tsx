import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-12 py-24 flex flex-col items-center gap-12">
        <Link
          to="/"
          className="text-lg font-light tracking-[0.2em] text-primary uppercase hover:opacity-70 transition-opacity duration-500"
        >
          ABK REAL ESTATE MONACO
        </Link>

        <nav className="flex flex-wrap justify-center gap-8">
          {['Legal Notice', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-serif tracking-widest text-[10px] uppercase text-outline hover:text-primary transition-all duration-500"
            >
              {item}
            </a>
          ))}
        </nav>

        <p className="font-serif tracking-widest text-[10px] uppercase text-outline">
          © 2024 ABK Real Estate Monaco. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
