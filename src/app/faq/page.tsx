export default function FAQPage() {
  const faqs = [
    {
      q: "Who should attend HR Connect 2025?",
      a: "HR professionals, team leaders, organizational development specialists, and business executives focused on people strategy.",
    },
    {
      q: "Is there a virtual attendance option?",
      a: "Yes. We offer online participation for individuals unable to attend physically. The link will be sent upon registration.",
    },
    {
      q: "How do I become a sponsor or partner?",
      a: "Visit the 'Become a Partner' section on the homepage or contact us directly at info@hrnetworkafrica.org.",
    },
    {
      q: "What is the dress code?",
      a: "Smart business or professional attire is recommended.",
    },
    {
      q: "Can I transfer my ticket?",
      a: "Yes. Tickets are transferable. Email us the new attendee details at least 72 hours before the event.",
    },
  ];

  return (
    <main className="bg-[#08174B] text-white px-6 py-20 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#FF8C00] mb-4">Frequently Asked Questions</h1>
        <p className="text-lg">Quick answers to common questions about HR Connect 2025.</p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((item, idx) => (
          <div key={idx} className="bg-[#0A1C63] p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#FF8C00] mb-2">{item.q}</h3>
            <p className="text-base text-white">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
