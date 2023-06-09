<template>
    <div class="card_wrapper">
        <div class="title">
            <span v-if="active" style="margin-left: 11rem">{{active}}</span>
            <span v-if="oaoRecharge">{{oaoRecharge}}</span>
            <span v-if="TmRecharge">{{TmRecharge}}</span>
        </div>
        <div class="data_box">
            <p>{{sendOperation}}</p>
            <p class="data orangeColor">
                <span v-if="registerNum">
                    <i :class="registerNum < 10000 ? 'yellowColor' : 'orangeColor'">{{registerNum}}</i>
                    <i class="blueColor">
                        <template>
                            {{getOperator(todayRegisterNum)}}
                        </template>
                        {{todayRegisterNum}}
                    </i>
                </span>
                <span style="margin-left: 7rem">
                    <i :class="targetNum < 10000 ? 'yellowColor' : 'orangeColor'">{{targetNum}}</i>
                    <i class="blueColor">
                        <template>
                            {{getOperator(todayTargetNum)}}
                        </template>
                        {{todayTargetNum}}
                    </i>
                </span>
                <span>{{oaoRechargeNum}}</span>
                <span>{{monthRechargeNum}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: String,
            default: ""
        },
        oaoRecharge: {
            type: String,
            default: ""
        },
        TmRecharge: {
            type: String,
            default: ""
        },
        sendOperation: {
            type: String,
            default: ""
        },
        registerNum: {
            type: Number,
            default: 0
        },
        targetNum: {
            type: Number,
            default: 0
        },
        oaoRechargeNum: {
            type: Number,
            default: 0
        },
        monthRechargeNum: {
            type: Number,
            default: 0
        },
        todayRegisterNum: {
            type: Number,
            default: 0
        },
        todayTargetNum: {
            type: [Number, String],
            default: ''
        }
    },
    components: {},
    computed: {
    },
    created() {
    },
    data() {
        return {}
    },
    methods: {
        getOperator (e){
            console.log(e)
            if (e === null) {
                return ''
            } else {
                return '+'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.card_wrapper{
    width: 25rem;
    color:#ffffff;
    margin-top: .5rem;
    .title span{
        margin-right: 1rem;
    }
    .data{
        position: relative;
        i{
            font-style: normal;
        }
        :nth-child(2){
            position: absolute;
            left: 4rem;
        }
        :nth-child(3){
            position: absolute;
            left: 16rem;
        }
        :nth-child(4){
            position: absolute;
            left: 21rem;
        }
    }
    .orangeColor{
        color: rgb(255, 131, 9);
    }
    .blueColor{
        color: rgb(185, 228, 255);
    }
    .yellowColor{
        color: rgb(255, 194, 8);
    }
}
</style>