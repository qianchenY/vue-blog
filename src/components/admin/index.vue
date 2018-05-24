<template>
    <div class="box">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Admin',
    computed: {
        ...mapState(['options'])
    }
}
</script>

<style lang="scss" scoped>
    body{
        background-color: red;
    }
</style>