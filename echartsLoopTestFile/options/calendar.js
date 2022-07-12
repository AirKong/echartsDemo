function getVirtulData(year) {
    year = year || '2017';
    let date = +echarts.number.parseDate(year + '-01-01');
    let end = +echarts.number.parseDate(+year + 1 + '-01-01');
    let dayTime = 3600 * 24 * 1000;
    let data = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}
const calendarData = getVirtulData('2016');
calendarOption = {
    calendar: [
        {
            top: 'center',
            left: 'center',
            range: ['2016-01-03', '2016-02-13'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#323c48',
                    width: 0.01,
                    type: 'solid'
                }
            },
            orient: 'vertical',
            cellSize: 100,
            dayLabel:{
                show:false
            },
            monthLabel:{
                show:false
            },
            yearLabel: {
                show:false
            },
            itemStyle: {
                color: '#fff',
                borderWidth: 0.05,
                borderColor: '#111'
            }
        }
    ],
    series: [
        {
            name: 'Steps',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: calendarData,
            symbolSize: function (val) {
                return val[1] / 300;
            },
            itemStyle: {
                color: '#5470c6'
            }
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: calendarData
                .sort(function (a, b) {
                    return b[1] - a[1];
                })
                .slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                color: '#5470c6',
                shadowBlur: 10,
                shadowColor: '#5470c6'
            },
            zlevel: 1
        }
    ]
};