import React from 'react';
import '@fontsource/orbitron/600.css';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10 px-6 overflow-hidden">
      {/* Animated dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px] opacity-30 animate-pulse"></div>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-[Orbitron] tracking-wider">Safeguarding the Future of AI</h2>
        <p className="max-w-xl text-gray-300 text-sm">
          Explore the evolution of artificial intelligence — from early logic circuits to superintelligence. Learn how we can ensure safety, ethics, and responsibility as AI progresses.                      <br></br>Created by Shatadru
        </p>
        <div className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} The AI ProShow. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
