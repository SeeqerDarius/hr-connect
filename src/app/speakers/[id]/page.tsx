// app/speakers/[id]/page.tsx
'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { speakers } from '../../data/speakers-data'; 
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGlobe, FaFacebook, FaInstagram,} from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { useEffect, useState } from 'react';

export default function SpeakerPage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10);
  const [isLoading, setIsLoading] = useState(true);

  const speaker = speakers.find((s) => s.id === id);

  useEffect(() => {
    // Simulate loading for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!speaker) {
    return notFound();
  }

  if (isLoading) {
    return null; // Loading component will handle this
  }

  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8 bg-white">
      <Link 
        href="/speakers" 
        className="flex items-center text-[#0A1C63] font-medium mb-6 hover:text-[#FF8C00] group transition-all"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Speakers
      </Link>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Speaker Image Section */}
        <div className="w-full md:w-2/5">
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-4 border-[#0A1C63]">
            <Image
              src={speaker.imageUrl}
              alt={speaker.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          
          {/* Speaker Meta Information */}
          <div className="mt-6 space-y-4">
            {speaker.company && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#FF8C00] shadow-sm">
                <h3 className="text-sm font-semibold text-[#0A1C63] mb-1">Company</h3>
                <p className="text-gray-800 font-medium">{speaker.company}</p>
              </div>
            )}
            
            {(speaker.linkedin || speaker.twitter || speaker.website || speaker.facebook) && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#FF8C00] shadow-sm">
                <h3 className="text-sm font-semibold text-[#0A1C63] mb-2">Connect</h3>
                <div className="flex space-x-4">
                  {speaker.linkedin && (
                    <a 
                      href={speaker.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0A1C63] hover:text-[#FF8C00] transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  )}
                  {speaker.twitter && (
                    <a 
                      href={speaker.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0A1C63] hover:text-[#0A1C63] transition-colors"
                      aria-label="X (formerly Twitter) profile"
                    >
                      <SiX className="text-2xl" />
                    </a>
                  )}
                  {speaker.website && (
                    <a 
                      href={speaker.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0A1C63] hover:text-[#FF8C00] transition-colors"
                      aria-label="Website"
                    >
                      <FaGlobe className="text-2xl" />
                    </a>
                  )}
                  {speaker.instagram && (
                    <a 
                      href={speaker.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0A1C63] hover:text-[#FF8C00] transition-colors"
                      aria-label="instagrame"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                  )}
                  {speaker.facebook && (
                    <a 
                      href={speaker.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0A1C63] hover:text-[#FF8C00] transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-2xl" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Speaker Content Section */}
        <div className="w-full md:w-3/5">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1C63] mb-2 leading-tight">
              {speaker.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-[#FF8C00] font-medium mb-4">
              {speaker.title}
            </h2>
            
            {speaker.session && (
              <div className="bg-white p-4 rounded-lg mb-6 border-l-4 border-[#FF8C00] shadow-sm">
                <h3 className="text-sm font-semibold text-[#0A1C63] mb-1">Session</h3>
                <p className="text-gray-800 font-medium">{speaker.session}</p>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF8C00] shadow-sm">
              <h3 className="text-xl font-semibold text-[#0A1C63] mb-4">About</h3>
              <p className="text-gray-700 leading-relaxed">
                {speaker.bio}
              </p>
            </div>
            
            {speaker.keyPoints && speaker.keyPoints.length > 0 && (
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF8C00] shadow-sm">
                <h3 className="text-xl font-semibold text-[#0A1C63] mb-4">Key Points</h3>
                <ul className="space-y-3">
                  {speaker.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FF8C00] mr-3 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </main>
  );
}