import Inspect from 'vite-plugin-inspect'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
console.log(path.resolve(__dirname,'./src/assets'));
export default{
    server:{
port:3333,
strictPort:true,
headers:{
a:'b'
},
proxy:{
    '/products':'https://dummyjson.com'
}
    },
    esbuild:{
        jsxFactory:'create'
    },
    plugins:[
        Inspect(),
        vue(),react()
    ],
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src/assets')
        }
    }
}