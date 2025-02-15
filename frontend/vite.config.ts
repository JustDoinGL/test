/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const frontendPort = parseInt(env.FRONTEND_PORT || '8080');
  const backendUrl = `http://localhost:${env.BACKEND_PORT}`;

  console.log('Mode:', mode);
  console.log('Frontend port:', frontendPort);
  console.log('Backend URL:', backendUrl);

  return {
    plugins: [react(), tsconfigPaths(), removeConsole()],
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: frontendPort,
    },
    preview: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: frontendPort,
    },
    build: {
      minify: false,
      outDir: 'dist',
      sourcemap: true,
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['src/shared/testSetup/setupTest.ts'],
    },
    define: {
      'import.meta.env.BACKEND_URL': JSON.stringify(backendUrl),
      'import.meta.env.MODE': JSON.stringify(mode),
    },
  };
});
