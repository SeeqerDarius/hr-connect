'use client';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0A1C63] text-white px-6 py-20">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#FF8C00]">Register for HR Connect 2025</h1>
        <p className="mb-6 text-lg">Fill in your details to secure your seat.</p>

        <form
          action="https://formspree.io/f/mwpbkyyw"
          method="POST"
          className="space-y-6 text-left"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Organization</label>
            <input
              type="text"
              name="organization"
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF8C00] text-white py-2 rounded font-bold hover:bg-orange-600 transition"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </main>
  );
}
