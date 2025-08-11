'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

// Group images by session
const galleryGroups = {
  '2025 Conference': [
    '/images/2025-conference/IMG-20250808-WA0065.jpg',
    '/images/2025-conference/IMG-20250808-WA0066.jpg',
    '/images/2025-conference/IMG-20250808-WA0067.jpg',
    '/images/2025-conference/IMG-20250808-WA0098.jpg',
    '/images/2025-conference/IMG-20250808-WA0099.jpg',
    '/images/2025-conference/IMG-20250808-WA0100.jpg',
    '/images/2025-conference/IMG-20250808-WA0101.jpg',
    '/images/2025-conference/IMG-20250808-WA0102.jpg',
    '/images/2025-conference/IMG-20250808-WA0068.jpg',
    '/images/2025-conference/IMG-20250808-WA0069.jpg',
    '/images/2025-conference/IMG-20250808-WA0070.jpg',
    '/images/2025-conference/IMG-20250808-WA0071.jpg',
    '/images/2025-conference/IMG-20250808-WA0072.jpg',
    '/images/2025-conference/IMG-20250808-WA0073.jpg',
    '/images/2025-conference/IMG-20250808-WA0064.jpg',
    '/images/2025-conference/IMG-20250808-WA0074.jpg',
    '/images/2025-conference/IMG-20250808-WA0075.jpg',
    '/images/2025-conference/IMG-20250808-WA0076.jpg',
    '/images/2025-conference/IMG-20250808-WA0077.jpg',
    '/images/2025-conference/IMG-20250808-WA0078.jpg',
    '/images/2025-conference/IMG-20250808-WA0079.jpg',
    '/images/2025-conference/IMG-20250808-WA0080.jpg',
    '/images/2025-conference/IMG-20250808-WA0081.jpg',
    '/images/2025-conference/IMG-20250808-WA0082.jpg',
    '/images/2025-conference/IMG-20250808-WA0083.jpg',
    '/images/2025-conference/IMG-20250808-WA0095.jpg',
    '/images/2025-conference/IMG-20250808-WA0096.jpg',
    '/images/2025-conference/IMG-20250808-WA0097.jpg',
    '/images/2025-conference/IMG-20250808-WA0103.jpg',
    '/images/2025-conference/IMG-20250808-WA0104.jpg',
    '/images/2025-conference/IMG-20250808-WA0105.jpg',
  ],
  'Other Events': [
    '/images/IMG-20250808-WA0083.jpg',
    '/images/IMG-20250808-WA0082.jpg',
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
    '/images/IMG-20191217-WA0013.jpg',
    '/images/IMG-20191217-WA0014.jpg',
    '/images/IMG-20191217-WA0016.jpg',
    '/images/IMG-20191217-WA0017.jpg',
    '/images/IMG-20191217-WA0019.jpg',
    '/images/IMG-20191217-WA0020.jpg',
    '/images/IMG-20250624-WA0018.jpg',
    '/images/IMG-20250624-WA0019.jpg',
    '/images/IMG-20250624-WA0016.jpg',
  ]
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="bg-[#0A1C63] text-white min-h-screen">
      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-[#FF8C00] transition-colors"
            aria-label="Close modal"
          >
            <FaTimes className="text-3xl" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged gallery image"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button 
            onClick={closeModal}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#FF8C00] text-white px-6 py-2 rounded-full hover:bg-[#FF6A00] transition-colors"
          >
            Close
          </button>
        </div>
      )}

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
          src="/images/IMG-20250610-WA0099.jpg"
          alt="Gallery background"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {Object.entries(galleryGroups).map(([groupName, images]) => (
          <section key={groupName} className="mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold mb-2 text-white">{groupName}</h2>
              <div className="w-20 h-1 bg-[#FF8C00]"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image}
                    alt={`${groupName} image ${index + 1}`}
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
        ))}
      </div>

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
            Don&apos;t miss out on creating more amazing memories at our next event
          </p>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0A1C63] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="mb-6">
              The HR Network is an association and community of high-performing and credible people management professionals who are focused on accelerating business results through strategic human capital best practices.
            </p>
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
          <p>&copy; {new Date().getFullYear()} HR Network Africa. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}