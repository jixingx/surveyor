<template>
    <div class="taskdetails">
        <!-- 头部 -->
        <van-nav-bar
            title="任务详情"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            :fixed="true"
        >
            <van-icon v-if="item.status=='已测量'" :name="icon" slot="right" />
        </van-nav-bar>
        <!-- 内容 -->
        <div class="content">
            <plan-box :item="item" isdemand="isdemand" />
            <h2 class="content-title">装修风格：简约现代 <span @click="handleIsPupou">{{item.demand}}</span></h2>
            <dl class="estimate">
                <dt>预估设计方案</dt>
                <dd class="brief">
                    <div class="brief-left">
                        <img src="../../assets/images/task/yd.png" alt="" srcset="">
                        <p>设计风格：现代简约</p>
                    </div>
                    <img v-if="item.status!='已测量'" src="../../assets/images/task/xiugai.png" alt="" srcset="">
                </dd>
                <dd class="brief">
                    <div class="brief-left">
                        <img src="../../assets/images/task/yd.png" alt="" srcset="">
                        <p>设计理念</p>
                    </div>
                    <img v-if="item.status!='已测量'" src="../../assets/images/task/xiugai.png" alt="" srcset="">
                </dd>
                <dd class="introduce">
                    从专业的角度来看，流行的家居装饰物，存在两多一少的情况：摆设品多，可移动的装饰品多，固定性装饰品少，这种格局使局室有很强的灵活性和现代感。以前家装大多都以木质材料为主，现在则是有选择性的使用木材，多用现代气息较浓的玻璃材料。
                </dd>
                <dd class="brief">
                    <div class="brief-left">
                        <img src="../../assets/images/task/yd.png" alt="" srcset="">
                        <p>3D漫游图</p>
                    </div>
                </dd>
                <dd class="video">
                    <img src="../../assets/images/task/video.png" alt="" srcset="">
                </dd>
                <dd class="brief">
                    <div class="brief-left">
                        <img class="brief-left-img1" src="../../assets/images/task/bi.png" alt="" srcset="">
                        <p class="brief-left-p">测量数据</p>
                        <img v-if="item.status!='已测量'" class="brief-left-img2" src="../../assets/images/task/xiugai.png" alt="" srcset="" @click="Cknum">
                        <van-button v-else type="primary" size="mini" round>查看</van-button>
                    </div>
                </dd>
            </dl>
        </div>
        <!-- 底部弹出层 -->
        <van-popup
            v-model="show"
            round
            position="bottom"
            closeable 
            :style="{ height: '30%' }"
        >
            <h2 class="popup-title">方案分享</h2>
            <div class="popup-content">
                <div class="popup-content-item">
                    <img src="../../assets/images/task/wx.png" alt="" srcset="">
                    <p>微信</p>
                </div>
                <div class="popup-content-item">
                    <img src="../../assets/images/task/pyq.png" alt="" srcset="">
                    <p>朋友圈</p>
                </div>
                <div class="popup-content-item">
                    <img src="../../assets/images/task/wb.png" alt="" srcset="">
                    <p>微博</p>
                </div>
                <div class="popup-content-item">
                    <img src="../../assets/images/task/qq.png" alt="" srcset="">
                    <p>QQ</p>
                </div>
            </div>
        </van-popup>
        <!-- 弹出层 -->
        <van-popup 
            v-model="show2" 
            position="top" 
            :style="{backgroundColor:'transparent',width:'251px',margin: '0 auto',left:'50%',marginLeft:'-125.5px'}"  
            
        >
            <div class="popup2-content">
                <div class="popu2-box">
                    <div class="popu2-box-title">
                        <img src="../../assets/images/task/yd.png" alt="" srcset="">
                        <h3>客户需求</h3>
                        <img src="../../assets/images/task/yd.png" alt="" srcset="">
                    </div>
                    <div class="popu2-box-content">
                        我想做现代简约风格，客厅的电视柜、酒柜、鞋柜都需要有，主卧次卧的衣柜、床、梳妆台、书桌也请帮我设计一下。我希望能有一个效果图出来让我更直观的看到！谢谢！请尽快！
                    </div>
                    <div class="popu2-box-btn">
                        <van-button type="primary" size="small">了解</van-button>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import PlanBox from '../../components/Task/PlanBox'
export default {
    name:"TaskDetails",
    data () {
        return {
            icon:require("../../assets/images/task/fenxiang.png"),
            item:{
                img:require("../../assets/images/task/item1.png"),
                title:"张三",
                demand:'客户需求',
                status:"未测量",
                address:"武侯区红牌楼竹园小区18号",
                phone:"13345626622",
                time:"2019.11.22 13:30"
            },
            show:false,
            show2:false
        }
    },
    methods:{
      onClickLeft() {
        this.$router.push('/task');
      },
      onClickRight(){
          this.show=true
      },
      handleIsPupou(){
          this.show2=true
      },
      Cknum(){
          this.$router.push("/measdata")
      }
    },
    components:{
        PlanBox
    }
}
</script>

<style lang="less" scoped>
.taskdetails{
    height: 100%;
    padding-top: 46px;
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
        padding: 0.32rem 0.24rem 0.34rem;
        .content-title{
            padding-left: 0.16rem;
            font-size:14px;
            color: #333333;
            margin-bottom: 0.1rem;
            span{
                font-size: 11px;
                color: #28B28B;
                padding-right: 0.32rem;
            }
        }
        .estimate{
            dt{
                padding-left: 0.16rem;
                font-size:15px;
                color: #333333;
                background-image: url("../../assets/images/task/shu.png");
                background-repeat: no-repeat;
                background-size: 4px 100%;
            }
            .brief{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 0.2rem;
                .brief-left{
                    display: flex;
                    align-items: center;
                    img{
                        padding-left: 0.16rem;
                        padding-right: 0.12rem;
                    }
                    .brief-left-img1{
                        padding-right: 0.08rem
                    }
                    .brief-left-p{
                        font-size: 15px;
                        color: #333333;
                    }
                    .van-button{
                        margin-left: 0.16rem;
                    }
                }
            }
            .introduce{
                margin: 0.26rem 0 0.18rem;
                padding: 0.1rem 0.18rem 0.08rem;
                border:1px solid rgba(240,240,240,1);
                border-radius:8px;
                font-size:13px;
                line-height:18px;
                color:rgba(153,153,153,1); 
                text-indent: 26px;
            }
            .video{
                margin: 0.26rem 0 0.34rem;
                height: 3.3rem;
                border-radius: 7px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
    }
    .popup-title{
        position: absolute;
        top: 20px;
        left: 0;
        width: 100%;
        text-align: center;
        font-size:15px;
        color: #333333;
    }
    .popup-content{
        position: absolute;
        bottom: 28px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .popup-content-item{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                margin-bottom: 13px;
            }
        }
    }
    .popup2-content{
        background: url("../../assets/images/task/popup_img.png");
        background-repeat: no-repeat;
        background-position-x:center;
        width:251px;
        height: 475px;
        margin: 0 auto;
        position: relative;
        .popu2-box{
            width: 100%;
            position: absolute;
            top: 251px;
            left: 0px;
            box-sizing: border-box;
            padding: 9px 14px;
            .popu2-box-title{
                display: flex;
                justify-content: center;
                align-items: center;
                h3{
                    color: #28B28B;
                    font-size:13px;
                    padding:0px 6px;
                }
            }
            .popu2-box-content{
                height: 127px;
                border: 1px dashed #F0F0F0;
                box-sizing: border-box;
                padding: 10px 12px 5px;
                color:rgba(51,51,51,1);
                font-size:12px;
                line-height: 19px;
                text-indent: 24px;
                margin-top: 21px;
            }
            .popu2-box-btn{
                margin-top: 9px;
                text-align: center;
            }
        }
    }
}
</style>