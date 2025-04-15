// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         brand: '#6366F1',
//         accent: '#EC4899',
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//       animation: {
//         float: 'float 6s ease-in-out infinite',
//         'float-delayed': 'float 6s ease-in-out -2s infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
//           '50%': { transform: 'translateY(-20px) rotate(4deg)' },
//         },
//       },
//       animation: {
//         'grid-pan': 'grid-pan 20s linear infinite',
//       },
//       keyframes: {
//         'grid-pan': {
//           '0%': { transform: 'translate(0, 0)' },
//           '100%': { transform: 'translate(-40px, 40px)' },
//         }
//       },  
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// };


module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out -2s infinite',
        'gradient-text': 'gradient-text 5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(4deg)' },
        },
        'gradient-text': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundImage: {
        'grid-gray-400/20': 'linear-gradient(to right, rgba(156, 163, 175, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(156, 163, 175, 0.1) 1px, transparent 1px)',
        'grid-gray-700/20': 'linear-gradient(to right, rgba(55, 65, 81, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(55, 65, 81, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-md': '60px 60px',
        'grid-lg': '80px 80px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};