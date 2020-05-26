<template>
  <div>
    <el-container>
      <!-- 左侧导航栏 -->
  <el-aside width="180px">
    <home-side></home-side>
  </el-aside>
  <el-container>


    <!-- 头部信息栏 -->
    <el-header class="header">
      <home-header></home-header>
    </el-header>


    <!-- 中间内容栏 -->
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header{
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ccc;

}
</style>