export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0A1C63] text-white px-6 py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#FF8C00]">Thank You!</h1>
      <p className="text-lg mb-4">
        Your registration for HR Connect 2025 has been received.
      </p>
      <p className="text-gray-300 mb-10">We'll get back to you via email with confirmation details.</p>

      <a
        href="/"
        className="bg-[#FF8C00] text-white py-2 px-6 rounded font-bold hover:bg-orange-600 transition"
      >
        Back to Home
      </a>
    </main>
  );
}
