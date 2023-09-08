<template>
    <div class="user-box">
        <el-button type="primary" size="medium" @click="add" style="margin-right: 20px">新增文章</el-button>
        <el-input v-model="search.name" clearable class="w200" placeholder="请输入文章标题"></el-input>
        <el-select v-model="search.className" clearable filterable class="w200" placeholder="请选择分类">
            <el-option v-for="item in classNameList" :value="item.id" :label="item.className" :key="item.id"></el-option>
        </el-select>
        <el-select v-model="search.labels" clearable filterable class="w200" placeholder="请选择标签">
            <el-option v-for="item in labelsList" :value="item.id" :label="item.labels" :key="item.id"></el-option>
        </el-select>
        <el-date-picker
            v-model="search.dateTime"
            type="datetimerange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']">
        </el-date-picker>
        <el-button type="primary" size="medium" @click="onSearch" style="margin-left: 20px">查询</el-button>
        <div class="table-box">
            <y-table :table-data="tableData" :table-model="tableModel">
                <template #option1="{scope}">
                    <div class="flex-box">
                        <div class="fontBlue" @click="edite(scope.row)">编辑</div>
                        <div class="fontRed" @click="deleteData(scope.row)">编辑</div>
                    </div>
                </template>
            </y-table>
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
import {tableMixins} from "@/mixins/tableMixins";

export default {
    mixins: [tableMixins],
    props: {},
    components: {},
    computed: {},
    created() {
    },
    data() {
        return {
            search: {
                dateTime: []
            },
            classNameList: [],
            labelsList: [],
            tableData: [
                {
                    id: 1,
                    createTime: '2022-09-29',
                    title: '焦点访谈',
                    className: 'css',
                    labelName: '热门',
                    describe: '这是一个描述'
                }
            ],
            tableModel: [
                {
                    label: '序号',
                    type: 'index'
                },
                {
                    label: '创建时间',
                    prop: 'createTime'
                },
                {
                    label: '标题',
                    prop: 'title'
                },
                {
                    label: '分类',
                    prop: 'className'
                },
                {
                    label: '标签',
                    prop: 'labelName'
                },
                {
                    label: '推荐指数',
                    prop: 'recommend'
                },
                {
                    label: '描述',
                    prop: 'describe'
                },
                {
                    label: '操作',
                    slot: 'option1'
                },
            ]
        }
    },
    methods: {
        add () {
            this.$router.push('/article/create')
        },
        edite (row) {
            this.$router.push({path: '/article/create', query: {id: row.id}})
        },
        deleteData (row) {
        
        }
    }
}
</script>

<style scoped>

</style>