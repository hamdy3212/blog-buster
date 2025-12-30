"use client";

import { useEffect } from 'react';

export interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error';
  onClose: (id: string) => void;
}

export function Toast({ id, message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? '✓' : '✕';

  return (
    <div
      className={`${bgColor} text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 min-w-[280px] max-w-[90vw] sm:max-w-md animate-slide-in`}
      role="alert"
      aria-live="polite"
    >
      <span className="text-xl font-bold flex-shrink-0">{icon}</span>
      <p className="flex-1 text-sm sm:text-base font-medium">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="text-white/80 hover:text-white transition-colors flex-shrink-0 text-xl leading-none"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}
