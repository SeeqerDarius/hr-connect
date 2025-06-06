'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      const snapshot = await getDocs(collection(db, 'partners'));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPartners(data);
      setLoading(false);
    };

    fetchPartners();
  }, []);

  return (
    <main className="bg-[#08174B] text-white min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#FF8C00] mb-6 text-center">Partner Requests</h1>

        {loading ? (
          <p className="text-center text-gray-300">Loading...</p>
        ) : partners.length === 0 ? (
          <p className="text-center text-gray-300">No partner requests yet.</p>
        ) : (
          <ul className="space-y-4">
            {partners.map((partner) => (
              <li
                key={partner.id}
                className="bg-[#0A1C63] p-4 rounded shadow space-y-1 text-white"
              >
                <p>
                  <span className="font-bold text-[#FF8C00]">Name:</span> {partner.name}
                </p>
                <p>
                  <span className="font-bold text-[#FF8C00]">Email:</span> {partner.email}
                </p>
                <p>
                  <span className="font-bold text-[#FF8C00]">Organization:</span>{' '}
                  {partner.organization}
                </p>
                <p>
                  <span className="font-bold text-[#FF8C00]">Message:</span> {partner.message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
