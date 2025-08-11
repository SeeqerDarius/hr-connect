import { Suspense } from 'react';
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
  return (
    <main className="bg-[#08174B] text-white py-20 px-6 min-h-screen text-center">
      <h1 className="text-4xl font-bold text-[#FF8C00] mb-6">Register</h1>
      <Suspense fallback={<div>Loading form...</div>}>
        <RegisterForm />
      </Suspense>
    </main>
  );
}
