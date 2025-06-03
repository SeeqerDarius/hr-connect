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

      {/* Countdown Section */}
      <CountdownTimer />
    </main>
  );
}
