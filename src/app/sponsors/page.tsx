'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const sponsorCategories = [
  {
    name: "Sponsors",
    description: "Our valued sponsors who make this event possible",
    sponsors: [
      {
        name: "Nuffield Clinic",
        logo: "/images/sponsors/nuffieldclin.png",
        url: "https://nuffieldclinic.com",
        description: "Bone, Joint & Muscle Specialist Clinic"
      },
      {
        name: "Philips Outsourcing",
        logo: "/images/sponsors/philips.jpg",
        url: "https://phillipsoutsourcing.net/",
        description: "With over 17 years of delivering innovative solutions..."
      },
      {
        name: "Dalex",
        logo: "/images/sponsors/SWIFT-Logo.png",
        url: "https://www.dalexswift.com",
        description: "Save yourself the heartache by investing your money where it gives back."
      },
      
      {
        name: "Perbi Cubs",
        logo: "/images/sponsors/PC-peach.png",
        url: "#",
        description: "Children's literacy program"
      },
      
       {
        name: "PCL",
        logo: "/images/sponsors/pcl.jpg",
        url: "https://pcl.net/",
        description: "..."
      },  
      {
        name: "Pele",
        logo: "/images/sponsors/PELE-white.png",
        url: "https://perbiexecutive.com/",
        description: "Perbi Executive Leadership Education is an executive coaching firm"
      }
    ]
  },
  {
    name: "Partners",
    description: "Our trusted partners who support our mission",
    sponsors: [
      {
        name: "Movenpick",
        logo: "/images/sponsors/movenpick.png",
        url: "https://movenpick.accor.com/en/africa/ghana/accra/moevenpick-ambassador-hotel-accra.html",
        description: "5 Star Hotel in Accra, Ghana"
      },
      {
        name: "Sweet Melody",
        logo: "/images/sponsors/10th-Ann-Logo.png",
        url: "https://sweet-muzic.com/",
        description: "Ghana's leading Musical Instrument Store"
      },
      {
        name: "ICS Africa",
        logo: "/images/sponsors/icsafrica.png",
        url: "https://www.icsafrica-sp.org/",
        description: "Investing in Children and their Societies."
      },
      {
        name: "Silky Diva",
        logo: "/images/sponsors/silky.png",
        url: "#",
        description: "Fashion and beauty brand"
      },
      {
        name: "2840 Digital Solutions",
        logo: "/images/sponsors/2842.jpg",
        url: "https://2840digitalsolutions.com/",
        description: "Complete IT Solutions For Optimal Performance"
      },
      {
        name: "Black Boys Band",
        logo: "/images/sponsors/bbs.jpg",
        url: "#",
        description: "Ghana's premier highlife band"
      },
      {
        name: "Beyond Impact",
        logo: "/images/sponsors/beyond.png",
        url: "#",
        description: "HR consulting services"
      },
      {
        name: "Sedat Consult",
        logo: "/images/sponsors/sedat.jpg",
        url: "https://sedatconsultlimited.com/",
        description: "We help you grow your business to create wealth"
      },
      {
        name: "ICSP",
        logo: "/images/sponsors/icsp.jpg",
        url: "https://icspghana.com/",
        description: "We provide holisitic and specilized customer services..."
      },
      {
        name: "Channel One",
        logo: "/images/sponsors/c11.png",
        url: "https://channelonenewsonline.com/",
        description: "A privately owned TV Station based in Tesano..."
      },
      {
        name: "HH Factor",
        logo: "/images/sponsors/factor.jpg",
        url: "https://phillipsoutsourcing.net/",
        description: "..."
      },
      
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
          src="/images/conference-session-4.jpg"
          alt="Conference background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </section>

      {/* Sponsor Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {sponsorCategories.map((category, categoryIndex) => (
          <section key={category.name} className={`mb-20 ${categoryIndex !== 0 ? 'mt-24' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">{category.name}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.sponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
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
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#0A1C63] mb-2">{sponsor.name}</h3>
                      <p className="text-gray-700 mb-4 flex-grow">{sponsor.description}</p>
                      {sponsor.url && sponsor.url !== '#' && (
                        <div className="text-[#0A1C63] font-medium hover:underline flex items-center mt-auto">
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
        <section className="bg-[#0A1C63] text-white py-20 px-6 rounded-xl mt-24">
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
                <Link href="/sponsor" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white transition-colors"
                  >
                    View Opportunities
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
    </main>
  );
}