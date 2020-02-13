<template>
    <login-box>
        <div class="onelogin">
            <Logo />
            <div class="onrkey-form">
                <van-field
                    v-model="phone"
                >
                    <van-checkbox v-model="checked" checked-color="#FFFFFF" slot="right-icon" label-position="left" icon-size="13px">使用此号码登录</van-checkbox>
                </van-field>
                <p class="one-zs">中国移动提供认证服务</p>
            </div>
            <div class="btn">
                <van-button type="info" size="large" class="onekey-btn" @click="tz">本机号码一键登录</van-button>
                <router-link to="/login">手机验证或者密码登录</router-link>
            </div>
            <other-login>
                <div class="clause">
                    <van-checkbox v-model="checked2" checked-color="#FFFFFF" icon-size="12px">登录即同意《中国移动认证服务条款》和《风格家用户服务条款》并使 用本机号码登录</van-checkbox>
                </div>
            </other-login>
        </div>
    </login-box>
</template>

<script>
import LoginBox from '../../components/Login/LoginBox';
import Logo from '../../components/Login/Logo';
import OtherLogin from '../../components/Login/OtherLogin'
export default {
    name:"OneLogin",
    data() {
        return {
            phone:'187****8650',
            checked:true,
            checked2:true
        }
    },
    methods: {
        tz(){
            this.$router.push('/home')
        }
    },
    components:{
        LoginBox,
        Logo,
        OtherLogin
    }
}
</script>

<style lang="less" scoped>
.onelogin{
    .onrkey-form{
        padding: 0 0.51rem 0 0.53rem ;
        .van-cell{
            background-color: transparent;
            border-bottom:1px solid rgba(240,240,240,1);
            height:41px;
            line-height: 41px;
            font-size:24px;
            padding: 0px;
            padding-bottom: 8px;
            color: #FFFFFF;
            /deep/ .van-cell__value--alone{
                color: #FFFFFF;
                .van-field__control{
                    color: #FFFFFF;
                }
                .van-field__right-icon{
                    margin-top: 6px;
                    .van-checkbox{
                        .van-checkbox__label{
                            font-size:13px;
                            color: #FFFFFF;
                        }
                    }
                    .van-checkbox__icon--checked .van-icon{
                        color: #000000;
                    }
                }
            }
        }
        .one-zs{
            margin: 0;
            padding: 0;
            margin-top: 0.25rem;
            font-size:11px;
            font-family:PingFang SC;
            color: #FFFFFF;
        }
    }
    .btn{
        padding: 0 0.51rem 0 0.53rem ;
        margin-top: 1.18rem;
        text-align: center;
        .onekey-btn{
            height: 40px;
            line-height: 40px;
            background-color: #FDBB01;
            color: #ffffff;
            font-size:14px;
            border-radius: 7px;
            border: 0px;
            margin-bottom: 0.36rem;
        }
        a{
            font-size:14px;
            color: #FFFFFF;
        }
    }
    .clause{
        box-sizing: border-box;
        width: 100%;
        padding: 0 0.56rem 0 0.3712rem;
        margin-top: 0.44rem;
        /deep/ .van-checkbox{
            .van-checkbox__label{
                font-size:10px;
                color: #FFFFFF;
            }
        }
        /deep/ .van-checkbox__icon--checked .van-icon{
            color: #000000;
        }
    }
}
</style>