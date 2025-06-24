'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsorTiers = [
  {
    name: "Platinum Sponsors",
    description: "Our premier partners who make this event possible",
    sponsors: [
      {
        name: "Nuffield Clinic",
        logo: "/sponsors/nuffieldclinic.png",
        url: "https://nuffieldclinic.com",
        description: "Bone, Joint & Muscle Specialist Clinic"
      },
      {
        name: "Movenpick Ambassador Hotel Accra",
        logo: "/sponsors/movenpick.png",
        url: "https://movenpick.accor.com/en/africa/ghana/accra/moevenpick-ambassador-hotel-accra.html",
        description: "5 Star Hotel in Accra, Ghana"
      }
    ]
  },
  {
    name: "Gold Sponsors",
    description: "Key supporters of HR Connect 2025",
    sponsors: [
      {
        name: "ADP",
        logo: "/sponsors/adp.png",
        url: "https://www.adp.com",
        description: "Global technology company providing human capital management solutions"
      },
      {
        name: "BambooHR",
        logo: "/sponsors/bamboohr.png",
        url: "https://www.bamboohr.com",
        description: "HR software for small and medium businesses"
      },
      {
        name: "Paychex",
        logo: "/sponsors/paychex.png",
        url: "https://www.paychex.com",
        description: "Integrated human capital management solutions"
      }
    ]
  },
  {
    name: "Silver Sponsors",
    description: "Valuable contributors to our conference",
    sponsors: [
      {
        name: "Indeed",
        logo: "/sponsors/indeed.png",
        url: "https://www.indeed.com",
        description: "#1 job site worldwide with over 250 million unique visitors"
      },
      {
        name: "Glassdoor",
        logo: "/sponsors/glassdoor.png",
        url: "https://www.glassdoor.com",
        description: "Insights into jobs, companies, salaries and more"
      },
      {
        name: "Lattice",
        logo: "/sponsors/lattice.png",
        url: "https://lattice.com",
        description: "People management platform for performance reviews and engagement"
      },
      {
        name: "Culture Amp",
        logo: "/sponsors/cultureamp.png",
        url: "https://www.cultureamp.com",
        description: "Employee experience platform for people and culture"
      }
    ]
  }
];

export default function SponsorsPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section - Updated to match speakers page */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Sponsors</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We&apos;re proud to partner with industry leaders who share our vision for transforming HR
            </p>
          </motion.div>
        </div>
        <Image
          src="/images/conference-session-4.jpg"
          alt="Conference background"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Sponsor Tiers - Updated colors */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {sponsorTiers.map((tier, tierIndex) => (
          <section key={tier.name} className={`mb-20 ${tierIndex !== 0 ? 'mt-24' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">{tier.name}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {tier.description}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tier.sponsors.map((sponsor, sponsorIndex) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
                >
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                    <div className="relative h-64 w-full cursor-pointer">
                      <div className="h-48 bg-gray-50 flex items-center justify-center p-6">
                        <div className="relative w-full h-full">
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#0A1C63] mb-2">{sponsor.name}</h3>
                        <p className="text-gray-700 mb-4">{sponsor.description}</p>
                        <div className="text-[#0A1C63] font-medium hover:underline flex items-center">
                          Visit Website
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* Community Partners Section - Updated colors */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#F9F9F9] py-16 px-6 mt-24"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Community Partners</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Organizations supporting the HR community across Africa
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "SHRM", logo: "/sponsors/shrm.png", url: "https://www.shrm.org" },
                { name: "HRCI", logo: "/sponsors/hrci.png", url: "https://www.hrci.org" },
                { name: "CIPD", logo: "/sponsors/cipd.png", url: "https://www.cipd.org" },
                { name: "IHRMP", logo: "/sponsors/ihrmp.png", url: "https://ihrmp.org" }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-all"
                >
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    <div className="relative h-20 w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA - Updated to match speakers page */}
        <section className="bg-[#0A1C63] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Become a Sponsor</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our prestigious sponsor community and connect with HR leaders from across Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF8C00] hover:bg-[#FF6D00] text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Download Prospectus
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white transition-colors"
                >
                  Contact Our Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}