<template>
    <div class="reward">
        <!-- 头部 -->
        <van-nav-bar
            title="我的奖励"
            :border="false"
            :fixed="true"
        />
        <!-- 内容 -->
        <div class="moeny">
            <div class="moeny-line">
                <div class="moeny-line-item">
                    <p class="moeny-line-item-p1">累计赚得</p>
                    <p class="moeny-line-item-p2">1382.4</p>
                </div>
                <span>|</span>
                <div class="moeny-line-item">
                    <p class="moeny-line-item-p1">已结算奖励</p>
                    <p class="moeny-line-item-p2">0.00</p>
                </div>
            </div>
            <van-divider />
            <div class="moeny-line">
                <div class="moeny-line-item">
                    <p class="moeny-line-item-p1">未结算奖励</p>
                    <p class="moeny-line-item-p2">1382.4</p>
                </div>
                <span>|</span>
                <div class="moeny-line-item">
                    <p class="moeny-line-item-p1">冻结奖励</p>
                    <p class="moeny-line-item-p2 pcolor1">614.40</p>
                </div>
            </div>
        </div>
        <div class="cash">
            <van-button size="large" color="#28B38B">申请提现</van-button>
            <p>768.00可提现</p>
        </div>
        <div class="profit">
            <van-cell>
                <div slot="title">本月收益：<span>￥1382.40</span></div>
                <div slot="default">今日收益：<span>￥614.40</span></div>
            </van-cell>
        </div>
        <div class="award">
            <div class="select">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>
            <div class="award-user">
                <reward-box></reward-box>
                <reward-box></reward-box>
            </div>
        </div>
        <!-- 底部导航 -->
        <Tab />
    </div>
</template>

<script>
import Tab from '../../components/common/Tab';
import RewardBox from '../../components/Reward/RewardBox';
export default {
    name:"Reward",
    data() {
        return {
            value1: null,
            option1: [
                { text: '奖励时间', value: null },
                { text: '2020-02-15', value: 0 },
                { text: '2020-02-16', value: 1 },
                { text: '2020-02-17', value: 2 }
            ],
        }
    },
    components:{
        Tab,
        RewardBox
    }
}
</script>

<style lang="less" scoped>
.reward{
    height: 100%;
    box-sizing: border-box;
    padding-top: 46px;
    padding-bottom: 53px;
    background: #F0F0F0;
    .van-nav-bar{
      .van-nav-bar__title{
          color: #333333;
          font-size: 18px;
      }
    }
    .moeny{
        height: 2.6rem;
        box-sizing: border-box;
        background: #FFF;
        padding: 0 0.24rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .moeny-line{
            display: flex;
            height: 100%;
            justify-content: space-around;
            align-items: center;
            &>span{
                font-size: 23px;
                color: #F3F3F3;
            }
            .moeny-line-item{
                display: flex;
                width: 48%;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                .moeny-line-item-p1{
                    color: #333333;
                    font-size: 12px;
                    line-height:17px;
                    margin-bottom: 0.04rem;
                }
                .moeny-line-item-p2{
                    color: #28B28B;
                    line-height:25px;
                    font-size:18px;
                }
                .pcolor1{
                    color: #999999;
                }
            }
        }
    }
    .cash{
        margin-top: 0.12rem;
        background-color: #fff;
        height: 1.24rem;
        box-sizing: border-box;
        padding: 0.1rem 1.2rem;
        .van-button--large{
            height: 38px;
            line-height: 36px;
            border-radius: 5px;
            font-size: 14px;
        }
        p{
            color: #D9001B;
            font-size:10px;
            line-height:14px;
            margin-top: 0.04rem;
            text-align: center;
        }
    }
    .profit{
        margin-top: 0.12rem;
        margin-bottom: 0.12rem;
    }
    .award{
        background: #fff;
        box-sizing: border-box;
        padding: 0.2rem 0.24rem 0.2rem 0.24rem;
        .select{
            width: 142px;
            .van-dropdown-menu{
                background-color: #F0F0F0;
                
                border-radius: 12px;
                height: 34px;
                /deep/ .van-dropdown-menu__item{
                    justify-content: end;
                }
            }
            /deep/ .van-dropdown-menu__title{
                padding: 0 60px 0 10px;
                font-size: 13px;
                color: #999999;
            }
        }
        .award-user{
            padding: 0.16rem 0 0 0.66rem;
            box-sizing: border-box;
        }
    }
}
</style>