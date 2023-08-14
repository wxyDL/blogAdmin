<template>
    <div class="my_message_histogram"></div>
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
        this.messageHistogram()
    },
    data() {
        return {}
    },
    methods: {
        messageHistogram () {
            let myEcharts = echarts.init(document.querySelector('.my_message_histogram'))
            myEcharts.setOption({
                title: {
                    text: '消息量'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
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