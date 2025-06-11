export const metadata = {
  title: 'Become a Partner | HR Connect 2025',
  description: 'Become a sponsor and promote your brand at HR Connect 2025.',
};

export default function SponsorPage() {
  return (
    <main className="bg-[#08174B] text-white py-20 px-6 text-center min-h-screen">
      <h1 className="text-4xl font-bold text-[#FF8C00] mb-6">Become a Partner</h1>
      <p className="max-w-2xl mx-auto mb-8 text-lg">
        Interested in sponsoring HR Connect Conference 2025? Let’s collaborate. Submit a request and our team will reach out to discuss opportunities.
      </p>

      <a
        href="mailto:info@hrnetworkafrica.org"
        className="bg-white text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-full font-extrabold text-base sm:text-lg shadow-2xl transition-all duration-300"

      >
        Email info@hrnetworkafrica.org
      </a>
    </main>
  );
}
