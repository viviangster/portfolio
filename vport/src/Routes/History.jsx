import React, { useState, useEffect } from 'react';

const historyLogos = [
  { file: 'f45.png', alt: 'F45 Training', description: 'Managed overall business operations, including the use of Xero and Mindbody Business software.' },
  { file: 'shiningstar.png', alt: 'Shining Star', description: 'Maintained a centralized base for the smooth-running of tourism business, working closely with owner-operators.' },
  { file: 'sit.png', alt: 'SIT', description: 'Decided to go and get an IT degree at the age of 25!' },
  { file: 'xplosiv.png', alt: 'Xplosiv', description: 'Day-to-day retail assistance. Thoroughly the most fun I had in a job, only left to manage F45 Training!' },
  { file: 'mindbody.png', alt: 'MindBody', description: 'Used for the scheduling of fitness classes, payment proessing and client management.' },
  { file: 'powerautomate.jpg', alt: 'Power Automate', description: 'Beginner internship at ITS, assisting with the development of Power Automate system in staff Onboarding and Offboarding.' },
  { file: 'xero.png', alt: 'Xero', description: 'Weekly, monthly and quarterly management payroll, onboarding, and reconciliation.' },
  { file: 'lucid.png', alt: 'Lucidchart', description: 'Utilizied Lucid Chart across IT assignments in systems design, and process diagramming on for Power Automate Internship.' },
  { file: 'seekom.jpg', alt: 'Seekom', description: 'Hotel Management booking App - used at the Shining Star Beachfront Accommodation for client room bookings.' },
  { file: 'github.jpg', alt: 'GitHub', description: 'Used for version control and project collaboration during projects in IT.' }
];

const History = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const active = historyLogos[activeIndex];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen p-6 text-center" style={{
      backgroundImage: "url('/assets/trees1.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>
      <h2 className="text-3xl font-bold text-amber-900 mb-8">History</h2>

      {loading ? (
        <p className="text-gray-500">Loading history...</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {historyLogos.map((item, index) => (
              <img
                key={index}
                src={`/assets/${item.file}`}
                alt={item.alt}
                onClick={() => setActiveIndex(index)}
                className={`w-20 h-20 object-contain cursor-pointer rounded border p-1 transition ${
                  activeIndex === index ? 'border-amber-400 bg-amber-100' : 'border-gray-300 text-gray-800 bg-amber-50 rounded-lg '
                }`}
              />
            ))}
          </div>

          <div>
            <img
              src={`/assets/${active.file}`}
              alt={active.alt}
              className="w-28 h-28 object-contain mx-auto mb-4"
            />
            <p className="text-lg text-gray-800 bg-amber-50 rounded-lg center items-center ">{active.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default History;
