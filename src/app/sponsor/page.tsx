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

      {/* Packages Section - 2x2 Grid Layout */}
      <section id="packages" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#0A1C63]">
            <span className="text-[#FF8C00]">Sponsorship</span> Packages
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-700">
            Choose the partnership level that aligns with your marketing objectives and budget.
          </p>

          {/* Top Row - Platinum and Gold */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Platinum Package */}
            <div className="border-2 border-[#FF8C00] rounded-xl overflow-hidden shadow-xl">
              <div className="bg-[#0A1C63] text-white p-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="text-[#FF8C00] mr-2">★</span> Platinum Partner - GHC50,000
                </h3>
              </div>
              <div className="p-6 bg-white">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>2-minute corporate video presentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Verbal recognition as Platinum sponsor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>10-minute special presentation slot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Logo on conference website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Logo on all display screens and banners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Company profile in conference brochure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Prime social media placement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Free 3m x 3m exhibition booth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>8 entry passes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>3 roller banners (2 inside, 1 outside)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Promotional materials distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Custom benefit negotiation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gold Package */}
            <div className="border-2 border-[#FF8C00] rounded-xl overflow-hidden shadow-xl">
              <div className="bg-[#0A1C63] text-white p-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="text-[#FF8C00] mr-2">★</span> Gold Partner - GHC35,000
                </h3>
              </div>
              <div className="p-6 bg-white">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>2-minute corporate video presentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Logo on conference website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Logo on all display screens and banners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Company advertisement in brochure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>7-minute special presentation slot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Free 3m x 3m exhibition booth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>6 entry passes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>3 pull-up banners (2 inside, 1 outside)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Promotional materials distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Custom benefit negotiation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Row - Silver and Bronze */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Silver Package */}
            <div className="border-2 border-[#FF8C00] rounded-xl overflow-hidden shadow-xl">
              <div className="bg-[#0A1C63] text-white p-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="text-[#FF8C00] mr-2">★</span> Silver Partner - GHC25,000
                </h3>
              </div>
              <div className="p-6 bg-white">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>2-minute corporate video presentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Company advertisement in brochure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>3m x 3m exhibition booth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Logo on all display screens and banners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>4 entry passes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>2 roller banners (1 inside, 1 outside)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Promotional materials distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Custom benefit negotiation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bronze Package */}
            <div className="border-2 border-[#FF8C00] rounded-xl overflow-hidden shadow-xl">
              <div className="bg-[#0A1C63] text-white p-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="text-[#FF8C00] mr-2">★</span> Bronze Partner - GHC10,000
                </h3>
              </div>
              <div className="p-6 bg-white">
                <ul className="grid gap-4">
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Company advertisement in brochure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Logo on all display screens and banners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>3 entry passes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>2 roller banners (1 inside, 1 outside)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8C00] mr-2">✓</span>
                    <span>Promotional materials distribution</span>
                  </li>
                </ul>
              </div>
            </div>
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
      <section className="py-20 px-6 bg-[#0A1C63] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-white font-medium mb-8 max-w-3xl mx-auto">
            Partner with HR Connect 2025 and gain unparalleled access to Africa&apos;s HR leadership community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@hrnetworkafrica.org"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/80 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Email Our Partnerships Team
            </a>
            <a
              href="tel:+233266879046"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/80 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Call Cynthia - +233 2668-7904-6
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}