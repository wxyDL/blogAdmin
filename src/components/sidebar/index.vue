<template>
    <div class="isCollapse">
        <v-menuTree :data="data" :isCollapse="isCollapse"></v-menuTree>
    </div>
</template>

<script>
import menuTree from "@/components/sidebar/menuTree.vue";
export default {
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    components: {
        "v-menuTree": menuTree
    },
    computed: {},
    created() {
        console.log(this.data)
    },
    data() {
        return {
            data: JSON.parse(localStorage.getItem("menuData"))
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.isCollapse{
    width: 200px;
}
</style>