import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: isSsrBuild
      ? {}
      : {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            docs: path.resolve(__dirname, 'docs/index.html'),
            enHome: path.resolve(__dirname, 'en/index.html'),
            enDocs: path.resolve(__dirname, 'en/docs/index.html'),
          },
        },
  },
}));
