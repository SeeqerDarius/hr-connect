'use client';

import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function AdminAgendaPage() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    if (!title || !time) return;

    setLoading(true);
    await addDoc(collection(db, 'agenda'), {
      title,
      time,
      createdAt: Timestamp.now(),
    });

    setTitle('');
    setTime('');
    setLoading(false);
    setSaved(true);
  };

  return (
    <main className="bg-[#08174B] text-white min-h-screen px-6 py-10">
      <div className="max-w-2xl mx-auto bg-[#0A1C63] p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-[#FF8C00] mb-6 text-center">Add Agenda Item</h1>

        <label className="block mb-4">
          <span className="text-[#FF8C00]">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded bg-white text-black"
          />
        </label>

        <label className="block mb-4">
          <span className="text-[#FF8C00]">Time</span>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded bg-white text-black"
          />
        </label>

        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition"
        >
          {loading ? 'Saving...' : 'Save Item'}
        </button>

        {saved && (
          <p className="mt-4 text-green-400 text-center">Agenda item saved!</p>
        )}
      </div>
    </main>
  );
}
