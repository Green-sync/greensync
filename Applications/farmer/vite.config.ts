import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [
                "@heroicons/react/20/solid",
                "firebase/auth",
                "localforage",
                "match-sorter",
                "react-router-dom",
                "sort-by",
                'react-router-dom'
            ]
        }
    }
})
