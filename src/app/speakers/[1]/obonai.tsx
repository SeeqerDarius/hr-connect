'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SpeakerPage() {
  const speaker = {
    id: 1,
    name: 'Ing. Patricia Obo-Nai',
    title: 'CEO of Telecel Ghana',
    bio: 'Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, now Telecel Ghana.\n\nIng. Obo-Nai holds a BSc. in Electrical and Electronic Engineering from Kwame Nkrumah University of Science and Technology (KNUST), an Executive MBA in Project Management from University of Ghana Business School and has completed executive education programmes at the Kellogg School of Management USA, London Business School, and INSEAD in France.\n\nShe has over two decades of experience in IT and Telecommunications, working as Technology Director in both Millicom Ghana Limited (Tigo) and Telecel Ghana. She also led the Fixed Business and Customer Operations of Telecel Ghana prior to becoming CEO.\n\nShe is recognized for her leadership and has numerous awards to her credit. She is passionate about the future of the youth and women in the digital age and has been on several local and international platforms including the UN General Assembly panel sessions advocating for youth and women.\n\nA passionate advocate for STEM, she serves on several boards, including the KNUST Engineering Education Project, ABSA Bank Ghana and the Global Young Academy Advisory Board, Germany.\n\nShe is married with 3 children.',
    imageUrl: '/images/speakers/patricia-obo-nai.jpg',
    category: 'Leadership',
    keynoteTopic: 'The Future of Digital Transformation in Africa',
    keynoteType: 'Opening Keynote',
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/patriciaobo-nai',
      twitter: 'https://twitter.com/patriciaobonai'
    },
    achievements: [
      'First Ghanaian CEO of Vodafone Ghana (now Telecel Ghana)',
      'Recipient of the Telecom Industry CEO of the Year Award',
      'Named among Top 50 Women in Tech Africa',
      'UN General Assembly panelist on digital inclusion'
    ]
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 bg-[#0A1C63] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{speaker.name}</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">{speaker.title}</p>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link href="/speakers" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-[#0A1C63] hover:text-[#FF8C00] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Speakers
          </motion.button>
        </Link>
      </div>

      {/* Speaker Content */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Speaker Image and Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src={speaker.imageUrl}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#0A1C63] mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-[#FF8C00] text-white text-xs font-semibold px-2 py-1 rounded-full mr-3 mt-1">
                    Role
                  </span>
                  <span>{speaker.title}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FF8C00] text-white text-xs font-semibold px-2 py-1 rounded-full mr-3 mt-1">
                    Category
                  </span>
                  <span>{speaker.category}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FF8C00] text-white text-xs font-semibold px-2 py-1 rounded-full mr-3 mt-1">
                    Keynote
                  </span>
                  <span>{speaker.keynoteType}</span>
                </li>
              </ul>

              {speaker.socialMedia && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-[#0A1C63] mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    {speaker.socialMedia.linkedin && (
                      <a href={speaker.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#0077B5] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {speaker.socialMedia.twitter && (
                      <a href={speaker.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#1DA1F2] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Speaker Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold text-[#0A1C63] mb-4">Keynote Topic</h2>
              <h3 className="text-xl text-[#FF8C00] font-semibold mb-4">"{speaker.keynoteTopic}"</h3>
              <p className="text-gray-700">
                Join Ing. Patricia Obo-Nai as she shares insights on Africa's digital transformation journey, 
                the role of telecommunications in economic development, and how businesses can leverage 
                technology for growth in the digital age.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1C63] mb-4">Biography</h2>
              <p className="text-gray-700 whitespace-pre-line">{speaker.bio}</p>
            </div>

            {speaker.achievements && speaker.achievements.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0A1C63] mb-4">Notable Achievements</h2>
                <ul className="space-y-3">
                  {speaker.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FF8C00] mr-3 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-[#0A1C63] text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Session Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#FF8C00] mb-2">Date & Time</h3>
                  <p className="text-white">October 15, 2024</p>
                  <p className="text-white">10:00 AM - 11:30 AM</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#FF8C00] mb-2">Location</h3>
                  <p className="text-white">Main Auditorium</p>
                  <p className="text-white">Accra International Conference Center</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-[#FF8C00] hover:bg-[#FF6D00] text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Add to Schedule
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Speakers Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A1C63] mb-8 text-center">Other Speakers You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Speaker 1 */}
            <Link href="/speakers/2" passHref>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 cursor-pointer"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/speakers/oscar-bimpong.jpg"
                    alt="Oscar Bimpong"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    Mindset
                  </span>
                  <h3 className="text-xl font-bold text-[#0A1C63] mb-1">Oscar Bimpong</h3>
                  <p className="text-gray-600 text-sm">Founder, Train2inspire Consultancy</p>
                </div>
              </motion.div>
            </Link>

            {/* Speaker 2 */}
            <Link href="/speakers/3" passHref>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 cursor-pointer"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/speakers/Mr-Kojo-Amissah.jpg"
                    alt="Kojo Amissah"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    HR Strategy
                  </span>
                  <h3 className="text-xl font-bold text-[#0A1C63] mb-1">Kojo Amissah</h3>
                  <p className="text-gray-600 text-sm">Strategy & Performance Consultant -CITAM</p>
                </div>
              </motion.div>
            </Link>

            {/* Speaker 3 */}
            <Link href="/speakers/4" passHref>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 cursor-pointer"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/speakers/Patricia-Ama-Kissi.jpg"
                    alt="Patricia Ama Kissi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    Technology
                  </span>
                  <h3 className="text-xl font-bold text-[#0A1C63] mb-1">Patricia Ama Kissi</h3>
                  <p className="text-gray-600 text-sm">CEO SEDAT Consult</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}