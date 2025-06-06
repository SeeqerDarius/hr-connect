import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#08174B] text-white min-h-screen px-6 py-10">
      {children}
    </div>
  );
}
