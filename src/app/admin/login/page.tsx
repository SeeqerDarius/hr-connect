'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin/dashboard'); // redirect to admin dashboard
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="bg-[#08174B] text-white py-20 px-6 min-h-screen text-center">
      <h1 className="text-4xl font-bold text-[#FF8C00] mb-6">Admin Login</h1>

      <form
        onSubmit={handleLogin}
        className="bg-[#0A1C63] max-w-xl mx-auto p-6 rounded shadow space-y-4 text-left"
      >
        {error && (
          <p className="text-red-400 font-semibold text-sm">{error}</p>
        )}

        <label className="block">
          <span className="text-[#FF8C00]">Email</span>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded bg-white text-black"
          />
        </label>

        <label className="block">
          <span className="text-[#FF8C00]">Password</span>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded bg-white text-black"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition"
        >
          Login
        </button>
      </form>
    </main>
  );
}
