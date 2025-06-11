'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './components/CountdownTimer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Home() {
  const backgroundImages = [
    '/images/conference.jpg',
    '/images/conference-session-1.jpg',
    '/images/conference-session-2.jpg',
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
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold text-[#FF8C00] mb-4"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HR CONNECT CONFERENCE
            </motion.h1>

            <motion.p
              className="italic text-lg text-gray-200 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Theme
            </motion.p>

            <motion.h2
              className="text-xl sm:text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              EMPOWERING HR EXCELLENCE
            </motion.h2>

            <motion.p
              className="max-w-2xl mx-auto text-base sm:text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Leveraging data, resilience, and wellness for a thriving workplace.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg font-semibold text-[#FF8C00]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              8th August, 2025 @ Movenpick Hotel, Accra
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="/register?type=standard"
                className="bg-white text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-full font-extrabold text-base sm:text-lg shadow-2xl transition-all duration-300"
              >
                FEE GHS 1,500
              </a>
              <a
                href="/register?type=earlybird"
                className="bg-white text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-full font-extrabold text-base sm:text-lg shadow-2xl transition-all duration-300"
              >
                EARLY BIRD GHS 1,250
              </a>
              <a
                href="/register?type=online"
                className="bg-white text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-full font-extrabold text-base sm:text-lg shadow-2xl transition-all duration-300"
              >
                ONLINE GHS 1,000
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timer Section */}
      <CountdownTimer />

      {/* Partner Section */}
      <section className="bg-[#08174B] py-20 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#FF8C00]">Become a Partner</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join us in shaping the future of HR. Become a strategic partner or sponsor and showcase your brand to top HR leaders.
        </p>
        <a
          href="/sponsor"
          className="bg-white text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-full font-extrabold text-base sm:text-lg shadow-2xl transition-all duration-300"
        >
          Partner With Us
        </a>
      </section>
    </main>
  );
}
