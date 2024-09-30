module.exports = {
    theme: {
      extend: {
        gridTemplateColumns: {
          'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        colors:{
          lightHover: '#fcf4ff',
          darkHover: '#2a004a',
          darkTheme: '#000000'
        },
        boxShadow:{
          black: '3px 3px 0 #000',
          white: '3px 3px 0 #fff'
        },
        variants: {
          extend: {
            display: ['hover', 'focus'],
          },
        },
      }
    },
    darkMode: 'selector'
  }