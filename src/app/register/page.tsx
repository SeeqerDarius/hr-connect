export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 text-primary">Register for HR Connect</h1>
      <form className="space-y-6 max-w-xl mx-auto">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" className="w-full px-4 py-2 rounded bg-white text-black" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input type="email" className="w-full px-4 py-2 rounded bg-white text-black" required />
        </div>
        <button type="submit" className="w-full bg-primary py-2 rounded text-white font-bold hover:bg-orange-600">
          Submit
        </button>
      </form>
    </main>
  );
}
