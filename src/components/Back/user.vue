<template>
  <div>
      <div id="charts" style="width:'100%',height:'580px'"></div>
  <div id="main" :style="{width:'100%',height:'580px'}"></div>
  </div>
</template>

<script>
var echarts = require('echarts')
export default {
  mounted() {
 /*ECharts图表*/
 var myChart = echarts.init(document.getElementById('main'));
 myChart.setOption({
  series : [
   {
    name: '访问来源',
    type: 'pie',
    radius: '65%',
    itemStyle: {
    normal: {
      // 阴影的大小
      shadowBlur: 200,
      // 阴影水平方向上的偏移
      shadowOffsetX: 0,
      // 阴影垂直方向上的偏移
      shadowOffsetY: 0,
      // 阴影颜色
      shadowColor: 'rgba(0, 0, 0, 0.1 )'
     }
    },
    data:[
     {value:800, name:'华北区域'},
     {value:335, name:'华南区域'},
     {value:310, name:'华中区域'},
     {value:274, name:'浙江区域'},
     {value:235, name:'华东区域'}
    ]
   }
  ]
 })
 }
}
</script>

<style>

</style>