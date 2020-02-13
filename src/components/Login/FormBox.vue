<template>
    <div class="form-box" >
        <div class="box-content" :style="{paddingTop:paddingTop}">
            <span class="line"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
            <span class="line line4"></span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"FormBox",
    props:{
        paddingTop:{
            type: String,
            default:"0.5rem"
        }
    }
}
</script>

<style lang="less" scoped>
    .form-box{
        // width: 19.4375rem;
        position: relative;
        box-sizing: border-box;
        padding: 0 0.64rem;
        margin: 0 auto;
        .box-content{
            width: 100%;
            box-sizing: border-box;
            border-radius: 7px;
            background-color: #fff;
            padding: 0  0.4rem;
            position: relative;
            // overflow: hidden;
            .line{
                position: absolute;
                left: 1.2rem;
                top: -8px;
                width: 5px;
                height: 16px;
                background: #2AB28B;
                box-shadow: 0px 0px 4px #1A9B76;
                &.line2{
                    left: 1.62rem;
                }
                &.line3{
                    left:auto;
                    right: 1.62rem;
                }
                &.line4{
                    left:auto;
                    right: 1.2rem;
                }
            }
        }
    }
</style>