import preact from '@preact/preset-vite'
import { presetAttributify, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    Unocss({ presets: [presetAttributify(), presetUno()] }),
    preact(),
    VitePWA({
      includeAssets: ['images/favicon.ico', 'images/apple-touch-icon.png', 'images/masked-icon.svg'],
      manifest: {
        description: '// TODO',
        icons: [
          {
            sizes: '192x192',
            src: 'images/pwa-192x192.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: 'images/pwa-512x512.png',
            type: 'image/png',
          },
          {
            purpose: 'any maskable',
            sizes: '512x512',
            src: 'images/pwa-512x512.png',
            type: 'image/png',
          },
        ],
        name: '// TODO',
        short_name: '// TODO',
        theme_color: '#ffffff',
      },
      registerType: 'autoUpdate',
    }),
  ],
})
