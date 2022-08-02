import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    environment: 'jsdom',
    coverage: {
      enabled: false,
      lines: 90,
      functions: 90,
      branches: 90,
      // We want to catch all js/ts/... files, not only the ones imported in some tests
      // see https://github.com/bcoe/c8#checking-for-full-source-coverage-using---all
      all: true,
      include: [
        // Nuxt 3 framework folders and files sources from directory structure here: https://v3.nuxtjs.org/guide/concepts/introduction
        'assets',
        'components',
        'composables',
        'layouts',
        'middleware',
        'pages',
        'public',
        'server',
        'app.vue',
        // Additions for project
        'helpers',
        'lib',
        'src',
      ],
      exclude: ['**/*.stories.ts'],
    },
    setupFiles: [
      './testSetupFiles/registerNuxtLink.ts',
    ],
  },
})
