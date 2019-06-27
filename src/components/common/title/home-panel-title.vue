<template>
    <div class="home-panel-title">
            <h2><slot></slot></h2>
    </div>
</template>

<script>
    export default {
        name: "app-panel-title"
    };
</script>

<style scoped lang="scss">
    .home-panel-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height:46px;
        background-color: $app-color-theme-light;
        overflow: hidden;
        h2{
            text-align: center;
            color:$app-color-theme;
            font-size:16px;
        }
    }
</style>