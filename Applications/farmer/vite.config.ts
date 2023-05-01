import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [
                "@headlessui/react",
                "@heroicons/react",
                "firebase/auth",
                "firebase",
                "localforage",
                "match-sorter",
                "react",
                "react-dom",
                "react-router-dom",
                "sort-by",
                'react-router-dom'
            ]
        }
    }
})
