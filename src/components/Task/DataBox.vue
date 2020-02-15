<template>
    <div class="databox">
        <van-button type="primary" size="mini" color="#27B48B">{{title}}</van-button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"DataBox",
    props:["title"]
}
</script>

<style lang="less" scoped>
.databox{
    padding: 0rem 0rem 0.06rem 0rem;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 0.34rem;
    .van-button--primary{
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        margin-bottom: 0.18rem;
        box-shadow: 1px 1px 4px 2px #DEF5F0;
    }
}
</style>