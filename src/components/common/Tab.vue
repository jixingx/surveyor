<template>
    <div class="tab">
        <van-tabbar v-model="active" active-color="#28B28B" route>
            <van-tabbar-item name="home" to="/home">
                <span>消息</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon1.active : icon1.inactive"
                >
            </van-tabbar-item>
            <van-tabbar-item name="classroom" to="/classroom">
                <span>任务</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon2.active : icon2.inactive"
                >
            </van-tabbar-item>
            <van-tabbar-item name="task" to="/task">
                <span>奖励</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon3.active : icon3.inactive"
                >
            </van-tabbar-item>
            <van-tabbar-item name="find" to="/find">
                <span>我的</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon4.active : icon4.inactive"
                >
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:"Tab",
    data() {
        return {
            icon1:{
                active:require("../../assets/images/tab/xx_active.png"),
                inactive:require("../../assets/images/tab/xx_active.png")
            },
            icon2:{
                active:require("../../assets/images/tab/rw.png"),
                inactive:require("../../assets/images/tab/rw.png")
            },
            icon3:{
                active:require("../../assets/images/tab/jl.png"),
                inactive:require("../../assets/images/tab/jl.png")
            },
            icon4:{
                active:require("../../assets/images/tab/wd.png"),
                inactive:require("../../assets/images/tab/wd.png")
            },
            active: '0'
        }
    },
}
</script>

<style lang="less" scoped>
/deep/ .van-tabbar{
    box-shadow:0px -3px 6px rgba(0,0,0,0.16);
}

</style>