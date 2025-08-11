import { FaFacebook, FaLinkedin,} from "react-icons/fa";
import { SiX } from 'react-icons/si'; // Importing X logo from Simple Icons
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#08174B] text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-center sm:text-left gap-4">
        <p>&copy; {new Date().getFullYear()} HR Network Africa. All rights reserved.</p>
        <div className="flex gap-6">
          {/* Facebook - Official blue */}
          <a 
            href="https://www.facebook.com/share/p/19ftcMtFqi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <FaFacebook size={20} className="text-[#1877F2]" />
          </a>
          
          {/* LinkedIn - Official blue */}
          <a 
            href="https://www.linkedin.com/posts/hr-network-ghana_hrconnect2025-hrconnect2025-leveragingdata-activity-7335893543942606848-6Stn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} className="text-[#0A66C2]" />
          </a>
          
          {/* Twitter/X - Light blue */}
          <a 
            href="https://x.com/HRNetworkAfrica" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity"
            aria-label="X (Twitter)"
          >
            <SiX size={20} className="text-[#000000]" />
          </a>
          
          {/* Email - Red for contrast */}
          <a 
            href="mailto:info@hrnetworkafrica.org" 
            className="hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <HiMail size={20} className="text-[#EA4335]" />
          </a>
        </div>
      </div>
    </footer>
  );
}