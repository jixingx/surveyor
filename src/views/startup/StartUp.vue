<template>
    <div class="start_up">
        <van-swipe class="my-swipe" :loop="false" indicator-color="#28B28B" >
            <van-swipe-item>
                <img src="../../assets/images/startup/banner1.png" alt="" srcset="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/images/startup/banner2.png" alt="" srcset="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/images/startup/banner3.png" alt="" srcset="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/images/startup/banner4.png" alt="" srcset="">
                <div class="btn">
                    <van-button color="#28B28B" size="large" @click="tz">立即查看</van-button>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:"StartUp",
    methods:{
        tz(){
            localStorage.setItem('Isqd',true)
            this.$router.push('/onelogin');
        }
    }
}
</script>

<style lang="less" scoped>
.start_up{
    height: 100%;
    .my-swipe{
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
        /deep/ .van-swipe__indicator{
            background-color: #CCCCCC;
            border-radius: 15px;
            width:12px;
            height:6px;
        }
        .btn{
            position: absolute;
            bottom: 1.8rem;
            width: 100%;
            left: 0;
            padding: 0 2.32rem;
            box-sizing: border-box;
            .van-button{
                border-radius: 23px;
            }
        }
    }
    // .my-swipe .van-swipe-item {
    //     color: #fff;
    //     font-size: 20px;
    //     line-height: 150px;
    //     text-align: center;
    //     background-color: #39a9ed;
    // }
}
</style>