import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import type { Plugin } from 'vite'

// Security headers plugin
const securityHeadersPlugin = (): Plugin => ({
  name: 'security-headers',
  configureServer(server) {
    server.middlewares.use((_req, res, next) => {
      // Prevent clickjacking and iframe embedding
      res.setHeader('X-Frame-Options', 'DENY')
      res.setHeader('Content-Security-Policy', "frame-ancestors 'none'")

      // Additional security headers
      res.setHeader('X-Content-Type-Options', 'nosniff')
      res.setHeader('X-XSS-Protection', '1; mode=block')
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
      res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
      res.setHeader(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains; preload'
      )

      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  publicDir: 'public',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    securityHeadersPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/presentation/components'),
      '@/hooks': path.resolve(__dirname, './src/application/hooks'),
      '@/styles': path.resolve(__dirname, './src/presentation/styles'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/domain': path.resolve(__dirname, './src/domain'),
      '@/application': path.resolve(__dirname, './src/application'),
      '@/infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '@/presentation': path.resolve(__dirname, './src/presentation'),
    },
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          styled: ['styled-components'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
    sourcemap: false,
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    headers: {
      'X-Frame-Options': 'DENY',
      'Content-Security-Policy': "frame-ancestors 'none'",
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
    },
  },
  preview: {
    port: 4173,
    strictPort: false,
    headers: {
      'X-Frame-Options': 'DENY',
      'Content-Security-Policy': "frame-ancestors 'none'",
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
    },
  },
})
