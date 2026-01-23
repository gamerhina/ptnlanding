/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['Antonio', 'sans-serif'], // Portavia style font
      },
      colors: {
        background: {
          main: '#F2F2F2', // Light grey background
          card: '#FFFFFF', // White cards
        },
        primary: {
          DEFAULT: '#0066FF', // Vibrant Blue
          hover: '#0052CC',
        },
        secondary: {
          DEFAULT: '#FF66CC', // Soft Pink/Magenta
        },
        text: {
          main: '#0F172A', // Navy/Black
          muted: '#64748B',
        },
        portavia: '#303030', // Portavia dark gray
      },
      borderRadius: {
        '4xl': '2.5rem', // 40px
        '5xl': '3rem',
      },
      boxShadow: {
        'glow-blue': '0 0 60px -15px rgba(0, 102, 255, 0.4)',
        'glow-pink': '0 0 60px -15px rgba(255, 102, 204, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'float': '0 20px 40px -10px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
