'use client';

import Image from 'next/image';

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-background text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-primary">Meet the Speakers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[#08174B] p-6 text-center rounded shadow">
            <div className="relative w-36 h-36 mx-auto mb-4">
              <Image
                src="https://via.placeholder.com/150"
                alt={`Speaker ${i}`}
                fill
                className="object-cover rounded-full"
                sizes="144px"
              />
            </div>
            <h2 className="text-xl font-semibold">Speaker {i}</h2>
            <p className="text-gray-300">Job Title</p>
          </div>
        ))}
      </div>
    </main>
  );
}
