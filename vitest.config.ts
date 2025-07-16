import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        '**/*.config.*',
        './src/index.tsx',
        '**/vite-env.*',
        '**/*.types.ts',
        'src/types/*',
        'node_modules/',
        'coverage/',
      ],
      reporter: ['text', 'json-summary'],
      reportOnFailure: true,
      thresholds: {
        statements: 80,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
  },
});
