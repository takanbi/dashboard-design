$(function(){

  let main = document.getElementById("graphBox-sect1");
  // let main = $("#graphBox-sect1");
  let myChart = echarts.init(main, 'dark');
  // let myChart = echarts.init(main);
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
      backgroundColor: "#F00",
      itemStyle: {
        backgroundColor: "#F00",
      },
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
      
        itemStyle: {
          backgroundColor: "#F00",
          color: { 
            backgroundColor: "#F00",
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
              {
                offset: 1,
                color: "rgb(106, 64, 204)",
              },
            ],
            //global: true // default is false
          },
        },
      },
      axisLine: {
        lineStyle: {
          width: 20,
        },
        itemStyle: {
          backgroundColor: "#F00"
        }
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
        fontSize: 32,
        valueAnimation: true,
        formatter: "{value}",
        
      },
    },
  };
  
  option && myChart.setOption(option);
  
  });

  // import * as echarts from '../js/echarts';

// var chartDom = document.getElementById('graphBox-sect1');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   series: [
//     {
//       type: 'gauge',
//       axisLine: {
//         lineStyle: {
//           width: 3,
//           color: [
//             [0.3, '#67e0e3'],
//             [0.7, '#37a2da'],
//             [1, '#fd666d']
//           ]
//         }
//       },
//       pointer: {
//         itemStyle: {
//           color: 'auto'
//         }
//       },
//       axisTick: {
//         distance: -30,
//         length: 8,
//         lineStyle: {
//           color: '#fff',
//           width: 2
//         }
//       },
//       splitLine: {
//         distance: -10,
//         length: 30,
//         lineStyle: {
//           color: '#fff',
//           width: 4
//         }
//       },
//       axisLabel: {
//         color: 'auto',
//         distance: 40,
//         fontSize: 20
//       },
//       detail: {
//         valueAnimation: true,
//         formatter: '{value} km/h',
//         color: 'auto'
//       },
//       data: [
//         {
//           value: 70
//         }
//       ]
//     }
//   ]
// };
// setInterval(function () {
//   myChart.setOption({
//     series: [
//       {
//         data: [
//           {
//             value: +(Math.random() * 100).toFixed(2)
//           }
//         ]
//       }
//     ]
//   });
// }, 2000);

// option && myChart.setOption(option);