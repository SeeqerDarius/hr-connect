'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {FaPhone, FaEnvelope, FaPhotoVideo, FaTrophy, FaComments } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Updated sponsors data with new logos
const sponsors = [
  { name: "Nuffield Clinic", logo: "/images/sponsors/nuffieldclin.png" },
  { name: "Movenpick", logo: "/images/sponsors/movenpick.png" },
  { name: "Sweet Melody", logo: "/images/sponsors/10th-Ann-Logo.png" },
  { name: "Dalex", logo: "/images/sponsors/SWIFT-Logo.png" },
  { name: "ICS Africa", logo: "/images/sponsors/icsafrica.png" },
  { name: "Black Boys Band", logo: "/images/sponsors/bbs.jpg" },
  { name: "Perbi Cubs", logo: "/images/sponsors/PC-peach.png" },
  { name: "Pele", logo: "/images/sponsors/PELE-white.png" },
  { name: "Philips Outsourcing", logo: "/images/sponsors/philips.jpg" },
  { name: "HH Factor", logo: "/images/sponsors/factor.jpg" },
  { name: "ICSP", logo: "/images/sponsors/icsp.jpg" },
  { name: "Channel One", logo: "/images/sponsors/c11.png" },
  { name: "PCL", logo: "/images/sponsors/pcl.jpg" },
  { name: "Beyond Impact", logo: "/images/sponsors/beyond.png" },
  { name: "MX24 ", logo: "/images/sponsors/MX24LOGO-02.png" },
  { name: "2840 Digital Solutions", logo: "/images/sponsors/2842.jpg" },
  { name: "Citi FM", logo: "/images/sponsors/citi.png" },
  { name: "Sweet Melody", logo: "/images/sponsors/logog.webp" },
  { name: "Axis Human Capital", logo: "/images/sponsors/axis.jpg" },
];

// Featured speakers data (from speakers page)
const featuredSpeakers = [
  {
    id: 32,
    name: 'Cynthia Mawulawoe Kodowu',
    title: 'Founder, HR Network',
    bio: `Cynthia is a results and people driven C-Suite Leader with a proven track record of driving organizational growth, optimizing operations, and delivering exceptional results.`,
    imageUrl: '/images/speakers/cynthia.jpg',
    category: 'Convener'
  },
  {
    id: 1,
    name: 'Patricia Obo-Nai',
    title: 'CEO of Telecel Ghana',
    bio: `Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, now Telecel Ghana with over two decades of experience in IT and Telecommunications.`,
    imageUrl: '/images/speakers/PATRICIA-OBO-NAI.jpg',
    category: 'Guest Speaker'
  },
  {
    id: 22,
    name: 'Dr. Stella Agyenim-Boateng',
    title: 'Vice Chairman, Public Services Commission',
    bio: `Dr. (Mrs.) Irene Stella Agyenim-Boateng is a distinguished Ghanaian human resource management expert, transformational leader, and public sector executive.`,
    imageUrl: '/images/speakers/stella-agyenim-boateng.jpg',
    category: 'Keynote Speaker'
  },
  {
    id: 5,
    name: 'ERIC KOJO VAN-ESS KURANCHIE',
    title: 'Strategic HR Leader & Group Head of HR',
    bio: `Eric Kojo is a strategic HR expert with over 15 years experience in Talent and Change Management. He leads HR strategy at Bank of Africa Ghana.`,
    imageUrl: '/images/speakers/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
    category: 'M.C'
  }
];

// Post-conference gallery images
const galleryImages = [
  '/images/2025-conference/IMG-20250808-WA0064.jpg',
  '/images/2025-conference/IMG-20250808-WA0065.jpg',
  '/images/2025-conference/IMG-20250808-WA0066.jpg',
  '/images/2025-conference/IMG-20250808-WA0067.jpg',
  '/images/2025-conference/IMG-20250808-WA0068.jpg',
  '/images/2025-conference/IMG-20250808-WA0069.jpg',
];

export default function Home() {
  const backgroundImages = [
    '/images/2025-conference/IMG-20250808-WA0064.jpg',
   '/images/2025-conference/IMG-20250808-WA0078.jpg',
   '/images/2025-conference/IMG-20250808-WA0080.jpg',
  ];

  const highlights = [
    {
      icon: <FaPhotoVideo className="text-4xl mb-4 text-[#FF8C00]" />,
      title: "Memorable Moments",
      description: "Relive the powerful sessions, networking events, and special moments from HR Connect 2025"
    },
    {
      icon: <FaTrophy className="text-4xl mb-4 text-[#FF8C00]" />,
      title: "Key Takeaways",
      description: "Access presentations, insights, and resources shared by our expert speakers"
    },
    {
      icon: <FaComments className="text-4xl mb-4 text-[#FF8C00]" />,
      title: "Community Impact",
      description: "See how 100+ HR professionals connected and collaborated to shape the future of work"
    }
  ];

  return (
    <main className="bg-[#0A1C63] text-white">
      {/* Hero Section with Post-Conference Background */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full z-0"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A1C63]/70 z-10" />

        {/* Overlay text/content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 sm:px-6 md:px-10 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-0"
            >
              <div className="mb-0">
                <Image 
                  src="/images/logo/logo.png" 
                  alt="HR Connect Conference Logo"
                  width={400}
                  height={200}
                  className="mx-auto"
                  priority
                />
              </div>
              
              <span className="inline-block bg-[#FF8C00] text-white px-4 py-1 rounded-full text-sm font-bold mb-6"> 
                CONCLUDED • AUGUST 8, 2025
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Thank You for Making <span className="text-[#FF8C00]">HR Connect 2025</span> a Success!
            </motion.h1>

            <motion.p
              className="max-w-2xl mx-auto text-lg sm:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              We&apos;re grateful to the 100+ HR professionals who joined us at Movenpick Hotel, Accra for an unforgettable day of learning, networking, and innovation.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/gallery"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Event Gallery
              </Link>
              <Link
                href="/speakers"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Speaker Presentations
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-20 px-6 bg-white text-[#0A1C63]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#FF8C00]">Highlights</span> from HR Connect 2025
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              Relive the key moments and achievements from our successful conference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F9F9F9] p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section className="py-20 px-6 bg-[#0A1C63]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-[#FF8C00]">Speakers</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Thank you to our incredible speakers who shared their expertise and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSpeakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                        {speaker.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                      <p className="text-gray-200 text-sm">{speaker.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 line-clamp-3 mb-4">
                    {speaker.bio.slice(0, 150)}...
                  </p>
                  <Link href={`/speakers/${speaker.id}`} passHref>
                    <div className="text-[#0A1C63] font-medium hover:underline">View Full Profile</div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#0A1C63] mb-4">
              <span className="text-[#FF8C00]">Event</span> Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A visual journey through the memorable moments of HR Connect 2025
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`HR Connect 2025 event photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0A1C63] text-white font-bold py-3 px-8 rounded-full border border-[#0A1C63] transition-colors hover:bg-[#0A1C63]/90"
              >
                View Full Gallery
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Showcase Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0A1C63] mb-4">
              Our <span className="text-[#FF8C00]">Sponsors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Heartfelt thanks to our incredible partners who made HR Connect 2025 possible
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="w-32 h-24 relative">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Next Event Teaser Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#08174B] to-[#0A1C63] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Stay Tuned for <span className="text-[#FF8C00]">HR Connect 2026</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Subscribe to our newsletter to be the first to know about next year&apos;s event, speakers, and registration details.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Updates
              </Link>
              <a
                href="mailto:info@hrnetworkafrica.org"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0A1C63] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="mb-6">
              The HR Network is an association and community of high-performing and credible people management professionals who are focused on accelerating business results through strategic human capital best practices.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Event Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="hover:text-[#FF8C00]">Event Gallery</Link></li>
              <li><Link href="/speakers" className="hover:text-[#FF8C00]">Speaker Presentations</Link></li>
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
          <p>&copy; {new Date().getFullYear()} HR Network Africa. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}