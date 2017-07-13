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
        'tooltip' : {
            trigger: 'none'
        }
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
          },
        'tooltip' : {
            trigger: 'none'
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
          },
        'tooltip' : {
            trigger: 'none'
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
          },
        'tooltip' : {
            trigger: 'none'
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
          },
        'tooltip' : {
            trigger: 'none'
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