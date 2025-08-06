'use client';

import { FaCoffee, FaPrayingHands, FaMusic, FaUtensils, FaChalkboardTeacher, FaHandshake, FaUsers, FaMicrophone, FaVideo, FaComments, FaMapMarkerAlt, FaExternalLinkAlt, FaPhone } from 'react-icons/fa';
import { ReactNode } from 'react';

interface AgendaItemProps {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#0A1C63]">Conference Agenda</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#0A1C63] border-b border-[#0A1C63] pb-4">
            August 8, 2025 | <span className="text-[#0A1C63]">Mövenpick Hotel, Accra</span>
          </h2>
          
          <div className="space-y-10">
            {/* Morning Session */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-[#0A1C63] flex items-center gap-2">
                <FaMicrophone className="text-[#0A1C63]" /> Morning Session
              </h3>
              <div className="space-y-6 pl-6 border-l-2 border-[#0A1C63]">
                <AgendaItem 
                  time="7:45 AM - 9:00 AM"
                  title="Arrival & Registration"
                  description="Cultural Performance | Networking & Coffee break"
                  icon={<FaHandshake className="text-[#0A1C63]" />}
                  variant="primary"
                />
                
                <AgendaItem 
                  time="9:00 AM - 9:05 AM"
                  title="Opening Prayer"
                  icon={<FaPrayingHands className="text-[#0A1C63]" />}
                />
                
                <AgendaItem 
                  time="9:05 AM - 9:10 AM"
                  title="Welcome Address"
                  speaker="Cynthia Kodowu"
                  variant="primary"
                />
                
                <AgendaItem 
                  time="9:10 AM - 9:35 AM"
                  title="Special Guest Speaker"
                  speaker="Patricia Obo-Nai"
                  variant="primary"
                />
                
                <AgendaItem 
                  time="9:35 AM - 9:40 AM"
                  title="Sponsor Videos"
                  icon={<FaVideo className="text-[#0A1C63]" />}
                />
                
                <AgendaItem 
                  time="9:40 AM - 9:55 AM"
                  title="Keynote: Resilience By Design"
                  description="Future Proofing HR Strategies for a Dynamic Workforce"
                  speaker="Laury Georges-Lane (Virtual)"
                  variant="primary"
                />
                
                <AgendaItem 
                  time="9:55 AM - 10:35 AM"
                  title="Panel: Resilience in Leadership"
                  description="Navigating Uncertainty & Change in the workplace"
                  speaker="Rosie Ebe Arthur, Dr. Francis Eduku, Giorgia Manfreda Appiah, Arthi Rabikrisson (Online), Dr. Theo Tackie (Online), Kojo Amissah (Moderator)"
                  icon={<FaUsers className="text-[#0A1C63]" />}
                  variant="secondary"
                />
                
                <AgendaItem 
                  time="10:35 AM - 10:40 AM"
                  title="Music Interlude"
                  description="Jackson Band Performance"
                  icon={<FaMusic className="text-[#0A1C63]" />}
                />
                
                <AgendaItem 
                  time="10:40 AM - 10:50 AM"
                  title="Goodwill Message from CIHRM"
                  speaker="Dr. Eduku"
                  variant="primary"
                />
              </div>
            </div>
            
            {/* Midday Session */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-[#0A1C63] flex items-center gap-2">
                <FaComments className="text-[#0A1C63]" /> Midday Session
              </h3>
              <div className="space-y-6 pl-6 border-l-2 border-[#0A1C63]">
                <AgendaItem 
                  time="10:50 AM - 11:10 AM"
                  title="Keynote: Empathy in Action"
                  description="Positioning HR as Wellbeing Ambassadors in the Modern Workplace"
                  speaker="Dr. Stella Agyenim Boateng"
                  variant="primary"
                />
                
                <AgendaItem 
                  time="11:10 AM - 11:50 AM"
                  title="Panel: HR as Champions for Workplace Well-Being"
                  description="Driving Productivity Through Innovative Employee Well-being Strategies"
                  speaker="CDR (Dr) Jek Aggrey, Daniel Delasie Dogbey (Virtual), Isidore Kpotufe, Patience Oskere (Virtual), Dr. Irene Stella Agyenim Boateng, Mary Bennet (Moderator)"
                  icon={<FaUsers className="text-[#0A1C63]" />}
                  variant="secondary"
                />
                
                <AgendaItem 
                  time="11:50 AM - 11:55 AM"
                  title="Spoken Word Performance"
                />
                
                <AgendaItem 
                  time="11:55 AM - 12:10 PM"
                  title="Keynote: Beyond the Numbers"
                  description="Using people Analytics to Shape Culture, Retention, and Human Centered Strategy"
                  speaker="Margaret Jackson"
                  variant="primary"
                />
                
                <AgendaItem 
                  time="12:10 PM - 12:50 PM"
                  title="Panel: The Power of Data in HR"
                  description="Transforming Talent Acquisition & Workforce Optimization"
                  speaker="Deborah Asmah, Anita Waife, Prof Eric Afful-Dadzie, Marc Voi-Chuili, Paa Kwesi Barnes (Moderator)"
                  icon={<FaUsers className="text-[#0A1C63]" />}
                  variant="secondary"
                />
                
                <AgendaItem 
                  time="12:50 PM - 12:55 PM"
                  title="Ice Breaker"
                  description="My HealthCorp"
                />
              </div>
            </div>
            
            {/* Afternoon Session */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-[#0A1C63] flex items-center gap-2">
                <FaChalkboardTeacher className="text-[#0A1C63]" /> Afternoon Session
              </h3>
              <div className="space-y-6 pl-6 border-l-2 border-[#0A1C63]">
                <AgendaItem 
                  time="12:55 PM - 1:35 PM"
                  title="Lunch Break"
                  description="Sponsors Video | Speed Coaching"
                  icon={<FaUtensils className="text-[#0A1C63]" />}
                />
                
                <AgendaItem 
                  time="1:35 PM - 2:20 PM"
                  title="Masterclass"
                  speaker="Yvonne Wiredu Akpabli, Patricia Abena Kissi, Oscar Bimpong, Yvonne Ohui McCarthy"
                  icon={<FaChalkboardTeacher className="text-[#0A1C63]" />}
                  variant="primary"
                />
                
                <AgendaItem 
                  time="2:20 PM - 2:35 PM"
                  title="Plenary Speaker"
                  description="Beyond Titles & Talent: Building Emotionally Intelligent and Psychologically Safe Workplaces"
                  speaker="Dr Cheryl Arutt"
                  variant="primary"
                />
                
                <AgendaItem 
                  time="2:35 PM - 2:40 PM"
                  title="Philips Consult"
                />
                
                <AgendaItem 
                  time="2:40 PM - 2:42 PM"
                  title="Nuffield Clinic"
                />
                
                <AgendaItem 
                  time="2:42 PM - 2:57 PM"
                  title="Performance"
                />
                
                <AgendaItem 
                  time="2:57 PM - 3:02 PM"
                  title="Closing Ceremony"
                  description="Vote of Thanks & Closing Remarks"
                />
                
                <AgendaItem 
                  time="3:02 PM Onwards"
                  title="Networking & Coffee Break"
                  description="Exhibitor Engagement"
                  icon={<FaCoffee className="text-[#0A1C63]" />}
                />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full mt-12">
            {/* Location Info */}
            <div className="bg-[#0A1C63] text-white p-6 md:p-8">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-[#FF8C00]">Venue Location</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Mövenpick Ambassador Hotel Accra</h4>
                    <p className="mb-4">Independence Avenue, Ridge Area<br />Accra, Ghana</p>
                    <div className="flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-[#FF8C00]" />
                      <span>5.5544022° N, -0.2026381° W</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-[#FF8C00]" />
                      <span>+233 20 5756709</span>/
                      <span>+233 54 1222365</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Getting There</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF8C00]">•</span>
                        <span>15 min drive from Kotoka International Airport</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF8C00]">•</span>
                        <span>Located in the central business district</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF8C00]">•</span>
                        <span>Ample parking available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-96 w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0851034517814!2d-0.20263810000000002!3d5.5544022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9099050ee617%3A0xec1887b5b7a1893d!2sMovenpick%20Ambassador%20Hotel%20Accra!5e0!3m2!1sen!2sgh!4v1752231102139!5m2!1sen!2sgh" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                className="filter grayscale-[50%]"
              ></iframe>
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
                <a 
                  href="https://maps.google.com?q=Movenpick+Ambassador+Hotel+Accra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0A1C63] font-medium flex items-center gap-1"
                >
                  <FaExternalLinkAlt className="text-[#FF8C00]" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function AgendaItem({ time, title, speaker, description, icon, variant = 'primary' }: AgendaItemProps) {
  const variantStyles = {
    primary: {
      bg: 'bg-[#0A1C63]/10',
      border: 'border-[#0A1C63]/20',
      text: 'text-[#0A1C63]'
    },
    secondary: {
      bg: 'bg-gray-100',
      border: 'border-gray-200',
      text: 'text-gray-900'
    }
  };

  return (
    <div className={`relative pb-6 last:pb-0 group ${variantStyles[variant].bg} p-4 rounded-lg border ${variantStyles[variant].border}`}>
      <div className="absolute -left-8 top-4 w-4 h-4 rounded-full bg-[#0A1C63] border-4 border-white transform group-hover:scale-125 transition-transform"></div>
      <div className="flex items-start">
        {icon && <div className="mr-4 mt-1 text-[#0A1C63] text-xl">{icon}</div>}
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#0A1C63] mb-1">{time}</p>
          <h4 className={`text-lg font-bold mb-1 ${variantStyles[variant].text}`}>{title}</h4>
          {speaker && <p className="text-gray-700 mb-2">Speaker: <span className="text-[#0A1C63] font-medium">{speaker}</span></p>}
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      </div>
    </div>
  );
}