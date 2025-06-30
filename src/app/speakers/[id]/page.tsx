// app/speakers/[id]/page.tsx

'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { speakers } from '../../data/speakers-data'; 
import Image from 'next/image';
import Link from 'next/link';

export default function SpeakerPage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10);

  const speaker = speakers.find((s) => s.id === id);

  if (!speaker) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link href="/speakers" className="text-[#0A1C63] font-bold mb-4 inline-block hover:underline">
        ← Back to Speakers
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/3 aspect-[3/4]">
          <Image
            src={speaker.imageUrl}
            alt={speaker.name}
            fill
            className="object-cover object-top rounded-xl"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-[#0A1C63] mb-2">{speaker.name}</h1>
          <h2 className="text-lg text-gray-700 mb-4">{speaker.title}</h2>
          <p className="text-gray-800 whitespace-pre-line">{speaker.bio}</p>
        </div>
      </div>
    </main>
  );
}
