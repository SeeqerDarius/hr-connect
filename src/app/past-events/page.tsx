export const metadata = {
  title: 'Past Events | HR Connect 2025',
  description: 'A look back at previous editions of the HR Connect Conference in Ghana.',
};

export default function PastEventsPage() {
  return (
    <main className="bg-[#08174B] text-white py-20 px-6 text-center min-h-screen">
      <h1 className="text-4xl font-bold text-[#FF8C00] mb-6">Past Events</h1>
      <ul className="max-w-2xl mx-auto space-y-4 text-left text-lg">
        <li><strong>2024:</strong> The Resilient Workforce – Accra</li>
        <li><strong>2023:</strong> Future of Work – Kumasi</li>
        <li><strong>2022:</strong> HR Leadership in Crisis – Virtual</li>
      </ul>
    </main>
  );
}
