
import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-[#111] rounded-xl p-8 text-center shadow-2xl border border-blue-500/10 transition-transform hover:scale-[1.02] hover:border-blue-500/30">
      <div className="text-5xl mb-6 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">{tool.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-blue-50">{tool.name}</h3>
      <p className="text-blue-100/50 text-sm mb-6 leading-relaxed">
        {tool.description}
      </p>
      <a
        href={tool.downloadUrl}
        className="inline-block px-8 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg font-bold transition-colors w-full"
      >
        Download Free
      </a>
    </div>
  );
};

export default ToolCard;
