<template>
    <div>
        <!-- .m-article start -->
        <ul class="m-article-list">
            <li class="list-item" v-for="item in articleData">
                <router-link class="item-pic" :to="{ name: 'News', params: { newsid: item.id }}" :title="item.title">
                    <img :src="item.img ? item.img : options.defaultImg" :alt="item.title">
                </router-link>
                <div class="item-font">
                    <p class="item-title">
                        <router-link :to="{ name: 'News', params: { newsid: item.id }}" :title="item.title">{{ item.title }}</router-link>
                    </p>
                    <p class="item-desc">
                        <router-link :to="{ name: 'News', params: { newsid: item.id }}" :title="item.title">{{ item.desc }}</router-link>
                    </p>
                    <p class="item-info">
                        <span class="mr-5">
                            <i class="fa fa-clock-o"></i>{{ item.time }}
                        </span>
                        <span class="mr-5">
                            <i class="fa fa-eye"></i>
                            {{ item.eyes }} 浏览
                        </span>
                        <router-link class="mr-5" to="" title="">
                            <i class="fa fa-comments-o"></i>
                            {{ item.comments }} 评论
                        </router-link>
                        <router-link class="mr-5" to="" title="">
                            <i class="fa fa-heart-o"></i>
                            {{ item.hearts }} 喜欢
                        </router-link>
                        <router-link to="" title="">
                            <i class="fa fa-tag"></i>
                            {{ item.tags }}
                        </router-link>
                    </p> 
                </div>
            </li>
        </ul>
        <!-- .m-article end -->        
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Article',
    props: ['articleData'],
    computed: {
        ...mapState(['options'])
    },
}
</script>

<style lang="scss" scoped>
// .m-article-list start
.m-article-list{
    overflow: hidden;

    .list-item{
        margin: {
            top: 25px;
        };
        padding: 10px;
        overflow: hidden;

        .item-pic{
            float: left;
            width: 200px;
        }

        .item-font{
            padding: {
                left: 20px;
            };
            overflow: hidden;
        }

        .item-title{
            height: 30px;
            line-height: 30px;
            @include font-size(15);
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

        .item-desc{
            margin-top: 10px;
            a{
                height: 25px * 2;
                line-height: 26px;
                @include font-size(14);
                color: #666;

                &:hover{
                    color: $color;
                }
            }
        }

        .item-info{
            margin-top: 10px;
            line-height: 20px;
            @include font-size(13);
            color: #999;

            i{
                margin-right: 2px;
                @include font-size(14);
            }

            a{
                color: $color2;

                &:hover{
                    color: $color;
                }
            }
        }

        &:first-child{
            margin-top: 0;
        }
    }
}
// .m-article-list end
</style>

