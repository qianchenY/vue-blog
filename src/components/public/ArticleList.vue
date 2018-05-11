<template>
    <div>
        <Article :articleData="articleData"></Article>    
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Article from './Article'

export default {
    name: 'ArticleList',
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
        Article
    }
}
</script>

<style lang="scss" scoped>

</style>
