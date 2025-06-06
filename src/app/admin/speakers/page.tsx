'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';

export default function AdminSpeakersPage() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSpeakers = async () => {
    const snapshot = await getDocs(collection(db, 'speakers'));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setSpeakers(data);
  };

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const handleSubmit = async () => {
    if (!file || !name || !title) return;
    setLoading(true);

    const fileRef = ref(storage, `speakers/${Date.now()}_${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    await addDoc(collection(db, 'speakers'), {
      name,
      title,
      photoUrl: url,
    });

    setName('');
    setTitle('');
    setFile(null);
    setLoading(false);
    fetchSpeakers();
  };

  return (
    <main>
      <div className="max-w-2xl mx-auto bg-[#0A1C63] p-6 rounded shadow text-white">
        <h1 className="text-3xl font-bold text-[#FF8C00] mb-4 text-center">Manage Speakers</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded text-black"
        />

        <input
          type="text"
          placeholder="Title/Position"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded text-black"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-4 block w-full text-white"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition"
        >
          {loading ? 'Uploading...' : 'Add Speaker'}
        </button>
      </div>

      <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="bg-[#0A1C63] text-white p-4 rounded shadow text-center">
            <img
              src={speaker.photoUrl}
              alt={speaker.name}
              className="mx-auto mb-3 rounded-full w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-bold">{speaker.name}</h3>
            <p className="text-gray-300">{speaker.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
