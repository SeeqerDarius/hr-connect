// src/app/admin/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/admin/login');
  };

  const sections = [
    {
      title: 'Manage Gallery',
      description: 'Upload event photos and videos.',
      buttonText: 'Open Gallery Manager',
      route: '/admin/gallery',
    },
    {
      title: 'Manage Speakers',
      description: 'Add and update speaker profiles.',
      buttonText: 'Open Speaker Manager',
      route: '/admin/speakers',
    },
    {
      title: 'Partners',
      description: 'View partner applications and messages.',
      buttonText: 'View Partners',
      route: '/admin/partners',
    },
    {
      title: 'Newsletter',
      description: 'Send newsletters and announcements.',
      buttonText: 'Compose Newsletter',
      route: '/admin/newsletter',
    },
    {
      title: 'Manage Agenda',
      description: 'Create and edit event schedules.',
      buttonText: 'Open Agenda Manager',
      route: '/admin/agenda',
    },
    {
      title: 'Manage Past Events',
      description: 'Archive and manage past events.',
      buttonText: 'Open Past Events Manager',
      route: '/admin/past-events',
    },
  ];

  return (
    <main className="bg-[#08174B] text-white min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-[#FF8C00]">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <section key={section.title} className="bg-[#0A1C63] p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4 text-[#FF8C00]">{section.title}</h2>
              <p className="text-gray-300">{section.description}</p>
              <button
                onClick={() => router.push(section.route)}
                className="mt-4 bg-[#FF8C00] text-white px-4 py-2 rounded"
              >
                {section.buttonText}
              </button>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
