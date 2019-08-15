<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Sort',
    computed: {
        ...mapState(['options'])
    }
}
</script>

<style lang="scss" scoped>

</style>
