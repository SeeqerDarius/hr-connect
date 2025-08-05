'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const subcommittees = [
  {
    name: 'Planning Committee',
    description: 'Oversees the overall planning and execution of the conference.',
    members: [
      {
        id: 1,
        name: 'Cynthia Kodowu',
        title: 'Planning Committee Lead',
        organization: 'HR Network Africa',
        bio: 'Cynthia leads the overall planning and execution of HR Connect 2025 with extensive experience in conference organization and HR leadership.',
        imageUrl: '/images/planning-committee/cynthia.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/cynthiamawulawoekodowu/' }
      },
      {
        id: 2,
        name: 'Emaline Datey',
        title: 'Planning Committee Deputy',
        organization: 'HR Network Africa',
        bio: 'Emaline supports the committee lead in coordinating all aspects of the conference planning and execution.',
        imageUrl: '/images/planning-committee/emmaline-datey.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/emmaline-datey-69083547/' }
      },
      {
        id: 3,
        name: 'Patience Korankye',
        title: 'Protocol',
        organization: 'HR Network Africa',
        bio: 'Responsible for managing all protocol-related matters and VIP arrangements for the conference.',
        imageUrl: '/images/planning-committee/load.jpg',
        socials: { linkedin: '#' }
      },
      {
        id: 4,
        name: 'Angela Eduful',
        title: 'Admin Lead',
        organization: 'HR Network Africa',
        bio: 'Oversees all administrative functions and logistics for the conference planning.',
        imageUrl: '/images/planning-committee/annn.jpg',
        socials: {}
      }
    ]
  },
  {
    name: 'Sponsorship Committee',
    description: 'Responsible for securing sponsorships and managing sponsor relationships.',
    members: [
      {
        id: 5,
        name: 'Esther Fefoame',
        title: 'Sponsorship Committee',
        organization: 'HR Network Africa',
        bio: 'Works on securing sponsorships and partnerships for the conference.',
        imageUrl: '/images/planning-committee/estee.jpg',
        socials: {}
      },
      {
        id: 6,
        name: 'Samuel Gyampo',
        title: 'Sponsorship Committee Chair',
        organization: 'HR Network Africa',
        bio: 'Leads the sponsorship team in securing financial support and partnerships.',
        imageUrl: '/images/planning-committee/gyampo.jpg',
        socials: {}
      },
      {
        id: 7,
        name: 'Kwadwo Konadu',
        title: 'Sponsorship Committee Deputy & Media',
        organization: 'HR Network Africa',
        bio: 'Supports sponsorship efforts and coordinates media relations.',
        imageUrl: '/images/planning-committee/load.jpg',
        socials: {}
      },
      {
        id: 8,
        name: 'Paul Opoku',
        title: 'Sponsorship Committee Member',
        organization: 'HR Network Africa',
        bio: 'Assists in securing sponsorships and managing sponsor relationships.',
        imageUrl: '/images/planning-committee/op.jpg',
        socials: {}
      },
      {
        id: 9,
        name: 'Nii Otinkorang Ankrah',
        title: 'Sponsorship Committee',
        organization: 'HR Network Africa',
        bio: 'Contributes to sponsorship acquisition and management.',
        imageUrl: '/images/planning-committee/load.jpg',
        socials: {}
      }
    ]
  },
  {
    name: 'Media & Publications',
    description: 'Handles all media relations, publications, and publicity.',
    members: [
      {
        id: 10,
        name: 'Jen Anane-Nsiah',
        title: 'Media and Publications Lead',
        organization: 'HR Network Africa',
        bio: 'Oversees all media relations and conference publications.',
        imageUrl: '/images/planning-committee/jenn.jpg',
        socials: {}
      },
      {
        id: 11,
        name: 'Patience Lavoe',
        title: 'Publicity - Social Media',
        organization: 'HR Network Africa',
        bio: 'Manages all social media platforms and digital publicity for the conference.',
        imageUrl: '/images/planning-committee/Patience-Lavoe.jpeg',
        socials: {}
      }
    ]
  },
  {
    name: 'Technical Team',
    description: 'Manages digital platforms and technical aspects of the conference.',
    members: [
      {
        id: 12,
        name: 'Andrews Asante',
        title: 'Website',
        organization: 'HR Network Africa',
        bio: 'Manages the conference website and digital platforms.',
        imageUrl: '/images/planning-committee/Andy.jpeg',
        socials: {}
      },
      {
        id: 13,
        name: 'Victor Ayisi Obeng-Mensah',
        title: 'Creative',
        organization: 'HR Network Africa',
        bio: 'Leads the creative direction and design elements for the conference.',
        imageUrl: '/images/planning-committee/Victor.jpg',
        socials: {}
      }
    ]
  },
  
];

export default function PlanningCommittee() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#0A1C63]">
      {/* Hero Section */}
      <section className="relative h-96 bg-[#0A1C63] text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/IMG-20250610-WA0142.jpg')] opacity-30 bg-cover"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Meet Our <span className="text-[#FF8C00]">Planning Committee</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl"
          >
            The dedicated team of professionals shaping HR Connect 2025
          </motion.p>
        </div>
      </section>

      {/* Subcommittees Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              HR Connect 2025 <span className="text-[#FF8C00]">Committee Structure</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg">
              Our organized teams working to deliver an exceptional conference experience
            </p>
          </motion.div>

          {subcommittees.map((subcommittee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0A1C63] mb-2">
                  <span className="text-[#FF8C00]">{subcommittee.name}</span>
                </h3>
                <p className="text-lg">{subcommittee.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subcommittee.members.map((member) => (
                  <motion.div
                    key={member.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-[#FF8C00] font-medium">{member.title}</p>
                        </div>
                        <span className="bg-[#0A1C63] text-white text-xs px-2 py-1 rounded">
                          {subcommittee.name.split(' ')[0]}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{member.organization}</p>
                      <p className="text-gray-700 mb-4">{member.bio}</p>
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0A1C63] hover:text-[#FF8C00]">
                          <FaLinkedin size={20} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action 
      <section className="py-20 px-6 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Want to join our volunteer team?
            </h2>
            <p className="text-xl mb-8">
              We&apos;re looking for passionate professionals to contribute to making HR Connect 2025 a success.
            </p>
          </motion.div>
        </div>
      </section>*/}

      
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