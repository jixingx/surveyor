<template>
    <div class="mysex">
        <!-- 头部 -->
        <van-nav-bar
            title="性别"
            :border="false"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 内容 -->
        <div class="content">
            <van-radio-group v-model="radio">
                <van-cell title="保密" clickable @click="radio = '0'">
                    <van-radio slot="right-icon" name="0" checked-color="#28B28B" />
                </van-cell>
                <van-cell title="男" clickable @click="radio = '1'">
                    <van-radio slot="right-icon" name="1" checked-color="#28B28B" />
                </van-cell>
                <van-cell title="女" clickable @click="radio = '2'">
                    <van-radio slot="right-icon" name="2" checked-color="#28B28B" />
                </van-cell>
            </van-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    name:"MySex",
    data() {
        return {
            radio: '0'
        }
    },
    methods:{
        onClickLeft() {
            this.$router.push('/my');
        },
    }
}
</script>

<style lang="less" scoped>
.mysex{
    height: 100%;
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
        padding:0 0.24rem;
        box-sizing: border-box; 
        .van-cell:last-child::after{
            position: absolute;
            box-sizing: border-box;
            content: ' ';
            pointer-events: none;
            right: 0;
            bottom: 0;
            left: 16px;
            border-bottom: 1px solid #ebedf0;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
        }
    }
}
</style>