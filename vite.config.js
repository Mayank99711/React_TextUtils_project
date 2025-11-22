import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base public path when serving the project. Set this to
  // "/<repo-name>/" when deploying to GitHub Pages under
  // https://<username>.github.io/<repo-name>/
  base: '/React_TextUtils_project/',
  plugins: [react()],
})
