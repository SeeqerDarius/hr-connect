'use client';
import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const targetDate = new Date('2025-10-15T09:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg w-fit mx-auto">
      <h2 className="text-2xl font-bold mb-4">Countdown to HR Connect 2025</h2>
      <div className="flex gap-4 justify-center text-xl font-mono">
        <div>
          <span className="block text-3xl font-bold">{timeLeft.days ?? '0'}</span>
          Days
        </div>
        <div>
          <span className="block text-3xl font-bold">{timeLeft.hours ?? '0'}</span>
          Hours
        </div>
        <div>
          <span className="block text-3xl font-bold">{timeLeft.minutes ?? '0'}</span>
          Minutes
        </div>
        <div>
          <span className="block text-3xl font-bold">{timeLeft.seconds ?? '0'}</span>
          Seconds
        </div>
      </div>
    </div>
  );
}
