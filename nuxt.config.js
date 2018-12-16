module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '' },
      { name: 'title', content: '' },
      { name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {type: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,700'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) { 
    }
  }
}
