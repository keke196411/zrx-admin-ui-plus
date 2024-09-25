---
title: Icon 图标
---

# Icon 图标

### 图标合集

点击图标快速复制

<ClientOnly>
<ul class="u-icon-list">
    <li v-for="(n, i) in icons" :key="i"  @click="onCopy">
        <div class="box-top">
            <i :class="n.className"></i>
        </div>
        <div class="box-bottom">
            <span>{{ n.className }}</span>
        </div>
    </li>
</ul>
</ClientOnly>

::: details 示例代码

```html
<ul class="icon-list">
    <li v-for="(n, i) in icons" :key="i">
        <div class="box-top">
            <i :class="n.className"></i>
        </div>
        <div class="box-bottom">
            <span>{{n.className}}</span>
        </div>
    </li>
</ul>
<script setup>
const icons = [
    { className: 'svg-icon zrx-icon-add-small' },
    { className: 'svg-icon zrx-icon-add' },
    { className: 'svg-icon zrx-icon-angle-line-left' },
    { className: 'svg-icon zrx-icon-angle-line-right' },
    { className: 'svg-icon zrx-icon-angles-down-large' },
    { className: 'svg-icon zrx-icon-angles-down' },
    { className: 'svg-icon zrx-icon-angles-left-large' },
    { className: 'svg-icon zrx-icon-angles-left' },
    { className: 'svg-icon zrx-icon-angles-right-large' },
    { className: 'svg-icon zrx-icon-angles-right' },
    { className: 'svg-icon zrx-icon-angles-up-large' },
    { className: 'svg-icon zrx-icon-angles-up' },
    { className: 'svg-icon zrx-icon-arrow-left' },
    { className: 'svg-icon zrx-icon-arrow-right' },
    { className: 'svg-icon zrx-icon-assign-person' },
    { className: 'svg-icon zrx-icon-assign' },
    { className: 'svg-icon zrx-icon-calendar' },
    { className: 'svg-icon zrx-icon-clock' },
    { className: 'svg-icon zrx-icon-close-large' },
    { className: 'svg-icon zrx-icon-close-round' },
    { className: 'svg-icon zrx-icon-close' },
    { className: 'svg-icon zrx-icon-closed-eye' },
    { className: 'svg-icon zrx-icon-copy' },
    { className: 'svg-icon zrx-icon-delete' },
    { className: 'svg-icon zrx-icon-details' },
    { className: 'svg-icon zrx-icon-done' },
    { className: 'svg-icon zrx-icon-down-angle-large' },
    { className: 'svg-icon zrx-icon-down-angle' },
    { className: 'svg-icon zrx-icon-download' },
    { className: 'svg-icon zrx-icon-draw-left' },
    { className: 'svg-icon zrx-icon-draw-right' },
    { className: 'svg-icon zrx-icon-edit' },
    { className: 'svg-icon zrx-icon-export' },
    { className: 'svg-icon zrx-icon-eye' },
    { className: 'svg-icon zrx-icon-filter-table' },
    { className: 'svg-icon zrx-icon-filtered' },
    { className: 'svg-icon zrx-icon-folder' },
    { className: 'svg-icon zrx-icon-forward' },
    { className: 'svg-icon zrx-icon-hide-eye' },
    { className: 'svg-icon zrx-icon-import' },
    { className: 'svg-icon zrx-icon-left-angle-large' },
    { className: 'svg-icon zrx-icon-left-angle' },
    { className: 'svg-icon zrx-icon-maximum' },
    { className: 'svg-icon zrx-icon-minimize' },
    { className: 'svg-icon zrx-icon-minus-small' },
    { className: 'svg-icon zrx-icon-minus' },
    { className: 'svg-icon zrx-icon-paper-clip' },
    { className: 'svg-icon zrx-icon-picture' },
    { className: 'svg-icon zrx-icon-refresh' },
    { className: 'svg-icon zrx-icon-revocation' },
    { className: 'svg-icon zrx-icon-right-angle-large' },
    { className: 'svg-icon zrx-icon-right-angle' },
    { className: 'svg-icon zrx-icon-search' },
    { className: 'svg-icon zrx-icon-setting' },
    { className: 'svg-icon zrx-icon-show-more-ver' },
    { className: 'svg-icon zrx-icon-show-more' },
    { className: 'svg-icon zrx-icon-sort-asc' },
    { className: 'svg-icon zrx-icon-sort-desc' },
    { className: 'svg-icon zrx-icon-switch-ver' },
    { className: 'svg-icon zrx-icon-switch' },
    { className: 'svg-icon zrx-icon-telephone' },
    { className: 'svg-icon zrx-icon-tool' },
    { className: 'svg-icon zrx-icon-up-angle-large' },
    { className: 'svg-icon zrx-icon-up-angle' },
    { className: 'svg-icon zrx-icon-update' },
    { className: 'svg-icon zrx-icon-upload' },
    { className: 'svg-icon zrx-icon-user' },
    { className: 'svg-icon zrx-icon-verification' },
    { className: 'svg-icon zrx-icon-withdraw' },
    { className: 'svg-icon zrx-icon-zoom-in' },
    { className: 'svg-icon zrx-icon-zoom-out' },
    { className: 'zrx-icon zrx-icon-info-gray' },
    { className: 'zrx-icon zrx-icon-error' },
    { className: 'zrx-icon zrx-icon-error-large' },
    { className: 'zrx-icon zrx-icon-error-empty' },
    { className: 'zrx-icon zrx-icon-info' },
    { className: 'zrx-icon zrx-icon-info-large' },
    { className: 'zrx-icon zrx-icon-info-empty' },
    { className: 'zrx-icon zrx-icon-success' },
    { className: 'zrx-icon zrx-icon-success-large' },
    { className: 'zrx-icon zrx-icon-success-empty' },
    { className: 'zrx-icon zrx-icon-question' },
    { className: 'zrx-icon zrx-icon-question-large' },
    { className: 'zrx-icon zrx-icon-warning' },
    { className: 'zrx-icon zrx-icon-warning-large' },
    { className: 'zrx-icon zrx-icon-warning-empty' },
    { className: 'zrx-icon zrx-icon-file-normal' },
    { className: 'zrx-icon zrx-icon-file-warning' }
]
</script>
```

:::

<script setup>
import { ElMessage } from '../../src/index'
const icons = [
    { className: 'svg-icon zrx-icon-add-small' },
    { className: 'svg-icon zrx-icon-add' },
    { className: 'svg-icon zrx-icon-angle-line-left' },
    { className: 'svg-icon zrx-icon-angle-line-right' },
    { className: 'svg-icon zrx-icon-angles-down-large' },
    { className: 'svg-icon zrx-icon-angles-down' },
    { className: 'svg-icon zrx-icon-angles-left-large' },
    { className: 'svg-icon zrx-icon-angles-left' },
    { className: 'svg-icon zrx-icon-angles-right-large' },
    { className: 'svg-icon zrx-icon-angles-right' },
    { className: 'svg-icon zrx-icon-angles-up-large' },
    { className: 'svg-icon zrx-icon-angles-up' },
    { className: 'svg-icon zrx-icon-arrow-left' },
    { className: 'svg-icon zrx-icon-arrow-right' },
    { className: 'svg-icon zrx-icon-assign-person' },
    { className: 'svg-icon zrx-icon-assign' },
    { className: 'svg-icon zrx-icon-calendar' },
    { className: 'svg-icon zrx-icon-clock' },
    { className: 'svg-icon zrx-icon-close-large' },
    { className: 'svg-icon zrx-icon-close-round' },
    { className: 'svg-icon zrx-icon-close' },
    { className: 'svg-icon zrx-icon-closed-eye' },
    { className: 'svg-icon zrx-icon-copy' },
    { className: 'svg-icon zrx-icon-delete' },
    { className: 'svg-icon zrx-icon-details' },
    { className: 'svg-icon zrx-icon-done' },
    { className: 'svg-icon zrx-icon-down-angle-large' },
    { className: 'svg-icon zrx-icon-down-angle' },
    { className: 'svg-icon zrx-icon-download' },
    { className: 'svg-icon zrx-icon-draw-left' },
    { className: 'svg-icon zrx-icon-draw-right' },
    { className: 'svg-icon zrx-icon-edit' },
    { className: 'svg-icon zrx-icon-export' },
    { className: 'svg-icon zrx-icon-eye' },
    { className: 'svg-icon zrx-icon-filter-table' },
    { className: 'svg-icon zrx-icon-filtered' },
    { className: 'svg-icon zrx-icon-folder' },
    { className: 'svg-icon zrx-icon-forward' },
    { className: 'svg-icon zrx-icon-hide-eye' },
    { className: 'svg-icon zrx-icon-import' },
    { className: 'svg-icon zrx-icon-left-angle-large' },
    { className: 'svg-icon zrx-icon-left-angle' },
    { className: 'svg-icon zrx-icon-maximum' },
    { className: 'svg-icon zrx-icon-minimize' },
    { className: 'svg-icon zrx-icon-minus-small' },
    { className: 'svg-icon zrx-icon-minus' },
    { className: 'svg-icon zrx-icon-paper-clip' },
    { className: 'svg-icon zrx-icon-picture' },
    { className: 'svg-icon zrx-icon-refresh' },
    { className: 'svg-icon zrx-icon-revocation' },
    { className: 'svg-icon zrx-icon-right-angle-large' },
    { className: 'svg-icon zrx-icon-right-angle' },
    { className: 'svg-icon zrx-icon-search' },
    { className: 'svg-icon zrx-icon-setting' },
    { className: 'svg-icon zrx-icon-show-more-ver' },
    { className: 'svg-icon zrx-icon-show-more' },
    { className: 'svg-icon zrx-icon-sort-asc' },
    { className: 'svg-icon zrx-icon-sort-desc' },
    { className: 'svg-icon zrx-icon-switch-ver' },
    { className: 'svg-icon zrx-icon-switch' },
    { className: 'svg-icon zrx-icon-telephone' },
    { className: 'svg-icon zrx-icon-tool' },
    { className: 'svg-icon zrx-icon-up-angle-large' },
    { className: 'svg-icon zrx-icon-up-angle' },
    { className: 'svg-icon zrx-icon-update' },
    { className: 'svg-icon zrx-icon-upload' },
    { className: 'svg-icon zrx-icon-user' },
    { className: 'svg-icon zrx-icon-verification' },
    { className: 'svg-icon zrx-icon-withdraw' },
    { className: 'svg-icon zrx-icon-zoom-in' },
    { className: 'svg-icon zrx-icon-zoom-out' },
    { className: 'zrx-icon zrx-icon-info-gray' },
    { className: 'zrx-icon zrx-icon-error' },
    { className: 'zrx-icon zrx-icon-error-large' },
    { className: 'zrx-icon zrx-icon-error-empty' },
    { className: 'zrx-icon zrx-icon-info' },
    { className: 'zrx-icon zrx-icon-info-large' },
    { className: 'zrx-icon zrx-icon-info-empty' },
    { className: 'zrx-icon zrx-icon-success' },
    { className: 'zrx-icon zrx-icon-success-large' },
    { className: 'zrx-icon zrx-icon-success-empty' },
    { className: 'zrx-icon zrx-icon-question' },
    { className: 'zrx-icon zrx-icon-question-large' },
    { className: 'zrx-icon zrx-icon-warning' },
    { className: 'zrx-icon zrx-icon-warning-large' },
    { className: 'zrx-icon zrx-icon-warning-empty' },
    { className: 'zrx-icon zrx-icon-file-normal' },
    { className: 'zrx-icon zrx-icon-file-warning' }
]
const copyToClipboard = text => {
    if (!text) return Promise.reject()
    try {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text)
        } else {
            const textarea = document.createElement('textarea')
            document.body.appendChild(textarea)
            textarea.value = text
            textarea.select()
            document.execCommand('copy', true)
            document.body.removeChild(textarea)
            return Promise.resolve()
        }
    } catch (e) {
        return Promise.reject()
    }
}
const onCopy = evt => {
    const topInner = evt?.currentTarget?.querySelector('.box-top')?.firstElementChild.childElementCount
    let tag = ''
    if (topInner) {
        tag = `<i class="${evt?.currentTarget?.querySelector('.box-bottom')?.firstElementChild?.innerHTML}"><i></i><i></i></i>`
    } else {
        tag = `<i class="${evt?.currentTarget?.querySelector('.box-bottom')?.firstElementChild?.innerHTML}"></i>`
    }
    copyToClipboard(tag).then(() => ElMessage.success('复制到剪切板'))
}
</script>

### 样式变量

| 变量名                  | 默认值 |     说明 |
| ----------------------- | -----: | -------: |
| --zrx-icon-width        |   24px | 图标宽度 |
| --zrx-icon-height       |   24px | 图标高度 |
| --zrx-icon-width-big    |   32px | 图标宽度 |
| --zrx-icon-height-big   |   32px | 图标高度 |
| --zrx-icon-width-large  |   40px | 图标宽度 |
| --zrx-icon-height-large |   40px | 图标高度 |
| --zrx-icon-bg           |  $font | 图标颜色 |
