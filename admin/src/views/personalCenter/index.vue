<template>
    <div class="user-box">
        <el-card shadow="hover">
            <div class="box">
                <div class="card_top">
                    <img src="@/assets/image/头像.svg" alt="">
                    <p style="font-size: 24px">{{personalInfo.name}}</p>
                    <p style="font-size: 14px">{{personalInfo.introduce}}</p>
                    <el-button style='border-radius: 30px' size="small" type="primary" icon="el-icon-user" @click="followMe"> Follow me</el-button>
                </div>
                <div class="card_center">
                    <div class="card_center_box">
                        <p><span class="el-icon-user"></span>{{personalInfo.nickName}}</p>
                        <p><span class="el-icon-magic-stick"></span>{{personalInfo.birthday}}</p>
                        <p><span class="el-icon-female"></span>
                            {{formatterSex(personalInfo.sex)}}
                        </p>
                        <p><span class="el-icon-school"></span>
                            <span v-for="(item, index) in personalInfo.departmentLabel" :key="index">{{item}}</span>
                        </p>
                        <p><span class="el-icon-place"></span>
                            <span v-for="(item, index) in personalInfo.addressLabel" :key="index">{{item}}</span>
                        </p>
                        <div style="display: flex">
                            <span class="el-icon-refrigerator"></span>
                            <p v-for="(item, index) in personalInfo.programmingLanguage" :key="index">
                                {{item}},
                            </p>
                        </div>
                    </div>
                    <div class="card_center_tag">
                        <p>个性标签</p>
                        <el-tag size="small" v-for="(item, index) in personalInfo.tagList" :key="index">{{item}}</el-tag>
                    </div>
                </div>
            </div>
        </el-card>
        <v-editInfo :formData="personalInfo" class="edit_info"></v-editInfo>
    </div>
</template>

<script>
import editInfo from "@/views/personalCenter/editInfo.vue";

export default {
    props: {},
    components: {
        'v-editInfo': editInfo
    },
    computed: {},
    created() {
    },
    data() {
        return {
            personalInfo: {
                id: 1,
                photo: '',
                name: '旭陌小生',
                introduce: '富在术数，不在劳身；利在势居，不在力耕。',
                nickName: '前端小白白',
                birthday: '1995-5-28',
                sex: 1,
                department: [],
                departmentLabel: ['集团', '技术部', '前端开发'],
                address: [],
                addressLabel: ['浙江省', '杭州市', '临平区'],
                programmingLanguage: ['JavaScript', 'HTML', 'CSS', 'Vue', 'Node'],
                tagList: ['腹黑', '怕麻烦', '小帅哥', '霸气侧漏'],
                departmentLevel3Code: 'quanduankaifa',
                departmentLevel2Code: 'jishubu',
                addressLevel3Code: 'linping',
                addressLevel2Code: 'hangzhou'
            },
        }
    },
    methods: {
        formatterSex (event) {
            switch (event) {
                case 0:
                    return '保密'
                break
                case 1:
                    return '男'
                break
                case 2:
                    return '女'
                break
            }
        },
        followMe () {
            window.open('https://github.com/wxyDL')
        }
    }
}
</script>

<style lang="scss" scoped>
.user-box {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
        width: 40%;
        border: 1px solid #dddddd;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        ::v-deep .el-card__body{
            padding: 0 !important;
            position: relative;
        }
        .box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .card_top {
            text-align: center;
            
            p {
                margin-bottom: 10px;
            }
            
            img {
                border-radius: 50px;
                overflow: hidden;
                border: 1px solid #dddddd;
                width: 100px;
                height: 100px;
            }
        }
        .card_center{
            margin-top: 20px;
            .card_center_box{
                width: 300px;
                border-bottom: 1px solid #dddddd;
                font-size: 14px;
                p{
                    margin-bottom: 10px;
                    span{
                        margin-right: 5px;
                    }
                }
            }
            .card_center_tag{
                font-size: 14px;
                p{
                    margin: 10px 0;
                    font-weight: bold;
                }
                .el-tag{
                    margin: 5px 10px;
                }
            }
        }
    }
    
    .edit_info{
        width: 60%;
        padding-right: 0;
    }
}
</style>