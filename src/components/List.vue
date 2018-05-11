<template>
    <div>
        <Header></Header>
        <div class="main home box">
            <div class="m-container">
                <!-- .m-left start -->
                <div class="m-left">
                    <router-view></router-view>
                </div>
                <!-- .m-left end -->
                <MainRight></MainRight>   
            </div>
        </div>          
        <Footer></Footer>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from './public/Header'
import Footer from './public/Footer'
import MainRight from './public/MainRight'
export default {
    name: 'List',
    computed: {
        ...mapState(['options'])
    },
    components: {
        Header,
        Footer,
        MainRight
    }
}
</script>

<style lang="scss" scoped>

</style>
