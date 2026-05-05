export interface Property {
  id: string
  slug: string
  price: string
  title: string
  location: string
  beds: number | null
  sqm: number | null
  sqmLabel?: string
  tag?: string
  image: string
  imageAlt: string
  category: 'penthouse' | 'apartment' | 'villa' | 'private'
  district: 'Monte Carlo' | 'Fontvieille' | 'La Rousse' | 'La Condamine' | 'Other'
}

export interface PropertyDetail extends Property {
  subtitle: string
  description: string[]
  baths: number
  terraces?: number
  parking?: number
  gallery: { src: string; alt: string; label: string }[]
  amenities: { icon: string; title: string; desc: string }[]
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'tour-odeon-penthouse',
    price: '€12,500,000',
    title: 'Tour Odéon Penthouse Collection',
    location: 'La Rousse, Monaco',
    beds: 4,
    sqm: 350,
    tag: 'New Listing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM7dwMZpkHs9uJ9bCuZMewuis3g-eIY-0Fb_Om9Jw3xo5PvdTlzrgTvC8Ezd2S5WECyI6x8xbm8K5TXOMmc2o7MP3i0bYaT2743bAT9Rlk68ogdlvXoglR2Rvq4Bww92u6LqRoMbITfaTKncV149gw27b_YONEx32bt6EippMNGImnjvYoIAIlM04S2yyO_j5JyKbYmQPhCl9ipf20xFqfPv0r6dFcrON13wkLBzDs3tGHtCnsR4zVAuJ4aKTgtBRd0NbhR7lJ-Xs',
    imageAlt: 'Luxury penthouse interior with floor-to-ceiling windows overlooking Monaco',
    category: 'penthouse',
    district: 'La Rousse',
  },
  {
    id: '2',
    slug: 'carre-dor-elegance',
    price: '€8,900,000',
    title: "Carré d'Or Elegance",
    location: 'Monte Carlo, Monaco',
    beds: 3,
    sqm: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-urWO9XLjrAluy6muWwVKMsF13PGLJ9lS_LxBvL_CvvdnR93oPUdob_9rqJm6ZizDVMtiFkP_aoa_wlMz8khaQD3yNuNUgnRD-Do4P4AFlzPVOYOosWIXFco6-OUV-6TDBCFWmclRN4nBQcZP5XQtZLWYvrOrm8l41uqTJtEHdr6RPjz10KLWZbenmlfqzLcz6SByruF-QP-mu0ckTwGUOZuvzT-xUqQhWxgitqfhiHEBfaBmPbzZBOUs3_D5ZaCOeZRDLzrgLR0',
    imageAlt: 'Sophisticated living area with wide-plank oak flooring in Monaco residence',
    category: 'apartment',
    district: 'Monte Carlo',
  },
  {
    id: '3',
    slug: 'villa-sur-mer',
    price: 'Price upon request',
    title: 'Villa sur Mer',
    location: 'Roquebrune-Cap-Martin',
    beds: 6,
    sqm: 800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEljWII1F5rA68XOj8Ay5DBYFgNqrGrUYNOERAcbdbXJs8AUroPm7WXJo5qmG-mr1NaEYmyVgnzOplAQelRc_LfArfw3hpp9HNAPWDKqzgjhZtOuT32RLYoyNXe52VHl9-omxVT2xfBvpO0ugKFTtX3Zcq4vdo3gTnog-ciU0kEngC3ZF6iYoVtVg_BxNb1p8eZfQ7vohsAA44maqn1pbJQ4UP1ngN9pZkHZm0El-q9BIALikPPm6k3hbpDxIsVpAV64ty3IqD_s0',
    imageAlt: 'Contemporary Mediterranean villa with infinity pool overlooking the sea',
    category: 'villa',
    district: 'Other',
  },
  {
    id: '4',
    slug: 'port-hercule-views',
    price: '€5,400,000',
    title: 'Port Hercule Views',
    location: 'La Condamine, Monaco',
    beds: 2,
    sqm: 145,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFoC5K08jcaABdon6caXh1yCVRhEQ02dlaGgoET_I_AktIoj8P6TQiHR1Vi3IfZM10E6-5XxoIYWiHUS2dcRtRe2tK3Mooe5bUPNPQ7VTGKYMgxk_xycM84RFwcuQ23TcEogHiIJ8hYDglFhHqM9vpQhPrLc7qVgxnbK1j2mQTPzhMKO7T42cb4n_dLUKlODReH8yaT-BtpIqMeRUnYTAnkKGMrR2wkfihp_FOx6DXzjSt0x-CAJAddqdf3TeucTrKiTToWJAHv0',
    imageAlt: 'Minimalist luxury kitchen with marble countertops in Monaco property',
    category: 'apartment',
    district: 'La Condamine',
  },
  {
    id: '5',
    slug: 'fontvieille-marina-duplex',
    price: '€15,000,000',
    title: 'The Fontvieille Marina Duplex',
    location: 'Fontvieille, Monaco',
    beds: 4,
    sqm: 420,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxtUKM2lLYhEjFnvodRM61qCbtpURw4SPe_dmtTXb_hccQeN6VckHkomvRRuh9qW9I_vDBbSWowmM5078SIRDr9wtvTiyTaNPBVTXD56iNwnrU8nqbjejg2W6MkaaoP3lNLGSQZ2Khed9XCkPSBU-GQ_OVvVS4T7L878CNSeqV2PMYi6HVeIcN2zccXfl9IKeyAzrjzgI614rHhEuvCxSwbRCzWIBxmSvwZaUEF_AkyJIGHmp05Z9o7on-qHlS20GFLCMivhtgAvs',
    imageAlt: 'Serene master bedroom with panoramic sea view in Monaco penthouse',
    category: 'penthouse',
    district: 'Fontvieille',
  },
  {
    id: '6',
    slug: 'villa-lhorizon',
    price: '€45,000,000',
    title: "Villa L'Horizon",
    location: "Carré d'Or, Monaco",
    beds: 6,
    sqm: 850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0EP67YPXZoxeUGIJSOHVvYd73bGWUmF-kItfCeY6Kw37E5OBkQvIY9LxBaP8psAyNts4DVmzxITKqnSSk-88o5uZYECF_AW-Z11cHV7LSnEj6E6QQGDhPp8HLN7fgWGVfT7gxgtpGNu_1hzvRPqwGh72X7gEKw4xgcWzJZWs6r4DckiTsW-I03Wyc-be1F3pFcpr_YCY2-xcBxa0LL77Cux12XP71VEl1gZFyXRp5yAIWvCxpnR6FO7gulAgbAfRk546VVHTE5jI',
    imageAlt: 'Luxurious modern villa exterior in Monaco at golden hour',
    category: 'villa',
    district: 'Monte Carlo',
  },
]

export const featuredProperties: Property[] = [
  {
    id: 'f1',
    slug: 'villa-la-vigie',
    price: '€ 45,000,000',
    title: 'Villa La Vigie',
    location: 'Larvotto District',
    beds: 4,
    sqm: 600,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOtOQZRVr10R0q459QN52dV8yeIBED0yQODD49jIeoNzCNVz-Zw9gtSBuRrEKEk5yYLmzGy3emdYMyfsfdOs-bo948uOhP5bsLdwqFDIbae7_iq9W80c0wY5XNgxUEs7W6ShMCsw2lf8bvX5ZQ3fn9w1VAK-BJYwBAn_em2H5DfpmnkUhMclZ0n86jL5FZ4ORI7ps0UE6ZhOaSGvQZ1FjbdK3UmiXBO4qywTTUTjW7ZEmkOy695tdXoQsVWoehnvfIxTBWCl7n0TQ',
    imageAlt: 'Ultra-modern luxury villa with infinity pool in Monaco',
    category: 'villa',
    district: 'Monte Carlo',
  },
  {
    id: 'f2',
    slug: 'carre-dor-apartment',
    price: '€ 18,500,000',
    title: "Carré d'Or Apartment",
    location: "Carré d'Or",
    beds: 3,
    sqm: 280,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzKBYrPjUpY7r-r5WNfdKUMetKwTwPsltaGN51sgj_fAnmCASnxfeQqcrd1acBw2-f7aaHAr49dz3X7UsU7l-keOKFTEpaq6E4ovAV9ixZci4LqEkPl99i3PD7VuxxmhdstWX0wHNV11bxCks7u0I4zeJrR3wUJLKAwmC5sqVQS6_pYXLi3XaxcnARL7ly8yXyZc2P6YBNb8jjQGMzqPjjHuJsR3oBnZWBUgnlx6HwDZyTrCqF3j6mOApRnTrgE28mFmVTiGcOQgA',
    imageAlt: 'Elegant minimalist apartment interior in Carré d\'Or Monaco',
    category: 'apartment',
    district: 'Monte Carlo',
  },
  {
    id: 'f3',
    slug: 'fontvieille-penthouse',
    price: '€ 22,000,000',
    title: 'Fontvieille Penthouse',
    location: 'Fontvieille',
    beds: 4,
    sqm: 500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDXWlDOjjc0BYYz_d9tkEq5OggXgQYwS0foQu3KmGiKQs_AYxH5MpaOA8F1Ylrnqn7fU4SbZXlJobru4rNBdaj14xQyNzS1vf8i1wZ4mqF2t4VjTUUxm5LzGXOibtwxGpB2zzmz4k54OSnkmOPSJV9562EHAGhbSM24H4zeOlY7yEkfS9iCSxp8yhFtegOZW2s5HhZ1qGcZw-92Pd0AVfbreg6e6Fo9jOT2W39ylT3yZqWL2HWahVWTmyCv2YxcZlfVpSrR5Br0oE',
    imageAlt: 'Sophisticated minimalist bedroom in Monaco penthouse',
    category: 'penthouse',
    district: 'Fontvieille',
  },
]

export const propertyDetails: PropertyDetail = {
  id: 'f1',
  slug: 'villa-lhorizon',
  price: '€ 45,000,000',
  title: "Villa L'Horizon",
  subtitle: 'Price upon request',
  location: "Carré d'Or, Monaco",
  beds: 6,
  baths: 8,
  sqm: 850,
  terraces: 320,
  parking: 4,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0EP67YPXZoxeUGIJSOHVvYd73bGWUmF-kItfCeY6Kw37E5OBkQvIY9LxBaP8psAyNts4DVmzxITKqnSSk-88o5uZYECF_AW-Z11cHV7LSnEj6E6QQGDhPp8HLN7fgWGVfT7gxgtpGNu_1hzvRPqwGh72X7gEKw4xgcWzJZWs6r4DckiTsW-I03Wyc-be1F3pFcpr_YCY2-xcBxa0LL77Cux12XP71VEl1gZFyXRp5yAIWvCxpnR6FO7gulAgbAfRk546VVHTE5jI',
  imageAlt: 'Luxurious modern villa exterior in Monaco at golden hour',
  category: 'villa',
  district: 'Monte Carlo',
  description: [
    'Situated in the heart of the Golden Square, Villa L\'Horizon represents a rare opportunity to acquire a truly exceptional property. Designed by world-renowned architects, this residence offers an unparalleled blend of privacy, expansive living spaces, and breathtaking panoramic views of the Mediterranean Sea and the Prince\'s Palace.',
    'Every detail has been meticulously curated, from the imported Italian marble flooring to the bespoke woodwork and state-of-the-art smart home integration. The vast expanses of glass blur the boundaries between interior and exterior, allowing natural light to flood the living areas while framing the iconic Monegasque landscape.',
  ],
  gallery: [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7P9gZ7GWuRAsH9EWk8gYM3IG--QCMly06lSHLkIiQUxdvaCb_EUVO50NldOQZKDNp-xtYBk4qtWDRETRW7GdrRLk5EL4YpTcQshlalEcYqESQX6KyNFoKYngaOHaxqfDc_nZo_GTa7ejLMnbe3fgq0KnZb040SGd8kjux0epEJsYNc6IS56pQdUt2IBr0gm03m0bvi6qkAPXID6lgsK6UUeZMWVf1B2ARptztWcFJVq-hdvqRGa262u6XMw4KI-FvwBvAXK9ojw',
      alt: 'Living Room',
      label: 'Living Room',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR9x-fa8aEdIeHUuu58iJpcbpj9GCXstpLjoW44Rzas558vgXzntwmutcJ2FcHu38HRg1HVEe-xXSZG3tj-qiD9fIz0BTg87MUL7dp4Q_bfA9b4bxNWzVDkq12fRYS-_LFRM4u2csdJaaOI0V_gBwlUOBvQ8dCsP1iYBE2rEU4trVLiJeRnHJqJO6WLHSRH7zp6Xl2FPWYcsK1vyu8Zxhn7fZSkgUb_pwFkKZBw1pbZ71WDEtf-i9pAlzwB8baAqs4Slt_1WXdzvw',
      alt: 'Chef\'s Kitchen',
      label: 'Kitchen',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIvzEN2j_A_R6M8c6MYQde4AMygUxaswR0BVHnI9wb5OatLJbd6eP3Iq5Cdo8OO5LFjb64qKDgiB9iQnXiXLnzf4Xjo9yZGuZTv46pYlP5668p17dy4A746urYBVDj_wrBqkoGeVS2MWrkmEXf0fajzfoRSewMhg9lXd6E1ho3JPY5YbHDXlPej-P2w2yGkjpcU22bcDFEcnCZfXVBgmKqnChmxBWpeS3HopykX-Re_YU1s9Ig-k09Mwj7LScF8YR8GOl41TIE6Us',
      alt: 'Master Bathroom',
      label: 'Bathroom',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_PG3WrhF-GDeshcorq1ocOMKp3gjPuUNlbDkDnaSWXg8e5yhBlLGwLND67tSJYwulphr6FOO0CyMjohnNvB2fL5WD3JErgJ_uthTLbrPiIDmTUzX9dvF33uxl5wE5FPdTiyHvKWjXInmBGBLND8hoy02aiUJp9hnGeMuVKh3dHmKHsTX6GeUJgrKbbqZMP7YBm-Kd7dcPUJcuy2tjV3zr2mSUzgjK5P8LEjSBNBvEFmUuCgwG5K7Hc896z49TeH_e9-mZ5XZ73pE',
      alt: 'Private Terrace',
      label: 'Terrace',
    },
  ],
  amenities: [
    { icon: 'pool', title: 'Infinity Pool', desc: 'Heated salt-water pool with panoramic sea views and submerged lounging areas.' },
    { icon: 'fitness_center', title: 'Wellness Center', desc: 'Fully equipped Technogym fitness area, dry sauna, and hammam.' },
    { icon: 'wine_bar', title: 'Wine Cellar', desc: 'Climate-controlled tasting room with capacity for over 2,000 bottles.' },
    { icon: 'security', title: 'Advanced Security', desc: '24/7 surveillance, biometric entry systems, and secure panic room.' },
    { icon: 'directions_car', title: 'Showroom Garage', desc: 'Temperature-controlled parking gallery for up to four luxury vehicles.' },
    { icon: 'smart_toy', title: 'Domotics', desc: 'KNX smart home system controlling lighting, climate, blinds, and AV.' },
  ],
}
