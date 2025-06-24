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

export default function SpeakersPage() {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: 'Ing. Patricia Obo-Nai',
      title: 'CEO of Telecel Ghana',
      bio: 'Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, now Telecel Ghana.\n\nIng. Obo-Nai holds a BSc. in Electrical and Electronic Engineering from Kwame Nkrumah University of Science and Technology (KNUST), an Executive MBA in Project Management from University of Ghana Business School and has completed executive education programmes at the Kellogg School of Management USA, London Business School, and INSEAD in France.\n\nShe has over two decades of experience in IT and Telecommunications, working as Technology Director in both Millicom Ghana Limited (Tigo) and Telecel Ghana. She also led the Fixed Business and Customer Operations of Telecel Ghana prior to becoming CEO.\n\nShe is recognized for her leadership and has numerous awards to her credit. She is passionate about the future of the youth and women in the digital age and has been on several local and international platforms including the UN General Assembly panel sessions advocating for youth and women.\n\nA passionate advocate for STEM, she serves on several boards, including the KNUST Engineering Education Project, ABSA Bank Ghana and the Global Young Academy Advisory Board, Germany.\n\nShe is married with 3 children.',
      imageUrl: '/images/speakers/patricia-obo-nai.jpg',
      category: 'Leadership'
    },
    {
      id: 2,
      name: 'Oscar Bimpong',
      title: 'Founder, Train2inspire Consultancy',
      bio: 'Oscar Bimpong is the Founder and CEO of Train2inspire Consultancy, a distinguished business training and development firm with operations in both the UK and Ghana. Oscar is an internationally recognised Mindset Transformation Consultant, Corporate Trainer, and Keynote Speaker, with over 17 years of experience in coaching, training, and speaking engagements across the globe.\n\nHe is the author of the internationally acclaimed book, "Mindset Revolution: Re-engineering Your Mind from Prison to Purpose". The book underscores a powerful message: the most dangerous prison is not one with physical walls, but the prison of the mind. As Oscar powerfully articulates, an imprisoned mind results in an imprisoned life. In addition to this seminal work, he has authored three other books, all centred on empowering individuals and organisations to realise their full potential through mindset transformation.\n\nThe central objective of his writings and training programs is to reshape negative thought patterns into goal-oriented mindsets, enabling individuals to align their personal aspirations with the vision, mission, and core values of their organisations.\n\nOscar is also BBC-trained in radio operations and media production, having contributed extensively to community radio and educational initiatives in the UK. His commitment to corporate mindset transformation and youth empowerment has earned him numerous awards and recognitions in the UK and beyond.\n\nCurrently, he serves as an Associate Lecturer at Arden University, Nelson College, and the Global Banking School in London, where he imparts his expertise to the next generation of business professionals. His work also extends deeply into Africa, where he continues to lead initiatives aimed at promoting mindset transformation across the continent.',
      imageUrl: '/images/speakers/oscar-bimpong.jpg',
      category: 'Mindset'
    },
    {
      id: 3,
      name: 'Kojo Amissah',
      title: 'Strategy & Performance Consultant -CITAM',
      bio: 'Kojo Amissah is a Strategy and Performance Consultant at CITAM, where he leads high-impact training, consulting, and staffing services. He also serves as the lead instructor for the SHRM-CP and SHRM-SCP certification prep courses.\n\nKojo brings extensive consulting and training experience in areas such as strategic planning, leadership and change management, performance management, competency management, and compensation and benefits. He has worked across various sectors, including oil and gas, mining, manufacturing, finance, and the public sector, supporting a wide range of organizational development initiatives.\n\nHe holds a BS in Computer Science, an MBA in Entrepreneurship, and professional certifications including SHRM-SCP and SPHR.\n\nKojo simply loves all things HR.',
      imageUrl: '/images/speakers/Mr-Kojo-Amissah.jpg',
      category: 'HR Strategy'
    },
    {
      id: 4,
      name: 'Patricia Ama Kissi',
      title: 'CEO SEDAT Consult',
      bio: '15+ years in artificial intelligence research with publications in top-tier journals. Leads initiatives to make AI more accessible and ethical. Regular speaker at international tech conferences.',
      imageUrl: '/images/speakers/Patricia-Ama-Kissi.jpg',
      category: 'Technology'
    },
    {
      id: 5,
      name: 'ERIC KOJO VAN-ESS KURANCHIE',
      title: 'AI Research Lead, TechFuture',
      bio: 'Strategic HR expert with 15+ years experience in Talent Management, Change Management, and International HR. Currently leads HR strategy at Bank of Africa Ghana. Previously headed Human Capital at ProCredit SLC. HR consultant for multiple organizations including NND Digital and Millennium Insurance.\n\nHolds MSc in Development Management (KNUST), Executive MBA in HRM (University of Ghana), BSc in Business Management (Central University), and HND in Mechanical Engineering. Regular HR resource person for Citi FM Corporate Business Bootcamp.\n\nAreas of expertise: Recruitment, Performance Management, Learning & Development, Compensation & Benefits, Labour Relations, Succession Planning, Customer Service Management, and Corporate Communications.',
      imageUrl: '/images/speakers/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
      category: 'Technology'
    },
  ];

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
          {speakerBackgrounds.map((image, index) => (
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Distinguished Speakers</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Industry leaders shaping the future of business and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid Section */}
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
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover"
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
                    {speaker.bio.substring(0, 150)}...
                  </p>
                  <div className="text-[#0A1C63] font-medium hover:underline focus:outline-none">
                    View Full Profile
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Keynote Highlight */}
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our headline speakers bringing transformative insights
            </p>
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
                    <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Opening Keynote
                    </span>
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
                    <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Closing Keynote
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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