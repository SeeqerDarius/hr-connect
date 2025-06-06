'use client';

import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function AdminNewsletterPage() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!subject || !message) return;

    setSending(true);
    await addDoc(collection(db, 'newsletters'), {
      subject,
      message,
      createdAt: Timestamp.now(),
    });

    setSubject('');
    setMessage('');
    setSending(false);
    setSent(true);
  };

  return (
    <main className="bg-[#08174B] text-white min-h-screen px-6 py-10">
      <div className="max-w-2xl mx-auto bg-[#0A1C63] p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-[#FF8C00] mb-6 text-center">Compose Newsletter</h1>

        <label className="block mb-4">
          <span className="text-[#FF8C00]">Subject</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded bg-white text-black"
          />
        </label>

        <label className="block mb-4">
          <span className="text-[#FF8C00]">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full px-3 py-2 mt-1 rounded bg-white text-black"
          />
        </label>

        <button
          onClick={handleSubmit}
          disabled={sending}
          className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition"
        >
          {sending ? 'Sending...' : 'Send Newsletter'}
        </button>

        {sent && (
          <p className="mt-4 text-green-400 text-center">
            Newsletter saved successfully!
          </p>
        )}
      </div>
    </main>
  );
}
