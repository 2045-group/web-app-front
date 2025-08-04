import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

// Sertifikat fayllarini ulash
const https = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

export default defineConfig({
  base: '/', // Foydalanish qulayligi uchun vaqtincha root qilish
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },

  plugins: [react(), tsconfigPaths(), tailwindcss()],

  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
  },

  publicDir: './public',

  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    strictPort: true,
    https, // HTTPSni to'g'ri uladik
    hmr: {
      overlay: true,
      protocol: 'wss',
      host: 'localhost',
    },
    watch: {
      usePolling: true,
    },
  },

  preview: {
    host: '0.0.0.0',
    port: 4173,
    open: true,
    strictPort: true,
    https,
  },

  envPrefix: 'REACT_APP_',

  optimizeDeps: {
    exclude: ['some-dependency'],
  },

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': '/src',
    },
  },
});
