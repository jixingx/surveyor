<template>
    <div class="loginbox">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"LoginBox"
}
</script>

<style lang="less" scoped>
.loginbox{
    height: 100%;
    background-image: url("../../assets/images/login/bg.png");
    background-repeat: no-repeat;
    background-size:cover;
}
</style>