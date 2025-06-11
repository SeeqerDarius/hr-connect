'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const backgroundImages = [
  '/images/conference-session-0.jpg',
  '/images/conference-session-1.jpg',
  '/images/conference-session-4.jpg',
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section with Sliding Background */}
      <section className="relative h-96 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Shaping the future of HR in West Africa through innovation and leadership
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#FF8C00]">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-6">
              HR Connect is West Africa&apos;s premier HR leadership event, uniting professionals to explore innovation,
              wellness, data strategy, and workplace transformation.
            </p>
            <p className="text-lg leading-relaxed">
              Since our founding in 2015, we&apos;ve grown to become the region&apos;s most influential HR network, with over 5,000 professionals attending our annual conference and year-round events.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src="/images/conference-session-1.jpg" 
              alt="HR Connect Team" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <p className="text-white text-lg font-medium">Our team at the 2024 Leadership Summit</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-[#F9F9F9] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-[#0A1C63]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Principles
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              title: "Mission",
              content: "To empower HR professionals in West Africa by advancing innovation, inclusivity, and leadership excellence.",
              icon: "🎯"
            },
            {
              title: "Vision",
              content: "To be the leading HR network transforming workplaces and cultures across Africa.",
              icon: "🔮"
            },
            {
              title: "Values",
              content: "Integrity, collaboration, innovation, leadership, and growth.",
              icon: "❤️"
            }].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#FF8C00] mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Professional Commitment */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FF8C00]">Our Professional Commitment</h2>
            <ul className="space-y-4">
              {[
                'Setting the Standard: We uphold the highest HR standards and ethics.',
                'Leading with Integrity: We promote professionalism and transparency.',
                'Valuing People: We prioritize employee growth, engagement, and success.',
                'Exceeding Expectations: We deliver excellence every step of the way.',
                'Driving Innovation: We embrace new ideas to transform workplaces.'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#FF8C00] mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[{
              src: "/images/HR-worksop.jpg", alt: "HR Workshop", label: "Interactive Workshop Session"
            },
            {
              src: "/images/HR-AWARD.jpg", alt: "Award Ceremony", label: "Annual HR Excellence Awards"
            },
            {
              src: "/images/expert-pannel.jpg", alt: "Expert Panel", label: "Industry Expert Panel"
            },
            {
              src: "/images/Networking.jpg", alt: "Networking", label: "Professional Networking"
            }].map((img, i) => (
              <div key={i} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white text-sm">{img.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0A1C63] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#FF8C00]">What People Say About Us</h2>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            className="pb-12"
          >
            {[{
              quote: 'HR Connect transformed my approach to talent management. The insights I gained have been invaluable to my organization.',
              name: 'Ama Mensah',
              title: 'HR Director, Tech Solutions Ltd'
            },
            {
              quote: 'The best HR conference in West Africa. The quality of speakers and networking opportunities are unmatched.',
              name: 'Kwame Ofori',
              title: 'Head of People, FinCorp Africa'
            },
            {
              quote: 'Attending HR Connect was a career-defining moment. I returned to my company with innovative strategies that improved our employee engagement by 40%.',
              name: 'Ngozi Okonjo',
              title: 'Chief HR Officer, Pan-African Group'
            }].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#08174B] p-8 rounded-xl text-center max-w-3xl mx-auto">
                  <p className="text-xl italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-300">{testimonial.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
