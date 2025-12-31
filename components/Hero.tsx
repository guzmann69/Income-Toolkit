
import React from 'react';
import { TOOLKIT_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Learn Online Income, Affiliate Marketing & Growth Tools
        </h1>
        <p className="text-lg md:text-xl text-blue-100/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get free access to professional tools, tutorials, and courses to kickstart your online business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={TOOLKIT_LINK}
            className="px-10 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-900/40 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Access Free Toolkit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
