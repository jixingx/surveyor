<template>
    <div class="myqr">
        <!-- 头部 -->
        <van-nav-bar
            title="我的二维码"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 内容 -->
        <div class="content">
            <div class="erweima">
                <img src="../../assets/images/my/ewm.png" alt="" srcset="">
            </div>
            <div class="btns">
                <van-button type="default" class="btn1" color="#F0F0F0">暂存</van-button>
                <van-button type="primary" class="btn2" color="#28B38B">提交</van-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MyQr",
    methods:{
        onClickLeft() {
            this.$router.push('/my');
        },
    }
}
</script>

<style lang="less">
.myqr{
    height: 100%;
    box-sizing: border-box;
    .van-nav-bar{
        background-color: #FAFAFA;
      // margin-top:30px;
      .van-icon{
          color: #666666;
          font-size: 17.75px;
      }
      .van-nav-bar__title{
          color: #333333;
          font-size: 18px;
      }
    }
    .content{
        padding: 0.92rem 1.22rem 0;
        box-sizing: border-box;
        .erweima{
            width: 5.2rem;
            height: 5.2rem;
            box-sizing: border-box;
            border: 1px solid #28B28B;
            border-radius: 5px;
            padding: 0.24rem;
            margin-bottom:0.8rem; 
            img{
                width: 4.72rem;
                height: 4.72rem;
            }
        }
        .btns{
            text-align: center;
            .van-button{
                height: 37px;
                line-height: 39px;
                padding: 0 0.8rem;
            }
            .van-button--normal{
                
                border-radius: 17px;
                font-size:15px;
                
            }
            .btn1{
                border-radius: 17px;
                margin-right: 0.38rem;
                color: #333333 !important;
            }
        }
    }
}
</style>