<template>
    <div class="read_line_chart">
        <div class="echarts_box"></div>
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    props: {},
    components: {},
    computed: {},
    created() {
    },
    mounted() {
        this.myChart()
    },
    data() {
        return {}
    },
    methods: {
        myChart() {
            let myChart = echarts.init(document.querySelector('.echarts_box'))
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '阅读量'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.read_line_chart {
    width: 100%;
    height: 400px;
    margin-top: 10px;
}

@media screen and (min-height: 500px) and (max-height: 900px) {
    .read_line_chart {
        width: 100%;
        height: 200px;
        margin-top: 10px;
    }
}

.echarts_box {
    width: 100%;
    height: 100%;
}
</style>