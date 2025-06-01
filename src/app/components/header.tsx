export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">HR Connect</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#agenda" className="hover:underline">Agenda</a>

          <a href="#speakers" className="hover:underline">Speakers</a>

          <a href="#register" className="hover:underline">Register</a>

          <a href="#contact" className="hover:underline">Contact</a>

        </nav>
      </div>
    </header>
  );
}
