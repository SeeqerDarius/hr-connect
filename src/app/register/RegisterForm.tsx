'use client';

import { useSearchParams } from 'next/navigation';

// Country code data with flag emojis
const countryCodes = [
  { code: '+233', flag: '🇬🇭'},
  { code: '+234', flag: '🇳🇬'},
  { code: '+254', flag: '🇰🇪'},
  { code: '+27', flag: '🇿🇦'},
  { code: '+1', flag: '🇺🇸'},
  { code: '+44', flag: '🇬🇧'},
  // Add more countries as needed
  { code: '+225', flag: '🇨🇮'},
  { code: '+237', flag: '🇨🇲'},
  { code: '+251', flag: '🇪🇹'},
  { code: '+256', flag: '🇺🇬'},
];

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const ticketType = searchParams.get('type');

  const ticketMap: Record<string, string> = {
    standard: 'FEE GHS 1,500',
    earlybird: 'EARLY BIRD GHS 1,250',
    online: 'ONLINE GHS 1,000',
  };

  const ticketValue = ticketMap[ticketType || ''] || '';

  return (
    <form
      action="https://formspree.io/f/mwpbkyyw"
      method="POST"
      className="bg-[#0A1C63] max-w-xl mx-auto p-6 rounded shadow space-y-4 text-left"
    >
      <label className="block">
        <span className="text-[#FF8C00]">Full Name</span>
        <input type="text" name="name" required className="w-full px-3 py-2 mt-1 rounded bg-white text-black" />
      </label>

      <label className="block">
        <span className="text-[#FF8C00]">Email</span>
        <input type="email" name="email" required className="w-full px-3 py-2 mt-1 rounded bg-white text-black" />
      </label>

      <label className="block">
        <span className="text-[#FF8C00]">Contact</span>
        <div className="flex mt-1">
          {/* Country code dropdown with flags */}
          <div className="relative w-1/3">
            <select 
              name="countryCode" 
              className="appearance-none w-full px-3 py-2 rounded-l bg-white text-black border-r border-gray-300 pr-8 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
              defaultValue="+233"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Phone number input */}
          <input 
            type="tel" 
            name="phone" 
            required 
            className="flex-1 px-3 py-2 rounded-r bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" 
            placeholder="Phone number"
          />
        </div>
      </label>

      <label className="block">
        <span className="text-[#FF8C00]">Ticket Type</span>
        <input
          type="text"
          name="ticket"
          value={ticketValue}
          readOnly
          required
          className="w-full px-3 py-2 mt-1 rounded bg-gray-300 text-black cursor-not-allowed"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition"
      >
        Submit Registration
      </button>
    </form>
  );
}