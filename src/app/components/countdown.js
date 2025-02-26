"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      if (difference > 0) {
        return {
          jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
          heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          secondes: Math.floor((difference / 1000) % 60),
        };
      }
      return { jours: 0, heures: 0, minutes: 0, secondes: 0 };
    };

    // Initialize state after component mounts (avoiding hydration mismatch)
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return null; // Avoid hydration errors by not rendering until mounted
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#171717] text-white py-6 px-4 rounded-lg shadow-lg w-full  mx-auto bg-opacity-80">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
        TEMPS RESTANT AVEC LE BIKE&RUN
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center hover:bg-bnr-rose bg-bnr-bleu px-4 py-3 sm:px-6 sm:py-4 rounded-lg">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">{value}</span>
            <span className="text-xs sm:text-sm uppercase">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
