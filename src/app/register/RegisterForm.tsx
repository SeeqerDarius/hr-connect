'use client';

import { useSearchParams } from 'next/navigation';

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const ticketType = searchParams.get('type');

  const ticketMap: Record<string, string> = {
    standard: 'FEE GHS 1,500',
    earlybird: 'EARLY BIRD GHS 1,250',
    online: 'ONLINE GHS 1,000',
  };

  const ticketValue = ticketMap[ticketType || ''] || '';

  const googleFormUrl = 'https://forms.gle/KreM45RBNYqT8d5A7';

  return (
    <div className="bg-[#0A1C63] max-w-xl mx-auto p-6 rounded shadow space-y-4 text-left text-white">
      <h2 className="text-2xl font-bold text-[#FF8C00] mb-4">Register for the Event</h2>

      <p className="mb-2">Ticket Type:</p>
      <div className="w-full px-3 py-2 rounded bg-gray-300 text-black">
        {ticketValue || 'Select a ticket from the homepage'}
      </div>

      <p className="mt-4">
        To complete your registration, click the button below. You’ll be redirected to our secure Google Form.
      </p>

      <a
        href={googleFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
      >
        Go to Registration Form
      </a>
    </div>
  );
}
