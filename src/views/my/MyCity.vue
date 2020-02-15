<template>
  <div class="mycity">
    <!-- 头部 -->
    <van-nav-bar
        title="地区"
        :border="false"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
    />
    <!-- 内容 -->
    <div class="content">
        <div class="location-city">
            <p>定位城市</p>
            <van-button type="default">成都</van-button>
        </div>
        <van-index-bar :index-list="indexList" :sticky="false">
            <van-index-anchor index="热"><span class="fonsset">热门城市</span></van-index-anchor>
            <div class="rm-city">
                <van-row gutter="10">
                    <van-col span="8">
                        <van-button type="default">北京</van-button>
                    </van-col>
                    <van-col span="8">
                        <van-button type="default">上海</van-button>
                    </van-col>
                    <van-col span="8">
                        <van-button type="default">广州</van-button>
                    </van-col>
                    <van-col span="8">
                        <van-button type="default">深圳</van-button>
                    </van-col>
                    <van-col span="8">
                        <van-button type="default">杭州</van-button>
                    </van-col>
                    <van-col span="8">
                        <van-button type="default">南京</van-button>
                    </van-col>
                    <van-col span="8">
                        <van-button type="default">天津</van-button>
                    </van-col>
                    <van-col span="8">
                        <van-button type="default">武汉</van-button>
                    </van-col>
                    <van-col span="8">
                        <van-button type="default">重庆</van-button>
                    </van-col>
                </van-row>
            </div>
            <van-index-anchor index="A" />
            <van-cell title="阿坝" />
            <van-cell title="阿克苏" />
            <van-cell title="阿拉尔" />
            <van-cell title="阿拉善盟" />
            <van-cell title="阿勒泰" />
            <van-cell title="阿里" />

            <van-index-anchor index="B" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="C" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="D" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="E" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="F" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
        </van-index-bar>
    </div>
  </div>
</template>

<script>
export default {
    name:"MyCity",
    data () {
        return {
            indexList:["热","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]    
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
.mycity{
    height: 100%;
    box-sizing: border-box;
    padding-top: 46px;
    background-color: #F0F0F0;
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
        overflow: auto;
        .location-city{
            padding: 12px;
            p{
                font-size: 12px;
                color: #737373;
                margin-bottom: 8px;
            }
        }
        .rm-city{
            padding: 0 15px;
            .van-col{
                margin-bottom: 8px;
            }
        }
    }
    .fonsset{
        font-size: 12px;
        color: #737373;
        margin-bottom: 12px;
    }
    .van-button--normal{
        padding: 0 30px;
    }
}
</style>