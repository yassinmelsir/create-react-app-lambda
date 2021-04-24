module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        'qh': '25vh',
        'qw': '25vw',
        'th': '30vh',
        'tw': '30vw',
        'tfh': '35vh',
        'tfw': '35vw',
        'halfh': '50vh',
        'halfw': '50vw',
       },
       height: {
        q: '25vh',
        t: '30vh',
        tf: '35vh',
        half: '50vh',
       },
       width: {
        q: '25vw',
        t: '30vw',
        tf: '35vw',
        half: '50vw',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
