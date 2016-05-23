//D3 margin

var margin = {top:20 , right:10 , bottom:100 , left:40},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom ;

//svg

var svg = d3.select("body").
          append('svg')
            .attr ({
            "width" : width + margin.right + margin.left,
            "height" : height + margin.top + margin.bottom
          })
          .append("g")
            .attr("transform","translate(" + margin.left + "," + margin.right + ")");

//scale and axis

//define x and y scale

var xScale = d3.scale.ordinal()
    .rangeRoundBands([0,width], 0.2,0.2);

var yScale=d3.scale.linear()
    .range([height, 0]);

//define axis x and y

var xAxis=d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

var yAxis=d3.svg.axis()
        .scale(yScale)
        .orient("left");


//import data from json

d3.json("json/bargraph.json", function(error, data){
    if(error){
    console.log("Error");
    }
    data.forEach(function(d){
        d.Literate_Persons=+ d.Literate_Persons;
        d.Education_Level=d.Education_Level;

    });
    // data.sort(function(a,b){
    // return b.population2013- a.population2013;
    // });

    //domain
    xScale.domain(data.map(function(d){
        return d.Education_Level;
    }));
    yScale.domain([0, d3.max(data, function(d){
        return d.Literate_Persons;
    })]);


//draw the bars

svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr("height", 0)
    .attr("y", height)
    .transition().duration(3000)
    .delay(function(d,i){
        return i*200;
    })
    .attr({
        'x': function(d){
        return xScale(d.Education_Level);
        },
        'y': function(d){
        return yScale(d.Literate_Persons);
        },
        "width": xScale.rangeBand(),
        "height": function(d){
        return height-yScale(d.Literate_Persons);
        }
    });

//append x and y
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll('text')
    .attr("transform", "rotate(-60)")
    .attr("dx","-0.8em")
    .attr("dy", "-0.25em")
    .style("text-anchor","end")
    .style("font-size", "12px");
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .style("font-size", "12px");
});
