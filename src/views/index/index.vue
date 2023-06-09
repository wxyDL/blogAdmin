<template>
    <div class="user-box">
        <div class="operatorWarp">
            <p>运营商</p>
            <p @click="operatorHolder(item, index)" class="list" v-for="(item, index) in operatorList" :key="item.id"
               :class="index === 0 ? 'active' : ''">{{ item.name }}</p>
        </div>
        <div class="productWarp">
            <p>产品</p>
            <p @click="productHolder(item, index)" class="list" v-for="(item, index) in productList" :key="item.id"
               :class="index === 0 ? 'active' : ''">{{ item.name }}</p>
        </div>
        <div class="departmentWarp">
            <p>部门</p>
            <p @click="departmentHolder(item, index)" class="list" v-for="(item, index) in departmentList"
               :key="item.id" :class="index === 0 ? 'active' : ''">{{ item.name }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {},
    components: {},
    computed: {},
    created() {
    },
    mounted() {
    },
    data() {
        return {
            operatorList: [
                {id: 1, name: "集运移动"},
                {id: 2, name: "江苏移动"},
                {id: 3, name: "新存量-流量"},
                {id: 4, name: "新存量-随心"},
                {id: 5, name: "积分时代"},
                {id: 6, name: "联通号卡"},
                {id: 7, name: "联通存量"},
                {id: 8, name: "电信"},
            ],
            productList: [
                {id: 1, name: "号卡", path: "/product/card"},
                {id: 2, name: "5G流量包头条", path: "/product/toutiao"},
                {id: 3, name: "5G流量包快手", path: "/product/kuaishou"}
            ],
            departmentList: [
                {id: 0, name: "全部"},
                {id: 1, name: "自营一部",isActive: false},
                {id: 2, name: "自营二部", isActive: false},
                {id: 3, name: "代营", isActive: false},
                {id: 4, name: "CPA", isActive: false},
                {id: 5, name: "电销", isActive: false},
            ],
            departmentData: [],
        }
    },
    methods: {
        operatorHolder(val, index) {
            console.log(val)
            let list = document.querySelectorAll(".operatorWarp .list")
            for (let i = 0; i < list.length; i++) {
                list[i].className = "list"
            }
            list[index].className = "active list"
        },
        productHolder(val, index) {
            let list = document.querySelectorAll(".productWarp .list")
            list[index].className = "list active"
        },
        departmentHolder(val, index) {
            let list = document.querySelectorAll(".departmentWarp .list")
            list[index].className = "list active"
            console.log(val)
            if (index === 0) {
                for (let i = 0; i < list.length; i++) {
                    list[i].className = "list"
                    list[i].isActive = false
                }
                list[index].className = "list active"
                this.departmentData.push(val)
                let map = new Map();
                for (let item of this.departmentData) {
                    map.set(item.id, item);
                }
                this.departmentData = [...map.values()];
                console.log(this.departmentData)
            } else {
                list[0].className = "list"
                this.departmentData = []
                if (list[index].isActive === true) {
                    list[index].className = "list"
                    list[index].isActive = false
                } else {
                    list[index].className = "list active"
                    list[index].isActive = true
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
html body #app {
    width: 100%;
    height: 100%;
    
    .user-box {
        width: 100%;
        height: 100%;
        background: rgb(0, 22, 30);
        padding: 1rem;
        
        .operatorWarp, .productWarp, .departmentWarp {
            display: flex;
            
            .list {
                margin-left: 20px;
                background: url("@/assets/img/img_1.png") no-repeat;
                background-size: 100%;
                width: 7rem;
                height: 3rem;
                text-align: center;
                line-height: 2rem;
            }
            
            .list:hover, .active {
                background: url("@/assets/img/img.png") no-repeat;
                background-size: 100%;
                color: #f5bc0b;
                cursor: pointer;
            }
        }
    }
}
</style>