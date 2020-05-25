<template>
  <div class="login">
      <el-card class="title">
       <div class="title-a">
           <span class="logo"></span>
           <span class="text">智猪管理系统</span>
       </div>
       <el-form :model='obj' :rules='rules' ref="objrule">
           <el-form-item prop='mobile'>
               <el-input placeholder="输入用户名" prefix-icon="el-icon-user-solid" v-model='obj.mobile'></el-input>
           </el-form-item>

           <el-form-item prop='code'>
               <el-input placeholder="输入密码" prefix-icon="el-icon-goods" v-model="obj.code" type='password'></el-input>
           </el-form-item>

            <el-form-item>
               <el-radio v-model="radio" label='1'>管理员</el-radio>
               <el-radio v-model="radio" label='2'>货主</el-radio>
               <el-radio v-model="radio" label='3'>加油站</el-radio>
           </el-form-item>
       </el-form>
       <el-button type="primary" 
       style="width:100%"
       @click='fn'
       >登录</el-button>
      </el-card>
  </div>
</template>

<script>
export default {
    data(){
        return{
            radio:'1',
            obj:{
                mobile:'13911111111',
                code:'',
            },
            rules:{
                mobile:[{required:true,message:'请填写账号'}],
                code:[{required:true,message:'请填写密码'}]
            }
        }
    },
    methods:{
        fn(){
        // console.log(this.$refs.objrule.validate)
        // this.$router.push('/home')
        this.$refs.objrule.validate((abc)=>{
            if(abc){
                this.$axios({
                    url:'/authorizations',
                    method:'post',
                    data:this.obj
                }).then(res=>{
                    console.log(res.status)
                    if(res.status=='201'){
                    window.localStorage.setItem('user',res.data.data.token)
                    this.$router.push('/home')
                    }
                }).catch(()=>{
                    this.$message({
                    type:'error',
                    message:'账号或密码不正确'
                    })
                })
            }
        })
    }
    }
}
</script>

<style lang='less' scoped>
.login{
    background: url('../../assets/car.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
        width: 360px;
        border:0;
        border-radius: 20px;
        background-color: #253e5c;
        opacity: 0.9;
        padding: 20px;
        .title-a{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
            .logo{
            display: inline-block;
            width: 60px;
            height: 60px;
            background: url('../../assets/icon.png') no-repeat center;
          }
          .text{
              font-size:30px;
              color:white;
            margin-left: 30px;
          }
        }
    }
}

</style>