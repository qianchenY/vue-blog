<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from './public/Header'
import Footer from './public/Footer'
export default {
    name: 'page',
    computed: {
        ...mapState(['options'])
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss" scoped>

</style>
