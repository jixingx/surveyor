<template>
    <div class="my">
        <!-- 头部 -->
        <van-nav-bar
            title="我的"
            :border="false"
            :fixed="true"
        >
            <van-icon name="point-gift-o" slot="right" info="领奖励" size="20px" color="#F4FDFE"/>
        </van-nav-bar>
        <!-- 内容 -->
        <div class="content">
            
        </div>
        <!-- 底部导航 -->
        <Tab />
    </div>
</template>

<script>
import Tab from '../../components/common/Tab';
export default {
    name:"My",
    components:{
        Tab
    }
}
</script>

<style lang="less" scoped>
.my{
    height: 100%;
    box-sizing: border-box;
    padding-top: 46px;
    padding-bottom: 53px;
    background: #28B28B;
    .van-nav-bar{
        background-color: transparent;
        .van-nav-bar__title{
          color: #333333;
          font-size: 25px;
          color: #fff;
        }
        .van-nav-bar__right{
            right: 38px;
            .van-info{
                min-width: 44px;
                right: -11px;
            }
        }
    }
}
</style>