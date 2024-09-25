---
title: Menu 菜单
---

# Menu 菜单

<ClientOnly>
<div class="w-240 h-full p-x-12 p-y-16">
    <div class="m-y-20 font-bold f-16">左侧菜单</div>
    <el-radio-group v-model="isCollapse" >
        <el-radio-button :value="false">展开</el-radio-button>
        <el-radio-button :value="true">收缩</el-radio-button>
    </el-radio-group>
    <el-menu popper-effect="light" default-active="4" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <i
                        class="svg-icon"
                        :style="`mask-image:url(${comUser})`"
                    ></i>
                    <span>一级标题</span>
                </template>
                <el-sub-menu index="1-4">
                    <template #title><span>二级标题1</span></template>
                    <el-menu-item index="1-4-1">三级标题</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="1-5">
                    <template #title><span>二级标题2</span></template>
                    <el-menu-item index="1-5-1">三级标题</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <i
                    class="svg-icon"
                    :style="`mask-image:url(${comUser})`"
                ></i>
                <template #title>一级标题2</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i
                    class="svg-icon"
                    :style="`mask-image:url(${comUser})`"
                ></i>
                <template #title>一级标题3(禁用)</template>
            </el-menu-item>
            <el-menu-item index="4">
                <i
                    class="svg-icon"
                    :style="`mask-image:url(${comUser})`"
                ></i>
                <template #title>一级标题4</template>
            </el-menu-item>
            <el-sub-menu index="5">
                <template #title>
                    <i
                        class="svg-icon"
                        :style="`mask-image:url(${comUser})`"
                    ></i>
                    <span>一级标题5</span>
                </template>
                <el-sub-menu index="5-4">
                    <template #title><span>二级标题</span></template>
                    <el-menu-item index="5-4-1">三级标题</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'
import comUser from '../../src/assets/svg-icon/auto-import/user.svg'
const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
const menuList = [
    {
        id: '1',
        iconType: 'svg',
        icon: 'http://10.10.120.211:30007/ca5b71e2-df12-4d88-a155-1fb3a904706a.svg?name=nav_priority_object.svg&type=svg',
        label: '人工考核',
        path: '',
        children: []
    }
]
</script>
<style lang="scss" scoped>
    :deep(ul){
        padding-left:0;
        margin:none;
        list-style: none;
        li{
            +li{
                margin-top:0;
            }
        }
    }
    :deep(li){
        >ul{
            margin: 0;
        }
    }
</style>

::: details 示例代码

```html
<div class="w-240 h-full p-x-12 p-y-16">
    <div class="m-y-20 font-bold f-16">左侧菜单</div>
    <el-radio-group v-model="isCollapse">
        <el-radio-button :value="false">展开</el-radio-button>
        <el-radio-button :value="true">收缩</el-radio-button>
    </el-radio-group>
    <el-menu popper-effect="light" default-active="4" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
            <template #title>
                <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
                <span>一级标题</span>
            </template>
            <el-sub-menu index="1-4">
                <template #title><span>二级标题1</span></template>
                <el-menu-item index="1-4-1">三级标题</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-5">
                <template #title><span>二级标题2</span></template>
                <el-menu-item index="1-5-1">三级标题</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
            <template #title>一级标题2</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
            <template #title>一级标题3(禁用)</template>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
            <template #title>一级标题4</template>
        </el-menu-item>
        <el-sub-menu index="5">
            <template #title>
                <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
                <span>一级标题5</span>
            </template>
            <el-sub-menu index="5-4">
                <template #title><span>二级标题</span></template>
                <el-menu-item index="5-4-1">三级标题</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</div>

<script setup>
    import { ref } from 'vue'
    import comUser from '../../src/assets/svg-icon/auto-import/user.svg'
    const isCollapse = ref(false)
    const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
    }
    const menuList = [
        {
            id: '1',
            iconType: 'svg',
            icon: 'http://10.10.120.211:30007/ca5b71e2-df12-4d88-a155-1fb3a904706a.svg?name=nav_priority_object.svg&type=svg',
            label: '人工考核',
            path: '',
            children: []
        }
    ]
</script>
:::

### Attributes

| 参数                          | 说明               | 类型   | 可选值 | 默认值 |
| ----------------------------- | ------------------ | ------ | ------ | ------ |
| `--zrx-menu-hover-bg-color`   | 菜单hover选中背景色 | string | -- | rgba( 59, 65, 85 , 0.04)  |
| `--zrx-menu-active-bg-color`   | 菜单选中背景色 | string | -- | rgba(66, 99, 254, 0.1)  |
| `--el-menu-active-color`      | 菜单选中字体颜色 | string | --     | #3b4155   |
| `--el-menu-base-level-padding`| 菜单栏基础边距（二级标题起）     | string | --     | 32px   |
| `--el-menu-level-padding`     | 菜单栏层级边距   | string | --     | 12px   |
| `--el-menu-item-height` | 菜单最小自己高度 | string | --     | 40px   |
| `--zrx-menu-active-icon-bg`   | 选中项的自定义icon的背景色     | string | --     | #405ffe   |