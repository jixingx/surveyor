<template>
    <div class="task">
        <!-- 头部 -->
        <van-nav-bar title="任务" @click-right="onClickRight"  :fixed="true" z-index="99999" :border="false">
            <van-icon name="search" slot="right" color="#999999" size="20px" />
        </van-nav-bar>
        <!-- 内容 -->
        <div class="content">
            <my-tab title1="新任务" title2="历史任务" background="#FFF">
                <div slot="content1">
                    <plan-box v-for="(item,index) in planboxs" :item="item" :key="index" @click.native="rwxx"></plan-box>
                </div>
                <div slot="content2">
                    <plan-box v-for="(item,index) in planboxs2" :item="item" :key="index"  />
                </div>
            </my-tab>
        </div>
        <!-- 底部导航 -->
        <Tab />
    </div>
</template>

<script>
import Tab from '../../components/common/Tab'
import MyTab from '../../components/common/MyTab'
import PlanBox from '../../components/Task/PlanBox'
export default {
    name:"Task",
    data() {
        return {
            planboxs:[
                {
                    img:require("../../assets/images/task/item1.png"),
                    title:"张三",
                    demand:'客户需求',
                    status:"待测量",
                    address:"武侯区红牌楼竹园小区18号",
                    phone:"13345626622",
                    time:"2019.11.22 13:30"
                },
                {
                    img:require("../../assets/images/task/item2.png"),
                    title:"李生海",
                    demand:'客户需求',
                    status:"待测量",
                    address:"青羊区翠竹印象5-3-1-2",
                    phone:"13224232321",
                    time:"2019.11.22 13:30"
                },
                {
                    img:require("../../assets/images/task/item3.png"),
                    title:"张三",
                    demand:'客户需求',
                    status:"待测量",
                    address:"武侯区红牌楼竹园小区18号",
                    phone:"13345626622",
                    time:"2019.11.22 13:30"
                },
                {
                    img:require("../../assets/images/task/item4.png"),
                    title:"张三",
                    demand:'客户需求',
                    status:"已测量",
                    address:"武侯区红牌楼竹园小区18号",
                    phone:"13345626622",
                    time:"2019.11.22 13:30"
                },
            ],
            planboxs2:[
                {
                    img:require("../../assets/images/task/item1.png"),
                    title:"张三",
                    demand:'客户需求',
                    status:"已过期",
                    address:"武侯区红牌楼竹园小区18号",
                    phone:"13345626622",
                    time:"2019.11.22 13:30"
                },
                {
                    img:require("../../assets/images/task/item2.png"),
                    title:"李生海",
                    demand:'客户需求',
                    status:"已过期",
                    address:"青羊区翠竹印象5-3-1-2",
                    phone:"13224232321",
                    time:"2019.11.22 13:30"
                },
                {
                    img:require("../../assets/images/task/item3.png"),
                    title:"张三",
                    demand:'客户需求',
                    status:"已过期",
                    address:"武侯区红牌楼竹园小区18号",
                    phone:"13345626622",
                    time:"2019.11.22 13:30"
                },
                {
                    img:require("../../assets/images/task/item4.png"),
                    title:"张三",
                    demand:'客户需求',
                    status:"已过期",
                    address:"武侯区红牌楼竹园小区18号",
                    phone:"13345626622",
                    time:"2019.11.22 13:30"
                },
            ]
        }
    },
    methods:{
        onClickRight(){
            
        },
        rwxx(){
            this.$router.push('/taskdetails');
        }
    },
    components:{
        Tab,
        MyTab,
        PlanBox
    }
}
</script>

<style lang="less" scoped>
.task{
    height: 100%;
    box-sizing: border-box;
    padding-top: 46px;
    padding-bottom: 53px;
}
</style>