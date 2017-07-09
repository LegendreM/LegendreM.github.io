//name
var langData = [
    'none',     //[0]
    'Ruby',     //[1]
    'Python',   //[2]
    'Assembly', //[3]
    'C',        //[4]
    'C++',      //[5]
    'C#',       //[6]
    'PHP',      //[7]
    'javasript',//[8]
    'SQL',      //[9]
    'html/css', //[10]
    'prolog',   //[11]
    'shell',    //[12]
    'rust',     //[13]
]
var frameworkData = [
    'none',     //[0]
    'rails',    //[1]
    'django',   //[2]
    'unity',    //[3]
    'symfony'   //[4]
]

var dbData = [
    'none',
    'elastic search',
    'mysql',
    'postgresql'
]
// name, main lang, sec langs, frameworks, databases, time (days)
var projectsData = [
    ['piscine C', 4, [0], 0, 0, 30],
    ['libft', 4, [0], 0, 0, 15],
    ['getNextLine', 4, [0], 0, 0, 15],
    ['fdf', 4, [0], 0, 0, 31],
    ['fractol', 4, [0], 0, 0, 31],
    ['2048', 4, [0], 0, 0, 7],
    ['pushswap', 4, [0], 0, 0, 31],
    ['computor v1', 4, [0], 0, 0, 31],
    ['cluedo', 11, [0], 0, 0, 7],
    ['piscine PHP', 7, [8, 10], 0, 2, 30],
    ['libft ASM', 3, [0], 0, 0, 14],
    ['exams C', 4, [0], 0, 0, 7],
    ['piscine C++', 5, [0], 0, 0, 30],
    ['stage DxO', 5, [0], 0, 0, 190],
    ['Fillit', 4, [0], 0, 0, 15],
    ['piscine Unity', 6, [0], 3, 0, 30],
    ['wolf 3D', 4, [0], 0, 0, 30],
    ['piscine Django', 2, [8, 10], 2, 2, 30],
    ['stage Wekean', 7, [8, 10], 4, 3, 100],
    ['printf', 4, [0], 0, 0, 30],
    ['roger skyline', 12, [0], 0, 0, 30],
    ['dr quine', 4, [8], 0, 0, 20],
    ['Filler', 4, [0], 0, 0, 30],
    ['LFS', 12, [4], 0, 0, 15],
    ['automatic clothes recognition', 2, [13, 0], 0, 0, 95],
    ['instant study explorer', 1, [8, 10], 1, 1, 115],
]


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawMainLChart);
google.charts.setOnLoadCallback(drawSecLChart);
google.charts.setOnLoadCallback(drawFrameworkChart);
google.charts.setOnLoadCallback(drawDBChart);


function getMainLangs() {
    var dataArray = [['Language', 'days']];
    var tmpdict = {};
    for (var i = 0; i < projectsData.length; i++) {
        if (tmpdict[langData[projectsData[i][1]]]) {
            tmpdict[langData[projectsData[i][1]]] += projectsData[i][5];
        } else {
            tmpdict[langData[projectsData[i][1]]] = projectsData[i][5];
        } 
    }
    for (var k in tmpdict) {
        dataArray.push([k, tmpdict[k]])
    }
    return dataArray
}

function getFrameworks() {
    var dataArray = [['Language', 'days']];
    var tmpdict = {};
    for (var i = 0; i < projectsData.length; i++) {
        if (tmpdict[frameworkData[projectsData[i][3]]]) {
            tmpdict[frameworkData[projectsData[i][3]]] += projectsData[i][5];
        } else {
            tmpdict[frameworkData[projectsData[i][3]]] = projectsData[i][5];
        } 
    }
    for (var k in tmpdict) {
        dataArray.push([k, tmpdict[k]])
    }
    return dataArray
}

function getDB() {
    var dataArray = [['Language', 'days']];
    var tmpdict = {};
    for (var i = 0; i < projectsData.length; i++) {
        if (tmpdict[dbData[projectsData[i][4]]]) {
            tmpdict[dbData[projectsData[i][4]]] += projectsData[i][5];
        } else {
            tmpdict[dbData[projectsData[i][4]]] = projectsData[i][5];
        } 
    }
    for (var k in tmpdict) {
        dataArray.push([k, tmpdict[k]])
    }
    return dataArray
}

function getSecLangs() {
    var dataArray = [['Language', 'days']];
    var tmpdict = {};
    for (var i = 0; i < projectsData.length; i++) {
        for (var j = 0; j < projectsData[i][2].length; j++) {
            if (tmpdict[langData[projectsData[i][2][j]]]) {
                tmpdict[langData[projectsData[i][2][j]]] += projectsData[i][5] / projectsData[i][2].length;
            } else {
                tmpdict[langData[projectsData[i][2][j]]] = projectsData[i][5] / projectsData[i][2].length;
            }
        }
    }
    for (var k in tmpdict) {
        dataArray.push([k, tmpdict[k]])
    }
    return dataArray
}

function drawMainLChart() {
    var dataArray = getMainLangs()
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
    var dataArray = getSecLangs()
    var data = google.visualization.arrayToDataTable(dataArray);
    var options = {
        title: 'secondary language used in projects',
        pieHole: 0.5,
        slices: {
            0: { color: '#d3d3d3', offset: 0.1 }
          }
    };

    var chart = new google.visualization.PieChart(document.getElementById('secondary-languages-chart'));
    chart.draw(data, options);
}

function drawFrameworkChart() {
    var dataArray = getFrameworks()
    var data = google.visualization.arrayToDataTable(dataArray);
    var options = {
        title: 'frameworks used in projects',
        pieHole: 0.5,
        slices: {
            0: { color: '#d3d3d3', offset: 0.1 }
          }
    };

    var chart = new google.visualization.PieChart(document.getElementById('frameworks-chart'));
    chart.draw(data, options);
}

function drawDBChart() {
    var dataArray = getDB()
    var data = google.visualization.arrayToDataTable(dataArray);
    var options = {
        title: 'databases used in projects',
        pieHole: 0.5,
        slices: {
            0: { color: '#d3d3d3', offset: 0.1 }
          }
    };

    var chart = new google.visualization.PieChart(document.getElementById('db-chart'));
    chart.draw(data, options);
}