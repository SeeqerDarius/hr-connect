"use client";

import { useState } from 'react';
import Head from 'next/head';

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
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

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQs | HR Connect 2025</title>
        <meta name="description" content="Frequently asked questions about HR Connect 2025 conference" />
      </Head>

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative py-24 px-6 bg-[#0A1C63] text-white">
          <div className="absolute inset-0 bg-[url('/images/logo/hr-connect-logo.png')] opacity-10"></div>
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Frequently Asked </span>
              <span className="text-[#FF8C00]">Questions</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Quick answers to common questions about HR Connect 2025
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-[#F9F9F9]">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF8C00]"
                >
                  <button
                    className="w-full text-left flex justify-between items-center"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <h3 className="text-xl font-bold text-[#0A1C63]">
                      {item.q}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-[#FF8C00] transform transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {activeIndex === idx && (
                    <p className="mt-4 text-gray-700">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-[#0A1C63] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-white font-medium mb-8 max-w-3xl mx-auto">
              Contact our team for more information about the event.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:info@hrnetworkafrica.org"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/80 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                Email Us
              </a>
              <a
                href="tel:+233266879046"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/80 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                Call Us: +233(0)266879046
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}