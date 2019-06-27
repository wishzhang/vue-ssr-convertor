<template>
    <el-row class="app-index-layout">
        <!--欢迎-->
        <el-row class="welcome">
            <app-wrapper-layout
                    type="flex"
                    justify="space-between"
                    align="middle">
                <div>
                    <span>您好，欢迎来到test</span>
                    <a href="#" class="login">请登录</a>
                </div>
                <div>
                    <span class="collect">收藏本站</span>
                </div>
            </app-wrapper-layout>
        </el-row>


        <!--标题-->
        <el-row class="header"
                type="flex"
                align="middle">
            <app-wrapper-layout type="flex" justify="space-between">
                <el-col :span="18">
                    <el-row type="flex" align="middle" class="left">
                        <img class="logo" src="./logo.png" alt=""/>
                        <h1 class="title">test</h1>
                    </el-row>
                </el-col>
                <div class="right">
                    <p><span>今日：</span><span>2019年06月17日 星期一</span></p>
                    <p><span>点击率：</span><span>784</span></p>
                </div>
            </app-wrapper-layout>
        </el-row>

        <!--导航栏-->
        <el-row class="nav">
            <app-wrapper-layout>
                <ul class="list-one">
                    <li>
                        <router-link class="list-one-label" to="/home">首页</router-link>
                    </li>
                    <li>
                        <router-link class="list-one-label" to="/home">文档转换</router-link>
                        <ul class="list-two">
                            <li>
                                <h3 class="type-title">PDF转换</h3>
                                <ul class="list-three">
                                    <li>
                                        <router-link class="three-link" to="/transform">PDF转Word</router-link>
                                    </li>

                                    <li>
                                        <router-link class="three-link" to="/transform">PDF转图片</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 class="type-title">其他转PDF</h3>
                                <ul class="list-three">
                                    <li>
                                        <router-link to="/transform">Word转PDF</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </app-wrapper-layout>
        </el-row>

        <app-wrapper-layout type="flex" justify="space-between" class="middle">
            <router-view></router-view>
        </app-wrapper-layout>

        <!--底部-->
        <el-row class="footer">
            <p>Copyright (c) 2019广东恒电信息科技股份有限公司</p>
            <p>TEL:020-38468526 地址：广州天河区五山路248号金山大厦南塔19楼 粤ICP备16053309号-1</p>
        </el-row>
    </el-row>
</template>

<script>
    import AppWrapperLayout from '@src/components/common/layout/wrapper-layout.vue';
    import AppHomePanelTitle from '@src/components/common/title/home-panel-title.vue';
    import AppNewsItem from '@src/components/common/item/news-item.vue';

    export default {
        name: "app-index-layout",
        components: {
            AppWrapperLayout,
            AppHomePanelTitle,
            AppNewsItem,
        }
    };
</script>

<style scoped lang="scss">
    .app-index-layout {

        .welcome {
            display: flex;
            height: 40px;
            align-items: center;
            background-color: $app-color-theme-bg-dark;

            .login {
                margin-left: 20px;
                color: $app-color-theme;
            }

            .collect {
                cursor: pointer;

                &:hover {
                    color: $app-color-theme;
                }
            }
        }

        .header {
            height: 98px;
            background: white;

            .left {
                .logo {
                    width: 67px;
                    height: 70px;
                }

                .title {
                    margin-left: 15px;
                    font-size: 30px;
                    font-weight: bold;
                    color: $app-color-theme;
                }
            }

            .right {
                position: relative;
                left: 0;
                top: 8px;
                display: inline-block;
                color: $app-color-theme;
                font-size: 16px;

                p:first-child {
                    text-align: right;
                    font-weight: bold;
                }

                p:last-child {
                    text-align: left;
                    font-weight: bold;
                }
            }
        }

        .nav {
            $nav-height:50px;
            background-color: $app-color-theme;
            position: relative;
            z-index: 9000;
            .list-one {
                display: flex;
                height: $nav-height;

                >li, .list-one-label {
                    position:relative;
                    left:0;
                    top:0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 96px;
                    height: 100%;
                    cursor: pointer;
                    font-size: 16px;
                    color: white;

                    &:hover {
                        background-color: rgba(100, 205, 295, 0.1);
                        .list-two{
                            display: block;
                        }
                    }

                    .list-two{
                        display: none;
                        position:absolute;
                        left:0;
                        top:$nav-height;
                        background-color: white;
                        box-shadow: $app-bs-base;
                        font-size:0;
                        white-space: nowrap;

                        >li{
                            position:relative;
                            left:0;
                            top:0;
                            display: inline-block;
                            background-color: white;
                            font-size:$app-fs-main;
                            padding:0 15px 5px 15px;
                            vertical-align: top;
                            .type-title{
                                padding:10px 0 5px;
                                color:$app-color-theme;
                                font-weight:bold;
                                border-bottom:2px solid $app-color-theme;
                                margin-bottom:5px;
                            }

                            .list-three{
                                li{
                                    .three-link{
                                        display: inline-block;
                                        height:28px;
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }

        .middle {
        }

        .footer {
            padding: 50px 0;
            background-color: #585960;
            color: white;
            font-size: 12px;

            p {
                text-align: center;
            }
        }
    }
</style>