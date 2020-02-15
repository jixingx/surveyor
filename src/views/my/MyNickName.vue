<template>
    <div class="nickname">
        <!-- 头部 -->
        <van-nav-bar
            title="昵称"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 内容 -->
        <div class="content">
            <input type="text" v-model="value" placeholder="在这里填写">
            <van-button size="large" color="#28B28B">保存</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name:"NiceName",
    data () {
        return {
            value:''
        }
    },
    methods:{
        onClickLeft() {
            this.$router.push('/my');
        },
    }
}
</script>

<style lang="less" scoped>
.nickname{
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
        padding:0.44rem 0.24rem 0; 
        input{
            height: 41px;
            box-sizing: border-box;
            padding: 10px 18px;
            width: 100%;
            background: #fff;
            border: 1px solid #F0F0F0;
            border-radius: 17px;
            margin-bottom: 2.02rem;
        }
        .van-button{
            border-radius: 7px;
        }
    }
}
</style>