// components/Cursor.js
'use client';

import { useState, useEffect } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="fixed pointer-events-none z-2 mix-blend-exclusion"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.15s ease-out'
      }}
    >
      <div className="rounded-full bg-[#810CA8]/20 backdrop-blur-lg"
        style={{
          boxShadow: `0 0 40px 40px #810CA8`
        }}
      />
    </div>
  );
}