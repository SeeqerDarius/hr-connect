'use client';

import Image from 'next/image';

export default function GalleryPage() {
  return (
    <main className="bg-[#0A1C63] text-white py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-[#FF8C00] mb-6">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative w-full h-48">
            <Image
              src={`https://via.placeholder.com/300x200?text=Photo+${i}`}
              alt={`Gallery ${i}`}
              fill
              className="object-cover rounded shadow-md"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
