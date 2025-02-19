import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Wish4Wisdom/', // This ensures assets are loaded correctly in production
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined // Prevents code splitting for better compatibility
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});
