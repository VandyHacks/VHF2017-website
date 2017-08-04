module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'VandyHacks IV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The official website for VandyHacks IV, Tennessee\'s premiere hackathon' },
      { name: 'theme-color', content: '#222a53' },
      { 'written-by': 'Yunyu Lin' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['google-maps']
  },
  css: ['flexboxgrid/dist/flexboxgrid.css']
}
