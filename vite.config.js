import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const plugins = [
        vue(),
        vueJsx(),
        AutoImport({
            imports: ['vue'], // 自动引入vue,vue-router,pinia的方法
            dts: true,
            eslintrc: {
                enabled: true
            }
        }),
        Components({
            dirs: ['src/packages/'],
            extensions: ['vue'],
            deep: true,
            // 生成components.d.ts
            dts: true
        })
    ]

    return {
        plugins: mode === 'production' ? plugins : [unocss(), ...plugins],
        build: {
            outDir: 'lib',
            rollupOptions: {
                // 忽略打包vue文件
                external: ['vue', 'unocss'],
                output: {
                    globals: {
                        vue: 'Vue'
                    },
                    exports: 'named'
                }
            },
            lib: {
                entry: resolve(__dirname, 'src/index.js'),
                name: 'zrx-admin-plus'
            }
        },
        resolve: {
            alias: {
                '@': '/src',
                '~@': '/src'
            },
            extensions: ['.vue', '.js', '.json', 'cjs']
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/style/common/variable.scss";`
                }
            }
        },
        server: {
            port: 8060,
            host: '0.0.0.0',
            // @ts-ignore
            https: false
        }
    }
})
