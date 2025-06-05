export default function Footer() {
  return (
    <footer className="bg-[#08174B] text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-center sm:text-left gap-4">
        <p>&copy; {new Date().getFullYear()} HR Network Africa. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="mailto:info@hrnetworkafrica.org" className="hover:underline">
            Email Us
          </a>
        </div>
      </div>
    </footer>
  );
}
