<template>

  <div class="home-side">
      <div class="title">后台管理系统</div>
    <el-menu
      default-active="/home"
      background-color="#001529"
      text-color="#ccc"
      router
      active-text-color="#fff">

      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

       <el-submenu index="1">
        <span slot="title">
          <i class="el-icon-menu"></i>后台管理</span>
          <el-menu-item index="/user">用户管理</el-menu-item>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/limit">权限管理</el-menu-item>
          <el-menu-item index="/menu">菜单管理</el-menu-item>
       </el-submenu>

        <el-submenu index="2">
        <span slot="title">
          <i class="el-icon-menu"></i>货主管理</span>
          <el-menu-item index="/user-query">货主查询</el-menu-item>
          <el-menu-item index="/name-check">实名审核</el-menu-item>
       </el-submenu>

        <el-submenu index="4">
        <span slot="title">
          <i class="el-icon-menu"></i>司机管理</span>
          <el-menu-item index="/dirver-query">司机查询</el-menu-item>
          <el-menu-item index="/dirver-check">司机审核</el-menu-item>
          <el-menu-item index="/car-check">车辆审核</el-menu-item>
       </el-submenu>

        <el-submenu index="5">
        <span slot="title">
          <i class="el-icon-menu"></i>tms运单管理</span>
          <el-menu-item index="/waybill-query">运单查询</el-menu-item>
          <el-menu-item index="/waybill-import">tms运单导入</el-menu-item>
          <el-menu-item index="/invoice">开发票</el-menu-item>
       </el-submenu>

        <el-submenu index="6">
        <span slot="title">
          <i class="el-icon-menu"></i>运单管理</span>
          <el-menu-item index="/waybill-query1">运单查询</el-menu-item>
          <el-menu-item index="/waybill-statistic1">运单统计</el-menu-item>
          <el-menu-item index="/waybill-import1">运单导入</el-menu-item>
       </el-submenu>

        <el-menu-item index="/dispatch-bill">
        <i class="el-icon-menu"></i>
        <span slot="title">发货管理</span>
      </el-menu-item>

        <el-submenu index="8">
        <span slot="title">
          <i class="el-icon-menu"></i>结算管理</span>
          <el-menu-item index="/refund-query">退款查询</el-menu-item>
          <el-menu-item index="/income-query">收入查看</el-menu-item>
          <el-menu-item index="/deposit-admin">提现管理</el-menu-item>
          <el-menu-item index="/account-query">结算查询</el-menu-item>
          <el-menu-item index="/money-admin">钱包管理</el-menu-item>
       </el-submenu>

          <el-menu-item index="/invoice-admin">
        <i class="el-icon-menu"></i>
        <span slot="title">发票管理</span>
      </el-menu-item>

         <el-submenu index="10">
        <span slot="title">
          <i class="el-icon-menu"></i>油站管理</span>
          <el-menu-item index="10-1">渠道管理</el-menu-item>
          <el-menu-item index="10-2">油站管理</el-menu-item>
          <el-menu-item index="10-3">加油记录</el-menu-item>
          <el-menu-item index="10-4">油价维护</el-menu-item>
       </el-submenu>

         <el-menu-item index='11'>
        <i class="el-icon-menu"></i>
        <span slot="title">消息推送</span>
      </el-menu-item>

         <el-menu-item index="12">
        <i class="el-icon-menu"></i>
        <span slot="title">操作日志</span>
      </el-menu-item>
  
       <el-submenu index="13">
        <span slot="title">
          <i class="el-icon-menu"></i>内容管理</span>
          <el-menu-item index="13-1">问题管理</el-menu-item>
          <el-menu-item index="10-2">关于APP</el-menu-item>
          <el-menu-item index="10-3">参数设置</el-menu-item>
          <el-menu-item index="10-4">货物类型</el-menu-item>
          <el-menu-item index="10-4">车型</el-menu-item>
          <el-menu-item index="10-4">车长</el-menu-item>
          <el-menu-item index="10-4">法律公告</el-menu-item>
          <el-menu-item index="10-4">版本管理</el-menu-item>
       </el-submenu>
  
      <el-menu-item index="14">
        <i class="el-icon-menu"></i>
        <span slot="title">tms投诉查询</span>
      </el-menu-item>

         <el-menu-item index="15">
        <i class="el-icon-menu"></i>
        <span slot="title">投诉查询</span>
      </el-menu-item>

         <el-menu-item index="16">
        <i class="el-icon-menu"></i>
        <span slot="title">意见反馈</span>
      </el-menu-item>

    </el-menu>
 
</div>

</template>

<script>
export default {

}
</script>

<style lang='less' scoped>

.home-side{
  width: 180px;
  height: 100vh;
  background-color:#001529;
  overflow: hidden;
}
.title{
  background-color: #002140;
  height: 60px;
  line-height: 60px;
  font-style: 20px;
  color: #ccc;
  text-align: center;
  vertical-align: middle;
}


</style>