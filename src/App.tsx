import React from 'react';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="relative group">
        {/* Animated background gradient */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
        
        {/* Card content */}
        <div className="relative px-7 py-6 bg-black rounded-lg leading-none flex items-center">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-pink-500" />
              <span className="text-pink-500 text-lg font-bold">Premium Card</span>
            </div>
            
            <h3 className="text-white text-2xl font-bold">
              Interactive Gradient Card
            </h3>
            
            <p className="text-slate-300 max-w-sm">
              Hover over this card to see the magical gradient animation come to life. Perfect for highlighting premium features or special content.
            </p>
            
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;