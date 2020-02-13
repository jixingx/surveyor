<template>
    <login-box>
        <div class="rebuild-psd">
            <!-- 头部 -->
            <van-nav-bar
                :border="false"
                left-arrow
                @click-left="onClickLeft"
            >
                <span slot="title" class="maxspan">
                    重设密码
                    <span class="span1"></span>
                    <span class="span2"></span>
                </span>
            </van-nav-bar>
            <!-- 表单 -->
            <form-box paddingTop="0.45rem">
                <van-field
                    v-model="password"
                    type="password"
                    right-icon="closed-eye"
                    placeholder="请输入您的新密码"
                />
                <van-field
                    v-model="password2"
                    type="password"
                    right-icon="closed-eye"
                    placeholder="再次确认您的新密码"
                />
                <p class="jianju"></p>
                <div class="btn">
                    <van-button type="info" size="large" class="rebuild-btn" @click="tz">确定</van-button>
                </div>
                
            </form-box>
        </div>
    </login-box>
</template>

<script>
import LoginBox from '../../components/Login/LoginBox';
import FormBox from '../../components/Login/FormBox';
export default {
    name:"RebuildPsd",
    data() {
        return {
            password:'',
            password2:''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/forgetpsd');
        },
        tz(){
            this.$router.push('/login');
        }
    },
    components:{
        LoginBox,
        FormBox
    }
}
</script>

<style lang="less" scoped>
.rebuild-psd{
    padding-top: 0.67rem;
    height: 100%;
    box-sizing: border-box;
    .van-nav-bar{
        background-color: transparent !important;
        height: 21px;
        line-height: 21px;
        margin-bottom: 3.875rem;
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
                    }
                }
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
    .rebuild-btn{
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