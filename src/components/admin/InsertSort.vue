<template>
    <div class="isort">
        <el-form label-width="90px">
            <el-form-item label="分类名称：">
                <el-input v-model="sortname" placeholder="请输入内容"></el-input>
            </el-form-item>         
            <el-form-item label="分类别名：">
                <el-input v-model="enname" placeholder="请输入内容"></el-input>
            </el-form-item>    
            <el-form-item>
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>     
        </el-form>   
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "InsertSort",
    data(){
        return {
            sortname: '',
            enname: ''
        }
    },
    computed: {
        ...mapState(["options"])
    }
};
</script>

<style lang="scss" scoped>
    .el-form-item{
        margin: {
            top: 25px;
        };
    }
</style>