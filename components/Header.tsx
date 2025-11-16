import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            ElectoPeru 2026
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-200 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-200 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/electores/buscar" className="hover:text-blue-200 transition-colors">
                  Buscar Elector
                </Link>
              </li>
              <li>
                <Link href="/locales" className="hover:text-blue-200 transition-colors">
                  Locales
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
