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

var categoryData = [
    'none',             //[0]
    'image processing', //[1]
    'infography',       //[2]
    'web',              //[3]
    'algorithms',       //[4]
    'videogames',       //[5]
    'kernel',           //[6]
    'security',         //[7]
    'machine learning', //[8]
    'metaprogramming',  //[9]
    'optimization',     //[10]
    'logic programming',//[11]
    'R&D',              //[12]
    'DevOps',           //[13]
    'parsing',          //[14]
]
// name, main lang, sec langs, frameworks, databases, time (days), categories
var projectsData = [
    ['piscine C', 4, [0], 0, 0, 30, [0]],
    ['libft', 4, [0], 0, 0, 15, [0]],
    ['getNextLine', 4, [0], 0, 0, 15, [0]],
    ['fdf', 4, [0], 0, 0, 31, [2]],
    ['fractol', 4, [0], 0, 0, 31, [2, 10]],
    ['2048', 4, [0], 0, 0, 7, [5]],
    ['pushswap', 4, [0], 0, 0, 31, [4, 10]],
    ['computor v1', 4, [0], 0, 0, 31, [4]],
    ['cluedo', 11, [0], 0, 0, 7, [11]],
    ['piscine PHP', 7, [8, 10], 0, 2, 30, [3]],
    ['libft ASM', 3, [0], 0, 0, 14, [10]],
    ['exams C', 4, [0], 0, 0, 7, [0]],
    ['piscine C++', 5, [0], 0, 0, 30, [5, 4]],
    ['stage DxO', 5, [0], 0, 0, 190, [10, 9, 1, 12]],
    ['Fillit', 4, [0], 0, 0, 15, [4, 10]],
    ['piscine Unity', 6, [0], 3, 0, 30, [5]],
    ['wolf 3D', 4, [0], 0, 0, 30, [5, 2]],
    ['piscine Django', 2, [8, 10], 2, 2, 30, [3]],
    ['stage Wekean', 7, [8, 10], 4, 3, 100, [3, 10]],
    ['printf', 4, [0], 0, 0, 30, [14]],
    ['roger skyline', 12, [0], 0, 0, 30, [13]],
    ['dr quine', 4, [8], 0, 0, 20, [4]],
    ['Filler', 4, [0], 0, 0, 30, [4, 5]],
    ['Rootme', 4, [12, 2], 0, 0, 60, [7]],
    ['LFS', 12, [4], 0, 0, 15, [6]],
    ['automatic clothes recognition', 2, [13, 0], 0, 0, 95, [1, 12]],
    ['instant study explorer', 1, [8, 10], 1, 1, 115, [12, 3]],
]


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawMainLChart);
google.charts.setOnLoadCallback(drawSecLChart);
google.charts.setOnLoadCallback(drawFrameworkChart);
google.charts.setOnLoadCallback(drawDBChart);
google.charts.setOnLoadCallback(drawCategoryChart);
google.charts.setOnLoadCallback(drawCategorySankeyChart);
google.charts.setOnLoadCallback(drawLangSankeyChart);


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

function getCategories() {
    var dataArray = [['Language', 'days']];
    var tmpdict = {};
    for (var i = 0; i < projectsData.length; i++) {
        for (var j = 0; j < projectsData[i][6].length; j++) {
            if (tmpdict[categoryData[projectsData[i][6][j]]]) {
                tmpdict[categoryData[projectsData[i][6][j]]] += projectsData[i][5] / projectsData[i][6].length;
            } else {
                tmpdict[categoryData[projectsData[i][6][j]]] = projectsData[i][5] / projectsData[i][6].length;
            }
        }
    }
    for (var k in tmpdict) {
        dataArray.push([k, tmpdict[k]])
    }
    return dataArray
}

function getSankeyLangCat() {
    var dataArray = [];
    var tmpdict = {};
    for (var i = 0; i < projectsData.length; i++) {
        if (!tmpdict[langData[projectsData[i][1]]]) {
            tmpdict[langData[projectsData[i][1]]] = {}
        }
        for (var j = 0; j < projectsData[i][6].length; j++) {
            if (tmpdict[langData[projectsData[i][1]]][categoryData[projectsData[i][6][j]]]) {
                tmpdict[langData[projectsData[i][1]]][categoryData[projectsData[i][6][j]]] += projectsData[i][5] / projectsData[i][6].length;
            } else {
                tmpdict[langData[projectsData[i][1]]][categoryData[projectsData[i][6][j]]] = projectsData[i][5] / projectsData[i][6].length;
            }
        }
    }
    for (var k in tmpdict) {
        for (var l in tmpdict[k]) {
            dataArray.push([k, l, tmpdict[k][l]])
        }
    }
    return dataArray
}

function drawMainLChart() {
    var dataArray = getMainLangs()
    var data = google.visualization.arrayToDataTable(dataArray);
    var options = {
        title: 'Main languages used in projects',
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
        title: 'secondary languages used in projects',
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

function drawCategoryChart() {
    var dataArray = getCategories()
    var data = google.visualization.arrayToDataTable(dataArray);
    var options = {
        title: 'categories of projects',
        pieHole: 0.5,
        slices: {
            0: { color: '#d3d3d3', offset: 0.1 }
          }
    };

    var chart = new google.visualization.PieChart(document.getElementById('category-chart'));
    chart.draw(data, options);
}

function drawCategorySankeyChart() {
    var dataArray = getSankeyLangCat()
    // console.log(dataArray)
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows(dataArray);

    // Sets chart options.
    var options = {
        width: 600,
    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey-categories-langs'));
    chart.draw(data, options);
}