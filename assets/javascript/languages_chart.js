
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Language', 'days'],
        ['Ruby', 105],
        ['Python', 105],
        ['Assembly', 15],
        ['C', 375],
        ['C++', 251],
        ['C#', 32],
        ['PHP', 124]
    ]);

    var options = {
        title: 'My languages experience',
        pieHole: 0.5,
    };

    var chart = new google.visualization.PieChart(document.getElementById('languages-chart'));

    chart.draw(data, options);
}