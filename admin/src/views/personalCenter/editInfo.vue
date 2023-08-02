<template>
    <div class="user-box">
        <el-card shadow="hover">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item>
                    <el-upload
                        class="upload-demo"
                        action="*"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :on-success="onSuccess"
                        :before-upload="beforeAvatarUpload"
                        :file-list="fileList"
                        list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="ruleForm.name" clearable placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="个人简介：" prop="introduce">
                    <el-input type="textarea" v-model="ruleForm.introduce" clearable
                              placeholder="请输入个人简介"></el-input>
                </el-form-item>
                <el-form-item label="昵称：" prop="nickName">
                    <el-input v-model="ruleForm.nickName" clearable placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item label="生日：" prop="birthday">
                    <el-date-picker
                        v-model="ruleForm.birthday"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="性别：" prop="sex">
                    <el-radio-group v-model="ruleForm.sex">
                        <el-radio :label="0">保密</el-radio>
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="部门：" prop="department">
                    <el-cascader
                        ref="cascader"
                        v-model="ruleForm.department"
                        placeholder="请选择部门"
                        :props="customProps"
                        :options="departmentOptions"
                        @change="departmentHandleChange"></el-cascader>
                </el-form-item>
                <el-form-item label="地址：" prop="address">
                    <el-cascader
                        ref="addressRef"
                        v-model="ruleForm.address"
                        placeholder="请选择地址"
                        :props="customProps"
                        :options="addressOptions"
                        @change="addressHandleChange"></el-cascader>
                </el-form-item>
                <el-form-item label="编程语言：" prop="programmingLanguage">
                    <el-select v-model="ruleForm.programmingLanguage" placeholder="请选择编程语言" clearable filterable
                               multiple>
                        <el-option
                            v-for="item in programmingLanguageList"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="标签：" prop="tagList">
                    <el-tag
                        :key="tag"
                        style="margin-right: 10px;"
                        v-for="tag in ruleForm.tagList"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                        class="input-new-tag"
                        style="width: 100px"
                        v-if="inputVisible"
                        v-model.trim="ruleForm.tag"
                        placeholder="请输入标签"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添 加</el-button>

                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" @click="onSubmit">保 存</el-button>
                </el-form-item>
            </el-form>
        </el-card>
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
            this.$set(this.ruleForm, 'tagList', this.formData.tagList)
            this.ruleForm = this.formData
        }
        this.departmenFn()
        this.addressFn()
    },
    data() {
        return {
            fileList: [],
            inputVisible: false,
            ruleForm: {
                department: []
            },
            customProps: {
                value: 'value',
                label: 'label',
                children: 'children'
            },
            rules: {
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'},
                    {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                ],
                introduce: [
                    {required: true, message: '请输入个人简介', trigger: 'blur'},
                    {max: 500, message: '最大可输入500字', trigger: 'blur'}
                ],
                nickName: [
                    {required: true, message: '请输入昵称', trigger: 'blur'},
                    {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                ],
                birthday: [
                    {required: true, message: '请选择日期', trigger: 'change'},
                ],
                sex: [
                    {required: true, message: '请选择性别', trigger: 'change'},
                ],
                department: [
                    {required: true, message: '请选择部门', trigger: 'change'},
                ],
                address: [
                    {required: true, message: '请选择地址', trigger: 'change'},
                ],
                programmingLanguage: [
                    {required: true, message: '请选择编程语言', trigger: 'change'},
                ]
            },
            departmentOptions: [
                {
                    value: 'jituan',
                    label: '集团',
                    children: [{
                        value: 'jishubu',
                        label: '技术部',
                        children: [{
                            value: 'quanduankaifa',
                            label: '前端开发'
                        }, {
                            value: 'houduankaifa',
                            label: '后端开发'
                        }, {
                            value: 'chanpin',
                            label: '产品'
                        }, {
                            value: 'ceshi',
                            label: '测试'
                        }]
                    }, {
                        value: 'renshibu',
                        label: '人事部',
                        children: [{
                            value: 'zhaopinzhuanyuan',
                            label: '招聘专员'
                        }, {
                            value: 'xingzheng',
                            label: '行政'
                        }]
                    }]
                }
            ],
            addressOptions: [
                {
                    value: 'zhejiang',
                    label: '浙江省',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州市',
                        children: [{
                            value: 'linping',
                            label: '临平区'
                        }, {
                            value: 'xiaoshan',
                            label: '萧山区'
                        }, {
                            value: 'qiantang',
                            label: '钱塘区'
                        }, {
                            value: 'binjiang',
                            label: '滨江区'
                        }]
                    }, {
                        value: 'quzhou',
                        label: '衢州市',
                        children: [{
                            value: 'kecheng',
                            label: '柯城区'
                        }, {
                            value: 'qujiang',
                            label: '衢江区'
                        }]
                    }]
                }
            ],
            programmingLanguageList: ['JavaScript', 'HTML', 'CSS', 'Vue', 'Node', 'Java', 'C'],
            tagList: []
        }
    },
    methods: {
        departmentHandleChange(e) {
            let Obj = this.$refs.cascader.getCheckedNodes()
            this.ruleForm.departmentLabel = Obj[0].pathLabels
            this.ruleForm.departmentLevel2Code = e[1]
            this.ruleForm.departmentLevel2Code = e[2]
        },
        getCheckedNodes(e) {
        },
        addressHandleChange(e) {
            let addressArr = this.$refs.addressRef.getCheckedNodes()
            this.ruleForm.addressLabel = addressArr[0].pathLabels
            this.ruleForm.addressLevel2Code = e[1]
            this.ruleForm.addressLevel3Code = e[2]
        },
        onSubmit() {
            this.$refs.ruleForm.validate(vali => {
                if (!vali || this.ruleForm.tagList.length === 0) {
                    this.$message.error('请完善信息!')
                } else {
                    console.log(this.ruleForm)
                    this.$message.success('保存成功!')
                }
            })
        },
        // 部门回显
        departmenFn() {
            let departmentName = this.departmentOptions.find(item => {
                return item.children.find(i => {
                    return i.children.find(k => {
                        if (this.formData.departmentLevel3Code === k.value) {
                            return k
                        }
                    })
                })
            })
            if (departmentName.value) {
                this.$set(this.ruleForm, 'department', [departmentName.value, this.formData.departmentLevel2Code, this.formData.departmentLevel3Code])
            }
        },
        // 地址回显
        addressFn() {
            let addressName = this.addressOptions.find(item => {
                return item.children.find(i => {
                    return i.children.find(k => {
                        if (k.value === this.formData.addressLevel3Code) {
                            return k
                        }
                    })
                })
            })
            if (addressName.value) {
                this.$set(this.ruleForm, 'address', [addressName.value, this.formData.addressLevel2Code, this.formData.addressLevel3Code])
            }
        },
        // 移除tag
        handleClose(tag) {
            this.ruleForm.tagList.splice(this.ruleForm.tagList.indexOf(tag), 1);
        },
        // 添加tag
        handleInputConfirm() {
            let inputValue = this.ruleForm.tag;
            if (inputValue) {
                this.ruleForm.tagList.push(inputValue);
            }
            this.inputVisible = false;
            this.ruleForm.tag = '';
        },
        showInput () {
            this.inputVisible = true
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
            if (this.ruleForm.tagList.length >= 5) {
                this.inputVisible = false
                this.$message.warning('最5个标签！')
            } else {
                this.inputVisible = true
            }
        },
        handlePreview (file) {
            console.log(file)
        },
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        onSuccess (res, file) {
            console.log(res, file)
        },
        beforeAvatarUpload (file) {
            console.log(file);
        }
        
    }
}
</script>

<style lang="scss" scoped>
.el-card {
    width: 100%;
    border: 1px solid #dddddd;
    .avatar-uploader{
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}
</style>