<template>
    <div class="m-right">
        <!-- .mr-guidang start -->
        <div class="mr-guidang m-right-box mt-none">
            <p class="box-hd">
                <span>文章归档</span>
            </p>
            <div class="box-bd">
                <ul class="mr-guidang-list">
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- .mr-guidang end -->
        <!-- .mr-hotpost start -->
        <div class="mr-hotpost m-right-box">
            <p class="box-hd">
                <span>猜你喜欢</span>
            </p>
            <div class="box-bd">
                <ul class="mr-hotpost-list">
                    <li class="list-item" v-for="item in hotpost">
                        <p class="item-pic">
                            <router-link to="">
                                <img :src="item.img ? item.img : options.defaultImg" alt="">
                            </router-link>
                        </p>
                        <div class="item-font">
                            <p class="item-title">
                                <router-link to="">
                                    {{ item.title }}
                                </router-link>
                            </p>
                            <p class="item-time">
                                <i class="fa fa-clock-o"></i>
                                {{ item.time }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- .mr-hotpost end -->
        <!-- .mr-tags start -->
        <div class="mr-tags m-right-box">
            <p class="box-hd">
                <span>标签云</span>
            </p>
            <div class="box-bd">
                <ul class="mr-tags-list">
                    <li class="list-item">
                        <router-link to="" title="">
                            javascript(100)
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="" title="">
                            nodejs(100)
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="" title="">
                            python(100)
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="" title="">
                            php(100)
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="" title="">
                            c(100)
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- .mr-tags end -->
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'MainRight',
    data(){
        return {                       // 热门文章
            hotpost: [
                {
                    id: 0,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                },
                {
                    id: 0,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                },
                {
                    id: 0,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                },
                {
                    id: 0,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                }
            ]
        }
    },
    computed: {
        ...mapState(['options'])
    }
}
</script>

<style lang="scss" scoped>
// .mr-guidang start
.mr-guidang-list{
    overflow: hidden;
    font-size: 0;
    letter-spacing: 0;

    .list-item{
        margin: {
            top: 5px;
            bottom: 5px;
            left: 1%;
            right: 1%;
        };
        vertical-align: top;
        @include inline-block();
        width: 48%;
        line-height: 20px;
        @include font-size(13);
        color: #666;

        a{
            color: #666;

            &:hover{
                color: $color;
            }
        }
    }
}
// .mr-guidang end
// .mr-hotpost start
.mr-hotpost-list{
    overflow: hidden;

    .list-item{
        margin: {
            top: 15px;
        };
        overflow: hidden;

        .item-pic{
            float: left;
            width: 100px;
        }

        .item-font{
            padding: {
                left: 8px;
            };
            overflow: hidden;
        }

        .item-title{
            height: 24px;
            line-height: 24px;
            @include font-size(14);
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;

            a{
                color: #333;

                &:hover{
                    color: $color;
                }
            }
        }

        .item-time{
            margin-top: 10px;
            line-height: 20px;
            @include font-size(13);
            color: #666;
        }

        &:first-child{
            margin-top: 0;
        }
    }
}
// .mr-hotpost end

// .mr-tags-list start
.mr-tags-list{
    margin: {
        bottom: -10px;
    };
    overflow: hidden;

    .list-item{
        float: left;
        margin: {
            right: 10px;
            bottom: 10px;
        };
        @include font-size(12);
        color: white;
        line-height: 20px;

        a{
            display: block;
            color: white;
            padding: 4px 10px 6px;
            background-color: $color;
            border-radius: 20px;

            &:hover{
                background-color: $color2;
            }
        }
    }
}
// .mr-tags-list end
</style>


