'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  description: string;
}

interface SponsorCategory {
  name: string;
  description: string;
  sponsors: Sponsor[];
}

const sponsorCategories: SponsorCategory[] = [
  {
    name: "Sponsors",
    description: "Our valued sponsors who make this event possible",
    sponsors: [
      {
        name: "Sweet Music",
        logo: "/images/sponsors/10th-Ann-Logo.png",
        url: "https://sweet-muzic.com/",
        description: "Ghana's leading Musical Instrument Store"
      },
      {
        name: "Philips Consulting",
        logo: "/images/sponsors/pcl.jpg",
        url: "https://phillipsconsulting.net/",
        description: "Business consulting, with a difference."
      },
      {
        name: "Philips Outsourcing",
        logo: "/images/sponsors/philips.jpg",
        url: "https://phillipsoutsourcing.net/",
        description: "With over 17 years of delivering innovative solutions..."
      },
      {
        name: "Dalex Finance",
        logo: "/images/sponsors/SWIFT-Logo.png",
        url: "https://www.dalexfinance.com/",
        description: "Financial services provider"
      },
      {
        name: "Nuffield Clinic",
        logo: "/images/sponsors/nuffieldclin.png",
        url: "https://nuffieldclinic.com",
        description: "Bone, Joint & Muscle Specialist Clinic"
      },
      {
        name: "Axis Human Capital",
        logo: "/images/sponsors/axis.jpg",
        url: "#",
        description: "We continue to recruit people who are both competent..."
      },
      {
        name: "Telecel",
        logo: "/images/sponsors/telecel.jpg",
        url: "https://telecel.com.gh/",
        description: "Pay bill, apply for broadband, self service, deals you can't resist. Our devices come with data and voice bundles your wallet will love."
      },
      {
        name: "Perbi Cubs",
        logo: "/images/sponsors/PC-turquoise.png",
        url: "#",
        description: "Children's literacy program"
      },
      {
        name: "PELE",
        logo: "/images/sponsors/pelepele.png",
        url: "https://perbiexecutive.com/",
        description: "Perbi Executive Leadership Education"
      }
    ]
  },
  {
    name: "Partners",
    description: "Our trusted partners who support our mission",
    sponsors: [
      {
        name: "ICS Africa",
        logo: "/images/sponsors/icsafrica.png",
        url: "https://www.icsafrica-sp.org/",
        description: "Investing in Children and their Societies"
      },
      {
        name: "ICSP",
        logo: "/images/sponsors/icsp.jpg",
        url: "https://icspghana.com/",
        description: "ICSP is an independent institute solely dedicated to training and providing ..."
      },
      {
        name: "Black Boys Band",
        logo: "/images/sponsors/bbs.jpg",
        url: "#",
        description: "Ghana's premier highlife band"
      },
      {
        name: "Impact Solutions",
        logo: "/images/sponsors/beyond.png",
        url: "#",
        description: "HR consulting services"
      },
      {
        name: "2480 Digital Solutions",
        logo: "/images/sponsors/2842.jpg",
        url: "https://2840digitalsolutions.com/",
        description: "Complete IT Solutions For Optimal Performance"
      },
      {
        name: "Silky Diva Cosmetics and More",
        logo: "/images/sponsors/silky.png",
        url: "#",
        description: "Fashion and beauty brand"
      },
      {
        name: "Movenpick",
        logo: "/images/sponsors/movenpick.png",
        url: "https://movenpick.accor.com",
        description: "5 Star Hotel in Accra, Ghana"
      }
    ]
  },
  {
    name: "Media Partners",
    description: "Our media partners helping amplify our message",
    sponsors: [
      {
        name: "Channel 1 TV",
        logo: "/images/sponsors/C1.jpg",
        url: "https://channelonenewsonline.com/",
        description: "Leading television station"
      },
      {
        name: "Citi 97.3fm",
        logo: "/images/sponsors/citi.png",
        url: "https://citinewsroom.com/",
        description: "Citi FM 97.3 is an award-winning English-speaking radio station based in Accra"
      },
      {
        name: "MX24 TV",
        logo: "/images/sponsors/MX24LOGO-02.png",
        url: "#",
        description: "Media company"
      },
      {
        name: "Sweet Melodies",
        logo: "/images/sponsors/logog.webp",
        url: "#",
        description: "Music and entertainment"
      }
    ]
  }
];

export default function SponsorsPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Sponsors & Partners</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We&apos;re proud to partner with industry leaders who share our vision for transforming HR
            </p>
          </motion.div>
        </div>
        <Image
          src="/images/IMG-20250610-WA0142.jpg"
          alt="Conference background"
          width={1920}
          height={1080}
          className="object-cover w-full h-half"
          priority
        />
      </section>

      {/* Sponsor Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {sponsorCategories.map((category, categoryIndex) => (
          <section key={category.name} className={`mb-20 ${categoryIndex !== 0 ? 'mt-16' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">{category.name}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.sponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
                >
                  <a 
                    href={sponsor.url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    <div className="relative h-48 w-full flex-grow">
                      <div className="absolute inset-0 bg-gray-50 flex items-center justify-center p-6">
                        <div className="relative w-full h-full">
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A1C63] to-[#FF8C00]"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#0A1C63] mb-2">{sponsor.name}</h3>
                      <p className="text-gray-700 mb-4 flex-grow">{sponsor.description}</p>
                      {sponsor.url && sponsor.url !== '#' && (
                        <div className="text-[#0A1C63] font-medium flex items-center mt-auto">
                          Visit Website
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-[#0A1C63] text-white py-20 px-6 rounded-xl mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Become a Sponsor or Partner</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our prestigious community and connect with HR leaders from across Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sponsor#packages" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white transition-colors"
                  >
                    View Packages
                  </motion.button>
                </Link>
                <a href="mailto:info@hrnetworkafrica.org">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#0A1C63] font-bold py-3 px-8 rounded-full border border-white transition-colors hover:bg-white/90"
                  >
                    Contact Our Team
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0A1C63] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="mb-6">
              The HR Network is an association and community of high-performing and credible people management professionals who are focused on accelerating business results through strategic human capital best practices.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Info</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FF8C00]">Home</Link></li>
              <li><Link href="/speakers" className="hover:text-[#FF8C00]">Speakers</Link></li>
              <li><Link href="/sponsors" className="hover:text-[#FF8C00]">Sponsors</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF8C00]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-2 text-[#FF8C00]" />
                <div>
                  <p>(+233) 54 122 2365</p>
                  <p>(+233) 20 575 6709</p>
                  <p>(+233) 26 337 4641</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="mt-1 mr-2 text-[#FF8C00]" />
                <p>info@hrnetworkafrica.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-white/20 text-center">
        </div>
      </footer>
    </main>
  );
}