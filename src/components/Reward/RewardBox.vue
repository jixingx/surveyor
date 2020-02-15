<template>
    <div class="reward-box">
        <img src="../../assets/images/reward/avtalg.png" alt="" srcset="">
        <h2>客户：张三</h2>
        <p>地址：武侯区红牌楼竹园小区18号</p>
        <p>奖励类型：完成测量任务</p>
        <p>获取奖励时间：2018-10-16 15:43:01</p>
        <span>+¥614.40</span>
    </div>
</template>

<script>
export default {
    name:"RewardBox"
}
</script>

<style lang="less" scoped>
.reward-box{
    background: #FFF;
    // height: 2.44rem;
    box-shadow: 0px 1px 2px 2px #F1EFF2;
    padding-left: 0.8rem;
    padding-bottom: 0.22rem;
    margin-bottom: 0.2rem;
    box-sizing: border-box;
    position: relative;
    img{
        width: 1.56rem;
        height: 1.56rem;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%,-50%);
    }
    h2{
        padding-top: 0.26rem;
        // margin-bottom: 0.18rem;
        color: #333333;
        font-size: 14px;
    }
    p{
        margin-top: 0.18rem;
        color: #999;
        font-size: 12px;
    }
    span{
        font-size: 15px;
        color: #28B28B;
        position: absolute;
        right: 0.12rem;
        top: 0.92rem;
    }
    &:last-child{
        margin-bottom: 0rem;
    }
}
</style>