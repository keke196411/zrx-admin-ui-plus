<template>
    <div>
        <div class="m-y-20 font-bold f-16">主要按钮</div>
        <div class="m-y-20">
            <el-button type="primary">主按钮</el-button>
            <el-button type="primary">
                <i class="svg-icon zrx-icon-download"></i>
                下载
            </el-button>
            <el-button type="primary"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
            <el-button type="primary" round>
                <i class="svg-icon zrx-icon-search"></i>
            </el-button>
            <el-button type="primary" circle>
                <i class="svg-icon zrx-icon-search"></i>
            </el-button>
            <el-button type="primary" style="--zrx-btn-min-width: 44px">确定</el-button>
            <el-button disabled type="primary">主按钮</el-button>
        </div>

        <div class="m-y-20 font-bold f-16">次按钮</div>

        <div class="m-y-20">
            <el-button type="default">次按钮</el-button>
            <el-button type="default">
                <i class="svg-icon zrx-icon-download"></i>
                下载
            </el-button>
            <el-button type="default"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
            <el-button type="default" round>
                <i class="svg-icon zrx-icon-search"></i>
            </el-button>
            <el-button type="default" circle>
                <i class="svg-icon zrx-icon-search"></i>
            </el-button>
            <el-button type="default" style="--zrx-btn-min-width: 44px">确定</el-button>
            <el-button disabled type="default">主按钮</el-button>
        </div>

        <div class="m-y-20 font-bold f-16">危险按钮</div>

        <div class="m-y-20">
            <el-button type="danger">危险按钮</el-button>
            <el-button type="danger">
                <i class="svg-icon zrx-icon-download"></i>
                下载
            </el-button>
            <el-button type="danger"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
            <el-button type="danger" round>
                <i class="svg-icon zrx-icon-search"></i>
            </el-button>
            <el-button type="danger" circle>
                <i class="svg-icon zrx-icon-search"></i>
            </el-button>
            <el-button type="danger" style="--zrx-btn-min-width: 44px">确定</el-button>
            <el-button disabled type="danger">主按钮</el-button>
        </div>

        <div class="m-y-20 font-bold f-16">幽灵按钮</div>

        <div class="m-y-20">
            <el-button type="default" class="zrx-button-ghost">幽灵按钮</el-button>
            <el-button type="default" class="zrx-button-ghost">
                <i class="svg-icon zrx-icon-download"></i>
                下载
            </el-button>
            <el-button type="default" class="zrx-button-ghost"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
            <el-button type="default" round class="zrx-button-ghost">
                <i class="svg-icon zrx-icon-search"></i>
            </el-button>
            <el-button type="default" circle class="zrx-button-ghost">
                <i class="svg-icon zrx-icon-search"></i>
            </el-button>
            <el-button type="default" class="zrx-button-ghost" style="--zrx-btn-min-width: 44px">确定</el-button>
            <el-button disabled type="default" class="zrx-button-ghost">主按钮</el-button>
        </div>

        <div class="m-y-20 font-bold f-16">文字按钮</div>
        <div class="m-y-20">
            <el-button link type="primary">文字按钮</el-button>
            <el-button link type="primary">
                <i class="svg-icon zrx-icon-download"></i>
                下载
            </el-button>
            <el-button link type="primary"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
            <el-button link type="primary" style="--zrx-btn-min-width: 44px">确定</el-button>
            <el-button link disabled>主按钮</el-button>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
