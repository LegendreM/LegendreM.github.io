
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawMainLChart);
google.charts.setOnLoadCallback(drawSecLChart);

function drawMainLChart() {
    var dataArray = [
        ['Language', 'days'],
        ['Ruby', 105],
        ['Python', 105],
        ['Assembly', 15],
        ['C', 375],
        ['C++', 251],
        ['C#', 32],
        ['PHP', 124]
    ];
    var data = google.visualization.arrayToDataTable(dataArray);
    var options = {
        title: 'Main language used in projects',
        pieHole: 0.5,
    };

    var chart = new google.visualization.PieChart(document.getElementById('main-languages-chart'));
    var totalDays = 0;
    for (var i = 1; i < dataArray.length; i++) {
        totalDays += dataArray[i][1];
    }
    $('#cnt-main-languages').html('<b>' + Math.trunc(totalDays / 365) + '</b> years<br/>' + '<b>' + Math.trunc((totalDays % 365) / 30) + '</b> months<br/>' + '<b>' + (totalDays % 365) % 30 + '</b> days')
    chart.draw(data, options);
}

function drawSecLChart() {
    var dataArray = [
        ['Language', 'days'],
        ['none', 623],
        ['javasript', 100],
        ['SQL', 82],
        ['html/css', 100]
    ];
    var data = google.visualization.arrayToDataTable(dataArray);
    var options = {
        title: 'secondary language used in projects',
        pieHole: 0.5,
        slices: {
            0: { color: '#d3d3d3' }
          }
    };

    var chart = new google.visualization.PieChart(document.getElementById('secondary-languages-chart'));
    chart.draw(data, options);
}