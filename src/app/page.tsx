'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './components/CountdownTimer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaChartLine, FaHandshake, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Sponsor data (logos only)
const sponsors = [
  { name: "Nuffield Clinic", logo: "/images/sponsors/nuffieldclinic.png" },
  { name: "Movenpick", logo: "/images/sponsors/movenpick.png" },
  { name: "Sweet Melody", logo: "/images/sponsors/10th-Ann-Logo.png" },
  { name: "Dalex", logo: "/images/sponsors/Dalex-Logo-tfid.jpg" },
  { name: "ICS Africa", logo: "/images/sponsors/icsafrica.png" },
  { name: "Black Boys Band", logo: "/images/sponsors/IMG_9612.png" },
  { name: "Perbi Cubs", logo: "/images/sponsors/PC-peach.png" },
  { name: "Pele", logo: "/images/sponsors/PELE-white.png" },
  { name: "Philips Outsourcing", logo: "/images/sponsors/philips.jpg" },
  { name: "HH Factor", logo: "/images/sponsors/factor.jpg" },
];

// Featured speakers data (from speakers page)
const featuredSpeakers = [
  {
    id: 22,
    name: 'Dr. Stella Agyenim-Boateng',
    title: 'Vice Chairman, Public Services Commission',
    bio: `Dr. (Mrs.) Irene Stella Agyenim-Boateng is a distinguished Ghanaian human resource management expert, transformational leader, and public sector executive with over three decades of experience spanning the education, telecommunications, insurance, consultancy, and energy sectors.`,
    imageUrl: '/images/speakers/stella-agyenim-boateng.jpg',
    category: 'Keynote Speaker'
  },
  {
    id: 21,
    name: 'Margaret Jackson',
    title: 'Managing Partner, Rainbow Consult',
    bio: `Margaret Jackson, FLPI is the Managing Partner of Rainbow Consult. She is a Fellow of the Learning and Performance Institute with extensive experience in HR leadership.`,
    imageUrl: '/images/speakers/MJ-Headshot.png',
    category: 'Keynote Speaker'
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
    id: 2,
    name: 'Oscar Bimpong',
    title: 'Founder, Train2inspire Consultancy',
    bio: `Oscar Bimpong is the Founder and CEO of Train2inspire Consultancy with operations in both the UK and Ghana. He is a Mindset Transformation Consultant with over 17 years of experience.`,
    imageUrl: '/images/speakers/Oscar-Bimpong.jpg',
    category: 'Masterclass Trainer'
  }
];

export default function Home() {
  const backgroundImages = [
    '/images/conference.jpg',
    '/images/conference-session-1.jpg',
    '/images/conference-session-2.jpg',
  ];

  const features = [
    {
      icon: <FaUsers className="text-4xl mb-4 text-[#FF8C00]" />,
      title: "Networking",
      description: "Connect with 500+ HR professionals and industry leaders"
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-[#FF8C00]" />,
      title: "Insights",
      description: "Learn from top experts about HR trends and innovations"
    },
    {
      icon: <FaHandshake className="text-4xl mb-4 text-[#FF8C00]" />,
      title: "Partnerships",
      description: "Discover new business opportunities and collaborations"
    }
  ];

  return (
    <main className="bg-[#0A1C63] text-white">
      {/* Hero Section with Sliding Background */}
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
              className="mb-6"
            >
              <div className="mb-8">
                <Image 
                  src="/images/hr-connect-logo.png" 
                  alt="HR Connect Conference Logo"
                  width={400}
                  height={200}
                  className="mx-auto"
                  priority
                />
              </div>
              
              <span className="inline-block bg-[#FF8C00] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                2025 EDITION
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Empowering <span className="text-[#FF8C00]">HR Excellence:</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
            >
              <div className="flex items-center justify-center">
                <FaCalendarAlt className="text-[#FF8C00] mr-2" />
                <span>8th August, 2025</span>
              </div>
              <div className="flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#FF8C00] mr-2" />
                <span>Movenpick Hotel, Accra</span>
              </div>
            </motion.div>

            <motion.p
              className="max-w-2xl mx-auto text-lg sm:text-xl mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Join Africa&apos;s premier HR conference to explore data-driven strategies, resilience, and wellness for thriving workplaces.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/register?type=standard"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Standard (GHS 1,500)
              </Link>
              <Link
                href="/register?type=online"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Online (GHS 1,000)
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <CountdownTimer />

      {/* Features Section */}
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
              Why Attend <span className="text-[#FF8C00]">HR Connect 2025</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              Discover the key benefits of joining Africa&apos;s most impactful HR conference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F9F9F9] p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section className="py-20 px-6 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#0A1C63] mb-4">
              Featured <span className="text-[#FF8C00]">Speakers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from industry leaders and HR experts at the forefront of workplace innovation
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
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
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

          <div className="text-center mt-12">
            <Link href="/speakers" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0A1C63] text-white font-bold py-3 px-8 rounded-full border border-[#0A1C63] transition-colors hover:bg-[#0A1C63]/90"
              >
                View All Speakers
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#08174B] to-[#0A1C63] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#FF8C00]">Partner</span> With Us
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Align your brand with Africa&apos;s premier HR event and gain access to top HR decision-makers.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/sponsor"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Sponsorship Packages
              </Link>
              <a
                href="mailto:info@hrnetworkafrica.org"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Partnership Team
              </a>
            </div>
          </motion.div>
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
              We&lsquo;re grateful to our partners who make this event possible
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

          <div className="text-center mt-12">
            <Link href="/sponsors" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0A1C63] text-white font-bold py-3 px-8 rounded-full border border-[#0A1C63] transition-colors hover:bg-[#0A1C63]/90"
              >
                View All Sponsors
              </motion.button>
            </Link>
          </div>
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