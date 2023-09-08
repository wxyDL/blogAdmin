<template>
    <div class="user-box">
        <div class="flex-box">
            <el-button type="primary" @click="add" size="small">新增分类</el-button>
            <el-input
                class="w200 margins"
                v-model="search.className"
                placeholder="请输入分类名称"
                clearable></el-input>
            <el-button class="margins" type="primary" size="small" @click="onSearch">查询</el-button>
        </div>
        <div class="table-box">
            <y-table :table-data="tableData" :table-model="tableModel">
                <template #option1="{scope}">
                    <div class="flex-box">
                        <div class="fontBlue" @click="editData(scope.row)">编辑</div>
                        <div class="fontRed" @click="deleteData(scope.row)">删除</div>
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
        <v-addClass v-if="isShowClassDialog" :formData="formData" @onClose="onClose"></v-addClass>
    </div>
</template>

<script>
import {tableModel} from "@/views/classificationManage/articleClassification/components/model";
import {tableMixins} from "@/mixins/tableMixins";
import addClass from "@/views/classificationManage/articleClassification/components/addClass.vue";

export default {
    mixins: [tableMixins],
    props: {},
    components: {
        'v-addClass': addClass
    },
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
            tableData: [
                {
                    id: 1,
                    className: '测试',
                    describe: '测试没描述'
                }
            ],
            isShowClassDialog: false,
            formData: {}
        }
    },
    methods: {
        findPage () {
        
        },
        add () {
            this.formData = {}
            this.isShowClassDialog = true
        },
        onClose () {
            this.isShowClassDialog = false
            this.findPage()
        },
        editData (row) {
            this.formData = row
            this.isShowClassDialog = true
        },
        deleteData (row) {
            this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    }
}
</script>

<style scoped>

</style>