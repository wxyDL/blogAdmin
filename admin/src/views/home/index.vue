<template>
    <div class="user-box">
        <!--        看板-->
        <div class="min_bulletin_board">
            <el-card shadow="hover">
                <div class="read">
                    <div class="svg_box">
                        <svg class="icon icon_position" aria-hidden="true">
                            <use xlink:href="#icon-yuedu"></use>
                        </svg>
                    </div>
                    <div class="right">
                        <div class="data_box">
                            <p>阅读量</p>
                            <p>999,99</p>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="message">
                    <div class="svg_box">
                        <svg class="icon icon_position" aria-hidden="true">
                            <use xlink:href="#icon-wenzhang1"></use>
                        </svg>
                    </div>
                    <div class="right">
                        <div class="data_box">
                            <p>消息量</p>
                            <p>999,88</p>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="article">
                    <div class="svg_box">
                        <svg class="icon icon_position" aria-hidden="true">
                            <use xlink:href="#icon-xiaoxi"></use>
                        </svg>
                    </div>
                    <div class="right">
                        <div class="data_box">
                            <p>文章量</p>
                            <p>7,99</p>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
        <!--      阅读量折线图  -->
        <div>
            <el-card shadow="hover">
                <v-readLineChart></v-readLineChart>
            </el-card>
        </div>
        <div style="display: flex; justify-content: space-between">
            <!--        消息柱状图和文章饼图-->
            <v-messageBar></v-messageBar>
            <!--       主题配置和源码 -->
            <v-themeAndCode></v-themeAndCode>
        </div>
    </div>
</template>

<script>
import readLineChart from "@/views/home/components/readLineChart.vue";
import messageBar from "@/views/home/components/messageBar.vue";
import themeAndCode from "@/views/home/components/themeAndCode.vue";

export default {
    props: {},
    components: {
        'v-readLineChart': readLineChart,
        'v-messageBar': messageBar,
        'v-themeAndCode': themeAndCode
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
.user-box {
    padding: 0 20px;
}

.min_bulletin_board {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div {
        width: 30%;
    }
    
    .read, .message, .article {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        
        .right {
            position: relative;
            
            .data_box {
                position: absolute;
                width: 100%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                
                p {
                    text-align: right;
                    font-size: 20px;
                }
                
                p:nth-child(1) {
                    color: rgb(140, 140, 140);
                    margin-bottom: 10px;
                }
            }
        }
        
        .svg_box {
            width: 4em;
            height: 4em;
            padding: 10px 0;
        }
    }
    
    .read, .message, .article:hover {
        cursor: pointer;
    }
    
    ::v-deep .el-card__body {
        padding: 0;
        height: 100%;
    }
}
</style>