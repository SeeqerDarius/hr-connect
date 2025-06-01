import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
  <section className="flex flex-col items-center justify-center text-center py-24 px-4">
    <h2 className="text-5xl font-extrabold text-blue-700 mb-6">Welcome to HR Connect 2025</h2>
    <p className="text-xl max-w-2xl mb-8">
      Discover the latest trends in HR, connect with top professionals, and shape the future of work.
    </p>
    <a
      href="#"
      className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
    >
      Register Now
    </a>
  </section>
  <section id="agenda" className="bg-white py-20 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-gray-800 mb-6">Conference Agenda</h3>
    <ul className="space-y-4 text-left">
      <li className="border-b pb-4">
        <span className="font-semibold">09:00 AM -</span> Registration & Welcome Coffee
      </li>
      <li className="border-b pb-4">
        <span className="font-semibold">10:00 AM -</span> Opening Keynote: The Future of HR
      </li>
      <li className="border-b pb-4">
        <span className="font-semibold">11:30 AM -</span> Panel Discussion: Diversity & Inclusion
      </li>
      <li className="border-b pb-4">
        <span className="font-semibold">01:00 PM -</span> Networking Lunch
      </li>
      <li className="border-b pb-4">
        <span className="font-semibold">02:00 PM -</span> Workshops & Breakout Sessions
      </li>
      <li>
        <span className="font-semibold">04:00 PM -</span> Closing Remarks & Farewell
      </li>
    </ul>
  </div>
</section>
<section id="speakers" className="bg-gray-100 py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-gray-800 mb-10">Featured Speakers</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 shadow rounded">
        <img src="https://via.placeholder.com/150" alt="Jane Doe" className="mx-auto rounded-full mb-4" />
        <h4 className="text-xl font-semibold">Jane Doe</h4>
        <p className="text-gray-600">Chief HR Officer, TechCorp</p>
      </div>
      <div className="bg-white p-6 shadow rounded">
        <img src="https://via.placeholder.com/150" alt="John Smith" className="mx-auto rounded-full mb-4" />
        <h4 className="text-xl font-semibold">John Smith</h4>
        <p className="text-gray-600">Founder, PeopleFirst</p>
      </div>
      <div className="bg-white p-6 shadow rounded">
        <img src="https://via.placeholder.com/150" alt="Lisa Brown" className="mx-auto rounded-full mb-4" />
        <h4 className="text-xl font-semibold">Lisa Brown</h4>
        <p className="text-gray-600">HR Innovation Lead, WorkX</p>
      </div>
    </div>
  </div>
</section>
<section id="register" className="bg-white py-20 px-4">
  <div className="max-w-xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-gray-800 mb-6">Register for HR Connect 2025</h3>
    <form className="space-y-6 text-left">
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email Address</label>
        <input
          type="email"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          placeholder="you@example.com"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Submit Registration
      </button>
    </form>
  </div>
</section>
<section id="contact" className="bg-gray-100 py-20 px-4">
  <div className="max-w-xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h3>
    <p className="mb-4">Have questions or need more info? Reach out to our team:</p>
    <p className="text-blue-600 font-medium">info@hrconnectconf.com</p>
    <p className="text-gray-600 mt-2">Phone: +1 (555) 123-4567</p>
  </div>
</section>




</main>

    </>
  );
}
