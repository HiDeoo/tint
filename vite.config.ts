/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { presetUno, transformerVariantGroup } from 'unocss'
import { presetExtra } from 'unocss-preset-extra'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    Unocss({
      presets: [presetUno(), presetExtra()],
      theme: {
        breakpoints: {
          xss: '480px',
          xs: '512px',
        },
      },
      transformers: [transformerVariantGroup()],
      variants: [
        (matcher) => {
          const prefixes = ['ds-active:', 'ds-inactive:', 'ds-open:', 'ds-closed:', 'd-highlighted:']
          const prefix = prefixes.find((prefix) => matcher.startsWith(prefix))

          if (!prefix) {
            return matcher
          }

          return {
            matcher: matcher.slice(prefix.length),
            selector: (selector) => {
              if (prefix.startsWith('ds')) {
                return `${selector}[data-state="${prefix.slice(3, -1)}"]`
              }

              return `${selector}[data-${prefix.slice(2, -1)}]`
            },
          }
        },
      ],
    }),
    react(),
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
    }),
  ],
  test: {
    environment: 'jsdom',
  },
})
