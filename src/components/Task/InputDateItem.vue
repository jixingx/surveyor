<template>
    <div class="input-date-item">
        <img src="../../assets/images/task/yd.png" alt="" srcset="">
        <span class="item-name" v-html="itemname"></span>
        <div class="input-item">
            <span>长</span>
            <van-field v-model="value1"/>
            <span>mm</span>
        </div>
        <div class="input-item">
            <span>宽</span>
            <van-field v-model="value2" />
            <span>mm</span>
        </div>
        <div class="input-item">
            <span>高</span>
            <van-field v-model="value3" />
            <span>mm</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"InputDateItem",
    props:{
        value1:{
            type:String,
            default:" "
        },
        value2:{
            type:String,
            default:" "
        },
        value3:{
            type:String,
            default:" "
        },
        itemname:{
            type:String,
        }
    }
}
</script>

<style lang="less" scoped>
.input-date-item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 0.28rem;
    padding-right: 0.3rem;
    margin-bottom: 0.32rem;
    .item-name{
        font-size:13px;
        color: #333333;
    }
    .input-item{
        font-size: 13px;
        color: #666666;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span:nth-child(1){
            padding-right: 0.1rem;
        }
        span:nth-child(3){
            padding-left: 0.04rem;
            color: #999999;
            font-size: 12px;
        }
        .van-cell{
            width: 0.74rem;
            height: 18px;
            background-color: #F0EFF2;
        }
        
    }
}
</style>