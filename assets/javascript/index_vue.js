var app = new Vue({
    el: '#app',
    data: {
        langData: langData,
        frameworkData: frameworkData,
        dbData: dbData,
        categoryData: categoryData,
        projectsData: projectsData,
        panelTabs: [
            {name: "All", isActive: true},
            {name: "Public", isActive: false, filters: {index: 7, value: true}},
            {name: "Private", isActive: false, filters: {index: 7, value: false}}
        ]
    },
    mounted: function () {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.load('current', {'packages':['sankey']});
        google.charts.setOnLoadCallback(drawMainLChart);
        google.charts.setOnLoadCallback(drawSecLChart);
        google.charts.setOnLoadCallback(drawFrameworkChart);
        google.charts.setOnLoadCallback(drawDBChart);
        google.charts.setOnLoadCallback(drawCategoryChart);
        google.charts.setOnLoadCallback(drawLocationChart);
        google.charts.setOnLoadCallback(drawCategorySankeyChart);
    },
    methods: {
        clickTab: function (event) {
            for (var i = 0; i < this.panelTabs.length; i++) {
                this.panelTabs[i].isActive = false;
            }
            this.panelTabs[event.target.id].isActive = true;
        }
    },
    computed: {
        filterTab: function (filter) {
            var tab = this.panelTabs.filter(function( obj) {
                return obj.isActive === true;
            });
            if (tab[0].filters) {
                return this.projectsData.filter(function( obj ) {
                    return obj[this.index] === this.value;
                }, tab[0].filters);
            }
            return this.projectsData;
        }
    }
})