'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './components/CountdownTimer';

export default function Home() {
  return (
    <main className="bg-[#0A1C63] text-white">

      {/* Hero Section */}
      <section className="text-center py-20 px-4 sm:px-6 md:px-10">
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
          <span className="bg-[#D63384] text-white px-6 py-2 rounded font-bold text-sm sm:text-base">FEE GHS 1,500</span>
          <span className="bg-[#1DA1A3] text-white px-6 py-2 rounded font-bold text-sm sm:text-base">EARLY BIRD GHS 1,250</span>
          <span className="bg-[#F39C12] text-black px-6 py-2 rounded font-bold text-sm sm:text-base">ONLINE GHS 1,000</span>
        </motion.div>
      </section>

      {/* Countdown */}
      <CountdownTimer />

      {/* Become a Partner CTA */}
      <section className="bg-[#08174B] py-20 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#FF8C00]">Become a Partner</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join us in shaping the future of HR. Become a strategic partner or sponsor and showcase your brand to top HR leaders.
        </p>
        <a
          href="/register"
          className="inline-block bg-[#FF8C00] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          Partner With Us
        </a>
      </section>

      {/* Floating Register Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <a
          href="/register"
          className="bg-white text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-full font-extrabold text-base sm:text-lg shadow-2xl transition-all duration-300"
        >
          Register Now
        </a>
      </div>

    </main>
  );
}
