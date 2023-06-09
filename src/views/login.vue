<template>
    <div class="login">
        <div class="form">
            <h1 class="header">管理平台</h1>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >
                <el-form-item prop="userName">
                    <el-input
                        v-model="ruleForm.userName"
                        prefix-icon="el-icon-user"
                        clearable
                        style="width: 300px"
                        placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="pawss">
                    <el-input
                        v-model="ruleForm.pawss"
                        show-password
                        clearable
                        prefix-icon="el-icon-lock"
                        style="width: 300px"
                        placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="loginCheck">登录</el-button>
        </div>
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
                userName: "admin",
                pawss: "123456"
            },
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ],
                pawss: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        loginCheck () {
            this.$refs.ruleForm.validate(vali => {
                if (!vali) {
                    this.$message.error("请完善信息!")
                } else {
                    let dataArray = [
                        {
                            id: 1,
                            name: "导航一",
                            pathUrl: "",
                            children: [
                                {
                                    id: 11,
                                    name: "选项一",
                                    pathUrl: "/system/data"
                                },
                                {
                                    id: 12,
                                    name: "选项二",
                                    pathUrl: "1-2"
                                },
                                {
                                    id: 13,
                                    name: "选项三",
                                    pathUrl: "1-3"
                                },
                            ]
                        },
                        {
                            id: 2,
                            name: "导航二",
                            pathUrl: "/data/screen",
                        }
                    ]
                    console.log(dataArray)
                    localStorage.menuData =JSON.stringify(dataArray)
                    this.$router.push("/index")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    position: relative;
    width: 100%;
    height: 100%;
    background: url("@/assets/img/login-bj.jpg")no-repeat center 100%;
    .form{
        position: absolute;
        top: calc(50% - 135px);
        left: calc(50% - 225px);
        width: 450px;
        height: 270px;
        background: #fff;
        border-radius: 15px;
        .header{
            text-align: center;
            margin-top: 20px;
        }
        .el-button--primary{
            margin-left: 100px;
            width: 300px;
        }
    }
}
</style>