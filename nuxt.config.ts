// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@unocss/nuxt",
    "nuxt-icon"
  ],
  content: {
    // documentDriven: true,
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark'
      },
      preload: [
        'javascript',
        'typescript',
        'bash',
        'html',
        'css',
        'sass'
      ]
    }
  }
})
