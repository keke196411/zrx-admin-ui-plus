---
title: Pagination 分页
---

# Pagination 分页

::: tip
该组件是基于element-plus，然后添加了slot组成的。设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。 分页元素如下： prev (上一页按钮), next (下一页按钮), pager (分页列表), jumper (跳转), total (总计), sizes (每页条数选择) 和 -> (every element after this symbol will be pulled to the right)；layout，包含"->, prev, next, slot"时，会显示首页、尾页的Icon按钮。
:::

<ClientOnly>
<div class="m-y-20 font-bold f-16">默认用带页码的分页</div>
<zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize"></zrx-pagination>
<div class="m-y-20 font-bold f-16">无页码分页</div>
<zrx-pagination
    :total="total"
    v-model:current-page="pageNum"
    v-model:page-size="pageSize"
    layout="total, sizes, ->, prev, next, slot"
></zrx-pagination>
<div class="m-y-20 font-bold f-16">隐藏左侧总数量和条数的分页</div>
<zrx-pagination
        :total="total"
        v-model:current-page="pageNum"
        v-model:page-size="pageSize"
        layout="->, prev, next, slot"
></zrx-pagination>
<div class="m-y-20 font-bold f-16">小型分页</div>
<zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize" layout="->, prev, pager, next"></zrx-pagination>
<zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize" layout="->, prev, next"></zrx-pagination>
</ClientOnly>    

<script setup>
import { ref, watch } from 'vue'

const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(95)

watch([pageNum, pageSize], (currentValues, oldValues) => {
if (oldValues?.[1] != currentValues?.[1] && pageNum.value != 1) {
pageNum.value = 1

        return
    }
    console.log('🚀 ~ watch ~ pageNum, pageSize:', pageNum.value, pageSize.value)

})
</script>


::: warning
Vue3已支持多个v-model，所以请使用watch监听，利用v-model的双向绑定来实现分页数据请求；
:::

::: details 示例代码

```html
<div class="m-y-20 font-bold f-16">默认用带页码的分页</div>
<zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize"></zrx-pagination>
<div class="m-y-20 font-bold f-16">无页码分页</div>
<zrx-pagination
    :total="total"
    v-model:current-page="pageNum"
    v-model:page-size="pageSize"
    layout="total, sizes, ->, prev, next, slot"
></zrx-pagination>
<div class="m-y-20 font-bold f-16">隐藏左侧总数量和条数的分页</div>
<zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize" layout="->, prev, next, slot"></zrx-pagination>
<div class="m-y-20 font-bold f-16">小型分页</div>
<zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize" layout="->, prev, pager, next"></zrx-pagination>
<zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize" layout="->, prev, next"></zrx-pagination>

<script setup>
    import { ref, watch } from 'vue'

    const pageNum = ref(1)
    const pageSize = ref(10)
    const total = ref(95)

    watch([pageNum, pageSize], (currentValues, oldValues) => {
        if (oldValues?.[1] != currentValues?.[1] && pageNum.value != 1) {
            pageNum.value = 1

            return
        }
        console.log('🚀 ~ watch ~ pageNum, pageSize:', pageNum.value, pageSize.value)
    })
</script>
```

:::
