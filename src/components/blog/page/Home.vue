<template>
    <div>
        <div class="main home box">
            <div class="m-container">
                <!-- .m-left start -->
                <div class="m-left">
                    <Article :articleData="articleData"></Article>
                </div>
                <!-- .m-left end -->
                <MainRight></MainRight>   
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Article from '../public/Article'
import MainRight from '../public/MainRight'
export default {
    name: "Home",
    data(){
        return {
            // 文章数据
            articleData: [
                {
                    id: 0,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0,
                    tags: 'javascript'
                },
                {
                    id: 1,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0,
                    tags: 'javascript'
                },
                {
                    id: 2,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0,
                    tags: 'javascript'
                },
                {
                    id: 3,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0,
                    tags: 'javascript'
                },
                {
                    id: 4,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0,
                    tags: 'javascript'
                },
                {
                    id: 5,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0,
                    tags: 'javascript'
                },
                {
                    id: 6,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0,
                    tags: 'javascript'
                }
            ]
        }
    },
    computed: {
        ...mapState([])
    },
    components: {
        Article,
        MainRight
    },
    beforeCreate: function(){
        console.log(this.$el, this.$data, 'app beforeCreate');
    },
    created: function(){
        console.log(this.$el, this.$data, 'app created');
    },
    beforeMount: function(){
        console.log(this.$el, this.$data, 'app beforeMount');
    },
    mounted: function(){
        console.log(this.$el, this.$data, 'app mounted');
    },
} 
</script>

<style lang="scss" scoped>

</style>
