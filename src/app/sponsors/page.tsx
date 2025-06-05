export const metadata = {
  title: 'Sponsors | HR Connect 2025',
  description: 'Meet the sponsors supporting the HR Connect Conference 2025.',
};

export default function SponsorsPage() {
  return (
    <main className="bg-[#0A1C63] text-white py-20 px-6 text-center min-h-screen">
      <h1 className="text-4xl font-bold text-[#FF8C00] mb-10">Our Sponsors</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <img
            key={i}
            src={`https://via.placeholder.com/150x80?text=Sponsor+${i}`}
            alt={`Sponsor ${i}`}
            className="mx-auto bg-white p-2 rounded shadow-md"
          />
        ))}
      </div>
    </main>
  );
}
