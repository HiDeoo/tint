import react from '@vitejs/plugin-react'
import { presetUno, transformerVariantGroup } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    Unocss({
      presets: [presetUno()],
      theme: {
        breakpoints: {
          xss: '480px',
          xs: '512px',
        },
      },
      transformers: [transformerVariantGroup()],
      variants: [
        (matcher) => {
          const prefix = 'ds-active:'

          if (!matcher.startsWith(prefix)) {
            return matcher
          }

          return {
            matcher: matcher.slice(prefix.length),
            selector: (selector) => `${selector}[data-state="active"]`,
          }
        },
        (matcher) => {
          const prefix = 'ds-inactive:'

          if (!matcher.startsWith(prefix)) {
            return matcher
          }

          return {
            matcher: matcher.slice(prefix.length),
            selector: (selector) => `${selector}[data-state="inactive"]`,
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
})
