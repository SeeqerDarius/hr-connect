'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const speakerBackgrounds = [
  '/images/banner.jpg',
];

// Helper function to handle "????" values
const handleComingSoon = (value: string) => {
  return value.trim() === '????' ? 'Coming Soon' : value;
};

// Speakers grouped by category in the requested order
const speakersByCategory = {
  "Convener & Guest": [
     {
      id: 32,
      name: 'Cynthia Mawulawoe Kodowu',
      title: 'Founder, HR Network',
      bio: 'Cynthia is a results and people driven C-Suite Leader with a proven track record of driving organizational growth, optimizing operations, and delivering exceptional results. She is a strategic thinker with a passion for innovation and a commitment to excellence. Her 15+ year career has dedicated her attention to positively impacting medium businesses, HR professionals and departments. She is especially skilled in Strategic Leadership, Risk Management, Change Management, Financial Management, P & L Management, Business Development, Stakeholder Relations, Team Building, and Human Resource Management.',
      imageUrl: '/images/speakers/cynthia.jpg',
      category: 'Convener'
    },
    {
      id: 1,
      name: 'Patricia Obo-Nai',
      title: 'CEO of Telecel Ghana',
      bio: 'Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, now Telecel Ghana with over two decades of experience in IT and Telecommunications.',
      imageUrl: '/images/speakers/PATRICIA-OBO-NAI.jpg',
      category: 'Guest Speaker'
    },
   
  ],
  "MCs": [
    {
      id: 5,
      name: 'ERIC KOJO VAN-ESS KURANCHIE',
      title: 'Group Head, HR & Administration, Bank of Africa Ghana | Strategic HR Leader | Corporate MC & HR Educator',
      bio: 'Eric Kojo is a strategic HR expert with over 15 years experience in Talent and Change Management. He leads HR strategy at Bank of Africa Ghana.',
      imageUrl: '/images/speakers/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
      category: 'M.C'
    },
    {
      id: 34,
      name: 'Eunice Dede Tornyi',
      title: 'Award-Winning Media Professional | Diplomacy Expert | Host, African Women’s Voices Show',
      bio: 'Eunice Dede Tornyi is the award winning host of the African Women&apos;s Voices Show with 17 years of experience in TV presenting and production.',
      imageUrl: '/images/speakers/co-mc.jpg',
      category: 'Co M.C'
    }
  ],
  "Keynote Speakers": [
    {
      id: 10,
      name: 'Dr. Cheryl Arutt',
      title: 'Clinical & Forensic Psychologist | Trauma & Resilience Expert | TEDx Speaker | Certified EMDRIA Consultant ',
      bio: 'Dr. Cheryl Arutt is a licensed clinical & forensic psychologist, TEDx speaker, media consultant and Certified EMDRIA Therapist & Consultant based in Los Angeles.',
      imageUrl: '/images/speakers/Dr.-Cheryl-Arutt.jpg',
      category: 'Plenary Speaker'
    },
    {
      id: 22,
      name: 'Dr. Stella Agyenim-Boateng',
      title: 'Vice Chairman, Public Services Commission | HR Transformation Expert',
      bio: 'Dr. (Mrs.) Irene Stella Agyenim-Boateng is a distinguished Ghanaian human resource management expert, transformational leader, and public sector executive with over three decades of experience spanning the education, telecommunications, insurance, consultancy, and energy sectors.',
      imageUrl: '/images/speakers/stella-agyenim-boateng.jpg',
      category: 'Keynote Speaker'
    },
    {
      id: 21,
      name: 'Margaret Jackson',
      title: 'Managing Partner, Rainbow Consult | Board Chair, HR Network Africa',
      bio: 'Margaret Jackson, FLPI is the Managing Partner of Rainbow Consult. She is a Fellow of the Learning and Performance Institute with extensive experience in HR leadership.',
      imageUrl: '/images/speakers/MJ-Headshot.png',
      category: 'Keynote Speaker'
    },
    {
      id: 15,
      name: 'Laury-Georges-Lane',
      title: 'CEO, LGL Consulting & Executive Advisory Group | Global HR & Mediation Expert',
      bio: 'Laury Georges-Lane, a former Human Resources executive and legal professional with 27 years of experience, is now at the helm of two consulting firms specializing in HR advisory services.',
      imageUrl: '/images/speakers/laury-georges-lane.png',
      category: 'Keynote Speaker'
    },
  ],
  "Panel Members": [
    {
      id: 30,
      name: 'Georgia Manfreda Appiah',
      title: 'Managing Partner & Chief Operating Officer, Nuffield Clinic',
      bio: 'Giorgia Manfreda Appiah is a dynamic leader with over a decade of experience in human resource management, company operations, and strategic leadership. She is the Managing Partner and Chief Operating Officer of Nuffield Clinic.',
      imageUrl: '/images/speakers/giorgia-manfreda-appiah.jpg',
      category: 'Panel Member'
    },
     {
      id: 34,
      name: 'Arthi Rabikrisson',
      title: 'Founder and Managing Director of Prerna Advisory',
      bio: 'Arthi Rabikrisson is the Founder and Managing Director of Prerna Advisory, based in South Africa. The firm specializes in neuroscience-based coaching and assessment for individuals, teams, and corporates; strategic business consulting for SMEs; ',
      imageUrl: '/images/speakers/HR-network.png',

      category: 'Panel Member',
    },

    {
      id: 6,
      name: 'Commander James Emmanuel Kwegyir Aggrey-Orleans',
      title: 'Trauma & Orthopaedic Surgeon | Ghana Navy | UN Peacekeeping Medical Expert',
      bio: 'Commander James Emmanuel Kwegyir Aggrey-Orleans is a senior officer of the Ghana Navy and serves as a Trauma and Orthopaedic surgeon.',
      imageUrl: '/images/speakers/healthline.jpg',
      category: 'Panel Member'
    },
    {
      id: 7,
      name: 'Rosie Ebe-Arthur',
      title: 'Founder, RE-HR | Board Director, MTN Ghana, FirstBank Ghana & Petra Trust',
      bio: 'Rosie Ebe-Arthur is a Chartered Fellow of the Chartered Institute of Personnel and Development (CIPD) UK and Board Director on several boards in Ghana.',
      imageUrl: '/images/speakers/Rosie Ebe-Arthur.jpg',
      category: 'Panel Member'
    },
    {
      id: 13,
      name: 'Marc Voi Chiuli',
      title: 'Founder, People Edge Consulting',
      bio: 'Marc founded People Edge Consulting to provide HR services to the small/medium business community with 25+ years of diverse human resources experience.',
      imageUrl: '/images/speakers/marc-voi-chiuli.jpg',
      category: 'Panel Member'
    },
    {
      id: 16,
      name: 'Anita Wiafe',
      title: 'CEO OML Africa | Executive Secretary of the eCommerce Association of Ghana',
      bio: 'Anita Wiafe is a seasoned expert in strategic human resources management and organizational development, with over three decades of consulting experience.',
      imageUrl: '/images/speakers/anita-wiafe.jpg',
      category: 'Panel Member'
    },
    {
      id: 17,
      name: 'Deborah Asmah',
      title: 'Co-Founder & CEO, Npontu Technologies Ltd',
      bio: 'Ms. Deborah Asmah is an expert in AI, digital governance, privacy, and compliance, whose contributions have significantly shaped Ghana&apos;s digital landscape.',
      imageUrl: '/images/speakers/debora-asmah.jpg',
      category: 'Panel Member'
    },
    {
      id: 19,
      name: 'Prof. E. Afful-Dadzie',
      title: 'Associate Professor, University of Ghana Business School | Lead Data Scientist at MData Consult',
      bio: 'Prof. Eric Afful-Dadzie is a distinguished academic and consultant specializing in Decision Sciences, Business Intelligence, Analytics, and Information Systems.',
      imageUrl: '/images/speakers/afful-dadzie.jpg',
      category: 'Panel Member'
    },
    {
      id: 20,
      name: 'Dr. Theo Tackie',
      title: 'Change Management Consultant | Growth Strategist',
      bio: 'Change Expert/Senior Scrum Master with over 10+ years of top-notch knowledge and experience in facilitation and coaching Agile Teams.',
      imageUrl: '/images/speakers/theo-tackie.jpg',
      category: 'Panel Member'
    },
    {
      id: 27,
      name: 'Delasi Dogbe',
      title: 'Mental Health Advocate | Entrepreneur | Rotary Chapter President | Relationships Strategist',
      bio: 'Delasie Dogbey is a dynamic Relationship Strategist, Life Coach, Business Development Coach, Author, Ghostwriter, and Project & Marketing Strategist.',
      imageUrl: '/images/speakers/Delassie-Dogbe.jpg',
      category: 'Panel Member'
    },
    {
      id: 12,
      name: 'Isidore Kpotufe',
      title: 'Founder & CEO, RiviaCo | Technology Entrepreneur',
      bio: 'Isidore is a technology entrepreneur with a track record in building ventures across finance, transportation, and healthcare in Africa.',
      imageUrl: '/images/speakers/isidore-kpotufe.jpg',
      category: 'Panel Member'
    },
    {
      id: 28,
      name: 'Patience Osekre',
      title: 'Managing Director, Supreme Healthcare Management Services | Licensed Psychotherapist',
      bio: 'Patience Osekre is a Consultant Psychotherapist and a Wellness Expert trained in the UK with a wealth of experience in providing Health and Well-being Services.',
      imageUrl: '/images/speakers/patience-osekre.jpg',
      category: 'Panel Member'
    },
    {
      id: 29,
      name: 'Dr. Francis Eduku',
      title: 'Chief Executive Officer, Chartered Institute of Human Resource Management, Ghana (CIHRM)',
      bio: 'Dr. Francis Eduku is the Chief Executive Officer of the Chartered Institute of Human Resource Management, Ghana (CIHRM), with more than two decades of experience in HR leadership.',
      imageUrl: '/images/speakers/francis-eduku.jpg',
      category: 'Panel Member'
    }
  ],
  "Masterclass Trainers": [
    {
      id: 2,
      name: 'Oscar Bimpong',
      title: 'Founder, Train2inspire Consultancy',
      bio: 'Oscar Bimpong is the Founder and CEO of Train2inspire Consultancy with operations in both the UK and Ghana. He is a Mindset Transformation Consultant with over 17 years of experience.',
      imageUrl: '/images/speakers/Oscar-Bimpong.jpg',
      category: 'Masterclass Trainer'
    },
    {
      id: 4,
      name: 'Patricia Abena Kissi',
      title: 'CEO SEDAT Consult',
      bio: 'Patricia Ama Kissi has over 15 years in artificial intelligence research with multiple publications. She leads AI accessibility and ethics initiatives.',
      imageUrl: '/images/speakers/Patricia-Ama-Kissi.jpg',
      category: 'Masterclass Trainer'
    },
    {
      id: 9,
      name: 'Yvonne Wiredu-Akpabli',
      title: 'Vice Chairman, Public Services Commission | HR Transformation Expert',
      bio: 'Yvonne is a highly trained HR professional with over 16 years of experience in the practice of managing a broad spectrum of human resources programs and services.',
      imageUrl: '/images/speakers/Yvone-Wiredu.jpg',
      category: 'Masterclass Trainer'
    },
    {
      id: 24,
      name: 'Yvonne Ohui MacCarthy',
      title: 'Founder & Head Consultant, Institute of Customer Service Professionals (ICSP)',
      bio: 'Yvonne Ohui MacCarthy is a visionary leader and the driving force behind the Institute of Customer Service Professionals (ICSP).',
      imageUrl: '/images/speakers/yvonne-ohui-mccarthy.jpg',
      category: 'Masterclass Trainer'
    },
  ],
  "Panel Moderators": [
    {
      id: 3,
      name: 'Kojo Amissah',
      title: 'Strategy & Performance Consultant | Lead Instructor, CITAM',
      bio: 'Kojo Amissah is a Strategy and Performance Consultant at CITAM, where he leads high-impact training, consulting, and staffing services.',
      imageUrl: '/images/speakers/Mr-Kojo-Amissah.jpg',
      category: 'Panel Moderator'
    },
    {
      id: 8,
      name: 'Paa Kwesi-Barnes',
      title: 'Moderator',
      bio: 'Paa Kwesi Barnes stands as a seasoned Digital Technology Expert, boasting over 15 years of immersive experience across diverse roles in technology strategy and consulting.',
      imageUrl: '/images/speakers/Paa-Kwesi-Barnes-moderator.jpg',
      category: 'Panel Moderator'
    },
    {
      id: 11,
      name: 'Mary Bennett',
      title: 'Organizational Development | Learning Specialist',
      bio: 'Mary Bennett is a globally experienced professional specializing in Organizational Development, Learning & Development, and Human Resource Management.',
      imageUrl: '/images/speakers/Mary-Bennett.jpg',
      category: 'Panel Moderator'
    }
  ],
  "Speed Coaches": [
    {
      id: 25,
      name: 'Emmaline Datey',
      title: 'Maxwell Leadership Certified Coach | HR Strategist | CEO, ICS Africa',
      bio: 'Emmaline Datey is a Public Speaker, Brands Influencer, HR Strategist, Leadership and Personal Development Coach with up to 15 years&apos; of Human Resource general practice.',
      imageUrl: '/images/speakers/emmaline-datey.jpg',
      category: 'Speed Coach'
    },
    {
      id: 23,
      name: 'Munnira Shiekh',
      title: 'CEO and Founder Zenfusion Consultancy',
      bio: 'Munnira Sheikh is a business & strategy analyst carrying extensive experience across different industries including FMCG, manufacturing plants, trade and service sector.',
      imageUrl: '/images/speakers/munnira-shiek.jpg',
      category: 'Speed Coach'
    },
    {
      id: 14,
      name: 'Dr. George Ayee',
      title: 'Organizational Development & Change Management Expert | International Speaker',
      bio: 'George Ayee is an organizational development/effectiveness, change enablement and business transformation consultant, transformational speaker, and corporate trainer.',
      imageUrl: '/images/speakers/dr-george-ayeee.jpg',
      category: 'Speed Coach'
    },
    {
      id: 31,
      name: 'Grace Krobo-Edusei',
      title: 'CEO, Grace Center For Growth and Excellence',
      bio: 'Grace is a Pastor, Certified Trainer, Speaker, Executive Coach and Entrepreneur licensed as an independent Executive Program Director with The John Maxwell Leadership Team.',
      imageUrl: '/images/speakers/biophoto.jpg',
      category: 'Speed Coach'
    },
   
  ]
};

const KeynoteSection = () => (
  <section className="bg-[#F9F9F9] py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Keynote & Plenary Speakers</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our headline speakers bringing transformative insights</p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {speakersByCategory["Keynote Speakers"].map((speaker) => {
          const isComingSoon = speaker.title.trim() === '????' || speaker.bio.trim() === '????';
          const displayTitle = handleComingSoon(speaker.title);
          const displayBio = handleComingSoon(speaker.bio);
          
          const badgeColor = speaker.category === 'Plenary Speaker' ? 'bg-blue-600' : 'bg-[#FF8C00]';
          
          return (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className={`${isComingSoon ? 'bg-gray-500' : badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block`}>
                      {isComingSoon ? 'Coming Soon' : speaker.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                    <p className="text-gray-200 text-sm">{displayTitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 line-clamp-4 mb-4">
                  {isComingSoon ? 'Details coming soon...' : displayBio}
                </p>
                {!isComingSoon && (
                  <Link href={`/speakers/${speaker.id}`} passHref>
                    <div className="text-[#0A1C63] font-medium hover:underline">View Full Profile</div>
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default function SpeakersPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Slider */}
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
                  alt="Speaker background"
                  fill
                  priority={i === 0}
                  className="object-cover object-top"
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

      {/* Convener & Guest Speaker Section */}
      <section className="bg-[#F9F9F9] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Guest Speaker & Convener</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">The visionary behind this event and our special guest</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {speakersByCategory["Convener & Guest"].map((speaker) => {
              const isComingSoon = speaker.title.trim() === '????' || speaker.bio.trim() === '????';
              const displayTitle = handleComingSoon(speaker.title);
              const displayBio = handleComingSoon(speaker.bio);

              return (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <span className={`${isComingSoon ? 'bg-gray-500' : speaker.category === 'Convener' ? 'bg-purple-600' : 'bg-blue-600'} text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block`}>
                          {isComingSoon ? 'Coming Soon' : speaker.category}
                        </span>
                        <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                        <p className="text-gray-200 text-sm">{displayTitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 line-clamp-4 mb-4">
                      {isComingSoon ? 'Details coming soon...' : displayBio}
                    </p>
                    {!isComingSoon && (
                      <Link href={`/speakers/${speaker.id}`} passHref>
                        <div className="text-[#0A1C63] font-medium hover:underline">View Full Profile</div>
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MCs Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Event MCs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our masters of ceremony guiding the event</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {speakersByCategory["MCs"].map((speaker) => {
              const isComingSoon = speaker.title.trim() === '????' || speaker.bio.trim() === '????';
              const displayTitle = handleComingSoon(speaker.title);
              const displayBio = handleComingSoon(speaker.bio);

              return (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <span className={`${isComingSoon ? 'bg-gray-500' : speaker.category === 'M.C' ? 'bg-green-600' : 'bg-teal-600'} text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block`}>
                          {isComingSoon ? 'Coming Soon' : speaker.category}
                        </span>
                        <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                        <p className="text-gray-200 text-sm">{displayTitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 line-clamp-4 mb-4">
                      {isComingSoon ? 'Details coming soon...' : displayBio}
                    </p>
                    {!isComingSoon && (
                      <Link href={`/speakers/${speaker.id}`} passHref>
                        <div className="text-[#0A1C63] font-medium hover:underline">View Full Profile</div>
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <KeynoteSection />

      {/* Grouped Speakers Sections - Panel Members, Masterclass Trainers, Panel Moderators, Speed Coaches */}
      {Object.entries(speakersByCategory).map(([category, speakers]) => {
        if (["Convener & Guest", "MCs", "Keynote Speakers"].includes(category)) return null;
        
        return (
          <section key={category} className={`py-16 px-6 ${category === "Panel Members" ? "bg-white" : category === "Masterclass Trainers" ? "bg-[#F9F9F9]" : category === "Panel Moderators" ? "bg-white" : "bg-[#F9F9F9]"}`}>
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">{category}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {category === "Panel Members" ? "Distinguished professionals sharing their insights" :
                   category === "Masterclass Trainers" ? "Experts leading our intensive training sessions" :
                   category === "Panel Moderators" ? "Facilitators guiding our panel discussions" :
                   category === "Speed Coaches" ? "Coaches providing rapid mentoring sessions" : ""}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {speakers.map((speaker) => {
                  const isComingSoon = speaker.title.trim() === '????' || speaker.bio.trim() === '????';
                  const displayTitle = handleComingSoon(speaker.title);
                  const displayBio = handleComingSoon(speaker.bio);

                  return (
                    <motion.div
                      key={speaker.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="relative aspect-[3/4] w-full">
                        <Image
                          src={speaker.imageUrl}
                          alt={speaker.name}
                          fill
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                          <div>
                            <span className={`${isComingSoon ? 'bg-gray-500' : 'bg-[#FF8C00]'} text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block`}>
                              {isComingSoon ? 'Coming Soon' : speaker.category}
                            </span>
                            <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                            <p className="text-gray-200 text-sm">{displayTitle}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 line-clamp-3 mb-4">
                          {isComingSoon ? 'Details coming soon...' : `${displayBio.slice(0, 150)}...`}
                        </p>
                        {!isComingSoon && (
                          <Link href={`/speakers/${speaker.id}`} passHref>
                            <div className="text-[#0A1C63] font-medium hover:underline">View Full Profile</div>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

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
              <Link href="/agenda" passHref> 
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white transition-colors"
                >
                  View Full Agenda
                </motion.button>
              </Link>
              <Link href="/register" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                 className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white transition-colors"
                >
                  Register Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0A1C63] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="mb-6">
              The HR Network is an association and community of high-performing and credible people management professionals who are focused on accelerating business results through strategic human capital best practices.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Info</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FF8C00]">Home</Link></li>
              <li><Link href="/speakers" className="hover:text-[#FF8C00]">Speakers</Link></li>
              <li><Link href="/sponsors" className="hover:text-[#FF8C00]">Sponsors</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF8C00]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-2 text-[#FF8C00]" />
                <div>
                  <p>(+233) 54 122 2365</p>
                  <p>(+233) 20 575 6709</p>
                  <p>(+233) 26 337 4641</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="mt-1 mr-2 text-[#FF8C00]" />
                <p>info@hrnetworkafrica.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-white/20 text-center">
        </div>
      </footer>
    </main>
  );
}