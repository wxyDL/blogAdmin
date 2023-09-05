<template>
    <div class="user-box">
        <div class="flex-box">
            <el-button type="primary" @click="add" size="small">新增分类</el-button>
            <el-input
                class="w200 margins"
                v-model="search.classificationName"
                placeholder="请输入分类名称"
                clearable></el-input>
            <el-button class="margins" type="primary" size="small" @click="onSearch">查询</el-button>
        </div>
        <div class="table-box">
            <y-table :table-data="tableData" :table-model="tableModel"></y-table>
        </div>
        <el-pagination
            class="pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="rows"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
import {tableModel} from "@/views/classificationManage/articleClassification/components/model";
import {tableMixins} from "@/mixins/tableMixins";

export default {
    mixins: [tableMixins],
    props: {},
    components: {},
    computed: {
        tableModel () {
            return tableModel()
        }
    },
    created() {
    },
    data() {
        return {
            search: {
            
            },
            tableData: []
        }
    },
    methods: {
        findPage () {
        
        },
        add () {
        
        },
    }
}
</script>

<style scoped>

</style>