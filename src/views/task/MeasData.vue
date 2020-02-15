<template>
  <div class="measdata">
      <!-- 头部 -->
        <van-nav-bar
            title="测量数据"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
            :fixed="true"
        />
        <!-- 内容 -->
        <div class="content">
            <data-box title="客厅">
                <input-date-item itemname="电视柜:" />
                <input-date-item itemname="酒&emsp;柜:" />
                <input-date-item itemname="鞋&emsp;柜:" />
            </data-box>
            <data-box title="主卧">
                <input-date-item itemname="衣&emsp;柜:" />
                <input-date-item itemname="床&emsp;&emsp;:" />
                <input-date-item itemname="梳妆台:" />
            </data-box>
            <data-box title="次卧">
                <input-date-item itemname="衣&emsp;柜:" />
                <input-date-item itemname="床&emsp;&emsp;:" />
                <input-date-item itemname="书&emsp;桌:" />
            </data-box>
            <div class="btns">
                <van-button type="default" class="btn1">暂存</van-button>
                <van-button type="primary" class="btn2" color="#28B38B">提交</van-button>
            </div>
        </div>
        
  </div>
</template>

<script>
import DataBox from '../../components/Task/DataBox';
import InputDateItem from '../../components/Task/InputDateItem';
export default {
    name:"MeasData",
    methods:{
        onClickLeft() {
            this.$router.push('/taskdetails');
        },
    },
    components:{
        DataBox,
        InputDateItem
    }
}
</script>

<style lang="less" scoped>
.measdata{
    height: 100%;
    padding-top: 46px;
    background-color: #F0F0F0;
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
        height: 100%;
        box-sizing: border-box;
        padding: 0.36rem 0.24rem 0rem;
    }
    .btns{
        margin-top: 0.54rem;
        text-align: center;
        .van-button--normal{
            padding: 0 1.1rem;
            border-radius: 5px;
            font-size:15px;
            
        }
        .btn1{
            color: #666666;
            margin-right: 0.38rem;
        }
    }
}
</style>