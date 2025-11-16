import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Cargando...</p>
      </div>
    </div>
  );
}
