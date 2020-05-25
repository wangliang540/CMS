<template>
  <div>
    <h1 class="title">货物信息</h1>
    <div id="echartContainer" style="width:100%; height:600px"></div>
  </div>
</template>

<script>
var echarts = require('echarts')
export default {
  mounted(){
    // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(document.getElementById('echartContainer'));
// 绘制图表
   myChart.setOption({
    title: { text: '' },
    tooltip: {},
    xAxis: {
        data: ["总用户数","货主数","承运司机","在途司机","今日到达数量","成交单数"]
    },
    yAxis: {},
    series: [{
        name: '货运信息',
        type: 'bar',
        data: [5000, 3400, 3600, 1800, 1300, 1500]
    }]
});
  }
}
</script>

<style scoped>
 .title{
   text-align: center;
   margin-top: 20px;
 }
</style>