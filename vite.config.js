import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React_Movie_List/', 
  plugins: [react()],
});
