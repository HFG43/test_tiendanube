import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// AGREGADO POR PROBLEMA DE VARIABLE GLOBAL https://stackoverflow.com/questions/72114775/vite-global-is-not-defined
export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react()],
    define: {},
  };

  if (mode === "development") {
    config.define.global = {};
  }

  return config;
});