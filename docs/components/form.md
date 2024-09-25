---
title: Form 表单
---

# Form 表单

::: tip
可以通过el-form的label-position（top、left、right）来调整标签（label）位置；通过require-asterisk-position（left、right）来调整必填标识\*的位置；
:::

<ClientOnly>
<div class="w-50% m-t-20">
    <el-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        :label-width="120"
        :label-position="formData.labelPosition"
        :require-asterisk-position="formData.requireAsteriskPosition"
    >
        <el-form-item label="标签位置" prop="gender">
            <el-radio-group v-model="formData.labelPosition">
                <el-radio value="top">顶部</el-radio>
                <el-radio value="left">左侧</el-radio>
                <el-radio value="right">右侧</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="必填标识标签位置" prop="requireAsteriskPosition">
            <el-radio-group v-model="formData.requireAsteriskPosition">
                <el-radio value="left">左侧</el-radio>
                <el-radio value="right">右侧</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthDay">
            <el-date-picker type="date" v-model="formData.birthDay" placeholder="请选择"></el-date-picker>
        </el-form-item>
        <el-form-item label="出生地点" prop="birthPlace">
            <el-cascader v-model="formData.birthPlace" placeholder="请选择" :options="defaultOptions"></el-cascader>
        </el-form-item>
        <el-form-item label="工作" prop="job">
            <el-select v-model="formData.job" placeholder="请选择">
                <el-option value="1" label="学生"></el-option>
                <el-option value="2" label="工人"></el-option>
                <el-option value="3" label="老师"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="爱好" prop="hobbies">
            <el-checkbox-group v-model="formData.hobbies">
                <el-checkbox value="1">运动</el-checkbox>
                <el-checkbox value="2">音乐</el-checkbox>
                <el-checkbox value="3">电影</el-checkbox>
                <el-checkbox value="4">游戏</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="头像" prop="headimg">
            <zrx-upload
                :file-list="fileList"
                list-type="picture-card"
                upload-type="image"
                :action="actionUrl"
                accept=".png,.jpg,.jpeg,.svg"
                @beforeUpload="beforeUpload"
                :on-error="handleUploadError"
                :on-success="handleUploadSuccess"
            ></zrx-upload>
        </el-form-item>
        <el-form-item label="文件" prop="fileUrl">
            <zrx-upload
                :file-list="fileList1"
                list-type="picture-card"
                upload-type="file"
                :action="actionUrl"
                accept=".png,.jpg,.jpeg,.svg"
                :on-error="handleUploadError"
                :on-success="handleUploadSuccess1"
                @beforeUpload="beforeUpload"
            ></zrx-upload>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
            <el-input v-model="formData.desc" :rows="5" maxlength="125" type="textarea" show-word-limit placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</ClientOnly>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const formRef = ref()
const defaultOptions = [
    {
        value: 'zhinan',
        label: '指南',
        children: [
            {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                    {
                        value: 'yizhi',
                        label: '一致'
                    },
                    {
                        value: 'fankui',
                        label: '反馈'
                    },
                    {
                        value: 'xiaolv',
                        label: '效率'
                    },
                    {
                        value: 'kekong',
                        label: '可控',
                        disabled: true
                    }
                ]
            },
            {
                value: 'daohang',
                label: '导航',
                children: [
                    {
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    },
                    {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }
                ]
            }
        ]
    },
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]

const actionUrl = 'http://10.10.120.201:30199/file/server/file/uploadFtp'
const formData = reactive({
    name: '',
    labelPosition: 'top',
    requireAsteriskPosition: 'left',
    hobbies: [],
    birthDay: '',
    birthPlace: '',
    job: '',
    headimg: '',
    fileUrl: '',
    desc: ''
})
const rules = {
    name: [{ required: true, message: '请输入', trigger: 'blur' }],
    desc: [{ required: true, message: '请输入', trigger: 'blur' }],
    job: [{ required: true, message: '请选择', trigger: 'change' }],
    hobbies: [{ required: true, message: '请选择', trigger: 'change' }],
    headimg: [{ required: true, message: '请上传', trigger: 'change' }],
    fileUrl: [{ required: true, message: '请上传', trigger: 'change' }],
    birthDay: [{ required: true, message: '请选择', trigger: 'change' }],
    birthPlace: [{ required: true, message: '请选择', trigger: 'change' }]
}

const fileList = ref([])
const fileList1 = ref([])
// 上传成功回调
const handleUploadSuccess = (response, file, files) => {
    fileList.value.push({
        name: response.data.fileOriginalName,
        url: response.data.link
    })
}
const handleUploadSuccess1 = (response, file, files) => {
    fileList1.value.push({
        name: response.data.fileOriginalName,
        url: response.data.link
    })
}

// 上传失败回调
const handleUploadError = (err, file, files) => {}
const beforeUpload = (file, isExceed, isUnAchieved) => {
    if (isExceed) {
        ElMessage.warning(`文件大小不能超过${fileSize}${sizeUnit}!`)
    } else if (isUnAchieved) {
        ElMessage.warning('文件为空!')
    }
}

const onSubmit = () => {
    formRef.value?.validate((valid) => {
        if (valid) {
            console.log('🚀 ~ formData:', formData)
        }
    })
}
</script>

::: details 示例代码

```html
<template>
    <div>
        <div class="w-50%">
            <el-form
                :model="formData"
                :rules="rules"
                ref="formRef"
                :label-width="120"
                :label-position="formData.labelPosition"
                :require-asterisk-position="formData.requireAsteriskPosition"
            >
                <el-form-item label="标签位置" prop="gender">
                    <el-radio-group v-model="formData.labelPosition">
                        <el-radio value="top">顶部</el-radio>
                        <el-radio value="left">左侧</el-radio>
                        <el-radio value="right">右侧</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="必填标识标签位置" prop="requireAsteriskPosition">
                    <el-radio-group v-model="formData.requireAsteriskPosition">
                        <el-radio value="left">左侧</el-radio>
                        <el-radio value="right">右侧</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="formData.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" prop="birthDay">
                    <el-date-picker type="date" v-model="formData.birthDay" placeholder="请选择"></el-date-picker>
                </el-form-item>
                <el-form-item label="出生地点" prop="birthPlace">
                    <el-cascader v-model="formData.birthPlace" placeholder="请选择" :options="defaultOptions"></el-cascader>
                </el-form-item>
                <el-form-item label="工作" prop="job">
                    <el-select v-model="formData.job" placeholder="请选择">
                        <el-option value="1" label="学生"></el-option>
                        <el-option value="2" label="工人"></el-option>
                        <el-option value="3" label="老师"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="爱好" prop="hobbies">
                    <el-checkbox-group v-model="formData.hobbies">
                        <el-checkbox value="1">运动</el-checkbox>
                        <el-checkbox value="2">音乐</el-checkbox>
                        <el-checkbox value="3">电影</el-checkbox>
                        <el-checkbox value="4">游戏</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="头像" prop="headimg">
                    <zrx-upload
                        :file-list="fileList"
                        list-type="picture-card"
                        upload-type="image"
                        :action="actionUrl"
                        accept=".png,.jpg,.jpeg,.svg"
                        @beforeUpload="beforeUpload"
                        :on-error="handleUploadError"
                        :on-success="handleUploadSuccess"
                    ></zrx-upload>
                </el-form-item>
                <el-form-item label="文件" prop="fileUrl">
                    <zrx-upload
                        :file-list="fileList1"
                        list-type="picture-card"
                        upload-type="file"
                        :action="actionUrl"
                        accept=".png,.jpg,.jpeg,.svg"
                        :on-error="handleUploadError"
                        :on-success="handleUploadSuccess1"
                        @beforeUpload="beforeUpload"
                    ></zrx-upload>
                </el-form-item>
                <el-form-item label="描述" prop="desc">
                    <el-input v-model="formData.desc" :rows="5" maxlength="125" type="textarea" show-word-limit placeholder="请输入"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue'
    import { ElMessage } from 'element-plus'

    const formRef = ref()
    const defaultOptions = [
        {
            value: 'zhinan',
            label: '指南',
            children: [
                {
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [
                        {
                            value: 'yizhi',
                            label: '一致'
                        },
                        {
                            value: 'fankui',
                            label: '反馈'
                        },
                        {
                            value: 'xiaolv',
                            label: '效率'
                        },
                        {
                            value: 'kekong',
                            label: '可控',
                            disabled: true
                        }
                    ]
                },
                {
                    value: 'daohang',
                    label: '导航',
                    children: [
                        {
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        },
                        {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }
                    ]
                }
            ]
        },
        {
            value: 'zujian',
            label: '组件',
            children: [
                {
                    value: 'basic',
                    label: 'Basic',
                    children: [
                        {
                            value: 'layout',
                            label: 'Layout 布局'
                        },
                        {
                            value: 'color',
                            label: 'Color 色彩'
                        },
                        {
                            value: 'typography',
                            label: 'Typography 字体'
                        },
                        {
                            value: 'icon',
                            label: 'Icon 图标'
                        },
                        {
                            value: 'button',
                            label: 'Button 按钮'
                        }
                    ]
                },
                {
                    value: 'form',
                    label: 'Form',
                    children: [
                        {
                            value: 'radio',
                            label: 'Radio 单选框'
                        },
                        {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        },
                        {
                            value: 'input',
                            label: 'Input 输入框'
                        },
                        {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        },
                        {
                            value: 'select',
                            label: 'Select 选择器'
                        },
                        {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        },
                        {
                            value: 'switch',
                            label: 'Switch 开关'
                        },
                        {
                            value: 'slider',
                            label: 'Slider 滑块'
                        },
                        {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        },
                        {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        },
                        {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        },
                        {
                            value: 'upload',
                            label: 'Upload 上传'
                        },
                        {
                            value: 'rate',
                            label: 'Rate 评分'
                        },
                        {
                            value: 'form',
                            label: 'Form 表单'
                        }
                    ]
                },
                {
                    value: 'data',
                    label: 'Data',
                    children: [
                        {
                            value: 'table',
                            label: 'Table 表格'
                        },
                        {
                            value: 'tag',
                            label: 'Tag 标签'
                        },
                        {
                            value: 'progress',
                            label: 'Progress 进度条'
                        },
                        {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        },
                        {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        },
                        {
                            value: 'badge',
                            label: 'Badge 标记'
                        }
                    ]
                },
                {
                    value: 'notice',
                    label: 'Notice',
                    children: [
                        {
                            value: 'alert',
                            label: 'Alert 警告'
                        },
                        {
                            value: 'loading',
                            label: 'Loading 加载'
                        },
                        {
                            value: 'message',
                            label: 'Message 消息提示'
                        },
                        {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        },
                        {
                            value: 'notification',
                            label: 'Notification 通知'
                        }
                    ]
                },
                {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [
                        {
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        },
                        {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        },
                        {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        },
                        {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        },
                        {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }
                    ]
                },
                {
                    value: 'others',
                    label: 'Others',
                    children: [
                        {
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        },
                        {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        },
                        {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        },
                        {
                            value: 'card',
                            label: 'Card 卡片'
                        },
                        {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        },
                        {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }
                    ]
                }
            ]
        },
        {
            value: 'ziyuan',
            label: '资源',
            children: [
                {
                    value: 'axure',
                    label: 'Axure Components'
                },
                {
                    value: 'sketch',
                    label: 'Sketch Templates'
                },
                {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }
            ]
        }
    ]

    const actionUrl = 'http://10.10.120.201:30199/file/server/file/uploadFtp'
    const formData = reactive({
        name: '',
        labelPosition: 'top',
        requireAsteriskPosition: 'left',
        hobbies: [],
        birthDay: '',
        birthPlace: '',
        job: '',
        headimg: '',
        fileUrl: '',
        desc: ''
    })
    const rules = {
        name: [{ required: true, message: '请输入', trigger: 'blur' }],
        desc: [{ required: true, message: '请输入', trigger: 'blur' }],
        job: [{ required: true, message: '请选择', trigger: 'change' }],
        hobbies: [{ required: true, message: '请选择', trigger: 'change' }],
        headimg: [{ required: true, message: '请上传', trigger: 'change' }],
        fileUrl: [{ required: true, message: '请上传', trigger: 'change' }],
        birthDay: [{ required: true, message: '请选择', trigger: 'change' }],
        birthPlace: [{ required: true, message: '请选择', trigger: 'change' }]
    }

    const fileList = ref([])
    const fileList1 = ref([])
    // 上传成功回调
    const handleUploadSuccess = (response, file, files) => {
        fileList.value.push({
            name: response.data.fileOriginalName,
            url: response.data.link
        })
    }
    const handleUploadSuccess1 = (response, file, files) => {
        fileList1.value.push({
            name: response.data.fileOriginalName,
            url: response.data.link
        })
    }

    // 上传失败回调
    const handleUploadError = (err, file, files) => {}
    const beforeUpload = (file, isExceed, isUnAchieved) => {
        if (isExceed) {
            ElMessage.warning(`文件大小不能超过${fileSize}${sizeUnit}!`)
        } else if (isUnAchieved) {
            ElMessage.warning('文件为空!')
        }
    }

    const onSubmit = () => {
        formRef.value?.validate((valid) => {
            if (valid) {
                console.log('🚀 ~ formData:', formData)
            }
        })
    }
</script>
```

:::

### 自定义Css变量

| 参数                  | 说明                       | 类型   | 可选值 | 默认值 |
| --------------------- | -------------------------- | ------ | ------ | ------ |
| `--zrx-form-label-mb` | 表单项label到content的边距 | string | —      | 4px    |
| `--zrx-form-item-mb`  | 表单项之间的间距           | string | —      | 24px   |
