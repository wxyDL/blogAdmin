<template>
    <div class="my_article_pie"></div>
</template>

<script>
import echarts from "echarts";
export default {
    props: {},
    components: {},
    computed: {},
    created() {
    },
    mounted() {
        this.articlePie()
    },
    data() {
        return {}
    },
    methods: {
        articlePie () {
            let myEcharts = echarts.init(document.querySelector('.my_article_pie'))
            myEcharts.setOption({
                title: {
                    text: '文章量',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: '数量',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'javaScript' },
                            { value: 735, name: 'css' },
                            { value: 580, name: 'vue' },
                            { value: 484, name: 'java' },
                            { value: 300, name: 'html' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        }
    }
}
</script>

<style scoped>

</style>