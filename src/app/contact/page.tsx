import Head from 'next/head';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | HR Network Africa-</title>
        <meta name="description" content="Get in touch with us for inquiries about our up coming HR Connect conference." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gray-900 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/IMG-20250610-WA0142.jpg')] opacity-20 bg-cover"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-amber-400">Us,</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&rsquo;re here to help with any questions about our up coming conference
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="text-amber-600 mr-3" size={24} />
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-900">Email Us</h3>
                      <a 
                        href="mailto:Info@hrnetworkafrica.org" 
                        className="text-gray-600 hover:text-amber-600 hover:underline transition"
                      >
                        Info@hrnetworkafrica.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-900">Call Us</h3>
                      <a 
                        href="tel:+233 54 122-2385" 
                        className="text-gray-600 hover:text-amber-600 hover:underline transition"
                      >
                        +233 (54) 122-2385
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">
                        123 HR Network Road<br />
                        HR District<br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    {/*<Clock className="text-amber-600 mt-1 flex-shrink-0" size={20} />*/}
                    {/*<div>
                      <h3 className="font-medium text-gray-900">Studio Hours</h3>
                      <p className="text-gray-600">
                        Monday-Friday: 9am-6pm<br />
                        Saturday: 10am-4pm<br />
                        Sunday: Closed
                      </p>
                    </div>*/}
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm py-3 px-4 border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm py-3 px-4 border"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm py-3 px-4 border"
                  />
                </div>

              
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm py-3 px-4 border"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 py-3 px-6 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-200 h-96 w-full">
          {/* Embed map here */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0851034517814!2d-0.20263810000000002!3d5.5544022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9099050ee617%3A0xec1887b5b7a1893d!2sMovenpick%20Ambassador%20Hotel%20Accra!5e0!3m2!1sen!2sgh!4v1752231102139!5m2!1sen!2sgh" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            className="filter grayscale-[50%]"
          ></iframe>
        </div>

        {/* Footer Section */}
              <footer className="bg-[#0A1C63] text-white py-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">About Us</h3>
                    <p className="mb-6">
                      The HR Network is an association and community of high-performing and credible people management professionals who are focused on accelerating business results through strategic human capital best practices.</p>
                  </div>
        
                  <div>
                    <h3 className="text-xl font-bold mb-4">Info</h3>
                    <ul className="space-y-2">
                      <li><Link href="/" className="hover:text-[#FF8C00]">Home</Link></li>
                      <li><Link href="/speakers" className="hover:text-[#FF8C00]">Speakers</Link></li>
                      <li><Link href="/sponsors" className="hover:text-[#FF8C00]">Sponsors</Link></li>
                      <li><Link href="/contact" className="hover:text-[#FF8C00]">Contact</Link></li>
                    </ul>
                  </div>
        
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <FaPhone className="mt-1 mr-2 text-[#FF8C00]" />
                        <div>
                          <p>(+233) 54 122 2365</p>
                          <p>(+233) 20 575 6709</p>
                          <p>(+233) 26 337 4641</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaEnvelope className="mt-1 mr-2 text-[#FF8C00]" />
                        <p>info@hrnetworkafrica.org</p>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-white/20 text-center">
                </div>
              </footer>
      </main>
    </>
  );
}