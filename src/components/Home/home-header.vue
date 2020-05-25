<template>
  <div class="home-header">
   <el-row type="flex"  justify='space-between'>
  <el-col :span="2"><div class="el-icon-s-operation"></div></el-col>
  <el-col :span="4">
      <span class="username">用户名:{{username}}</span>
      <span @click='exit'>注销</span>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
     data(){
        return{
            username:'admin'
        }
    },

    methods:{
        exit(){
          this.$confirm('确定退出',{
          }).then(res=>{
              this.$router.push('/')
          }).catch(()=>{})
        }
    }

}
</script>

<style scoped lang='less'>
.home-header{
    height: 60px;
    line-height: 60px;
  .el-icon-s-operation{
      font-size: 30px;
  }
  .username{
      margin-right: 40px;
  }
}


</style>