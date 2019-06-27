<template>
    <div class="news-item">
        <a class="item" href="#">
            <span class="outline">&gt;&gt;&nbsp;11111111111111111111111</span>
            <span class="time-box"><img src="./home_time.png" alt=""><span>2019-06-12</span></span>
        </a>
    </div>

</template>

<script>
    export default {
        name: "app-news-item"
    };
</script>

<style scoped lang="scss">
    .news-item {
        position:relative;
        left:0;
        top:0;
        overflow: hidden;
        &:not(:last-child) {
            .item {
                border-bottom: 1px solid $app-bc-main;
            }

        }

        .item {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 36px;
            line-height: 36px;

            .outline {
                max-width: calc(100% - 130px);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .time-box {
                display: flex;
                align-items: center;

                img {
                    width: 14px;
                    height: 14px;
                    margin-right: 8px;
                }
            }
        }
    }
</style>