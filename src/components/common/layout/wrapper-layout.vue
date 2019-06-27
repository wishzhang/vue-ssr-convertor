<template>
    <el-row v-bind="$attrs" class="app-wrapper-layout">
        <slot></slot>
    </el-row>
</template>

<script>
    export default {
        name: "app-wrapper-layout",
        inheritAttrs:false,
        beforeCreate(){
            console.dir(this.$attrs);
        }
    };
</script>

<style scoped lang="scss">
    .app-wrapper-layout {
        position: relative;
        left: 0;
        top: 0;
        width: $app-wrapper-width;
        margin: 0 auto;
    }
</style>