<template>
    <div class="user-box">
        <el-input v-model="search.comment" clearable class="w200" placeholder="请输入评论关键字"></el-input>
        <el-date-picker
            v-model="search.dateTime"
            type="datetimerange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']">
        </el-date-picker>
        <el-button type="primary" @click="onSearch" size="medium" style="margin-left: 20px">查询</el-button>
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
            tableData: [
                {
                    id: 1,
                    nickName: '测试',
                    commentContent: '测试测试测试测试测试'
                }
            ],
            tableModel: [
                {
                    label: '序号',
                    type: 'index'
                },
                {
                    label: '评论时间',
                    prop: 'commentTime'
                },
                {
                    label: '昵称',
                    prop: 'nickName'
                },
                {
                    label: '评论内容',
                    prop: 'commentContent'
                },
                {
                    label: '操作',
                    prop: '',
                    render: (h, params) => {
                        return h('span', {
                                class: 'fontRed',
                                on: {
                                    click: () => {
                                        this.deleteData(params.row)
                                    }
                                }
                            }, '删除')
                    }
                },
            ]
        }
    },
    methods: {
        deleteData (row) {
        
        }
    }
}
</script>

<style scoped>

</style>