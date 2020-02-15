<template>
  <div class="account_bind">
    <!-- 头部 -->
    <van-nav-bar
        title="账户绑定"
        :border="false"
        left-arrow
        @click-left="onClickLeft"
    />
    <div class="content">
        <van-cell title="手机" value="187****8320" />
        <van-cell title="邮箱" value="未绑定" />
        <van-cell title="微信" is-link value="未绑定" />
        <van-cell title="QQ" is-link value="未绑定" />
        <van-cell title="微博" is-link value="未绑定" />
    </div>
  </div>
</template>

<script>
export default {
    name:"AccountBind",
    methods:{
        onClickLeft() {
            this.$router.push('/my');
        },
    }
}
</script>

<style lang="less">
.account_bind{
    height: 100%;
    box-sizing: border-box;
    background-color: #F0F0F0;
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
}
</style>