// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    // ...custom presets
  ],
  theme: {
    colors: {
      current: 'currentColor',
      primary: "#a855f7"
    }
  }
})