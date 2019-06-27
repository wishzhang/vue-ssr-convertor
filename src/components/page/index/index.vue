<template>
    <el-row class="app-index" type="flex" justify="space-between">

        <!--主区域-->
        <app-main-layout class="index-main">

            <!--改造动态-->
            <el-row class="panel-section transform-dynamic app-light-card">
                <AppHomePanelTitle></AppHomePanelTitle>
                <div class="content-box">
                    <div class="left">
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                    </div>
                    <div class="right">
                        <el-carousel trigger="click" height="145px">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <img src="./home_img2.png" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </el-row>

            <!--文化长廊-->
            <el-row class="panel-section app-light-card">
                <AppHomePanelTitle></AppHomePanelTitle>
                <el-row>
                    <AppNewsItem></AppNewsItem>
                    <AppNewsItem></AppNewsItem>
                    <AppNewsItem></AppNewsItem>
                    <AppNewsItem></AppNewsItem>
                    <AppNewsItem></AppNewsItem>
                </el-row>
            </el-row>

            <!--在线投稿-->
            <el-row class="panel-section online-submission app-light-card">
                <AppHomePanelTitle></AppHomePanelTitle>
                <div class="content-box">
                    <div class="left">
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                    </div>
                    <div class="right">
                        <img src="./home_img2.png" alt="">
                    </div>
                </div>
            </el-row>

            <!--专题教育-->
            <el-row class="panel-section special-education app-light-card">
                <AppHomePanelTitle></AppHomePanelTitle>
                <div class="content-box">
                    <div class="left">
                        <img src="./home_img2.png" alt="">
                    </div>
                    <div class="right">
                        <div class="category-title">国家法定节假日主题教育活动</div>
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                        <AppNewsItem></AppNewsItem>
                    </div>
                </div>
            </el-row>

            <!--视频点播-->
            <el-row class="panel-section video-demand app-light-card">
                <AppHomePanelTitle></AppHomePanelTitle>
                <el-row class="content-box" type="flex" :gutter="20">
                    <el-col :span="8">
                        <a href="#">
                            <div class="video-img">
                                <img class="" src="./play_btn.png"></img>
                            </div>
                            <span class="video-title">充分发挥标杆示范</span>
                        </a>
                    </el-col>
                    <el-col :span="8">
                        <a href="#">
                            <div class="video-img">
                                <img class="" src="./play_btn.png"></img>
                            </div>
                            <span class="video-title">充分发挥标杆示范</span>
                        </a>
                    </el-col>
                    <el-col :span="8">
                        <a href="#">
                            <div class="video-img">
                                <img class="" src="./play_btn.png"></img>
                            </div>
                            <span class="video-title">充分发挥标杆示范</span>
                        </a>
                    </el-col>
                </el-row>

            </el-row>

            <!--网站地图-->
            <el-row class="panel-section website-map app-light-card">
                <AppHomePanelTitle></AppHomePanelTitle>
                <el-row>
                    <el-row type="flex" justify="space-around">
                        <el-col :span="4.8" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                        <el-col :span="4.8" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                        <el-col :span="4.8" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                        <el-col :span="4.8" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                        <el-col :span="4.8" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="space-around">
                        <el-col :span="6" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                        <el-col :span="6" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                        <el-col :span="6" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                        <el-col :span="6" class="item">
                            <div>
                                <img src="./home_icon1.jpg" alt="">
                                <div class="title">视频管理</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-row>
            </el-row>
        </app-main-layout>

        <!--侧边栏-->
        <app-aside-layout class="index-aside">
            <div class="title-box">
                <div class="left">
                    <img src="./home_laba.png" alt="">
                    <h1 class="title">通知公告</h1>
                </div>
                <img class="more" src="../../common/title/title_more.jpg" alt="">
            </div>
            <div class="content-box">
                <ul>
                    <li><span><a href="#">周五考试安排</a></span></li>
                    <li><span><a href="#">周五考试安排</a></span></li>
                    <li><span><a href="#">周五考试安排</a></span></li>
                    <li><span><a href="#">周五考试安排</a></span></li>
                    <li><span><a href="#">周五考试安排</a></span></li>
                    <li><span><a href="#">周五考试安排</a></span></li>
                    <li><span><a href="#">周五考试安排</a></span></li>
                </ul>
            </div>
        </app-aside-layout>

    </el-row>
</template>

<script>
    import AppHomePanelTitle from '@src/components/common/title/home-panel-title.vue';
    import AppNewsItem from '@src/components/common/item/news-item.vue';
    import AppAsideLayout from '@src/components/common/layout/aside-layout.vue';
    import AppMainLayout from '@src/components/common/layout/main-layout.vue';

    export default {
        name: "app-index",
        components: {
            AppHomePanelTitle,
            AppNewsItem,
            AppAsideLayout,
            AppMainLayout
        }
    };
</script>

<style scoped lang="scss">
    .app-index {
        width:100%;
        padding: 14px 0 20px 0;

        .panel-section {
            padding: 20px 10px 0 15px;
            background-color: white;

            &:not(:first-child) {
                margin-top: 10px;
            }
        }

        .index-main {
            // 改造动态
            .transform-dynamic {

                .content-box {
                    display: flex;

                    .left {
                        flex: 1;
                        padding-right: 10px;
                    }

                    .right {
                        width: 260px;
                        padding: 15px 0 15px 10px;
                    }
                }
            }

            // 在线投稿
            .online-submission {
                .content-box {
                    display: flex;

                    .left {
                        flex: 1;
                        padding-right: 10px;
                    }

                    .right {
                        width: 260px;
                        height: 144px;
                        padding: 15px 0 15px 10px;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: $app-br-small;
                        }
                    }
                }
            }

            // 专题教育
            .special-education {
                .content-box {
                    display: flex;
                    padding-top: 10px;
                    padding-bottom: 10px;

                    .left {
                        width: 260px;
                        height: 137px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .right {
                        flex: 1;
                        padding-left: 20px;

                        .category-title {
                            font-weight: bold;
                            font-family: '宋体';
                            font-size: 14px;
                            padding-bottom: 4px;
                        }
                    }
                }
            }

            // 视频点播
            .video-demand {
                .content-box {
                    padding: 15px 0;
                    text-align: center;

                    .video-img {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 180px;
                        background: url('./video-cover.jpg') no-repeat center center;
                        background-size: 100% 100%;
                        cursor: pointer;
                        border-radius: $app-br-big;
                        overflow: hidden;

                        img {
                            width: 55px;
                            height: 55px;
                        }
                    }

                    .video-title {
                        display: inline-block;
                        margin-top: 10px;
                        text-align: center;
                        padding: 0 20px;
                        font-size: $app-fs-main;
                    }
                }

            }

            // 网站地图
            .website-map {
                background-color: white;
                padding-bottom: 35px;
                border-radius: $app-br-small;

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

        .index-aside{
            background: white;
            .title-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 10px 15px 15px;
                border-bottom: 1px solid $app-bc-main;

                .left {
                    display: flex;
                    align-items: center;

                    img {
                        position: relative;
                        left: 0;
                        top: 1px;
                        width: 27px;
                        height: 23px;
                        margin-right: 10px;
                    }

                    .title {
                        font-size: 24px;
                        font-weight: bold;
                        color: $app-color-theme;
                    }
                }

                .more {
                    width: 52px;
                    height: 20px;
                }
            }

            .content-box {
                padding: 10px 24px 20px 27px;

                ul {
                    li {
                        padding: 3px 0;

                        span {
                            display: inline-block;
                            width: 100%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
        }
    }
</style>