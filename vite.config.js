// vite.config.js
import { resolve } from 'path'; // Make sure to import resolve
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths in build
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        // Add your new and other existing HTML pages here
        ambiancePerformance: resolve(__dirname, 'ambiance-performance.html'), 
        animeScoring: resolve(__dirname, 'anime-scoring.html'),
        gameScoring: resolve(__dirname, 'game-scoring.html'),
        blog: resolve(__dirname, 'blog.html'), 
        classicalPerformance: resolve(__dirname, 'classical-performance.html'), // <-- ADDED THIS LINE
        // ... and so on for every HTML page in the root of your project
      }
    }
  }
});