import { defineConfig, presetAttributify, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
    shortcuts: [
        {
            'wh-full': 'w-full h-full',
            /** 水平居中 */
            'x-center': 'absolute left-50% translate-x--50%',
            /** 垂直 */
            'y-center': 'absolute top-50% translate-y--50%',
            /** 水平垂直居中 */
            'x-y-center': 'absolute top-50% left-50% translate-x--50% translate-y--50%',
            'flex-col': 'flex flex-col',
            'text-ellipsis': 'truncate',
            'zrx-page-header': 'line-height-24px f-16 fw-bold m-b-16 op-90',
            'flex-0-auto': 'shrink-0 grow-0 flex-basis-auto'
        },
        [
            /^text-ellipsis-(\d+)$/,
            ([, lines]) => {
                return `line-clamp-${lines} break-all`
            }
        ],
        // 同时集成水平或者垂直方向的margin、padding
        // m-v-120 --> m-t-120 m-b-120  m-h-120 --> m-l-120 m-r-120
        // m-y-120 --> m-t-120 m-b-120  m-x-120 --> m-l-120 m-r-120
        // p-v-120 --> p-t-120 p-b-120  p-h-120 --> p-l-120 p-r-120
        // p-y-120 --> p-t-120 p-b-120  p-x-120 --> p-l-120 p-r-120
        [
            /^(m|p)-(v|h|x|y)-(\d+)$/,
            ([, key, direction, d]) => {
                const keyMap = {
                    h: ['l', 'r'],
                    v: ['t', 'b'],
                    x: ['l', 'r'],
                    y: ['t', 'b']
                }
                return `${key}-${keyMap[direction][0]}-${d} ${key}-${keyMap[direction][1]}-${d}`
            }
        ],
        // 集成flex布局的样式
        // f-c-c --> flex items-center justify-center
        [
            /^f-((c|s|e)(-(c|s|e|b|a))*)$/,
            ([, , g1, , g2]) => {
                let style = ``
                const temps = [
                    { k: 'c', v: 'center' },
                    { k: 's', v: 'start' },
                    { k: 'e', v: 'end' },
                    { k: 'b', v: 'between' },
                    { k: 'a', v: 'around' }
                ]

                const r1 = temps.find(i => i.k == g1)
                style = `flex items-${r1?.v || 'center'}`

                if (g2) {
                    const r2 = temps.find(i => i.k == g2)
                    style += ` justify-${r2?.v || 'center'}`
                }

                return style
            }
        ]
    ],
    transformers: [transformerVariantGroup()],
    presets: [presetUno(), presetAttributify()],
    rules: [
        [
            /^(m|p|w|h|f|rd|lh)-(\d+)$/,
            ([, key, d]) => {
                const keyMap = {
                    m: 'margin',
                    p: 'padding',
                    w: 'width',
                    h: 'height',
                    f: 'font-size',
                    rd: 'border-radius',
                    lh: 'line-height'
                }
                return { [keyMap[key]]: `${d}px !important` }
            }
        ],
        [
            /^(m|p)-(t|b|l|r)-(\d+)$/,
            ([, key, p, d]) => {
                const temps = {
                    t: 'top',
                    b: 'bottom',
                    l: 'left',
                    r: 'right',
                    m: 'margin',
                    p: 'padding'
                }

                return { [`${temps[key]}-${temps[p]}`]: `${d}px !important` }
            }
        ],
        [
            /^(col|row)-gap-(\d+)$/,
            ([, key, d]) => {
                return { [`${key == 'col' ? key + 'umn' : key}-gap`]: `${d}px` }
            }
        ]
    ],
    theme: {
        colors: {
            font: 'rgba(var(--zrx-font), 1)',
            primary: 'rgba(var(--zrx-primary), 1)',
            success: 'rgba(var(--zrx-success), 1)',
            error: 'rgba(var(--zrx-error), 1)',
            border: 'rgba(var(--zrx-border), 1)'
        }
    }
})
