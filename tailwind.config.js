module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#ff6b6b", // red-400
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#4ecdc4", // teal-400
          50: "#f0fdfa", // teal-50
          100: "#ccfbf1", // teal-100
          500: "#14b8a6", // teal-500
          600: "#0d9488", // teal-600
          700: "#0f766e", // teal-700
        },
        // Accent Colors
        accent: {
          DEFAULT: "#ffd93d", // yellow-400
          50: "#fefce8", // yellow-50
          100: "#fef3c7", // yellow-100
          500: "#eab308", // yellow-500
          600: "#ca8a04", // yellow-600
        },
        // Background Colors
        background: {
          DEFAULT: "#1a1a1a", // gray-900
          light: "#ffffff", // white
        },
        surface: {
          DEFAULT: "#2d2d2d", // gray-800
          light: "#f8fafc", // slate-50
        },
        // Text Colors
        'text-primary': {
          DEFAULT: "#ffffff", // white
          light: "#1f2937", // gray-800
        },
        'text-secondary': {
          DEFAULT: "#a0a0a0", // gray-400
          light: "#6b7280", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#51cf66", // green-400
          50: "#f0fdf4", // green-50
          500: "#22c55e", // green-500
          600: "#16a34a", // green-600
        },
        warning: {
          DEFAULT: "#ffd43b", // yellow-400
          50: "#fefce8", // yellow-50
          500: "#eab308", // yellow-500
          600: "#ca8a04", // yellow-600
        },
        error: {
          DEFAULT: "#ff6b6b", // red-400
          50: "#fef2f2", // red-50
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'modal': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'light': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      borderColor: {
        'theme-dark': 'rgba(255, 255, 255, 0.1)',
        'theme-light': 'rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 400ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
