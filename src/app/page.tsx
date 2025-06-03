export default function Home() {
  return (
    <main className="bg-[#0A1C63] text-white">

      {/* Hero Section */}
      <section className="text-center py-20 px-4 sm:px-6 md:px-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FF8C00] mb-4">HR CONNECT CONFERENCE</h1>
        <p className="italic text-lg text-gray-200 mb-2">Theme</p>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">EMPOWERING HR EXCELLENCE</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg mb-6">
          Leveraging data, resilience, and wellness for a thriving workplace.
        </p>
        <p className="text-base sm:text-lg font-semibold text-[#FF8C00]">8th August, 2025 @ Movenpick Hotel, Accra</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <span className="bg-[#D63384] text-white px-6 py-2 rounded font-bold text-sm sm:text-base">FEE GHS 1,500</span>
          <span className="bg-[#1DA1A3] text-white px-6 py-2 rounded font-bold text-sm sm:text-base">EARLY BIRD GHS 1,250</span>
          <span className="bg-[#F39C12] text-black px-6 py-2 rounded font-bold text-sm sm:text-base">ONLINE GHS 1,000</span>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="bg-[#08174B] py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#FF8C00]">Conference Agenda</h2>
          <ul className="text-left space-y-4 text-sm sm:text-base">
            <li><strong>09:00 AM -</strong> Registration & Welcome Coffee</li>
            <li><strong>10:00 AM -</strong> Opening Keynote</li>
            <li><strong>11:30 AM -</strong> Diversity & Inclusion Panel</li>
            <li><strong>01:00 PM -</strong> Networking Lunch</li>
            <li><strong>02:00 PM -</strong> Workshops</li>
            <li><strong>04:00 PM -</strong> Closing Remarks</li>
          </ul>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="bg-[#0A1C63] py-20 px-4 sm:px-6 md:px-10">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#FF8C00]">Meet the Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#08174B] p-6 text-center rounded shadow">
                <img src="https://via.placeholder.com/150" alt="" className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Speaker {i}</h3>
                <p className="text-gray-300">Job Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#0A1C63] py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#FF8C00]">What People Are Saying</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#08174B] p-6 rounded shadow">
                <p className="italic mb-2">“Fantastic event. Practical sessions and top-tier networking.”</p>
                <p className="font-semibold text-orange-300">– Attendee {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-[#0A1C63] py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#FF8C00]">Our Sponsors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://via.placeholder.com/120x60?text=Logo+${i}`} alt={`Sponsor ${i}`} className="mx-auto" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
