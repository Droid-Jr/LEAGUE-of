/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        bodyLight: 'hsl(0,0%,108.0%)',
        body: 'hsl(0,0%,100%)',
        bodyDark: 'hsl(0,0%,88.0%)',
        heaLight: 'hsl(0,0%,19.4%)',
        hea: 'hsl(0,0%,11.4%)',
        heaDark: 'hsl(0,0%,-0.6%)',
        hovLight: 'hsl(348,100%,51.9%)',
        ho: 'hsl(348,100%,43.9%)',
        hoDark: 'hsl(348,100%,31.9%)'        
      },
      screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },

backgroundImage: {
        footid:'url(img/portadafooter.jpg)',
        portadad: 'url(img/portada2.jpg)'
    },
    }
  },
  plugins: [],
}
