<template>
    <div class="w-600 box h-full p-x-12 p-y-16">
        <div class="top">
            <el-tooltip class="item" content="Top Left 提示文字" placement="top-start">
                <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Top Center 提示文字" placement="top">
                <el-button>上边</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Top Right 提示文字" placement="top-end">
                <el-button>上右</el-button>
            </el-tooltip>
        </div>
        <div class="left">
            <el-tooltip class="item" content="Left Top 提示文字" placement="left-start">
                <el-button>左上</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Left Center 提示文字" placement="left">
                <el-button>左边</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Left Bottom 提示文字" placement="left-end">
                <el-button>左下</el-button>
            </el-tooltip>
        </div>
        <div class="right">
            <el-tooltip class="item" content="Right Top 提示文字" placement="right-start">
                <el-button>右上</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Right Center 提示文字" placement="right">
                <el-button>右边</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Right Bottom 提示文字" placement="right-end">
                <el-button>右下</el-button>
            </el-tooltip>
        </div>
        <div class="bottom">
            <el-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start">
                <el-button>下左</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Bottom Center 提示文字" placement="bottom">
                <el-button>下边</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
                <el-button>下右</el-button>
            </el-tooltip>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.box {
    display: grid;
    grid-template-columns: 60px 180px 60px;
    grid-template-rows: 60px 120px 60px;
    .el-button + .el-button {
        margin-left: 0;
    }
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 10px;
    }
    .top {
        grid-row: 1/1;
        grid-column: 1/4;
    }
    .left {
        flex-direction: column;
        grid-row: 1/4;
        grid-column: 1/1;
    }
    .right {
        flex-direction: column;
        grid-row: 1/4;
        grid-column: 3/3;
    }
    .bottom {
        grid-row: 3/3;
        grid-column: 1/4;
    }
}
</style>
