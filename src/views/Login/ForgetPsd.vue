<template>
  <login-box>
      <div class="forgetpsd">
        <!-- 头部 -->
        <van-nav-bar
            :border="false"
            left-arrow
            @click-left="onClickLeft"
        >
            <span slot="title" class="maxspan">
                忘记密码
                <span class="span1"></span>
                <span class="span2"></span>
            </span>
        </van-nav-bar>
        <!-- 表单 -->
        <form-box paddingTop="0.52rem">
            <p class="form-p"><span>验证手机号</span></p>
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
            <p class="explain">仅支持手机找回密码,邮箱用户请联系官方客服找回</p>
            <div class="btn">
                <van-button type="info" size="large" class="forget-btn" @click="tz">下一步</van-button>
            </div>
        </form-box>
      </div>
  </login-box>
</template>

<script>
import LoginBox from '../../components/Login/LoginBox';
import FormBox from '../../components/Login/FormBox';
export default {
    name:"ForgetPsd",
    data() {
        return {
            phone:'',
            sms:''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/login');
        },
        tz(){
            this.$router.push('/rebuildpsd')
        }
    },
    components:{
        LoginBox,
        FormBox
    }
}
</script>

<style lang="less" scoped>
.forgetpsd{
    padding-top: 0.67rem;
    height: 100%;
    box-sizing: border-box;
    .van-nav-bar{
        background-color: transparent !important;
        height: 21px;
        line-height: 21px;
        margin-bottom: 1.09rem;
        // margin-top:30px;
        .van-icon{
            color: #FFF;
            font-size: 17.74px;
        }
        .van-nav-bar__title{
            color: #FFF;
            height:31px;
            font-size:18px;
            line-height: 23px;
            font-family:"PingFang SC";
            .maxspan{
                position: relative;
                span{
                    position: absolute;
                    left: 8px;
                    top: 30px;
                    width: 22px;
                    height: 2px;
                    background-color: #FFFFFF;
                    z-index: 9999;
                    &.span2{
                        left: 36px;
                        opacity: 0.4;
                    }
                }
            }
        }
    }
    .form-p{
        margin: 0;
        padding: 0;
        text-align: center;
        font-size:13px;
        color: #333333;
        height: 23px;
        margin-bottom: 0.38rem;
        span{
            position: relative;
            display: inline-block;
            height: 18px;
            line-height: 18px;
            &::after{
                content: '';
                position: absolute;;
                left: 50%;
                top:20px; 
                width: 60%;
                transform: translateX(-50%);
                height: 2px;
                background-color: #28B28B;
            }
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
    .forget-btn{
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
</style>