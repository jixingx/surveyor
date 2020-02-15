<template>
    <div class="mytab">
        <van-tabs 
            v-model="active" 
            :background="background"
            :border="false"
            color="#28B28B"
            line-width="8%"
            title-active-color="#333333"
            title-inactive-color="#999999"
            :offset-top="46"
            sticky
        >
            <van-tab :title="title1">
                <slot name="content1"></slot>
            </van-tab>
            <van-tab :title="title2">
                <slot name="content2"></slot>
            </van-tab>
            <van-tab></van-tab>
            <van-tab></van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
 name:"Tab",
 data() {
     return {
         active:0
     }
 },
 props:{
     title1:{
         type:String
     },
     title2:{
         type:String
     },
     background:{
         type:String,
         default:"#F7F7F7"
     }
 }
}
</script>

<style lang="less" scoped>
.mytab{
    // background-color:transparent;
    
    /deep/ .van-tab--active{
        font-size: 16px;
    }
    /deep/ .van-tabs__line{
        bottom: 24px;
    }
    /deep/ .van-tabs__content{
        padding: 0 0.24rem;
    }
}
</style>