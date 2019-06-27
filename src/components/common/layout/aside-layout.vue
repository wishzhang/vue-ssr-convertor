<template>
    <el-row class="app-aside-layout app-base-card">
        <slot></slot>
    </el-row>
</template>

<script>
    export default {
        name: "app-aside-layout"
    };
</script>

<style scoped lang="scss">
    .app-aside-layout {
        display: block;
        position:relative;
        left:0;
        top:0;
        align-self: flex-start;
        width: 260px;
    }
</style>