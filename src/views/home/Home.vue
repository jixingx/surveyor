<template>
    <div class="home">
        <!-- 头部 -->
        <van-nav-bar title="消息中心" @click-right="onClickRight"  :fixed="true" z-index="99999">
            <van-icon name="search" slot="right" color="#999999" size="20px" />
        </van-nav-bar>
        <!-- 内容 -->
        <div class="content">
            <my-tab title1="通知公告" title2="个人中心">
                <div slot="content1" class="content1-box" ref="conteneone">
                    <div v-for="index in 10" :key="index">
                        <van-cell title="关于加强测量师管理的通知" label="2020-01-01 13：30" @click="tzxx">
                            <van-tag type="danger" slot="default" round size="medium"></van-tag>
                        </van-cell>
                    </div>
                </div>
                <div slot="content2" class="content2-box">
                    <div v-for="index in 8" :key="index">
                        <van-panel title="新的任务提示" desc="你有一条新的预约消息！请在任务里查看" status="昨天11:54">
                            <div>
                                <router-link to="/home">立即查看</router-link>
                            </div>
                        </van-panel>
                    </div>
                    
                </div>
            </my-tab>
        </div>
        <!-- 底部导航 -->
        <Tab />
    </div>
</template>

<script>
import Tab from '../../components/common/Tab'
import MyTab from '../../components/common/MyTab'
export default {
    name:"Home",
    data() {
        return {
            active:0
        }
    },
    mounted(){
        
        this.$nextTick(()=>{
            this.conten1Height()
            
        })
        this.winContent1()
    },
    methods:{
        onClickRight(){
            this.$router.push('/search');
        },
        conten1Height(){
            this.$refs.conteneone.style.height=document.body.clientHeight-46-44-53+'px'
            
        },
        winContent1(){
            window.onresize = ()=> {

                this.conten1Height();

            };
        },
        tzxx(){
            this.$router.push('/noticedetails');
        }
    },
    components:{
        Tab,
        MyTab
    }
}
</script>

<style lang="less" scoped>
.home{
    // height: 100%;
    background-color: #F7F7F7;
    box-sizing: border-box;
    padding-top: 46px;
    padding-bottom: 53px;
    .content{
        height: 100%;
        .content1-box{
            height: 10rem;
            background-color: #fff;
            border-radius: 7px;
            overflow-y: auto;
            .van-cell:not(:last-child)::after{
                right: 16px;
            }
            .van-cell:last-child::after{
                position: absolute;
                box-sizing: border-box;
                content: ' ';
                pointer-events: none;
                right: 16px;
                bottom: 0;
                left: 16px;
                border-bottom: 1px solid #ebedf0;
                -webkit-transform: scaleY(.5);
                transform: scaleY(.5);
            }
            .van-cell__title{
                font-size: 13px;
                color: #666666;
                flex: 3;
                .van-cell__label{
                    font-size: 11px;
                    color: #999999;
                }
            }
            
            .van-tag{
                padding: 0.5em 0.6em;
            }
        }
        .content2-box{
            .van-panel{
                margin-bottom: 0.24rem;
                .van-cell:not(:last-child)::after{
                    right: 16px;
                }
                .van-cell__title{
                    font-size: 14px;
                    color: #333333;
                    flex: 3;
                    .van-cell__label{
                        font-size: 12px;
                        color: #999999;
                    }
                }
                .van-cell__value{
                    font-size: 11px;
                    color: #999999;
                }
                .van-panel__content{
                    padding: 7.5px 16px 7px 0;
                    text-align: right;
                    a{
                        color: #28B28B;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>