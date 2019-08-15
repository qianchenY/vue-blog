<template>
    <div>
        <div class="main home box">
            <div class="m-container">
                <!-- .m-left start -->
                <div class="m-left">
                    <MainBread name="列表页"></MainBread>
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
import MainRight from '../public/MainRight'
import Article from '../public/Article'
import MainBread from '../public/MainBread'
export default {
    name: 'List',
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
        ...mapState(['options'])
    },
    components: {
        MainRight,
        Article,
        MainBread
    }
}
</script>

<style lang="scss" scoped>

</style>
