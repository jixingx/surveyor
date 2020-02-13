<template>
    <login-box>
        <div class="register">
            <!-- 头部 -->
            <van-nav-bar
                title="注册"
                :border="false"
                left-arrow
                @click-left="onClickLeft"
            />
            <!-- 表单 -->
            <form-box paddingTop="0.44rem">
                <van-field
                    v-model="phone"
                    center
                    placeholder="请输入您的手机号"
                    error-message=""
                />
                <van-field
                    v-model="sms"
                    center
                    clearable
                    placeholder="请输入验证码"
                >
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
                <van-field
                    v-model="password"
                    center
                    type="password"
                    right-icon="closed-eye"
                    placeholder="请输入密码(6-20数字字母组合)"
                />
                <van-field
                    v-model="password2"
                    center
                    type="password"
                    right-icon="closed-eye"
                    placeholder="再次确认密码"
                />
                <p class="jianju"></p>
                <div class="btn">
                    <van-button type="info" size="large" class="reg-btn" @click="tz">立即注册</van-button>
                </div>
            </form-box>
            <van-checkbox v-model="checked" checked-color="#FFFFFF" icon-size="14px">注册同意《家具测量师用户服务条款》</van-checkbox>
        </div>
    </login-box>
</template>

<script>
import LoginBox from '../../components/Login/LoginBox';
import FormBox from '../../components/Login/FormBox';
export default {
    name:"Register",
    data() {
        return {
            phone:'',
            sms:'',
            password:'',
            password2:'',
            checked: true,
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/login')
        },
        tz(){
            this.$router.push('/nickname')
        }
    },
    components:{
        LoginBox,
        FormBox
    }
}
</script>

<style lang="less" scoped>
.register{
    height: 100%;
    box-sizing: border-box;
    .van-nav-bar{
        background-color: transparent !important;
        margin-bottom: 1.09rem;
        // margin-top:30px;
        .van-icon{
            color: #FFF;
            font-size: 17.75px;
        }
        .van-nav-bar__title{
            color: #FFF;
            font-size: 18px;
        }
    }
    .van-cell{
        padding: 0 0 0 15px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        background-color: #F0F0F0;
        margin-bottom: 10px;
        border-radius: 7px;
        .van-button--primary{
            background: transparent;
            border: 0;
            color: #28B28B;
        }
        .van-button--small{
            height: 40px;
            line-height: 40px;
            font-size: 13px;
        }
        
        /deep/ .van-field__right-icon{
            margin-right: 0px !important;
            padding: 0 3px !important;
        }
        
    }
    .jianju{
        padding-bottom: 20px;
    }
    .btn{
        position: absolute;
        left: 0rem;
        bottom: 0px;
        width: 100%;
        transform: translateY(50%);
        text-align: center;
    }
    .reg-btn{
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #ffffff;
        background: none;
        border: 0px;
        background:#FDBB01;
        border-radius: 16px;
        width: 60%;
    }
    .van-checkbox{
        padding-left: 0.64rem;
        margin-top: 34px;
    }
    /deep/ .van-checkbox__icon--checked .van-icon{
        color: #000000;
    }
    /deep/ .van-checkbox__label{
        font-size: 14px;
        color: #FFFFFF;
        font-family: 'PingFang SC';
    }
}
</style>