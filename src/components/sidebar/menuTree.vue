<template>
    <div class="isCollapse">
        <label v-for="item in data" :key="item.index">
            <el-menu
                ref="tree"
                class="el-menu-vertical-demo"
                background-color="rgb(48,65,86)"
                text-color="#ffffff"
                :collapse-transition="false"
                :default-active="activeIndex"
                unique-opened
                router
                :collapse="isCollapse"
                @select="handleIndex"
            >
                <el-submenu
                    class="collapse"
                    :index="item.id.toString()"
                    v-if="item.children && item.children.length > 0"
                    :key="item.id">
                    <template slot="title"><i class="el-icon-message"></i>{{ item.name }}</template>
                    <label>
                        <v-menuTree :data="item.children"></v-menuTree>
                    </label>
                </el-submenu>
                <el-menu-item class="collapse" v-else :index="item.pathUrl" :key="item.id">{{item.name}}</el-menu-item>
            </el-menu>
        </label>
    </div>
</template>

<script>
export default {
    name: "v-menuTree",
    props: ['data', 'isCollapse'],
    components: {},
    computed: {},
    created() {
        let activeIndex = localStorage.getItem("activeIndex")
        if (activeIndex) {
            this.activeIndex = activeIndex
            return
        }
        if (this.data[0].children && this.data[0].length > 0) {
            this.activeIndex = this.data[0].children.pathUrl
        } else {
            this.activeIndex = this.data[0].pathUrl
        }
        localStorage.setItem("activeIndex", this.activeIndex)
    },
    data() {
        return {
            activeIndex: "",
        }
    },
    methods: {
        handleIndex (key) {
            console.log(key)
            localStorage.setItem("activeIndex", key)
        }
    }
}
</script>
<style lang="scss" scoped>
.el-menu{
    border-right: 0 !important;
}
.isCollapse{
    .el-menu--collapse{
        width: 100px;
    }
    .el-menu{
        .el-submenu, .el-menu--popup, .el-menu-item{
            text-align: center;
        }
    }
}
</style>