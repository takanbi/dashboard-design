$(function () {
  //   let main = $("div#main");
  //   console.log(main);
  //   let myChart = echarts.init(main);
  //   let option;
  //   option && myChart.setOption(option);
});
let main = document.getElementById("main");

let myChart = echarts.init(main, 'dark');
let option;

const gaugeData = [
  {
    value: 6,
    // name: 'Good',
    title: {
      offsetCenter: ["0%", "0%"],
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ["0%", "0%"],
    },
  },
];
option = {
  // tooltip: {
  //     formatter: '{a} <br/>{b} : {c}%'
  // },
//   backgroundColor: "red",
  series: {
    type: "gauge",
    startAngle: 90,
    endAngle: -270,
    max: 10,
    min: 0,
    pointer: {
      show: false,
    },
    progress: {
      show: true,
      overlap: false,
      roundCap: true,
      clip: false,
    
      itemStyle: {
        
        color: {
          type: "linear",
          x: 0,
          y: 1,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgb(223, 55, 190)",
            },
            /* {
                        offset: 0.25,
                        color: "blue"
                    }, {
                        offset: 0.5,
                        color: "green"
                    }, {
                        offset: 0.75,
                        color: "orange"
                    },*/ {
              offset: 1,
              color: "rgb(106, 64, 204)",
             
            },
          ],
          //global: false // default is false
        },
      },
    },
    axisLine: {
      lineStyle: {
        width: 40,
      },
    },
    splitLine: {
      show: false,
      // distance: 0,
      // length: 10
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
      // distance: 50
    },
    data: gaugeData,
    /*title: {
            fontSize: 24
          },*/
    detail: {
      width: 50,
      height: 14,
      color: "#FFFFFF",
      fontSize: 48,
      valueAnimation: true,
      formatter: "{value}",
      
    },
  },
};

option && myChart.setOption(option);
