<template>
    <div class="user-box">
        <div class="card_title">移动表单</div>
        <div class="bgColor">
            <div v-for="(item, index) in list" :key="index">
                <base-card
                    :active="`${getMonth()}${item.active}`"
                    :oaoRecharge="item.oaoRecharge"
                    :TmRecharge="item.TmRecharge"
                    :sendOperation="`中国移动${getMonth()}月认证`"
                    :registerNum="item.registerNum"
                    :targetNum="item.targetNum"
                    :oaoRechargeNum="item.oaoRechargeNum"
                    :month-recharge-num="item.monthRechargeNum"
                    :todayRegisterNum="item.todayRegisterNum"
                ></base-card>
            </div>
        </div>
    </div>
</template>

<script>
import baseCard from "@/components/baseCard.vue";
import moment from "moment"

export default {
    props: {},
    components: {
        baseCard
    },
    computed: {},
    created() {
        this.getMonth()
    },
    data() {
        return {
            list: [
                {
                    active: '激活1',
                    oaoRecharge: 'OAO充值',
                    TmRecharge: 'T月充值',
                    sendOperation: "中国移动",
                    registerNum: 41257,
                    targetNum: 13774,
                    oaoRechargeNum: 5494,
                    monthRechargeNum: 1631,
                    todayRegisterNum: 9
                },
                {
                    active: '激活2',
                    oaoRecharge: 'OAO充值',
                    TmRecharge: 'T月充值',
                    sendOperation: "中国移动",
                    // registerNum: 41257,
                    targetNum: 13774,
                    oaoRechargeNum: 5494,
                    monthRechargeNum: 1631,
                    todayRegisterNum: null
                },
                {
                    active: '激活3',
                    oaoRecharge: 'OAO充值',
                    TmRecharge: 'T月充值',
                    sendOperation: "中国移动",
                    registerNum: 41257,
                    targetNum: 13774,
                    oaoRechargeNum: 5494,
                    monthRechargeNum: 1631,
                    todayRegisterNum: 0
                }
            ],
            fileList: []
        }
    },
    methods: {
        getMonth() {
            return moment().month() + 1
        },
    }
}
</script>

<style lang="scss" scoped>
.user-box {
    width: 25rem;
}
.card_title {
    width: 100%;
    height: 50px;
    background: rgb(2, 55, 142);
    text-indent: 10px;
    line-height: 50px;
    color: #ffffff;
    font-weight: bold;
}
.bgColor{
    background: rgb(1,15,30);
}
</style>