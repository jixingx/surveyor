<template>
    <div class="other-login" :style="{bottom:bottom}">
        <p class="other"><span>其他方式登录</span></p>
        <p class="wqw">
            <router-link to="/" class="a1"><img src="../../assets/images/login/qq.png"></router-link>
            <router-link to="/" class="a2"><img src="../../assets/images/login/weixin.png"></router-link>
            <router-link to="/"><img src="../../assets/images/login/weibo.png"></router-link>
        </p>
        <slot></slot>
    </div>
</template>

<script>
export default {
 name:"OtherLogin",
 props:{
     bottom:{
        type: String,
        default:"0.44rem"
     }
 }
}
</script>

<style lang="less" scoped>
.other-login{
    position: absolute;
    width: 100%;
    left: 0;
    // bottom: 1.375rem;
    .other{
        padding: 0;
        margin: 0 0 16px 0;
        text-align: center;
        span{
            display: inline-block;
            height:17px;
            font-size:12px;
            font-family:PingFang SC;
            line-height:17px;
            color: #CCCCCC;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                top: 8px;
                left: -52px;
                display: inline-block;
                width: 44px;
                height: 1px;
                background:linear-gradient(270deg,rgba(255,255,255,1) 0%,rgba(128,128,128,0) 100%);
            }
            &::after{
                content: '';
                position: absolute;
                top: 8px;
                right:-52px;
                display: inline-block;
                width: 44px;
                height: 1px;
                background:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(128,128,128,0) 100%);
            }
        }
        
    }
    .wqw{
        margin: 0;
        padding: 0;
        text-align: center;
        .a1{
            margin-right: 38px;
        }
        .a2{
            margin-right: 37px;
        }
    }
}

</style>