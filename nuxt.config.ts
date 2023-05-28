// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "nuxt-icon"
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: "solarized-light", // "solarized-dark
        dark: "solarized-dark"
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
