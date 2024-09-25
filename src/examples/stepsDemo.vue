<template>
    <div class="w-600 h-full p-x-12 p-y-16">
        <el-steps :active="1" space='50%' finish-status="finish" align-center>
            <el-step title="Title" description="This is a very very long discribtion." />
            <el-step title="Title" description="This is a very very long discribtion." />
            <el-step title="Title" description="This is a very very long discribtion." />
        </el-steps>
    </div>
    <div class="w-600 h-full p-x-12 p-y-16">
        <el-steps class="zrx-sm-step" :active="1" finish-status="finish" align-center>
            <el-step title="Title" description="This is a very very long discribtion." />
            <el-step title="Title" description="This is a very very long discribtion." />
            <el-step title="Title" description="This is a very very long discribtion." />
        </el-steps>
    </div>
    <div class="w-188 h-280 p-x-12 p-y-16">
        <el-steps :active="1" direction="vertical" finish-status="finish" align-center>
            <el-step title="Title" description="This is a very very long discribtion." />
            <el-step title="Title" description="This is a very very long discribtion." />
            <el-step title="Title" description="This is a very very long discribtion." />
        </el-steps>
    </div>
     <div class="w-188 h-480 p-x-12 p-y-16">
        <el-steps  space='50%' class="zrx-sm-step" :active="1" direction="vertical" finish-status="finish" align-center>
            <el-step title="Title" description="This is a very very long discribtion." />
            <el-step title="Title" description="This is a very very long discribtion." />
            <el-step title="Title" description="This is a very very long discribtion." />
        </el-steps>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
