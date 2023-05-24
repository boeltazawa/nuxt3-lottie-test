import { resolve } from 'path'
require('dotenv').config()
const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = process.env
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    nitro: {
        preset: 'vercel',
    },
    css: [
    ],
    app:{
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: {name:'layout',mode: 'out-in'},
        head: {
            htmlAttrs: {
                lang: 'ja',
            },
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'description', content: process.env.npm_package_description || '' }
            ],
            link: [
                { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '32x32', href: '/apple-touch-icon-32x32.png' },
                { rel: 'apple-touch-icon', sizes: '48x48', href: '/apple-touch-icon-48x48.png' },
                { rel: 'apple-touch-icon', sizes: '128x128', href: '/apple-touch-icon-128x128.png' },
                { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
            ],
        },
    },
    runtimeConfig:{
        MICROCMS_API_KEY: MICROCMS_API_KEY,
        MICROCMS_SERVICE_DOMAIN: MICROCMS_SERVICE_DOMAIN,
        public:{
            MICROCMS_SERVICE_DOMAIN: process.env.NODE_ENV === 'production' ? undefined : MICROCMS_SERVICE_DOMAIN,
            MICROCMS_API_KEY: process.env.NODE_ENV === 'production' ? undefined : MICROCMS_API_KEY,
        }
    },
    hooks: {
        'pages:extend'(pages:any) {
            pages.push({
                name: 'page',
                path: '/page/:p',
                file: resolve(__dirname, '/pages/index.vue')
            })
        },
        "build:manifest": (manifest) => {
            Object.values(manifest).forEach((entry) => {
                if (entry.isEntry) {
                    entry.css = [];
                }
            });
        },
    }
})
