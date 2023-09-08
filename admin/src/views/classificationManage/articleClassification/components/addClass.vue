<template>
    <div class="user-box">
        <el-dialog
            :title="this.formData.id ? '编辑' : '新增'"
            :visible.sync="dialogVisible"
            width="600px"
            :close-on-click-modal="false"
            :before-close="handleClose">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="分类名称" prop="className">
                    <el-input v-model="ruleForm.className" clearable placeholder="请输入分类名称"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="ruleForm.describe" clearable placeholder="请输入描述"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="onsubmit">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: {
        formData: {
            type: Object,
            delete: {}
        }
    },
    components: {},
    computed: {},
    created() {
        if (this.formData.id) {
            this.ruleForm = this.formData
        }
    },
    data() {
        return {
            dialogVisible: true,
            ruleForm: {},
            rules: {
                className: [
                    { required: true, message: '请输入分类名称', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleClose () {
            this.$emit('onClose')
        },
        onsubmit () {
            this.$refs.ruleForm.validate(vali => {
                if (!vali) {
                    return
                } else {
                    console.log(this.ruleForm)
                }
            })
        }
    }
}
</script>

<style scoped>

</style>