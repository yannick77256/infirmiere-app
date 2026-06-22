'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RDV() {
  const [infirmiere, setInfirmiere] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('infirmiere');
    if (!user) {
      router.push('/');
    } else {
      setInfirmiere(JSON.parse(user));
    }
  }, []);

  if (!infirmiere) return null;

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-sm mx-auto">
        <div className="bg-white rounded-2xl p-5 shadow mb-4">
          <h1 className="text-xl font-bold text-blue-900">
            Bonjour {infirmiere.nom} 👋
          </h1>
          <p className="text-gray-500 text-sm">Vos rendez-vous du jour</p>
        </div>
        <p className="text-center text-gray-400 mt-10">
          Aucun RDV pour aujourd'hui
        </p>
      </div>
    </div>
  );
}