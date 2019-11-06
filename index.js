// d3.select();
// d3.selectAll();

// d3.select('h1').style('color','red')
// .attr('class', 'heading')
// .text('Updated h1 tag')

// d3.select('body').append('p').text('First Paragraph')
// d3.select('body').append('p').text('Second Paragraph')
// d3.select('body').append('p').text('Third Paragraph')

// d3.selectAll('p').style('color','#0094ff')

//Data loading and binding

// var dataset = [1, 2, 3, 4, 5];

// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()//take data items one by one and append things
//     .append('p')
//     //.text('D3 is awesome')
//     .text(function(d) { return d; });

//creating a simple bar chart

var dataset = [];
data3et = [30,20,30,60,90,156,170]
async function getData(){
    var url = "https://parkingpoc.herokuapp.com/api/getinfo"
    var gdata = await fetch(url)
    const gdu = await gdata.json()
    console.log(gdu)
    d3.axisTop()
    d3.axisRight()
    d3.axisBottom()
    d3.axisLeft()

    gdu.forEach(element => {
        dataset.push(element.time)
        
    });
    console.log("dataset",dataset)
    var svgwidth = 500, svgheight = 300, barPadding = 5;
    var barwidth = (svgwidth/data3et.length);
    var svg = d3.select('svg')
        .attr("width", svgwidth)
        .attr("height", svgheight);

    var xScale = d3.scaleLinear()
        .domain([0,d3.max(data3et)])
        .range([0, svgwidth])

    var yScale = d3.scaleLinear()
        .domain([0,d3.max(data3et)])
        .range([0, svgheight])

    var x_axis = d3.axisBottom().scale(xScale)

    var y_axis = d3.axisLeft().scale(yScale)
    
    svg.append("g")
        .attr("transform","translate(50,10)")
        clearInterval(y_axis)

    var xAxisTranslate = svgheight-20;

    svg.append("g")
        .attr("transform","translate(50,"+xAxisTranslate+")")
        clearInterval(x_axis)


    var barChart = svg.selectAll("rect")
        .data(data3et)
        .enter()
        .append("rect")
        .attr("y", function(d) { 
            return svgheight-d;
        })
        .attr("height", function(d) { 
            return d;
        })
        .attr("width", barwidth-barPadding)
        .attr("transform", function(d, i) {
            var translate = [barwidth * i, 0];
            return "translate("+ translate +")";
        })

    var text = svg.selectAll("text")
        .data(data3et)
        .enter()
        .append("text")
        .text(function(d) {
            return d;
        })
        .attr("y", function(d, i) { 
            return svgheight-d-2;
        })
    
        .attr("x", function(d, i) { 
            return barwidth*i;
        })
    .attr("fill", "#0094ff");

}
getData();

//DONUT CHART
// set the dimensions and margins of the graph
      var width = 500
          height = 500
          margin = 50
      
      // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
      var radius = Math.min(width, height) / 2 - margin
      
      // append the svg object to the div called 'my_dataviz'
      var svg = d3.select("#donut_chart")
        .append("svg")
          .attr("width", width)
          .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      
      // Create dummy data
      //var data = {a: 9, b: 20, c:30, d:8, e:12}
      var data = [9, 20, 30, 8, 12]
      
      // set the color scale
      var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#0094ff", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
      
      // Compute the position of each group on the pie:
      var pie = d3.pie()
        .value(function(d) {return d.value; })
      var data_ready = pie(d3.entries(data))
      
      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
          .innerRadius(100)         // This is the size of the donut hole
          .outerRadius(radius)
        )
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "none")
        .style("stroke-width", "2px")
        .style("opacity", 1)

//PIE CHART
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#pie_chart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = [9, 20, 30, 8, 12]

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "none")
  .style("stroke-width", "0px")
  .style("opacity", 0.7)

//RIDGELINE
// set the dimensions and margins of the graph
var margin = {top: 60, right: 30, bottom: 20, left:110},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#ridge_line")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//read data
var data = d3.csv("https://raw.githubusercontent.com/zonination/perceptions/master/probly.csv", function(data) {

  // Get the different categories and count them
  var categories = data.columns()
  var n = categories.length

  // Add X axis
  var x = d3.scaleLinear()
    .domain([-10, 140])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Create a Y scale for densities
  var y = d3.scaleLinear()
    .domain([0, 0.4])
    .range([ height, 0]);

  // Create the Y axis for names
  var yName = d3.scaleBand()
    .domain(categories)
    .range([0, height])
    .paddingInner(1)
  svg.append("g")
    .call(d3.axisLeft(yName));

  // Compute kernel density estimation for each column:
  var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40)) // increase this 40 for more accurate density.
  var allDensity = []
  for (i = 0; i < n; i++) {
      key = categories[i]
      density = kde( data.map(function(d){  return d[key]; }) )
      allDensity.push({key: key, density: density})
  }

  // Add areas
  svg.selectAll("areas")
    .data(allDensity)
    .enter()
    .append("path")
      .attr("transform", function(d){return("translate(0," + (yName(d.key)-height) +")" )})
      .datum(function(d){return(d.density)})
      .attr("fill", "#69b3a2")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("d",  d3.line()
          .curve(d3.curveBasis)
          .x(function(d) { return x(d[0]); })
          .y(function(d) { return y(d[1]); })
      )

})

// This is what I need to compute kernel density estimation
function kernelDensityEstimator(kernel, X) {
  return function(V) {
    return X.map(function(x) {
      return [x, d3.mean(V, function(v) { return kernel(x - v); })];
    });
  };
}
function kernelEpanechnikov(k) {
  return function(v) {
    return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
  };
}


//HEATMAP
var data = [
    {
      z: [[1, 20, 30, 50, 1, 10, 20], [20, 1, 60, 80, 30, 100, 200], [30, 60, 1, -10, 20, 90, 80]],
      x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      y: ['Morning', 'Afternoon', 'Evening'],
      colorscale: 'YIGnBu',
      type: 'heatmap'
    }
  ];
  
  Plotly.newPlot('myDiv', data, {}, {showSendToCloud: true});


//RADAR CHART
data = [{
    type: 'scatterpolar',
    r: [39, 28, 8, 7, 28, 39],
    theta: ['A','B','C', 'D', 'E', 'A'],
    colorscale: 'YIGnBu',
    fill: 'toself'
  }]
  
  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 50]
      }
    },
    showlegend: false
  }
  
  Plotly.plot("radar", data, layout, {showSendToCloud: true})






  var ripple = document.querySelectorAll('.ripple-container'); //Guardamos un array con todos los botones. Para compatibilidad con navegadores antiguos puedes reemplazar el querySelectorAll con un getElementsByClassName
[].forEach.call(ripple, function(e) {
  e.addEventListener('click', function(e) {
    /*Esto se activará cada vez que haya un click en un botón*/
    var offset = this.parentNode.getBoundingClientRect(); //Toma los limites del padre (el padre es el <button> para los botones, o el <div> principal en la imagen
    var effect = this.querySelector('.ripple-effect'); //Toma SOLO el span ripple-effect que está dentro del boton clicado
    /*pageX y pageY devuelven el punto de la página en el cual se hizo clic, siendo el origen la esquina superior izquierda. En offset.top y offset.left tenemos almacenados la distancia al origen de la esquina superior izquierda del botón. La resta de estos elementos nos indicará el punto en el cual se hizo clic, teniendo como origen la esquina superior izquierda del botón*/
    effect.style.top = (e.pageY - offset.top) + "px";
    effect.style.left = (e.pageX - offset.left) + "px";

    this.classList.add('ripple-effect-animation'); //Agregamos la clase con la animación

  }, false);

  /*Cuando la animación finalice, se disparan eventos llamando a removeAnimation, este método eliminará la clase ripple-effect-animation*/
  e.addEventListener('animationend', removeAnimation);
  e.addEventListener('webkitAnimationEnd', removeAnimation);
  e.addEventListener('oanimationend', removeAnimation);
  e.addEventListener('MSAnimationEnd', removeAnimation);
});

function removeAnimation() {
  if (this.classList) {
    this.classList.remove('ripple-effect-animation');
  } else {
    this.className = this.className.replace(new RegExp('(^|\\b)' + 'ripple-effect-animation'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}