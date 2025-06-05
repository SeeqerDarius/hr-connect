'use client';

import { useSearchParams } from 'next/navigation';

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const ticketType = searchParams.get('type');

  const ticketMap: Record<string, string> = {
    standard: 'FEE GHS 1,500',
    earlybird: 'EARLY BIRD GHS 1,250',
    online: 'ONLINE GHS 1,000',
  };

  const ticketValue = ticketMap[ticketType || ''] || '';

  return (
    <main className="bg-[#08174B] text-white py-20 px-6 min-h-screen text-center">
      <h1 className="text-4xl font-bold text-[#FF8C00] mb-6">Register</h1>
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
    </main>
  );
}
