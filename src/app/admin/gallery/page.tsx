'use client';

import { useEffect, useState } from 'react';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';
import { storage, db } from '@/lib/firebase';

export default function AdminGalleryPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);

  const fetchGallery = async () => {
    const snapshot = await getDocs(collection(db, 'gallery'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setGalleryItems(data);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setSuccess(false);

    const fileRef = ref(storage, `gallery/${Date.now()}_${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    await addDoc(collection(db, 'gallery'), {
      url,
      createdAt: Timestamp.now(),
      name: file.name,
    });

    setFile(null);
    setSuccess(true);
    setUploading(false);
    fetchGallery();
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <main className="bg-[#08174B] text-white min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#FF8C00] mb-6 text-center">Manage Gallery</h1>

        <div className="bg-[#0A1C63] p-6 rounded shadow mb-10">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mb-4 block w-full text-white"
          />
          <button
            onClick={handleUpload}
            disabled={uploading || !file}
            className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition"
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          {success && <p className="mt-4 text-green-400 text-center">Upload successful!</p>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-[#0A1C63] p-2 rounded">
              <img src={item.url} alt={item.name} className="w-full h-auto rounded" />
              <p className="text-sm mt-2 truncate">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
