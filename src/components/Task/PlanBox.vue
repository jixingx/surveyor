<template>
    <div class="box-item">
        <div class="box-item-left">
            <img :src="item.img" alt="" srcset="">
        </div>
        <div class="box-item-right">
            <div class="box-item-right-title">
                <h2>客户：{{item.title}}<span v-if="!isdemand?true:false">{{item.demand}}</span></h2>
                <van-button type="danger" size="mini" v-if="item.status=='待测量'">{{item.status}}</van-button>
                <van-button type="primary" size="mini" v-else-if="item.status=='已测量'">{{item.status}}</van-button>
                <van-button type="info" size="mini" v-else>{{item.status}}</van-button>
            </div>
            <p class="p1">地址：{{item.address}}</p>
            <p class="p2">联系电话：{{item.phone}}</p>
            <span>预约测量时间：{{item.time}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"PlanBox",
    props:["item","isdemand"]
}
</script>

<style lang="less" scoped>
.box-item{
    margin-bottom: 0.24rem;
    box-shadow: 0px 0px 1px 3px #F0EEEF;
    display: flex;
    padding: 0.16rem;
    justify-content: space-between;
    align-items: center;
    .box-item-left{
        flex: 1;
        padding-right: 0.2rem;
        img{
            width: 2.4rem;
            height: 2rem;
        }
    }
    .box-item-right{
        flex: 3;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        .box-item-right-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2{
                font-size: 15px;
                color: #333333;
                font-weight:400;
                span{
                    font-size: 10px;
                    color: #28B28B;
                }
            }
        }
        .p1{
            font-size: 12px;
            color: #666666;
        }
        .p2{
            font-size: 12px;
            color: #666666;
        }
        span{
            font-size: 11px;
            color: #999999;
        }
    }
}
</style>