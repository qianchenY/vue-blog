<template>
    <div class="m-right">
        <!-- .mr-guidang start -->
        <div class="mr-guidang m-right-box mt-none">
            <p class="box-hd">
                <span>文章归档</span>
            </p>
            <div class="box-bd">
                <ul class="mr-guidang-list">
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="">2018年5月</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- .mr-guidang end -->
        <!-- .mr-hotpost start -->
        <div class="mr-hotpost m-right-box mt-none">
            <p class="box-hd">
                <span>猜你喜欢</span>
            </p>
            <div class="box-bd">
                <ul class="mr-hotpost-list">
                    <li class="list-item" v-for="item in hotpost">
                        <p class="item-pic">
                            <router-link to="">
                                <img :src="item.img ? item.img : options.defaultImg" alt="">
                            </router-link>
                        </p>
                        <div class="item-font">
                            <p class="item-title">
                                <router-link to="">
                                    {{ item.title }}
                                </router-link>
                            </p>
                            <p class="item-time">
                                <i class="fa fa-clock-o"></i>
                                {{ item.time }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- .m-hotpost end -->
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'MainRight',
    props: ['hotpost'],
    computed: {
        ...mapState(['option'])
    }
}
</script>

<style lang="scss" scoped>

</style>


