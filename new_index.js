var dataset = [];
async function getData(){
    var url = "https://parkingpoc.herokuapp.com/api/getinfo"
    var gdata = await fetch(url)
    const gdu = await gdata.json()
    console.log("Rreq data",gdu)

    gdu.forEach(element => {
        dataset.push(element.time)
        
    });
    console.log("dataset",dataset)
    return dataset
}
var data = getData()

console.log("data",data)

$(function () {

  'use strict';

  (function () {

    var aside = $('.side-nav'),

        showAsideBtn = $('.show-side-btn'),

        contents = $('#contents');

    showAsideBtn.on("click", function () {

      $("#" + $(this).data('show')).toggleClass('show-side-nav');

      contents.toggleClass('margin');

    });

    if ($(window).width() <= 767) {

      aside.addClass('show-side-nav');

    }
    $(window).on('resize', function () {

      if ($(window).width() > 767) {

        aside.removeClass('show-side-nav');

      }

    });

    // dropdown menu in the side nav
    var slideNavDropdown = $('.side-nav-dropdown');

    $('.side-nav .categories li').on('click', function () {

      $(this).toggleClass('opend').siblings().removeClass('opend');

      if ($(this).hasClass('opend')) {

        $(this).find('.side-nav-dropdown').slideToggle('fast');

        $(this).siblings().find('.side-nav-dropdown').slideUp('fast');

      } else {

        $(this).find('.side-nav-dropdown').slideUp('fast');

      }

    });

    $('.side-nav .close-aside').on('click', function () {

      $('#' + $(this).data('close')).addClass('show-side-nav');

      contents.removeClass('margin');

    });

  }());

  // Start chart

  var chart = document.getElementById('myChart');
  Chart.defaults.global.animation.duration = 2000; // Animation duration
  Chart.defaults.global.title.display = false; // Remove title
  Chart.defaults.global.title.text = "Chart"; // Title
  Chart.defaults.global.title.position = 'bottom'; // Title position
  Chart.defaults.global.defaultFontColor = '#999'; // Font color
  Chart.defaults.global.defaultFontSize = 10; // Font size for every label

  // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
  Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
  Chart.defaults.global.legend.labels.padding = 0;
  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
  Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';

  Chart.defaults.global.legend.display = false;

  var myChart = new Chart(chart, {
    type: 'bar',
    data: {
      labels: ["Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [{
        label: "Value",
        fill: false,
        lineTension: 0,
        startAngle: 2,
        data: [20, 40, 20, 45, 25, 69, 40],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#ff6384",
        borderColor: '#4bc0c0',
        borderWidth: 2,
        showLine: true,
      }]
    },
  });
  //  Chart ( 2 )


  var Chart2 = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(Chart2, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", 'May', 'June', 'July', 'August','September','October','November','December'],
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 79, 116)',
        borderWidth: 2,
        pointBorderColor: false,
        data: [5, 10, 5, 8, 20, 30, 20, 10, 10, 13, 7, 8],
        fill: false,
        lineTension: .4,
      }, {
        label: "Month",
        fill: false,
        lineTension: .4,
        startAngle: 2,
        data: [20, 14, 20, 25, 10, 15, 25, 10, 10, 13, 7, 8],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#4bc0c0",
        borderColor: '#4bc0c0',
        borderWidth: 2,
        showLine: true,
      }, {
        label: "Month",
        fill: false,
        lineTension: .4,
        startAngle: 2,
        data: [40, 20, 5, 10, 30, 15, 15, 10, 10, 13, 7, 8],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#ffcd56",
        borderColor: '#ffcd56',
        borderWidth: 2,
        showLine: true,
      }]
    },

    // Configuration options
    options: {
      title: {
        display: false
      }
    }
  });


  console.log(Chart.defaults.global);

  var chart = document.getElementById('chart3');
  var myChart = new Chart(chart, {
    type: 'line',
    data: {
      labels: ["One", "Two", "Three", "Four", "Five", 'Six', "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"],
      datasets: [{
        label: "Lost",
        fill: false,
        lineTension: .5,
        pointBorderColor: "transparent",
        pointColor: "white",
        borderColor: '#d9534f',
        borderWidth: 0,
        showLine: true,
        data: [0, 40, 10, 30, 10, 20, 15, 20, 10, 20, 15, 20],
        pointBackgroundColor: 'transparent',
      },{
        label: "Lost",
        fill: false,
        lineTension: .5,
        pointColor: "white",
        borderColor: '#5cb85c',
        borderWidth: 0,
        showLine: true,
        data: [40, 0, 20, 10, 25, 15, 30, 0, 20, 10, 25, 15],
        pointBackgroundColor: 'transparent',
      },
                 {
                   label: "Lost",
                   fill: false,
                   lineTension: .5,
                   pointColor: "white",
                   borderColor: '#f0ad4e',
                   borderWidth: 0,
                   showLine: true,
                   data: [10, 40, 20, 5, 35, 15, 35, 0, 35, 15, 35, 0],
                   pointBackgroundColor: 'transparent',
                 },
                 {
                   label: "Lost",
                   fill: false,
                   lineTension: .5,
                   pointColor: "white",
                   borderColor: '#337ab7',
                   borderWidth: 0,
                   showLine: true,
                   data: [0, 30, 10, 25, 10, 40, 20, 0, 30, 10, 25, 30],
                   pointBackgroundColor: 'transparent',
                 }]
    },
  });

});




var ctx = document.getElementById("donut").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Q1",	"Q2",	"Q2",	"Q3"],
        datasets: [{    
            data: [500,	500,	2424,	4040], // Specify the data values array
          // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
            borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border 
            backgroundColor: ['#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'], // Add custom color background (Points and Fill)
            borderWidth: 0 // Specify bar border width
        }]},
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
          }      
});