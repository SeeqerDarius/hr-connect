export const metadata = {
  title: 'Become a Partner | HR Connect 2025',
  description: 'Elevate your brand through strategic sponsorship opportunities at HR Connect 2025.',
};

export default function SponsorPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-[#0A1C63] text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Partner with </span>
            <span className="text-[#FF8C00]">HR Connect 2025</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Align your brand with Africa&apos;s premier HR conference and gain unparalleled access to industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#packages"
              className="bg-[#FF8C00] hover:bg-[#FF6D00] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
            >
              View Packages
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-[#FF8C00] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-6 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1C63]">
            Why <span className="text-[#FF8C00]">Partner</span> With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF8C00]">
              <div className="text-[#FF8C00] text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1C63]">Premium Audience</h3>
              <p className="text-gray-700">Connect with 500+ HR professionals, executives, and decision-makers from across Africa.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF8C00]">
              <div className="text-[#FF8C00] text-4xl mb-4">📢</div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1C63]">Brand Visibility</h3>
              <p className="text-gray-700">Amplify your brand through multi-channel marketing before, during, and after the event.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF8C00]">
              <div className="text-[#FF8C00] text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1C63]">Thought Leadership</h3>
              <p className="text-gray-700">Position your company as an industry leader through speaking opportunities and content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#0A1C63]">
            <span className="text-[#FF8C00]">Sponsorship</span> Packages
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-700">
            Choose the partnership level that aligns with your marketing objectives and budget.
          </p>

          {/* Additional Options */}
          <div className="mt-16 max-w-4xl mx-auto bg-[#0A1C63] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold text-[#FF8C00] mb-6 text-center">À La Carte Sponsorship Options</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#08174B] p-4 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">Exhibition Stand</h4>
                <p className="text-2xl font-bold text-[#FF8C00]">GHC 5,000</p>
              </div>
              <div className="bg-[#08174B] p-4 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">Half Page Ad</h4>
                <p className="text-2xl font-bold text-[#FF8C00]">GHC 2,500</p>
              </div>
              <div className="bg-[#08174B] p-4 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">Full Page Ad</h4>
                <p className="text-2xl font-bold text-[#FF8C00]">GHC 5,000</p>
              </div>
            </div>
            <p className="text-center mt-6 text-sm opacity-80">
              *Custom sponsorship packages available upon request
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1C63]">
            What Our <span className="text-[#FF8C00]">Partners</span> Say
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FF8C00]">
              <p className="italic mb-4 text-gray-700">
                &quot;Sponsoring HR Connect was one of our best marketing decisions last year. The quality of attendees and networking opportunities exceeded our expectations.&quot;
              </p>
              <p className="font-bold text-[#0A1C63]">— HR Director, Leading Tech Company</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FF8C00]">
              <p className="italic mb-4 text-gray-700">
                &quot;The visibility we gained through our Platinum partnership translated directly into new business opportunities. The team was professional and delivered on all promises.&quot;
              </p>
              <p className="font-bold text-[#0A1C63]">— CEO, HR Solutions Provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FF6D00] via-[#FF8C00] to-[#FF6D00] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-black/10 backdrop-blur-sm p-6 rounded-xl inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              Ready to Elevate Your Brand?
            </h2>
          </div>
          <div className="bg-black/10 backdrop-blur-sm p-6 rounded-xl max-w-3xl mx-auto mb-8">
            <p className="text-xl text-white font-medium drop-shadow-lg">
              Partner with HR Connect 2025 and gain unparalleled access to Africa&apos;s HR leadership community.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@hrnetworkafrica.org"
              className="bg-white/90 hover:bg-white text-[#FF6D00] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Email Our Partnerships Team
            </a>
            <a
              href="tel:+233123456789"
              className="bg-black/20 hover:bg-black/30 text-white border-2 border-white/80 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Call +233 123 456 789
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}