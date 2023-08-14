<template>
    <div class="message_bar">
        <el-card shadow="hover">
            <div id="message_bar_box">
                <div class="message_histogram">
                    <v-messageHistogram></v-messageHistogram>
                </div>
                <div class="article_pie">
                    <v-articlePie></v-articlePie>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import messageHistogram from "@/views/home/components/messageHistogram.vue";
import articlePie from "@/views/home/components/articlePie.vue";
export default {
    props: {},
    components: {
        'v-messageHistogram': messageHistogram,
        'v-articlePie': articlePie
    },
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
.message_bar {
    //width: 58.5%;
    width: 100%;
    height: 260px;
    margin-top: 10px;
    margin-right: 20px;
}

@media screen and (min-height: 500px) and (max-height: 900px) {
    .message_bar {
        height: 160px;
    }
}
.el-card{
    width: 100%;
    height: 100%;
}
::v-deep .el-card__body{
    padding: 0;
    width: 100%;
    height: 100%;
}
#message_bar_box {
    width: 100%;
    height: 100%;
    display: flex;
    div{
        width: 100%;
        height: 100%;
    }
}
</style>