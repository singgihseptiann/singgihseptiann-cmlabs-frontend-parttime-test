import React from "react";

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden bg-zinc-50 pt-20 pb-28 text-center min-h-[70vh] flex flex-col justify-center border-b border-zinc-100">
    {/* Decorative background gradients (Tailwind standard) */}
    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#f59e0b] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Playful Emojis */}
      <div className="flex justify-center items-center space-x-6 mb-8 select-none">
        <div className="text-6xl md:text-7xl hover:scale-110 hover:-rotate-12 transition-transform duration-300 cursor-default">🍔</div>
        <div className="text-6xl md:text-7xl hover:scale-110 hover:-translate-y-4 transition-transform duration-300 z-10 cursor-default">🥘</div>
        <div className="text-6xl md:text-7xl hover:scale-110 hover:rotate-12 transition-transform duration-300 cursor-default">🍽️</div>
      </div>

      {/* Impactful Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-zinc-900 tracking-tight mb-8 leading-[1.1]">
        See All The <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
          Delicious Foods
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
        Explore thousands of recipes and ingredients from around the world. Discover your next favorite culinary masterpiece right here.
      </p>
    </div>
  </section>
);

export default HeroSection;
