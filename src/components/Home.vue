<template>
    <div>
        <Header></Header>
        <div class="main home box">
            <div class="m-container">
                <!-- .m-left start -->
                <div class="m-left">
                    <Article :articleData="articleData"></Article>
                </div>
                <!-- .m-left end -->
                <MainRight :hotpost="hotpost"></MainRight>   
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from './public/Header'
import Footer from './public/Footer'
import Article from './public/Article'
import MainRight from './public/MainRight'
export default {
    name: "Home",
    data(){
        return {
            // 文章数据
            articleData: [
                {
                    id: 0,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0 
                },
                {
                    id: 1,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0 
                },
                {
                    id: 2,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0 
                },
                {
                    id: 3,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0 
                },
                {
                    id: 4,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0 
                },
                {
                    id: 5,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0 
                },
                {
                    id: 6,
                    img: '',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    desc: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                    eyes: 1000,
                    comments: 0,
                    hearts: 0 
                }
            ],
            // 热门文章
            hotpost: [
                {
                    id: 0,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                },
                {
                    id: 0,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                },
                {
                    id: 0,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                },
                {
                    id: 0,
                    img: 'https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2018/02/6.jpg&h=123&w=200&q=90&zc=1&ct=1',
                    title: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
                    time: '20180510',
                }
            ]
        }
    },
    computed: {
        ...mapState([])
    },
    components: {
        Header,
        Footer,
        Article,
        MainRight
    }
} 
</script>

<style lang="scss" scoped>

</style>
