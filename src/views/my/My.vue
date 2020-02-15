<template>
    <div class="my">
        <!-- 头部 -->
        <van-nav-bar
            title="我的"
            :border="false"
            :fixed="true"
        >
            <van-icon name="point-gift-o" slot="right" info="领奖励" size="20px" color="#F4FDFE" @click="MyTz('/applycash')"/>
        </van-nav-bar>
        <!-- 内容 -->
        <div class="content">
            <div class="user-detailed">
                <div class="avate" @click="avateClcik">
                    <img src="../../assets/images/my/avalg.png" alt="" srcset="">
                    <p>点击头像可更换</p>
                </div>
                <div class="user-detailed-content">
                    <van-cell title="昵称" is-link value="维他命" @click="MyTz('/mynickname')" />
                    <van-cell title="性别" is-link value="男" @click="MyTz('/mysex')" />
                    <van-cell title="所在城市" is-link value="四川 成都" @click="MyTz('/mycity')" />
                    <van-cell title="账户绑定" is-link @click="MyTz('/accountbind')">
                        <div slot="default">
                            <van-icon class="iconfont" class-prefix='icon' name="shouji" size="20px" color="#28B28B" />
                            <van-icon class="iconfont" class-prefix='icon' name="youjian" size="20px" />
                            <van-icon class="iconfont" class-prefix='icon' name="logo-wechat" size="20px" />
                            <van-icon class="iconfont" class-prefix='icon' name="qq-copy-copy" size="20px" />
                            <van-icon class="iconfont" class-prefix='icon' name="weibo-copy" size="20px" />
                        </div>
                    </van-cell>
                    <van-cell title="重置密码" is-link @click="MyTz('/forgetpsd')" />
                    <van-cell title="我的二维码" is-link @click="MyTz('/myqr')">
                        <van-icon class="iconfont" class-prefix='icon' name="icon-" size="20px" />
                    </van-cell>
                    
                </div>
                <div class="btn">
                    <van-button type="default" plain hairline size="small" color="#CCCCCC" @click="outlogin">退出登录</van-button>
                </div>
            </div>
        </div>
        <!-- 底部导航 -->
        <Tab />
        <!-- 上拉菜单 -->
        <van-action-sheet
            v-model="show"
            :actions="actions"
            cancel-text="取消"
            @cancel="onCancel"
        />
    </div>
</template>

<script>
import Tab from '../../components/common/Tab';
export default {
    name:"My",
    data() {
        return {
            show:false,
            actions: [
                { name: '直接拍摄',color:"#28B28B" },
                { name: '相册选取',color:'#999999' }
            ]
        }
    },
    methods:{
        avateClcik(){
            this.show = true;
        },
        onCancel() {
            this.show = false;
        },
        MyTz(url){
            this.$router.push(url)
        },
        outlogin(){
            this.$router.push("/onelogin")
        }
    },
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
    padding-bottom: 50px;
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
    .content{
        height: 100%;
        padding-top: 0.9rem;
        box-sizing: border-box;
        overflow: auto;
        .user-detailed{
            min-height: 100%;
            height: auto;
            // overflow-y: auto;
            background-color: #fff;
            padding: 0 0.48rem;
            border-radius:38px 38px 0px 0px;
            position: relative;
            .avate{
                //z-index: 99999999;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%;-50%);
                img{
                    width: 1.8rem;
                    height: 1.8rem;
                }
                p{
                    font-size: 11px;
                    color: #999999;
                    text-align: center;
                }
            }
            .user-detailed-content{
                
                padding-top: 1.8rem;
                /deep/ .van-cell{
                    line-height: 18px;
                    margin-bottom: 0.46rem;
                    overflow: auto;
                    &:last-child{
                        margin-bottom: 0px;
                    }
                }
                .van-cell:not(:last-child)::after{
                    right: 16px;
                }
                .van-cell__right-icon{
                    line-height: 18px;
                }
            }
            .btn{
                text-align: center;
                margin-top: 0.26rem;
            }
        }
    }
    .van-popup{
        background-color:transparent;
        padding: 0 10px;
        box-sizing: border-box;
        bottom: 0.18rem;
        button:nth-child(1){
          border-top-left-radius: 7px;  
          border-top-right-radius: 7px;  
          background-color: #F7F7F7;
        }
        button:nth-child(2){
          border-bottom-left-radius: 7px;  
          border-bottom-right-radius: 7px;  
          background-color: #F7F7F7;
        }
        .van-action-sheet__cancel::before{
            height: 0;
        }
        button:nth-child(3){
            margin-top: 8px;
            border-radius:7px; 
            color: #28B28B;
        }
    }
}
</style>