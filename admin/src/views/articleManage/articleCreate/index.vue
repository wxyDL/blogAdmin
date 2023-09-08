<template>
    <div class="user-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row :gutter="20">
                <el-col :span="6">
                   <el-form-item label="文章分类" prop="className">
                       <el-select v-model="ruleForm.className" clearable filterable class="w200" placeholder="请选择分类">
                           <el-option v-for="item in classNameList" :value="item.id" :label="item.className" :key="item.id"></el-option>
                       </el-select>
                   </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="文章标签" prop="labels">
                        <el-select v-model="ruleForm.labels" clearable filterable class="w200" placeholder="请选择标签">
                            <el-option v-for="item in labelsList" :value="item.id" :label="item.labels" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="文章描述" prop="describe">
                        <el-input type="textarea" :rows="2" v-model="ruleForm.describe" clearable placeholder="请简单描述下此文章..."></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="推荐指数" prop="recommend">
                        <el-rate
                            style="margin-top: 10px"
                            v-model="ruleForm.recommend"
                            :max="4"
                            :texts="texts"
                            show-text>
                        </el-rate>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <mavon-editor ref="editor" v-model="ruleForm.editorValue"  @change="ChangeMavon"/>
        <el-button type="primary" @click="onsubmit">提交</el-button>
    </div>
</template>

<script>
export default {
    props: {},
    components: {},
    computed: {},
    created() {
    },
    data() {
        return {
            ruleForm: {
                editorValue: null
            },
            editorValue: '',
            rules: {
                className: [
                    { required: true, message: '请选择分类', trigger: 'change' }
                ]
            },
            texts: ['极差', '失望', '一般', '满意'],
            classNameList: [],
            labelsList: []
        }
    },
    methods: {
        onsubmit () {
            this.$refs.ruleForm.validate(vali => {
                if (vali) {
                    return
                } else {
                    this.$router.push('/article/data')
                }
            })
            console.log(this.editorValue);
        },
        ChangeMavon (value,render) {
            console.log(value, 'value')
            console.log(render, 'render');
            this.editorValue = render
        }
    }
}
</script>

<style scoped>

</style>