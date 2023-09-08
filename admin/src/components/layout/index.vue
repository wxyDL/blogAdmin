<template>
    <!-- 系统整体页面布局 -->
    <el-container class="el-container">
        <!-- 页面头部区域 高度默认60px -->
        <el-header class="el-header">
            <!-- 应用名称 -->
            <span style="width: 200px">Welcome Back</span>
            <div class="header-box">
                <div class="fold_switch">
                    <i v-if="!collapse" class="el-icon-s-fold" @click="collapseClick()"></i>
                    <i v-if="collapse" class="el-icon-s-unfold" @click="collapseClick()"></i>
                </div>
                <div class="personal_center">
                    <img src="@/assets/image/头像.svg" alt="">
                    <el-dropdown @command="handleCommand">
                          <span class="el-dropdown-link" style="color: #FFFFFF">
                            test<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="center">个人中心</el-dropdown-item>
                            <el-dropdown-item command="home">首页</el-dropdown-item>
                            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </el-header>
        <el-container>
            <!-- 左侧菜单栏部分 -->
            <el-aside :style="asideWidth">
                <el-scrollbar>
                    <el-menu class="el-menu"
                             :collapse="collapse"
                             background-color="#32323a"
                             :unique-opened="true"
                             :default-active="$route.path"
                             :collapse-transition="false"
                             text-color="#ffffff"
                             router>
                        <MenuTree :menuList="menuList"></MenuTree>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <!-- 右侧主题页面内容展示 -->
            <el-main class="el-mian">
                <v-breadcrumb></v-breadcrumb>
                <!-- 路由页面 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import MenuTree from '@/components/layout/components/MenuTree.vue'
import breadcrumb from '@/components/breadcrumb/index.vue'

export default {
    components: {
        MenuTree,
        'v-breadcrumb': breadcrumb
    },
    data() {
        return {
            // 折叠开关
            collapse: false,
            // 侧边栏宽度
            asideWidth: 'width: 200px',
            menuList: [
                {
                    id: "1",
                    parentid: '0',
                    name: '系统主页',
                    icon: 'el-icon-s-home',
                    url: '/homepage',
                },
                {
                    id: "2",
                    parentid: '0',
                    name: '文章管理',
                    icon: 'el-icon-document',
                    children: [
                        {
                            id: "3",
                            parentid: '2',
                            name: '创建文章',
                            icon: 'el-icon-edit-outline',
                            url: '/article/create'
                        },
                        {
                            id: "5",
                            parentid: '3',
                            name: '文章列表',
                            icon: 'el-icon-tickets',
                            url: '/article/data',
                        }
                    ]
                },
                {
                    id: "3",
                    parentid: '0',
                    name: '分类管理',
                    icon: 'el-icon-film',
                    children: [
                        {
                            id: "0",
                            parentid: '3',
                            name: '文章分类',
                            icon: 'el-icon-message',
                            url: '/article/classification',
                        }
                    ]
                },
                {
                    id: "4",
                    parentid: '0',
                    name: '评论留言',
                    icon: 'el-icon-s-comment',
                    url: '/comment/manage',
                },
                {
                    id: "5",
                    parentid: '0',
                    name: '个人中心',
                    icon: 'el-icon-user',
                    url: '/personal/center',
                },
            ],
        }
    },
    methods: {
        // 是否折叠侧边栏
        collapseClick() {
            this.collapse = !this.collapse
            if (!this.collapse) {
                this.asideWidth = 'width: 200px'
            } else {
                this.asideWidth = 'width: 50px'
            }
        },
        handleCommand (event) {
            console.log(event)
            switch (event) {
                case 'center':
                    this.$router.push('/personal/center')
                    break
                case 'home':
                    this.$router.push('/homePage')
                    break
                case 'logout':
                    this.$router.push('/login')
                    break
            }
        }
    }
}
</script>

<style lang="scss" scoped>
/*铺满屏幕，没有边距*/
.el-container {
    padding: 0px;
    margin: 0px;
    height: 100vh;
    
    .el-scrollbar {
        ::v-deep .el-scrollbar__wrap {
            overflow: hidden;
        }
    }
}

.el-header {
    /* 顶部部分的高度(默认60px) */
    background-color: #0077d5;
    color: #FFFFFF;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    
    .header-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .fold_switch {
            line-height: 60px;
            font-size: 25px;
            cursor: pointer;
        }
        .personal_center{
            display: flex;
            align-items: center;
            img{
                width: 60px;
                height: 60px;
            }
        }
    }
}

.el-aside {
    background-color: #32323a;
    min-height: calc(100vh - 60px);
    
    ::v-deep .el-icon-message {
        margin-right: 7px;
    }
}

.aside_200 {
    width: 200px;
}

.aside_50 {
    width: 50px;
}

.el-menu span {
    margin-left: 10px;
}

.el-mian {
    background-color: #eaedf1;
    padding: 0px;
    margin: 0px;
    height: calc(100vh - 60px);
}
</style>