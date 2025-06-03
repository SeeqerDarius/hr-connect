export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A1C63] text-white px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#FF8C00] mb-6">Contact Us</h1>
        <p className="mb-6 text-lg">Reach out with any questions about HR Connect 2025.</p>

        <div className="space-y-4 text-left text-lg bg-[#08174B] p-6 rounded shadow-md">
          <div>
            <span className="font-semibold text-[#FF8C00]">Email:</span> info@hrnetworkafrica.org
          </div>
          <div>
            <span className="font-semibold text-[#FF8C00]">Phone:</span> +1 (555) 123-4567
          </div>
          <div>
            <span className="font-semibold text-[#FF8C00]">Website:</span>{' '}
            <a href="https://hrnetworkafrica.org" target="_blank" rel="noopener noreferrer" className="underline text-[#FF8C00]">
              hrnetworkafrica.org
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
