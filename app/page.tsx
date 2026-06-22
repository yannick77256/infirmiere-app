'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const infirmieres = [
  { email: 'emilienne@cabinet.fr', password: '1234', nom: 'Emilienne Tang' },
  { email: 'wony@cabinet.fr', password: '1234', nom: 'Wony Bamba' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erreur, setErreur] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const user = infirmieres.find(
      (i) => i.email === email && i.password === password
    );
    if (user) {
      localStorage.setItem('infirmiere', JSON.stringify(user));
      router.push('/rdv');
    } else {
      setErreur('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🏥</div>
          <h1 className="text-2xl font-bold text-blue-900">Cabinet Infirmier</h1>
          <p className="text-gray-500 mt-1">Connectez-vous à votre espace</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {erreur && (
            <p className="text-red-500 text-sm text-center">{erreur}</p>
          )}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-800 text-white py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
          >
            Se connecter
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Cabinet Infirmier © 2026
        </p>
      </div>
    </div>
  );
}
