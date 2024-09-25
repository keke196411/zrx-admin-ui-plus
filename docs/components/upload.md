---
title: Upload 上传
---

# Upload 上传

通过点击或者拖拽上传文件

### 卡片型图片上传

<ClientOnly>
<div class="m-t-20">
<zrx-upload
    multiple
    :limit="limit"
    :file-list="fileList"
    list-type="picture-card"
    upload-type="image"
    :action="actionUrl"
    accept=".png,.jpg,.jpeg,.svg"
    @onExceed="onExceed"
    @beforeUpload="beforeUpload"
    :on-error="handleUploadError"
    :on-success="handleUploadSuccess"
></zrx-upload>
</div>
</ClientOnly>

::: tip
上传（图片或文件）组件目前默认通过 zrx-upload-image 和 zrx-upload-file 类名来复写样式，复制以下代码后需要保留 list-type="picture-card"、limit、file-list、multiple 等属性
:::

::: details 示例代码

```html
<zrx-upload
    multiple
    :limit="limit"
    :file-list="fileList"
    list-type="picture-card"
    upload-type="image"
    :action="actionUrl"
    accept=".png,.jpg,.jpeg,.svg"
    @onExceed="onExceed"
    @beforeUpload="beforeUpload"
    :on-error="handleUploadError"
    :on-success="handleUploadSuccess"
></zrx-upload>
<script>
    import { ref } from 'vue'
    import { ElMessage } from 'element-plus'

    const actionUrl = 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative'
    const fileList = ref([
        [
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 1657002749164,
                status: 'success'
            },
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 16570027491144164,
                status: 'success'
            }
        ]
    ])
    const limit = 3
    const fileSize = 50
    const sizeUnit = 'KB'

    // 上传成功回调
    const handleUploadSuccess = (response, file, files) => {
        fileList.value.push({
            name: response.data.fileOriginalName,
            url: response.data.link
        })
    }
    // 上传失败回调
    const handleUploadError = (err, file, fileList) => {}
    const beforeUpload = (file, isExceed, isUnAchieved) => {
        if (isExceed) {
            ElMessage.warning(`文件大小不能超过${this.fileSize}${this.sizeUnit}!`)
        } else if (isUnAchieved) {
            ElMessage.warning('文件为空!')
        }
    }
    const onExceed = (isExceed) => {
        if (isExceed) {
            ElMessage.warning('超过文件上传的最大个数!')
        }
    }
</script>
```

:::

### 卡片型文件上传

<ClientOnly>
<div class="m-t-20">
    <zrx-upload
        :multiple="true"
        :limit="limit"
        :file-list="fileList1"
        list-type="picture-card"
        upload-type="file"
        :action="actionUrl"
        accept=".png,.jpg,.jpeg,.svg"
        :on-error="handleUploadError"
        :on-success="handleUploadSuccess1"
        @beforeUpload="beforeUpload"
        @onExceed="onExceed"
    ></zrx-upload>
</div>
</ClientOnly>

::: tip
list-type = "picture-card", uploadType = "file"
:::

::: details 示例代码

```html
<zrx-upload
    :multiple="true"
    :limit="limit"
    :file-list="fileList"
    list-type="picture-card"
    upload-type="file"
    :action="actionUrl"
    accept=".png,.jpg,.jpeg,.svg"
    :on-error="handleUploadError"
    :on-success="handleUploadSuccess"
    @beforeUpload="beforeUpload"
    @onExceed="onExceed"
></zrx-upload>
<script>
    import { ref } from 'vue'
    import { ElMessage } from 'element-plus'

    const actionUrl = 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative'
    const fileList = ref([
        [
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 1657002749164,
                status: 'success'
            },
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 16570027491144164,
                status: 'success'
            }
        ]
    ])
    const limit = 3
    const fileSize = 50
    const sizeUnit = 'KB'

    // 上传成功回调
    const handleUploadSuccess = (response, file, files) => {
        fileList.value.push({
            name: response.data.fileOriginalName,
            url: response.data.link
        })
    }
    // 上传失败回调
    const handleUploadError = (err, file, fileList) => {}
    const beforeUpload = (file, isExceed, isUnAchieved) => {
        if (isExceed) {
            ElMessage.warning(`文件大小不能超过${this.fileSize}${this.sizeUnit}!`)
        } else if (isUnAchieved) {
            ElMessage.warning('文件为空!')
        }
    }
    const onExceed = (isExceed) => {
        if (isExceed) {
            ElMessage.warning('超过文件上传的最大个数!')
        }
    }
</script>
```

:::

### 按钮型文件上传

<ClientOnly>
<div class="m-t-20 w-436">
    <zrx-upload
        :multiple="true"
        :limit="limit"
        :file-list="fileList2"
        :action="actionUrl"
        :fileSize="fileSize"
        :sizeUnit="sizeUnit"
        accept=".png,.jpg,.jpeg,.svg"
        :on-error="handleUploadError"
        :on-success="handleUploadSuccess2"
        @beforeUpload="beforeUpload"
        @onExceed="onExceed"
    ></zrx-upload>
</div>
</ClientOnly>

::: tip
list-type = "text"
:::

::: details 示例代码

```html
<zrx-upload
    :multiple="true"
    :limit="limit"
    :file-list="fileList"
    :action="actionUrl"
    :fileSize="fileSize"
    :sizeUnit="sizeUnit"
    accept=".png,.jpg,.jpeg,.svg"
    :on-error="handleUploadError"
    :on-success="handleUploadSuccess"
    @beforeUpload="beforeUpload"
    @onExceed="onExceed"
></zrx-upload>
<script>
    import { ref } from 'vue'
    import { ElMessage } from 'element-plus'

    const actionUrl = 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative'
    const fileList = ref([
        [
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 1657002749164,
                status: 'success'
            },
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 16570027491144164,
                status: 'success'
            }
        ]
    ])
    const limit = 3
    const fileSize = 50
    const sizeUnit = 'KB'

    // 上传成功回调
    const handleUploadSuccess = (response, file, files) => {
        fileList.value.push({
            name: response.data.fileOriginalName,
            url: response.data.link
        })
    }
    // 上传失败回调
    const handleUploadError = (err, file, fileList) => {}
    const beforeUpload = (file, isExceed, isUnAchieved) => {
        if (isExceed) {
            ElMessage.warning(`文件大小不能超过${this.fileSize}${this.sizeUnit}!`)
        } else if (isUnAchieved) {
            ElMessage.warning('文件为空!')
        }
    }
    const onExceed = (isExceed) => {
        if (isExceed) {
            ElMessage.warning('超过文件上传的最大个数!')
        }
    }
</script>
```

:::

### 拖拽上传

<ClientOnly>
<div class="m-t-20 w-436">
    <zrx-upload
        :multiple="true"
        :limit="limit"
        :drag="true"
        :file-list="fileList3"
        :action="actionUrl"
        :file-size="fileSize"
        :size-unit="sizeUnit"
        accept=".png,.jpg,.jpeg,.svg"
        :on-error="handleUploadError"
        :on-success="handleUploadSuccess3"
        @beforeUpload="beforeUpload"
        @onExceed="onExceed"
    ></zrx-upload>
</div>
</ClientOnly>

::: details 示例代码

```html
<zrx-upload
    :multiple="true"
    :limit="limit"
    :drag="true"
    :file-list="fileList"
    :action="actionUrl"
    :file-size="fileSize"
    :size-unit="sizeUnit"
    accept=".png,.jpg,.jpeg,.svg"
    :on-error="handleUploadError"
    :on-success="handleUploadSuccess"
    @beforeUpload="beforeUpload"
    @onExceed="onExceed"
></zrx-upload>
<script>
    import { ref } from 'vue'
    import { ElMessage } from 'element-plus'

    const actionUrl = 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative'
    const fileList = ref([
        [
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 1657002749164,
                status: 'success'
            },
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 16570027491144164,
                status: 'success'
            }
        ]
    ])
    const limit = 3
    const fileSize = 50
    const sizeUnit = 'KB'

    // 上传成功回调
    const handleUploadSuccess = (response, file, files) => {
        fileList.value.push({
            name: response.data.fileOriginalName,
            url: response.data.link
        })
    }
    // 上传失败回调
    const handleUploadError = (err, file, fileList) => {}
    const beforeUpload = (file, isExceed, isUnAchieved) => {
        if (isExceed) {
            ElMessage.warning(`文件大小不能超过${this.fileSize}${this.sizeUnit}!`)
        } else if (isUnAchieved) {
            ElMessage.warning('文件为空!')
        }
    }
    const onExceed = (isExceed) => {
        if (isExceed) {
            ElMessage.warning('超过文件上传的最大个数!')
        }
    }
</script>
```

:::

### 禁用

<ClientOnly>
<div class="m-t-20">
    <zrx-upload
        disabled
        :multiple="true"
        :limit="limit"
        :file-list="fileList4"
        list-type="picture-card"
        upload-type="file"
        :action="actionUrl"
        accept=".png,.jpg,.jpeg,.svg"
    ></zrx-upload>
</div>
</ClientOnly>

::: details 示例代码

```html
<zrx-upload
    disabled
    :multiple="true"
    :limit="limit"
    :file-list="fileList"
    list-type="picture-card"
    upload-type="file"
    :action="actionUrl"
    accept=".png,.jpg,.jpeg,.svg"
></zrx-upload>
<script>
    import { ref } from 'vue'
    import { ElMessage } from 'element-plus'

    const actionUrl = 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative'
    const fileList = ref([
        [
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 1657002749164,
                status: 'success'
            },
            {
                name: 'animation_bg_1544207568866508800.jpg',
                url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
                uid: 16570027491144164,
                status: 'success'
            }
        ]
    ])
    const limit = 3
    const fileSize = 50
    const sizeUnit = 'KB'
</script>
```

:::

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const actionUrl = 'http://10.10.120.201:30199/file/server/file/uploadFtp'
const defaultFiles = [
    {
        name: 'animation_bg_1544207568866508800.jpg',
        url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
        uid: 1657002749164,
        status: 'success'
    },
    {
        name: 'animation_bg_1544207568866508800.jpg',
        url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
        uid: 16570027491144164,
        status: 'success'
    }
]
const fileList = ref([...defaultFiles])
const fileList1 = ref([...defaultFiles])
const fileList2 = ref([...defaultFiles])
const fileList3 = ref([...defaultFiles])
const fileList4 = ref([...defaultFiles])
const limit = 3
const fileSize = 50
const sizeUnit = 'KB'

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
const handleUploadSuccess2 = (response, file, files) => {
    fileList2.value.push({
        name: response.data.fileOriginalName,
        url: response.data.link
    })
}
const handleUploadSuccess3 = (response, file, files) => {
    fileList3.value.push({
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
const onExceed = (isExceed) => {
    if (isExceed) {
        ElMessage.warning('超过文件上传的最大个数!')
    }
}
</script>

### 链接

[https://element.eleme.io/#/zh-CN/component/upload](https://element-plus.org/zh-CN/component/upload.html)

### Attributes

| 参数                   | 说明                                                                                                    | 类型                                                     | 可选值                    | 默认值     |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------- | ---------- |
| `action`               | 必选参数，上传的地址                                                                                    | string                                                   | —                         | —          |
| `headers`              | 设置上传的请求头部                                                                                      | object                                                   | —                         | —          |
| `multiple`             | 是否支持多选文件                                                                                        | boolean                                                  | —                         | —          |
| `data`                 | 上传时附带的额外参数                                                                                    | object                                                   | —                         | —          |
| `name`                 | 上传的文件字段名                                                                                        | string                                                   | —                         | file       |
| `with-credentials`     | 支持发送 cookie 凭证信息                                                                                | boolean                                                  | —                         | false      |
| `show-file-list`       | 是否显示已上传文件列表                                                                                  | boolean                                                  | —                         | true       |
| `drag`                 | 是否启用拖拽上传                                                                                        | boolean                                                  | —                         | false      |
| `accept`               | 接受上传的文件类型（thumbnail-mode 模式下此参数无效）                                                   | string                                                   | —                         | —          |
| `on-preview`           | 点击文件列表中已上传的文件时的钩子                                                                      | function(file)                                           | —                         | —          |
| `on-remove`            | 文件列表移除文件时的钩子                                                                                | function(file, fileList)                                 | —                         | —          |
| `on-success`           | 文件上传成功时的钩子                                                                                    | function(response, file, fileList)                       | —                         | —          |
| `on-error`             | 文件上传失败时的钩子                                                                                    | function(err, file, fileList)                            | —                         | —          |
| `on-progress`          | 文件上传时的钩子                                                                                        | function(event, file, fileList)                          | —                         | —          |
| `on-change`            | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                          | function(file, fileList)                                 | —                         | —          |
| `before-upload($emit)` | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。           | function(file,exceed(是否超出上限),unAchieved(是否为空)) | —                         | —          |
| `on-exceed($emit)`     | 文件超出个数限制时的钩子                                                                                | function(files, fileList)                                | —                         | -          |
| `removeFile($emit)`    | 删除上传文件的回调                                                                                      | function(files, index)                                   | —                         | -          |
| `before-remove`        | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。 | function(file, fileList)                                 | —                         | —          |
| `list-type`            | 文件列表的类型                                                                                          | string                                                   | text/picture/picture-card | text       |
| `auto-upload`          | 是否在选取文件后立即进行上传                                                                            | boolean                                                  | —                         | true       |
| `file-list`            | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]                          | array                                                    | —                         | []         |
| `http-request`         | 覆盖默认的上传行为，可以自定义上传的实现                                                                | function                                                 | —                         | —          |
| `disabled`             | 是否禁用                                                                                                | boolean                                                  | —                         | false      |
| `limit`                | 最大允许上传个数                                                                                        | number                                                   | —                         | —          |
| `upload-type`          | 上传的图片类型                                                                                          | String                                                   | file/image                | file       |
| `file-size`            | 限制文件上传大小                                                                                        | Number                                                   | -                         | 2          |
| `size-unit`            | 文件的单位                                                                                              | String                                                   | KB/MB                     | MB         |
| `buttonText`           | 自定义按钮文字(表单中心)                                                                                | String                                                   | -                         | '点击上传' |
| `disabled`             | 是否禁用(表单中心)                                                                                      | Boolean                                                  | true/false                | false      |
| `showTip`              | 是否显示提示信息(表单中心)                                                                              | Boolean                                                  | true/false                | true       |
| `token`                | 文件上传的token(表单中心)                                                                               | String                                                   | -                         | -          |

### Methods

| 方法名       | 说明                                                        | 参数                                |
| ------------ | ----------------------------------------------------------- | ----------------------------------- |
| `clearFiles` | 清空已上传的文件列表（该方法不支持在 before-upload 中调用） | —                                   |
| `abort`      | 取消上传请求                                                | （ file: fileList 中的 file 对象 ） |
| `submit`     | 手动上传文件列表                                            | —                                   |
