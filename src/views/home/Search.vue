<template>
    <div class="search">
        <!-- 头部 -->
        <van-nav-bar
            title="搜索"
            :border="false"
        />
        <!-- 搜索框 -->
        <van-search
            v-model="value"
            shape="round"
            show-action
            background="transparent"
            placeholder="搜索消息、任务"
            @search="onSearch"
            @cancel="onCancel"
            input-align="center"
        />
        
        <div class="search-ul">
            <van-cell title="最近搜索" value="清楚历史" :border="false" title-class="search-zq-title" value-class="search-zq-value"/>
            <div class="search-item">
                <van-cell :title="item" size="large" title-class="search-item-title" value-class="search-item-value" v-for="(item,index) in searchitem" :key="index">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <van-icon
                        slot="right-icon"
                        name="cross"
                        style="line-height: inherit;"
                        color="#D3D1D2"
                        size="12.71px"
                        @click="serachItem(index)"
                    />
                </van-cell>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Search",
    data () {
        return {
            value:"",
            searchitem:[
                '红牌楼小区',
                '测量师管理通知',
                '验房的多个小技巧'
            ]
        }
    },
    methods:{
        onSearch(val) {
        },
        onCancel() {
            this.$router.push('/home');
        },
        serachItem(index){
            this.searchitem.splice(index,1)
        }
    }
}
</script>

<style lang="less" scoped>
.search{
    .van-nav-bar{
        background-color: transparent !important;
        .van-nav-bar__title{
          color: #333333;
          font-size: 18px;
       }
    }
    .search-ul{
        .search-zq-title{
            font-size:14px;
            color: #666666;
        }
        .search-zq-value{
            font-size:12px;
            color: #28B28B;
        }
        .search-item{
            .van-cell:not(:last-child)::after{
                right: 16px;
            }
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
            .search-item-title{
                font-size: 14px;
                color: #333;
            }
        }
    }
}
</style>