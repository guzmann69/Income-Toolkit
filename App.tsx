
import React from 'react';
import Hero from './components/Hero';
import ToolCard from './components/ToolCard';
import Footer from './components/Footer';
import { TOOLS, TOOLKIT_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Income Toolkit</div>
          <a
            href={TOOLKIT_LINK}
            className="bg-[#2563eb] px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
          >
            Free Download
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24">
        <Hero />
      </section>

      {/* Tools Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Master Library / CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-b from-[#111] to-black p-10 md:p-16 rounded-3xl border border-blue-500/10 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-100 to-blue-400 bg-clip-text text-transparent">Unlock Master Library</h2>
          <p className="text-blue-100/60 text-lg mb-10">
            Download all resources at once and save time. Start your digital journey today.
          </p>
          <a
            href={TOOLKIT_LINK}
            className="inline-block px-12 py-5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-2xl font-black text-xl shadow-xl shadow-blue-500/20 transition-all transform hover:scale-105"
          >
            Download All
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
