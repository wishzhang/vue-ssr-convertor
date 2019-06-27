<template>
    <app-main-layout class="index-convertor">
        <!--主区域-->
        <el-row class="header">
            <el-carousel trigger="click" height="115px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img class="carousel-img" src="@src/assets/icon.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </el-row>

        <el-row class="panel-section website-map app-light-card">
            <AppHomePanelTitle>PDF转其他格式</AppHomePanelTitle>
            <el-row>
                <el-row>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                </el-row>
            </el-row>
        </el-row>

        <el-row class="panel-section website-map app-light-card">
            <AppHomePanelTitle>图片在线转换</AppHomePanelTitle>
            <el-row>
                <el-row>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                    <el-col :span="4" class="item">
                        <div>
                            <img src="./home_icon1.jpg" alt="">
                            <div class="title">视频管理</div>
                        </div>
                    </el-col>
                </el-row>
            </el-row>
        </el-row>
    </app-main-layout>
</template>

<script>
    import AppHomePanelTitle from '@src/components/common/title/home-panel-title.vue';
    import AppMainLayout from '@src/components/common/layout/main-layout.vue';

    export default {
        name: "index-convertor",
        components: {
            AppHomePanelTitle,
            AppMainLayout
        }
    };
</script>

<style scoped lang="scss">
    .index-convertor {
        width: 100%;
        .header {
            width: 100%;
            margin: 20px 0 15px 0;

            .carousel-img {
                width: 100%;
            }
        }

        .website-map {
            background-color: white;
            padding-bottom: 35px;
            border-radius: $app-br-small;
            margin-bottom:20px;
            overflow: hidden;

            &:last-child{
                margin-bottom: 80px;
            }
            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 35px;

                > div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: transform 0.1s;
                    padding: 5px;

                    &:hover {
                        transform: scale(1.1);
                        color: $app-color-theme;
                    }

                    img {
                        width: 80px;
                        height: 80px;
                        border-radius: 40px;
                        box-shadow: $app-bs-base;
                    }

                    .title {
                        margin-top: 10px;
                    }
                }
            }
        }
    }


</style>