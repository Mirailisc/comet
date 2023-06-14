import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    server: {
      port: parseInt(process.env.PORT) || 3000,
    },
    preview: {
      port: parseInt(process.env.PORT) || 8000,
      host: true,
    },
    plugins: [react(), eslint()],
  })
}
