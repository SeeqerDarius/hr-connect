'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function updateCountdown() {
      const eventDate = new Date('2025-08-08T09:00:00');
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      const days = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
      const hours = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0);
      const minutes = Math.max(Math.floor((diff / 1000 / 60) % 60), 0);
      const seconds = Math.max(Math.floor((diff / 1000) % 60), 0);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    updateCountdown(); // initial
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center my-10 bg-white text-black max-w-md mx-auto p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-[#FF8C00] mb-6">Countdown to HR Connect 2025</h2>
      <div className="flex justify-center gap-6 text-lg font-semibold">
        <div>
          <p className="text-4xl">{timeLeft.days}</p>
          <span>Days</span>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.hours}</p>
          <span>Hours</span>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.minutes}</p>
          <span>Minutes</span>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}
