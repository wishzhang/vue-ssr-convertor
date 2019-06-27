<template>
    <el-row class="app-main-layout">
        <slot></slot>
    </el-row>
</template>

<script>
    export default {
        name: "app-main-layout"
    };
</script>

<style scoped lang="scss">
    .app-main-layout {
        align-self: flex-start;
        position:relative;
        left:0;
        top:0;
        width: 880px;
    }
</style>