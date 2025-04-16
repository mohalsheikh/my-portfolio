// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-brand',
    'text-accent',
    'text-purple-400',
    'hover:bg-gray-800',
    'hover:bg-blue-600',
    'hover:bg-red-500',
    'hover:bg-green-500',
    'animate-shimmer',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#6366F1',
        accent: '#EC4899',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        shadow: 'box-shadow',
      },
      scale: {
        102: '1.02',
      },
      opacity: {
        15: '0.15',
        85: '0.85',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out -2s infinite',
        'gradient-text': 'gradient-text 5s ease infinite',
        shimmer: 'shimmer 2s infinite',
        'gradient-flow': 'gradient-flow 3s linear infinite',
        'grid-pan': 'grid-pan 20s linear infinite',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(4deg)' },
        },
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'grid-pan': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-40px, 40px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'grid-gray-400/20': 'linear-gradient(to right, rgba(156, 163, 175, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(156, 163, 175, 0.1) 1px, transparent 1px)',
        'grid-gray-700/20': 'linear-gradient(to right, rgba(55, 65, 81, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(55, 65, 81, 0.1) 1px, transparent 1px)',
        shimmer: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-md': '60px 60px',
        'grid-lg': '80px 80px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.2)',
        'glow-accent': '0 0 20px rgba(236, 72, 153, 0.2)',
      },
      dropShadow: {
        glow: [
          '0 0 8px rgba(99, 102, 241, 0.5)',
          '0 0 4px rgba(236, 72, 153, 0.25)',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};
