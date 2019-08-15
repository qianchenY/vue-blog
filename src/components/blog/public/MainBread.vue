<template>
    <div class="m-bread">
        <router-link to="/" title="">首页</router-link>
        <span>&gt;</span>
        <router-link class="active" to="" title="">{{name}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'Bread',
    props: ['name']
}
</script>

<style lang="scss" scoped>
    .m-bread{
        margin-bottom: 25px;
        line-height: 25px;
        padding-bottom: 10px;
        @include font-size(14);
        color: #333;
        border-bottom: 1px solid #ccc;

        a{
            color: #333;

            &:hover{
                color: $color;
            }
            &.active{
                color: $color;
            }
        }
    }
</style>


