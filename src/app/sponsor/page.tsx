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
            Align your brand with Africa's premier HR conference and gain unparalleled access to industry leaders.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bronze */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border-t-4 border-[#CD7F32]">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#0A1C63]">Bronze</h3>
                <p className="text-3xl font-bold mb-4 text-[#CD7F32]">GHC 10,000</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#CD7F32] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ad in conference brochure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#CD7F32] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo on banners/screens</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#CD7F32] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3 Entry passes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#CD7F32] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 roller-up banners</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] p-4 text-center">
                <a href="#contact" className="inline-block bg-[#FF8C00] text-white hover:bg-[#FF6D00] px-6 py-2 rounded-full font-bold transition-all">
                  Select
                </a>
              </div>
            </div>

            {/* Silver */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border-t-4 border-[#C0C0C0]">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#0A1C63]">Silver</h3>
                <p className="text-3xl font-bold mb-4 text-[#C0C0C0]">GHC 25,000</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#C0C0C0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2-min corporate video & branding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#C0C0C0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ad in brochure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#C0C0C0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3m x 3m Booth + 4 Entry passes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#C0C0C0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo on screens/banners</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] p-4 text-center">
                <a href="#contact" className="inline-block bg-[#FF8C00] text-white hover:bg-[#FF6D00] px-6 py-2 rounded-full font-bold transition-all">
                  Select
                </a>
              </div>
            </div>

            {/* Gold */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border-t-4 border-[#FFD700]">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#0A1C63]">Gold</h3>
                <p className="text-3xl font-bold mb-4 text-[#FFD700]">GHC 35,000</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#FFD700] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2-min corporate video & full branding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#FFD700] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo on website, screens, banners</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#FFD700] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>7-minute presentation/demo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#FFD700] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3m x 3m Booth + 6 Entry passes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] p-4 text-center">
                <a href="#contact" className="inline-block bg-[#FF8C00] text-white hover:bg-[#FF6D00] px-6 py-2 rounded-full font-bold transition-all">
                  Select
                </a>
              </div>
            </div>

            {/* Platinum */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border-t-4 border-[#E5E4E2]">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#0A1C63]">Platinum</h3>
                <p className="text-3xl font-bold mb-4 text-[#E5E4E2]">GHC 50,000</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#E5E4E2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2-min corporate video & major sponsor branding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#E5E4E2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10-minute presentation or product demo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#E5E4E2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prime logo placement on all materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-[#E5E4E2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3m x 3m Exhibition Booth + 8 passes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F9F9F9] p-4 text-center">
                <a href="#contact" className="inline-block bg-[#FF8C00] text-white hover:bg-[#FF6D00] px-6 py-2 rounded-full font-bold transition-all">
                  Select
                </a>
              </div>
            </div>
          </div>

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
              <p className="italic mb-4 text-gray-700">"Sponsoring HR Connect was one of our best marketing decisions last year. The quality of attendees and networking opportunities exceeded our expectations."</p>
              <p className="font-bold text-[#0A1C63]">— HR Director, Leading Tech Company</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FF8C00]">
              <p className="italic mb-4 text-gray-700">"The visibility we gained through our Platinum partnership translated directly into new business opportunities. The team was professional and delivered on all promises."</p>
              <p className="font-bold text-[#0A1C63]">— CEO, HR Solutions Provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 px-6 bg-gradient-to-r from-[#FF6D00] via-[#FF8C00] to-[#FF6D00] relative overflow-hidden">
  {/* Dark overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/10 z-0"></div>
  
  <div className="max-w-4xl mx-auto text-center relative z-10">
    {/* Text with stronger contrast */}
    <div className="bg-black/10 backdrop-blur-sm p-6 rounded-xl inline-block mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
        Ready to Elevate Your Brand?
      </h2>
    </div>
    
    <div className="bg-black/10 backdrop-blur-sm p-6 rounded-xl max-w-3xl mx-auto mb-8">
      <p className="text-xl text-white font-medium drop-shadow-lg">
        Partner with HR Connect 2025 and gain unparalleled access to Africa's HR leadership community.
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