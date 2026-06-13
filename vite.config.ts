import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite' // 1. Add this import

export default defineConfig({
  plugins: [
    tanstackStart(), 
    nitro(), // 2. Add the nitro plugin here
    viteReact()
  ],
})