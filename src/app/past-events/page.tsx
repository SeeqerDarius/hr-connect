export const metadata = {
  title: 'Past Events | HR Connect 2025',
  description: 'A look back at previous editions of the HR Connect Conference in Ghana.',
};

export default function PastEventsPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-[#0A1C63] text-white">
        <div className="absolute inset-0 bg-[url('/images/logo/hr-connect-logo.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-[#FF8C00]">Past Events</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            A look back at previous editions of the HR Connect Conference in Ghana
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* 2019 Event */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF8C00]">
              <div className="text-[#FF8C00] text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1C63]">2019 Edition</h3>
              <p className="text-gray-700 mb-4">The Resilient Workforce</p>
              <p className="text-sm text-gray-500">Accra, Ghana</p>
            </div>

            {/* 2022 Event */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF8C00]">
              <div className="text-[#FF8C00] text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1C63]">2022 Edition</h3>
              <p className="text-gray-700 mb-4">Future of Work</p>
              <p className="text-sm text-gray-500">Kumasi, Ghana</p>
            </div>

            {/* 2023 Event */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF8C00]">
              <div className="text-[#FF8C00] text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1C63]">2023 Edition</h3>
              <p className="text-gray-700 mb-4">HR Leadership in Crisis</p>
              <p className="text-sm text-gray-500">Virtual Conference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1C63]">
            Event <span className="text-[#FF8C00]">Highlights</span>
          </h2>
          <div className="space-y-8">
            <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md border-l-4 border-[#FF8C00]">
              <p className="italic mb-4 text-gray-700">
                &quot;The 2024 edition brought together over 500 HR professionals to discuss building resilience in the modern workplace.&quot;
              </p>
              <p className="font-bold text-[#0A1C63]">— Conference Organizer</p>
            </div>
            <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md border-l-4 border-[#FF8C00]">
              <p className="italic mb-4 text-gray-700">
                &quot;Our virtual 2022 conference reached participants from 15 African countries, making it our most accessible event yet.&quot;
              </p>
              <p className="font-bold text-[#0A1C63]">— Digital Team Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#0A1C63] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join HR Connect 2025?
          </h2>
          <p className="text-xl text-white font-medium mb-8 max-w-3xl mx-auto">
            Be part of our next groundbreaking conference for HR professionals in Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           {/* <a
              href="/register"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Register Now
            </a>*/}
            <a
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}