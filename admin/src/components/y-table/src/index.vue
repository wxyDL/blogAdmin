<template>
    <div class="y-table">
        <el-table
            :border="border"
            :data="tableData"
            ref="table"
        >
            <template v-for="col in tableModel">
                <el-table-column
                    :prop="col.prop"
                    :label="col.label"
                    :width="col.width"
                    :formatter="col.formatter"
                    :type="col.type"
                    v-if="
                    col.render === undefined &&
                    col.type === undefined &&
                    col.slot === undefined"
                >
                </el-table-column>
                <el-table-column
                    v-else-if="col.type === 'selection'"
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    :label="col.label"
                    v-else-if="col.type === 'index'"
                    type="index"
                    width="55">
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'yTable',
    props: {
        tableData: {
            type: Array,
            default() {
                return [];
            }
        },
        tableModel: {
            type: Array,
            default() {
                return [];
            }
        },
        border: {
            type: Boolean,
            default() {
                return true;
            }
        }
    },
    computed: {},
    created() {
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style scoped>

</style>