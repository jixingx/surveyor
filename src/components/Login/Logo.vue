<template>
    <div class="logo" :style="{paddingTop:paddingTop,marginBottom:marginBottom}">
        <img src="../../assets/images/login/logo.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    name:"Logo",
    props:{
        paddingTop:{
            type: String,
            default:"1.6rem"
        },
        marginBottom:{
            type: String,
            default:"1.5024rem"
        }
    }
}
</script>

<style lang="less" scoped>
.logo{
    text-align: center;
    img{
        width: 2.98rem;
        height: 1.0376rem;
        vertical-align: middle;
    }
}
</style>