'use client';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[url('/about-hero.jpg')] bg-cover bg-center text-white py-24">
        <div className="text-center bg-black bg-opacity-60 py-10">
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#FF8C00]">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              HR Connect is West Africa’s premier HR leadership event, uniting professionals to explore innovation,
              wellness, data strategy, and workplace transformation. We build platforms for networking, learning, and
              growing the future of HR leadership in Africa.
            </p>
          </div>
          <div>
            <img src="/about-image.jpg" alt="Team" className="rounded shadow-md" />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-[#F9F9F9] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-2xl font-bold text-[#FF8C00] mb-4">Mission</h3>
            <p>
              To empower HR professionals in West Africa by advancing innovation, inclusivity, and leadership
              excellence.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#FF8C00] mb-4">Vision</h3>
            <p>
              To be the leading HR network transforming workplaces and cultures across Africa.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#FF8C00] mb-4">Values</h3>
            <p>
              Integrity, collaboration, innovation, leadership, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Professional Commitment */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#FF8C00]">Our Professional Commitment</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              <strong>Setting the Standard:</strong> We uphold the highest HR standards and ethics.
            </li>
            <li>
              <strong>Leading with Integrity:</strong> We promote professionalism and transparency.
            </li>
            <li>
              <strong>Valuing People:</strong> We prioritize employee growth, engagement, and success.
            </li>
            <li>
              <strong>Exceeding Expectations:</strong> We deliver excellence every step of the way.
            </li>
          </ul>
        </div>
        <img src="/commitment.jpg" alt="Commitment" className="rounded shadow-md" />
      </section>
    </main>
  );
}
