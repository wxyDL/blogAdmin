<template>
    <div class="theme_and_code">
        <!--        <el-card shadow="hover">-->
        <el-card shadow="hover">
            <div class="theme_and_code_left">
                <p class="theme_and_code_left_pic">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhuti"></use>
                    </svg>
                </p>
                <p style="font-size: 20px">主题</p>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="theme_and_code_left">
                <p class="theme_and_code_left_pic">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-a-xingzhuang854"></use>
                    </svg>
                </p>
                <p style="font-size: 20px">源码</p>
            </div>
        </el-card>
        <!--        </el-card>-->
    </div>
</template>

<script>
export default {
    props: {},
    components: {},
    computed: {},
    created() {
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.theme_and_code {
    display: flex;
    justify-content: space-between;
    width: 40%;
    height: 260px;
    margin-top: 10px;
}

@media screen and (min-height: 500px) and (max-height: 900px) {
    .theme_and_code {
        width: 40%;
        height: 160px;
        margin-top: 10px;
    }
}

.el-card {
    position: relative;
}

.theme_and_code_left {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -18%);
}

.el-card {
    width: 48%;
    height: 100%;
    cursor: pointer;
}

.theme_and_code_left {
    width: 100%;
    height: 100%;
    text-align: center;
    
    .theme_and_code_left_pic {
        width: 65px;
        height: 65px;
        margin: auto;
    }
}

.theme_and_code_right {
    width: 100%;
    height: 100%;
}
</style>