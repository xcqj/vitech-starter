import presetWind3 from '@unocss/preset-wind3'
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },

    })
  ],
})
