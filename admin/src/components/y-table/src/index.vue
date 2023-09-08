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
                <el-table-column
                    :label="col.label"
                    v-if="col.slot === 'option1'"
                    :width="col.width">
                    <template slot-scope="scope">
                        <slot name="option1" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column
                    :label="col.label"
                    v-else-if="col.slot === 'option2'"
                    :width="col.width">
                    <template slot-scope="scope">
                        <slot name="option2" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column
                    :label="col.label"
                    v-else-if="col.slot === 'option3'"
                    :width="col.width">
                    <template slot-scope="scope">
                        <slot name="option3" :scope="scope"></slot>
                    </template>
                </el-table-column>
                <el-table-column
                    :key="col.prop"
                    v-else-if="col.type === undefined && col.render !== undefined"
                    :label="col.label"
                    :id="col.prop"
                    :align="col.align"
                    :width="col.width"
                    :min-width="col.minWidth"
                    :render-header="col.renderHeader"
                    :sortable="col.sortable"
                >
                    <template slot-scope="scope">
                        <v-render
                            :render="col.render"
                            :row="scope"
                            :column="scope.row.column"
                            :index="scope.$index"
                        ></v-render>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
import render from '@/components/y-table/src/expand'
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
    components: {
        'v-render': render
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