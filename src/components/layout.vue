<template>
    <div class="user-box">
        <el-container class="warp">
            <el-aside :width="width">
                <v-sidebar :isCollapse="isCollapse"></v-sidebar>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="fold">
                        <i v-show="!isCollapse" class="el-icon-s-fold" @click="handleFold"></i>
                        <i v-show="isCollapse" class="el-icon-s-unfold" @click="handleUnfold"></i>
                    </div>
                    <div class="personinfo">
                        <img
                            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                            alt="">
                        <p>欢迎:admin</p>
                        <el-dropdown>
                          <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item>项目地址</el-dropdown-item>
                                <el-dropdown-item>退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import sidebar from "@/components/sidebar/index.vue";

export default {
    props: {},
    components: {
        "v-sidebar": sidebar
    },
    computed: {},
    created() {
    },
    data() {
        return {
            isCollapse: false,
            width: "200px"
        }
    },
    methods: {
        //     折叠
        handleFold() {
            this.isCollapse = true
            this.width = "100px"
        },
        //     展开
        handleUnfold() {
            this.isCollapse = false
            this.width = "200px"
        }
    }
}
</script>

<style lang="scss" scoped>
.user-box {
    width: 100%;
    height: 100%;
}

.user-box .warp {
    height: 100%;
}

.user-box .el-container {
    height: 100%;
}

.el-header {
    display: flex;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    justify-content: space-between;
    
    .fold {
        font-size: 30px;
    }
    
    .personinfo {
        width: 150px;
        height: 100%;
        border-left: 1px solid gray;
        display: flex;
        align-items: center;
        padding-left: 5px;
        img {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .el-dropdown{
            display: block;
        }
    }
}

.el-aside {
    background-color: rgb(48, 65, 86);
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>