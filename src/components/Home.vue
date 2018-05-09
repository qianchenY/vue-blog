<template>
    <div>
        <Header></Header>
        <div class="home"></div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './public/Header'
import Footer from './public/Footer'
export default {
    name: "Home",
    data(){
        return {

        }
    },
    components: {
        Header,
        Footer
    }
} 
</script>

<style lang="scss" scoped>
    .home{
        margin: 30px 0;
    }
</style>
