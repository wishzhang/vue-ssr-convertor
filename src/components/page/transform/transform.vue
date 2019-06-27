<template>
    <div class="transform">
        <app-aside-layout class="aside-layout">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </app-aside-layout>
        <app-main-layout class="main-layout">
            <div class="workspace app-base-card">
                <div class="status">
                    <el-steps space="25%" :active="2" align-center>
                        <el-step title="开始"></el-step>
                        <el-step title="上传状态"></el-step>
                        <el-step title="转换状态"></el-step>
                        <el-step title="下载状态"></el-step>
                    </el-steps>
                </div>
                <div class="filespace">
                    <el-upload
                            @on-change="onChange"
                            class="upload"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <div class="btn-group">
                        <el-button round type="primary" class="download"><i class="el-icon-refresh el-icon--left"></i>转换</el-button>
                        <el-button round type="primary" class="download"><i class="el-icon-download el-icon--left"></i>下载</el-button>
                    </div>
                </div>
            </div>
        </app-main-layout>

    </div>
</template>

<script>
    import AppAsideLayout from '@src/components/common/layout/aside-layout.vue';
    import AppMainLayout from '@src/components/common/layout/main-layout.vue';

    export default {
        name: "app-transform",
        components: {
            AppAsideLayout,
            AppMainLayout
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            onChange(file, fileList) {
                console.log('file----------------------------');
                console.dir(file);
                console.log('fileList----------------------------');
                console.dir(fileList);
            }
        }
    };
</script>

<style lang="scss">
    .transform {
        width: 100%;
        min-height: 650px;
        display: flex;
        justify-content: space-between;
        padding: 15px 0 80px;

        .aside-layout {
            .el-menu-item, .el-submenu__title {
                line-height: 46px;
                height: 42px;
            }
        }

        .main-layout {
            .workspace {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;

                .status{
                    display: flex;
                    justify-content: center;
                    width:100%;
                    .el-steps.el-steps--horizontal{
                        width:100%;
                        display: flex;
                        justify-content: center;
                    }
                }

                .filespace {
                    margin-top: 40px;

                    .upload {
                        .el-upload-dragger {
                            width: 500px;
                        }

                        .el-upload__tip {
                            text-align: center;
                        }
                    }

                    .btn-group {
                        margin-top: 30px;
                        text-align: right;
                    }
                }
            }
        }
    }
</style>