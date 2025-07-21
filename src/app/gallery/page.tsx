'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const galleryImages = [
  '/images/conference-2019.jpg',
  '/images/conference-key-note-speaker.jpg',
  '/images/conference-session-0.jpg',
  '/images/conference-session-1.jpg',
  '/images/conference-session-2.jpg',
  '/images/conference-session-4.jpg',
  '/images/expert-pannel.jpg',
  '/images/HR-AWARD.jpg',
  '/images/HR-worksop.jpg',
  '/images/IMG-20191215-WA0007.jpg',
  '/images/IMG-20191215-WA0008.jpg',
  '/images/IMG-20191215-WA0009.jpg',
  '/images/IMG-20191215-WA0010.jpg',
  '/images/IMG-20191215-WA0011.jpg',
  '/images/IMG-20191215-WA0012.jpg',
  '/images/IMG-20191215-WA0013.jpg',
  '/images/IMG-20191215-WA0014.jpg',
  '/images/IMG-20191215-WA0015.jpg',
  '/images/IMG-20191215-WA0016.jpg',
  '/images/IMG-20191215-WA0019.jpg',
  '/images/IMG-20191215-WA0020.jpg',
  '/images/IMG-20191215-WA0021.jpg',
  '/images/IMG-20191215-WA0022.jpg',
  '/images/IMG-20191215-WA0023.jpg',
  '/images/IMG-20191215-WA0024.jpg',
  '/images/IMG-20191215-WA0003.jpg',
  '/images/IMG-20191215-WA0007.jpg',
  '/images/IMG-20191215-WA0008.jpg',
  '/images/IMG-20191215-WA0009.jpg',
  '/images/IMG-20191215-WA0010.jpg',
  '/images/IMG-20191215-WA0011.jpg',
  '/images/IMG-20191215-WA0012.jpg',
  '/images/IMG-20191217-WA0013.jpg',
  '/images/IMG-20191217-WA0014.jpg',
  '/images/IMG-20191217-WA0015.jpg',
  '/images/IMG-20191217-WA0016.jpg',
  '/images/IMG-20191217-WA0017.jpg',
  '/images/IMG-20191217-WA0019.jpg',
  '/images/IMG-20191217-WA0020.jpg',
  '/images/IMG-20250624-WA0018.jpg',
  '/images/IMG-20250624-WA0019.jpg',
  '/images/IMG-20250624-WA0016.jpg',
  '/images/.jpg',
  








  
 
 
  
];

export default function GalleryPage() {
  return (
    <main className="bg-[#0A1C63] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#FF8C00] mb-4">Event Gallery</h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
              Relive the memorable moments from our past events
            </p>
          </motion.div>
        </div>
        <Image
          src="/images/gallery/hero-bg.jpg"
          alt="Gallery background"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Featured Gallery Slider */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">Featured Moments</h2>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto"></div>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index} className="w-64 md:w-96">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Full Gallery Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">Full Gallery</h2>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">View Photo</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0A1C63] to-[#1E3A8A] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Join Us Next Time!</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't miss out on creating more amazing memories at our next event
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF8C00] hover:bg-[#FF6B00] text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Register Interest
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}