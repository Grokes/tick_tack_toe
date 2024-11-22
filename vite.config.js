import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [react()],
	server: {
		watch: { usePolling: true },
		host: true,
		strictPort: true,
		port: 8080,
		origin: "http://0.0.0.0:8080"
	},
})
