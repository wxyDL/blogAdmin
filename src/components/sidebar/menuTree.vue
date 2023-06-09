<template>
    <div class="isCollapse">
        <label v-for="item in data" :key="item.index">
            <el-menu
                ref="tree"
                class="el-menu-vertical-demo"
                background-color="rgb(48,65,86)"
                text-color="#ffffff"
                :collapse-transition="false"
                unique-opened
                router
                :collapse="isCollapse"
            >
                <el-submenu class="collapse" :index="item.id.toString()" v-if="item.children && item.children.length > 0" :key="item.id">
                    <template slot="title"><i class="el-icon-message"></i>{{ item.name }}</template>
<!--                    <el-menu-item-group>-->
<!--                        <el-menu-item v-for="k in item.children" :index="k.pathUrl" :key="k.id">{{ k.name }}-->
<!--                        </el-menu-item>-->
<!--                    </el-menu-item-group>-->
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
    },
    data() {
        return {
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.el-menu{
    border-right: 0 !important;
}
.isCollapse{
    width: 200px;
    .el-menu{
        .el-submenu, .el-menu--popup, .el-menu-item{
            width: 100px;
            text-align: center;
        }
    }
}
</style>