<template>
    <div>
        <div class="main home box">
            <div class="m-container">
                <!-- .m-left start -->
                <div class="m-left">
                    <MainBread name="详情页"></MainBread>
                    <div class="news">
                        <h1 class="news-title">
                            测试数据测试数据
                        </h1>
                        <p class="news-time">
                            <i class="fa fa-clock-o"></i>
                            <span>2019-01-24</span>                         
                        </p>
                        <div class="news-desc m-desc">
                            <p>测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据</p>
                            <p>测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据</p>
                            <p>测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据</p>
                            <p>测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据</p>
                        </div>
                        <div class="news-other">
                            <p class="news-other-item prev">
                                <span class="item-name">上一篇：</span>
                                <span class="item-title">暂无</span>
                            </p>
                            <p class="news-other-item next">
                                <span class="item-name">下一篇：</span>
                                <router-link class="item-title" to="">测试数据测试数据</router-link>
                            </p>
                        </div>
                    </div>
                    
                </div>
                <!-- .m-left end -->
                <MainRight></MainRight>   
            </div>
        </div>          
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MainRight from '../public/MainRight'
import MainBread from '../public/MainBread'
export default {
    name: 'Page',
    computed: {
        ...mapState(['options'])
    },
    components: {
        MainRight,
        MainBread
    }
}
</script>

<style lang="scss" scoped>
    .news-title{
        @include font-size(20);
        color: #333;
    }

    .news-time{
        margin-top: 15px;
        line-height: 26px;
        @include font-size(14);
        color: #666;
    }

    .news-desc{
        margin: {
            top: 15px;
        };
    }

    .news-other{
        margin-top: 25px;
    }

    .news-other-item{
        height: 25px;
        line-height: 25px;
        @include font-size(14);
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        .item-title{
            color: #666;
        }
        
        a{

            &:hover{
                color: $color;
            }
        }
    }
</style>
