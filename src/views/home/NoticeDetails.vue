<template>
  <div class="noticedetails">
      <!-- 头部 -->
      <van-nav-bar
          title="通知公告"
          :border="false"
          left-arrow
          @click-left="onClickLeft"
          :fixed="true"
      />
      <!-- 内容 -->
      <div class="content">
          <van-panel title="关于加强测量师管理的通知" desc="2020-01-01 13：30">
              <div>
                针对测量师针对
                测量师针对测量
                师针对测量师针
                对测量师针对测量
                师针对测量师针对
                测量师针对测量师
                针对测量师针对测量
                师针对测量师针对测量师
                针对测量师针对测量师
                针对测量师针对测量师
                针对测量师针对测量
                师针对测量师针对测量
                师针对测量师针对测量
                师针对测量师针对测量
                师针对测量师
                针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师针对测量师。
              </div>
          </van-panel>
      </div>
  </div>
</template>

<script>
export default {
    name:"NoticeDetails",
    data() {
      return {
        
      }
    },
    methods:{
      onClickLeft() {
        this.$router.push('/home');
      },
    }
}
</script>

<style lang="less" scoped>
.noticedetails{
  background-color: #F7F7F7;
  height: 100%;
  padding-top: 46px;
  box-sizing: border-box;
  .van-nav-bar{
      margin-bottom: 1.09rem;
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
    height: 100%;
    padding: 0.22rem 0.24rem 0;
    .van-panel{
        .van-cell:not(:last-child)::after{
            right: 16px;
        }
        .van-cell__title{
            font-size: 15px;
            color: #333333;
            flex: 3;
            .van-cell__label{
                font-size: 11px;
                color: #999999;
            }
        }
        .van-panel__content{
            padding: 13px 16px 14px 16px;
            text-indent: 26px;
            text-align: left;
            font-size: 13px;
            line-height:22px;
            color: #666666;
        }
    }
  }
}
</style>