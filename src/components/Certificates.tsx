import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { certificatesData, Certificate } from '../data/certificates';
import { X } from 'lucide-react';

const Certificates: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  /* ── light‑box state ─────────────────────────────────────────── */
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const closeModal = () => setActiveCert(null);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto">
        {/* ───── Heading ───── */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Formal recognitions I’ve earned along my learning journey.
          </p>
        </div>

        {/* ───── Certificates grid ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, i) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className={`group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms`, height: '340px' }}
            >
              {/* preview – 80 % */}
              <div className="relative" style={{ height: '70%' }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* content – 20 % */}
              <div className="flex flex-col p-4 h-[30%]">
                <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {cert.issuer} &middot; {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───── Modal / Light‑box ───── */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-11/12"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside the box
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow"
            >
              <X size={20} />
            </button>

            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <p className="mt-4 text-center text-sm text-white">
              {activeCert.title} — {activeCert.issuer}, {activeCert.date}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
