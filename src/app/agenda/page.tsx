'use client';

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-[#0A1C63] text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 text-[#FF8C00]">Conference Agenda</h1>
      <ul className="space-y-4">
        <li><strong>09:00 AM -</strong> Registration & Welcome Coffee</li>
        <li><strong>10:00 AM -</strong> Opening Keynote</li>
        <li><strong>11:30 AM -</strong> Diversity & Inclusion Panel</li>
        <li><strong>01:00 PM -</strong> Networking Lunch</li>
        <li><strong>02:00 PM -</strong> Workshops</li>
        <li><strong>04:00 PM -</strong> Closing Remarks</li>
      </ul>
    </main>
  );
}
