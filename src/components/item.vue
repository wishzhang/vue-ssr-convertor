<template>
    <div>
        <div class="p">
            <div class="test">name:{{item.name}}</div>
        </div>
        <router-view></router-view>
    </div>

</template>
<script>
    export default {
        name: "item",
        asyncData({store}){
            return store.dispatch('fetchItem','this is asydata');
        },
        computed:{
            item(){
                return {
                    name:'hihihihi3333333ll'
                }
            }
        },
        created() {
        }
    };
</script>

<style scoped lang="scss">
    .test{
        color:red;
    }
</style>
