'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const speakerBackgrounds = [
  '/images/Mr-Kojo-Amissah.jpg',
  '/images/Patricia-Ama-Kissi.jpg',
  '/images/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
  '/images/speakers/patricia-obo-nai.jpg',
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
  {
    id: 1,
    name: 'Ing. Patricia Obo-Nai',
    title: 'CEO of Telecel Ghana',
    bio: `Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, now Telecel Ghana.

Ing. Obo-Nai holds a BSc. in Electrical and Electronic Engineering from KNUST, an Executive MBA in Project Management from University of Ghana Business School and has completed executive education programmes at the Kellogg School of Management USA, London Business School, and INSEAD in France.

She has over two decades of experience in IT and Telecommunications, working as Technology Director in both Millicom Ghana Limited (Tigo) and Telecel Ghana. She also led the Fixed Business and Customer Operations of Telecel Ghana prior to becoming CEO.

She is recognized for her leadership and has numerous awards to her credit. She is passionate about the future of the youth and women in the digital age and has been on several local and international platforms including the UN General Assembly.

She serves on several boards, including KNUST Engineering Education Project, ABSA Bank Ghana, and the Global Young Academy Advisory Board, Germany.`,
    imageUrl: '/images/speakers/patricia-obo-nai.jpg',
    category: 'Leadership'
  },
  {
    id: 2,
    name: 'Oscar Bimpong',
    title: 'Founder, Train2inspire Consultancy',
    bio: `Oscar Bimpong is the Founder and CEO of Train2inspire Consultancy with operations in both the UK and Ghana. He is a Mindset Transformation Consultant, Corporate Trainer, and Keynote Speaker with over 17 years of experience.

He is the author of "Mindset Revolution: Re-engineering Your Mind from Prison to Purpose" and three other books focused on mindset development.

Oscar is BBC-trained in radio operations and media production and has earned numerous awards. He currently lectures at Arden University and leads mindset initiatives across Africa.`,
    imageUrl: '/images/speakers/oscar-bimpong.jpg',
    category: 'Mindset'
  },
  {
    id: 3,
    name: 'Kojo Amissah',
    title: 'Strategy & Performance Consultant - CITAM',
    bio: `Kojo Amissah is a Consultant at CITAM leading training, consulting, and staffing. He also teaches SHRM-CP and SHRM-SCP certification courses.

He specializes in strategic planning, leadership, performance management, and HR development. He holds a BS in Computer Science, an MBA in Entrepreneurship, and certifications including SHRM-SCP and SPHR.`,
    imageUrl: '/images/speakers/Mr-Kojo-Amissah.jpg',
    category: 'HR Strategy'
  },
  {
    id: 4,
    name: 'Patricia Ama Kissi',
    title: 'CEO SEDAT Consult',
    bio: `Patricia Ama Kissi has over 15 years in artificial intelligence research with multiple publications. She leads AI accessibility and ethics initiatives and is a regular speaker at international tech conferences.`,
    imageUrl: '/images/speakers/Patricia-Ama-Kissi.jpg',
    category: 'Technology'
  },
  {
    id: 5,
    name: 'ERIC KOJO VAN-ESS KURANCHIE',
    title: 'AI Research Lead, TechFuture',
    bio: `Eric Kojo is a strategic HR expert with over 15 years experience in Talent and Change Management. He leads HR strategy at Bank of Africa Ghana and has worked with ProCredit SLC, NND Digital, and Millennium Insurance.

He holds an MSc in Development Management, an Executive MBA in HRM, and a BSc in Business Management. He regularly speaks at corporate events such as Citi FM’s Corporate Business Bootcamp.`,
    imageUrl: '/images/speakers/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
    category: 'Technology'
  },
];

export default function SpeakersPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Slider */}
      <section className="relative h-96 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {speakerBackgrounds.map((image, i) => (
            <SwiperSlide key={i}>
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Distinguished Speakers</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">Industry leaders shaping the future of business and tech</p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Meet Our 2024 Speaker Lineup</h2>
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
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <Link href={`/speakers/${speaker.id}`} passHref>
                <div className="relative h-64 w-full cursor-pointer">
                  <Image src={speaker.imageUrl} alt={speaker.name} fill className="object-cover" />
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
                  <p className="text-gray-700 line-clamp-3 mb-4">{speaker.bio.slice(0, 150)}...</p>
                  <div className="text-[#0A1C63] font-medium hover:underline">View Full Profile</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Keynote Section */}
      <section className="bg-[#F9F9F9] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Featured Keynote Speakers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our headline speakers bringing transformative insights</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Link href="/speakers/1" passHref>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-xl overflow-hidden shadow-xl cursor-pointer"
              >
                <Image
                  src="/images/speakers/patricia-obo-nai-keynote.jpg"
                  alt="Patricia Obo-Nai Keynote"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Ing. Patricia Obo-Nai</h3>
                    <p className="text-gray-200 mb-4">"The Future of Digital Transformation in Africa"</p>
                    <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full">Opening Keynote</span>
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link href="/speakers/2" passHref>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-xl overflow-hidden shadow-xl cursor-pointer"
              >
                <Image
                  src="/images/speakers/oscar-bimpong-keynote.jpg"
                  alt="Oscar Bimpong Keynote"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Oscar Bimpong</h3>
                    <p className="text-gray-200 mb-4">"Mindset Revolution: From Prison to Purpose"</p>
                    <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full">Closing Keynote</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1C63] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Us For This Transformative Experience</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Reserve your spot today to learn from these industry leaders and network with peers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF8C00] hover:bg-[#FF6D00] text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Register Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white transition-colors"
              >
                View Full Agenda
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
