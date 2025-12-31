
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-blue-500/10 text-center bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Income Toolkit</p>
        <p className="text-blue-100/30 text-sm mb-2">
          &copy; {new Date().getFullYear()} Income Toolkit. All rights reserved.
        </p>
        <p className="text-blue-100/20 text-xs italic">
          Disclaimer: All tools and resources are provided for educational purposes only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
