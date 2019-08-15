<template>
    <div class="main about">
        <div class="m-desc box">
            关于我们
        </div>   
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'About',
    computed: {
        ...mapState(['options'])
    }
}
</script>

<style lang="scss" scoped>
    .about{
        padding: 15px;
        background-color: #fff;
    }
</style>
