<template>
    <login-box>
        <div class="login">
            <!-- 头部 -->
            <van-nav-bar
                title=""
                :border="false"
                right-text="立即注册"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
            <!-- logo -->
            <Logo paddingTop="0.935rem" marginBottom="0.4724rem"  />
            <!-- 表单 -->
            <form-box>
                <van-tabs v-model="active" line-width="14%" color="#28B28B" title-active-color="#333333" title-inactive-color="#333333" @click="onClick" :border="false">
                    <van-tab title="手机号快捷登录">
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
                            <van-button slot="button" size="small" type="primary">获取验证码</van-button>
                        </van-field>
                        <p class="explain">未注册的手机号也将自动创建家具测量师APP账号</p>
                        <div class="btn">
                            <van-button type="info" size="large" class="login-btn">登 录</van-button>
                        </div>
                        
                    </van-tab>
                    
                    <van-tab title="账号密码登录">
                        <van-field
                            v-model="phone2"
                            center
                            placeholder="请输入您的邮箱账号/手机号"
                            error-message=""
                        />
                        <van-field
                            v-model="password"
                            center
                            type="password"
                            placeholder="请输入您的密码"
                        />
                        <p class="explain">未注册的手机号也将自动创建家具测量师APP账号</p>
                        <div class="btn">
                            <van-button type="info" size="small" class="login-btn">登 录</van-button>
                        </div>
                        
                    </van-tab>
                </van-tabs>
            </form-box>
            <p class="jump">
                <router-link to="/onekeylogin" v-if="tz"></router-link>
                <router-link to="/forgetpsd" v-else>忘记密码</router-link>
            </p>
            <other-login bottom="0.52rem" />
        </div>
    </login-box>
</template>

<script>
import LoginBox from '../../components/Login/LoginBox';
import Logo from '../../components/Login/Logo';
import FormBox from '../../components/Login/FormBox';
import OtherLogin from '../../components/Login/OtherLogin'
export default {
    name:"Login",
    data() {
        return {
            active:0,
            phone:'',
            sms:'',
            phone2:'',
            password:'',
            tz:true
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/onelogin');
        },
        onClickRight() {
            // Toast('按钮');
            this.$router.push('/register')
        },
        onClick(name, title) {
            //console.log(name,title)
            if(name==0){
                this.tz=true
            }else if(name==1){
                this.tz=false
            }
        }
    },
    components:{
        LoginBox,
        Logo,
        FormBox,
        OtherLogin
    }
}
</script>

<style lang="less" scoped>
.login{
    height: 100%;
    box-sizing: border-box;
    position: relative;
    .van-nav-bar{
        background-color: transparent !important;
        // height: 21px;
        // line-height: 21px;
        // margin-bottom: 3.375rem;
        // margin-top:30px;
        .van-icon{
            color: #FFF;
            font-size: 17.74px;
        }
        .van-nav-bar__text{
            color: #FFF;
            font-size: 15px;
            font-family:"PingFang SC";
        }
    }
    .van-tab__pane{
        margin-top: 20px !important;
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
            
            
        }
        .explain{
            height:14px;
            font-size:10px;
            font-family:PingFang SC;
            line-height: 14px;
            color: #CCCCCC;
            margin-top: -2px;
            padding-left: 6px;
            padding-bottom: 28.5px;
        }
        .btn{
            position: absolute;
            left: 0rem;
            bottom: 0px;
            width: 100%;
            transform: translateY(50%);
            text-align: center;
        }
        .login-btn{
            
            
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
    }
    .jump{
        margin-top: 14px;
        padding: 0;
        text-align: center;
        a{
            margin-top: 0.4375rem;
            display: inline-block;
            height:18px;
            line-height: 18px;
            font-size:13px;
            font-family:PingFang SC;
            color: #ffffff;
        }
    }
}
</style>