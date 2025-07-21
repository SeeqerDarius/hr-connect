'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Link from 'next/link';

const speakerBackgrounds = [
  '/images/IMG-20250610-WA0018.jpg',
];

interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  category?: string;
}

const speakers: Speaker[] = [
  // ... (keep your existing speakers array exactly as is)
];

export default function SpeakersPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Slider - unchanged */}
      <section className="relative h-96 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {speakerBackgrounds.map((image, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="h-full w-full relative"
              >
                <Image
                  src={image}
                  alt="Conference speakers background"
                  fill
                  priority={i === 0}
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Distinguished Speakers</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">Industry leaders shaping the future of business and tech</p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid - modified */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Meet Our 2025 Speaker Lineup</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thought leaders, innovators, and industry pioneers sharing their expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={speaker.imageUrl}
                  alt={`${speaker.name}, ${speaker.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                  {speaker.bio.startsWith('????') ? 'Profile coming soon' : `${speaker.bio.slice(0, 150)}...`}
                </p>
                {!speaker.bio.startsWith('????') && (
                  <Link href={`/speakers/${speaker.id}`} className="text-[#0A1C63] font-medium hover:underline">
                    View Full Profile
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Keynote Section */}
      {/* CTA Section */}
    </main>
  );
}