var app = new Vue({
  el: '#app',
  data: {
    langData: langData,
    frameworkData: frameworkData,
    dbData: dbData,
    categoryData: categoryData,
    projectsData: projectsData,
  },
  mounted: function () {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.load('current', {'packages':['sankey']});
    google.charts.setOnLoadCallback(drawMainLChart);
    google.charts.setOnLoadCallback(drawSecLChart);
    google.charts.setOnLoadCallback(drawFrameworkChart);
    google.charts.setOnLoadCallback(drawDBChart);
    google.charts.setOnLoadCallback(drawCategoryChart);
    google.charts.setOnLoadCallback(drawCategorySankeyChart);
  }
})