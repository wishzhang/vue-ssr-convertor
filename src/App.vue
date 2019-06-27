<template>
    <router-view></router-view>
</template>

<script>
    import "babel-polyfill";
    import Vue from 'vue';
    import '@src/style/base.scss';
    import '@src/style/common.scss';

    import 'element-ui/lib/theme-chalk/index.css';
    import {
        Button,
        Row,
        Col,
        Carousel,
        CarouselItem,
        Menu,
        Submenu,
        MenuItemGroup,
        MenuItem,
        Upload,
        Steps,
        Step
    } from 'element-ui';

    Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

    Vue.use(Button);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItemGroup);
    Vue.use(MenuItem);
    Vue.use(Upload);
    Vue.use(Steps);
    Vue.use(Step);

    export default {
        name: "App"
    };
</script>

<style scoped>

</style>
