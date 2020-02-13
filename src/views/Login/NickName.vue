<template>
    <login-box>
        <div class="nickname">
            <!-- 头部 -->
            <van-nav-bar
                title=""
                :border="false"
                right-text="跳过"
                @click-right="onClickRight"
            />
            <!-- 表单 -->
            <form-box paddingTop="0.68rem">
                <p class="form-p"><span>您希望别人怎么称呼你？</span></p>
                <van-field
                    v-model="name"
                    center
                    placeholder=""
                    error-message=""
                />
                <p class="jianju"></p>
                <div class="btn">
                    <van-button type="info" size="large" class="nickename-btn" @click="tz">确认</van-button>
                </div>
            </form-box>
        </div>
    </login-box>
</template>

<script>
import LoginBox from '../../components/Login/LoginBox';
import FormBox from '../../components/Login/FormBox';
export default {
    name:"NickName",
    data() {
        return {
            name:"187****8650ROKY"
        }
    },
    methods: {
        onClickRight() {
            // Toast('按钮');
            this.$router.push('/home')
        },
        tz(){
            this.$router.push('/home')
        }
    },
    components:{
        LoginBox,
        FormBox
    }
}
</script>

<style lang="less" scoped>
.nickname{
    height: 100%;
    box-sizing: border-box;
    .van-nav-bar{
        background-color: transparent !important;
        margin-bottom: 4.0625rem;
        // margin-top:30px;
        .van-nav-bar__text{
            color: #FFF;
            font-size: 15px;
            font-family:"PingFang SC";
        }
    }
    .form-p{
        margin-bottom: 9px;
        padding: 0;
        text-align: center;
        height:17px;
        font-size:12px;
        line-height:17px;
        color: #999999;
    }
    .van-cell{
        padding: 0 0 0 15px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        background-color: #F0F0F0;
        margin-bottom: 10px;
        border-radius: 7px;
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
    .nickename-btn{
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