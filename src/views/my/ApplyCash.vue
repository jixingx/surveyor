<template>
  <div class="apply_cash">
    <!-- 头部 -->
    <van-nav-bar
        title="申请提现"
        :border="false"
        left-arrow
        @click-left="onClickLeft"
    />
    <!-- 内容 -->
    <div class="cash_plan">
        <div class="cash_plan_box">
            <p class="cash_plan_box_p1">可提金额</p>
            <p class="cash_plan_box_p2">¥768.00</p>
            <div class="cash_plan_box_div">
                <p class="box_div_p1">提现最低额度为10元</p>
                <p class="box_div_p2">规则<van-icon name="warning-o" /></p>
            </div>
        </div>
        <p class="cash_money">
            提现金额
        </p>
        <div class="money_ipt">
            <van-field
                v-model="value"
                label="￥"
                clearable
            />
        </div>
        <p class="all_cash">
            可提现金金额768.00<span>全部提现</span>
        </p>
    </div>
    <div class="cash_d">
        <van-cell title="提现到：" is-link >
            <van-icon class="zhitb" name="alipay" color="#02A9F1" />
            支付宝
        </van-cell>
    </div>
    <div class="z_account">
        <van-field
            v-model="zname"
            label="支付宝账号"
            placeholder="请输入支付宝账号"
            input-align="right"
        />
        <van-field
            v-model="znickname"
            label="支付宝昵称"
            placeholder="请输入支付宝昵称"
            input-align="right"
        />
    </div>
    <div class="btn">
        <van-button color="#28B28B" size="large">申请提现</van-button>
    </div>
  </div>
</template>

<script>
export default {
    name:'ApplyCash',
    data () {
        return {
            value:"700",
            zname:'',
            znickname:''
        }
    },
    methods:{
        onClickLeft() {
            this.$router.push('/my');
        },
    }
}
</script>

<style lang="less">
.apply_cash{
    height: 100%;
    box-sizing: border-box;
    background-color: #F0F0F0;
    .van-nav-bar{
        //background-color: #FAFAFA;
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
    .cash_plan{
        box-sizing: border-box;
        height: 6rem;
        background-color: #fff;
        padding: 0.28rem 0.24rem 0.16rem;
        .cash_plan_box{
            height: 3.1308rem;
            background: url("../../assets/images/my/cash_bg.png");
            background-repeat: no-repeat;
            background-size: 100%;
            padding: 0.58rem 0.32rem 0.26rem 0.42rem;
            box-sizing: border-box;
            .cash_plan_box_p1{
                font-size: 13px;
                line-height: 20px;
                color: #fff
            }
            .cash_plan_box_p2{
                font-size: 25px;
                margin: 0.22rem 0 0.68rem;
                line-height: 19px;
                color: #fff
            }
            .cash_plan_box_div{
                font-size: 11;
                color: #fff;
                line-height: 20px;
                display: flex;
                justify-content:space-between;
                align-items: center;
                .van-icon{
                    transform: translateY(2px);
                    padding-left: 4px;
                }
            }
        }
        .cash_money{
            padding-left: 0.16rem;
            font-size:15px;
            color: #333333;
            background-image: url("../../assets/images/task/shu.png");
            background-repeat: no-repeat;
            background-size: 4px 100%;
            margin: 0.5rem 0 0.22rem;
            font-weight: bold;
        }
        .money_ipt{
            .van-cell{
                background-color: #F7F7F7;
                border-radius: 7px;
                padding: 8px 16px;
                font-size: 18px;
                .van-field__label{
                    width: 18px;
                    color: #F50A0A
                }
                .van-field__control{
                    color: #F50A0A;
                    line-height: 0px;
                }
            }
        }
        .all_cash{
            margin-top: 0.16rem;
            color: #999999;
            font-size: 11px;
            span{
                padding-left: 0.24rem;
                color: #28B28B;
            }
        }
    }
    .cash_d{
      margin: 0.16rem 0px; 
      .zhitb{
          transform: translateY(3px);
      } 
    }
    .btn{
        margin-top: 1.6rem;
        padding:0 1.38rem 0 1.46rem;
        .van-button--large{
            border-radius: 23px;
        }
    }
}
</style>