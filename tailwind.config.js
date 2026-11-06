export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#FF4FA3',
        sunset: '#FF7043',
        ocean: '#36B9D8',
        neon: '#8B5CF6',
        navy: '#101322',
        night: '#090B14',
        snow: '#F8F8FA'
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['"Space Grotesk"', 'sans-serif']
      }
    }
  },
  plugins: []
}
