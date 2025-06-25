'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './components/CountdownTimer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

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
              {/* Logo as Heading */}
              <div className="mb-8">
               <Image 
  src="/images/HRCONFERENCELOGO.png" 
  alt="HR Connect Conference Logo"
  width={600}
  height={200}
  className="mx-auto"
  priority
/>              </div>
              
              <span className="inline-block bg-[#FF8C00] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                2025 EDITION
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Empowering <span className="text-[#FF8C00]">HR Excellence</span> Across Africa
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
              Join Africa's premier HR conference to explore data-driven strategies, resilience, and wellness for thriving workplaces.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="/register?type=standard"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Standard (GHS 1,500)
              </a>
              <a
                href="/register?type=earlybird"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105">
                Early Bird (GHS 1,250)
              </a>
              <a
                href="/register?type=online"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105" >
                Online (GHS 1,000)
              </a>
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
              Discover the key benefits of joining Africa's most impactful HR conference
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
              Align your brand with Africa's premier HR event and gain access to top HR decision-makers.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/sponsor"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Sponsorship Packages
              </a>
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

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-white text-[#0A1C63]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">
              What <span className="text-[#FF8C00]">Attendees</span> Say
            </h2>
            <div className="bg-[#F9F9F9] p-8 rounded-xl shadow-md">
              <blockquote className="text-xl italic mb-6">
                "HR Connect transformed how we approach talent management. The insights we gained helped us increase employee retention by 30%."
              </blockquote>
              <p className="font-bold">— HR Director, Leading Financial Institution</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}