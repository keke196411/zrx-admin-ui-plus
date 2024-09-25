const fs = require('fs')
const path = require('path')
// 缩进空格长度
const indent = 4
const run = () => {
    try {
        const svgIcon = fs
            .readdirSync(path.resolve('src/assets/svg-icon/auto-import'))
            .filter((d) => d.endsWith('.svg'))
            .map((d) => d.replace(/\.svg(?=$)/, ''))
        // 解析 scss 文件内容
        const contextcss = fs.readFileSync(path.resolve('src/assets/style/icon.scss')).toString()
        const zrxIcon = contextcss.match(/(?<=\/\/ zrx-icon-start[\w\W]+?&\.)[a-zA-Z\-\d]+(?=[\w\W]+?\/\/ zrx-icon-end)/g).map((d) => `zrx-icon ${d}`)
        const iconClasses =
            svgIcon
                .map(
                    (d) =>
                        `\n${''.padEnd(1 * indent)}&.zrx-icon-${d} {\n${''.padEnd(2 * indent)}mask-image: url("../svg-icon/auto-import/${d}.svg");\n${''.padEnd(1 * indent)}}`
                )
                .join('') + `\n${''.padEnd(1 * indent)}`
        fs.writeFileSync(
            path.resolve('src/assets/style/icon.scss'),
            contextcss.replace(/(?<=\/\/ svg-icon-start)[\s\S]*(?=\/\/ svg-icon-end)/, iconClasses)
        )
        // 解析 .md 文件内容
        const contextmd = fs.readFileSync(path.resolve('docs/components/icon.md')).toString()
        // 计算替换部分的字符串内容
        const classNames = svgIcon
            .map((d) => `svg-icon zrx-icon-${d}`)
            .concat(zrxIcon)
            .map((d) => `${''.padEnd(1 * indent)}{ className: '${d}' }`)
            .join(',\n')
        // 将目标位置的字符替换为 scss 文件中匹配的，并生成 icon.md 文件
        fs.writeFileSync(
            path.resolve('docs/components/icon.md'),
            contextmd.replace(/(?<=<script setup>[\w\W]*?icons = \[)[^\]]*(?=\][\w\W]*<\/script>)/g, `\n${classNames}\n`)
        )
    } catch (e) {
        console.log(e.message)
    }
}

// 解析components.d.ts
const analysisDtsAndCopy = () => {
    try {
        // 解析 d.ts 文件内容
        const context = fs.readFileSync(path.resolve('components.d.ts')).toString()

        fs.writeFileSync(
            path.resolve('index.d.ts'),
            context.replace(/(?<=\n +)(?=[A-Z][a-zA-Z0-9]+:)/g, 'Zrx')
        )
    } catch (e) {
        console.log(e.message)
    }
}

run()
analysisDtsAndCopy()