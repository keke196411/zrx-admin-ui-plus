<template>
    <div>
        <div class="m-y-20 font-bold f-16">卡片型图片上传</div>
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
        <div class="m-y-20 font-bold f-16">卡片类型文件上传</div>
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
        <div class="m-y-20 font-bold f-16">按钮类型文件上传</div>
        <div class="mb20">
            <div class="w-436">
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
        </div>
        <div class="m-y-20 font-bold f-16">拖拽上传</div>
        <div class="w-436">
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

        <div class="m-y-20 font-bold f-16">禁用</div>
        <div class="mb20">
            <zrx-upload
                disabled
                :multiple="true"
                :limit="limit"
                :file-list="fileList4"
                list-type="picture-card"
                upload-type="file"
                :action="actionUrl"
                accept=".png,.jpg,.jpeg,.svg"
                @onExceed="onExceed"
                @beforeUpload="beforeUpload"
                :on-error="handleUploadError"
                :on-success="handleUploadSuccess4"
            ></zrx-upload>
        </div>
    </div>
</template>

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
const handleUploadSuccess4 = (response, file, files) => {
    fileList4.value.push({
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

<style scoped lang="scss"></style>
