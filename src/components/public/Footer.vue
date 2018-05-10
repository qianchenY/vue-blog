<template>
<div>
    <div class="ft">
        <div class="ft-top box">
            <ul class="ft-nav">
                <li class="ft-nav-item">
                    <router-link to="" title="">首页</router-link>
                </li>
                <li class="ft-nav-item" v-for="item in navbar">
                    <router-link to="" :title="item.name">{{ item.name }}</router-link>
                </li>
            </ul>
            <p class="ft-info">
                <span>Copyrights &copy; 2016-2017 千辰的个人博客 ICP8008208820DHC</span>
                <router-link to="" title="" target="_blank">网站地图</router-link>
            </p>
        </div>
        <div class="linklist" v-if="$route.name == 'Home'">
            <ul class="overflow box">
                <li>友情链接：</li>
                <li>
                    <router-link to="" title="">链接</router-link>
                </li>
                <li>
                    <router-link to="" title="">链接</router-link>
                </li>
            </ul>
        </div>
    </div>
    <div id="wonder"></div> 
</div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import Wonder from '../../assets/js/canvas'
export default {
    name: 'Footer',
    data(){
        return {

        }
    },
    computed: {
        ...mapState(["navbar"])
    },
    mounted(){
        new Wonder.Wonder({
            el: '#wonder',
            dotsNumber: 200,
            lineMaxLength: 300,
            dotsAlpha: .5,
            speed: 1.5,
            clickWithDotsNumber: 5
        })        
    }
}
</script>

<style lang="scss" scoped>
    .ft{
        position: relative;
        z-index: 2;
        background-color: $color2;
        line-height: 20px;
        @include font-size(14);
        color: white;

        a{
            color: white;

            &:hover{
                text-decoration: underline;
            }
        }
    }

    .ft-top{
        padding: {
            top: 30px;
            bottom: 30px;
        };
    }

    .ft-nav{
        text-align: center;
        font-size: 0;
        letter-spacing: 0;
    }

    .ft-nav-item{
        @include inline-block();

        padding: 10px 25px;
        line-height: 20px;
        @include font-size(16);
        color: white;
        
        a{
            color: white;

            &:hover{
                text-decoration: underline;
            }
        }
    }

    .ft-info{
        margin: {
            top: 25px;
        };
        text-align: center;
    }

    .linklist{
        padding: {
            top: 10px;
            bottom: 10px;
        };
        border-top: 1px solid white;
        overflow: hidden;

        li{
            float: left;
            margin-right: 5px;
        }
    }

    #wonder{
        position: fixed;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;;
    }
</style>
