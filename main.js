import AreaChart from './AreaChart.js';
import StackedAreaChart from './StackedAreaChart.js';

d3.csv('unemployment.csv', d3.autoType).then(data => {
    console.log(data)
    data.map(d=>d.total=sum(d));

    function sum(d){
        let sum = 0;
        for (let e in d){
            if(e !== 'date'){
                sum += d[e]
            }
        }
        return sum;
    }

    const stackedAreaChart = StackedAreaChart('.stackchart')
    stackedAreaChart.update(data);

    const areaChart = AreaChart('.areachart');
    areaChart.update(data);
    areaChart.on("brushed", (range)=>{
        stackedAreaChart.filterByDate(range);
    })    
})


