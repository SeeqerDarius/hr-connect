// app/loading.tsx
'use client';

import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <Image
          src="/images/hr-connect-logo.png"
          alt="HR Connect Conference Loading"
          width={300}
          height={300}
          className="mb-6"
          priority
        />
        <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#FF8C00] animate-progress"></div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}