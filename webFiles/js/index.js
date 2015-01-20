diversity = [];
poverty =[];
markets = [];

function diversityGraph(data) {
	nv.addGraph(function() {
		var chart = nv.models.pieChart()
			.x(function(d) { return d.label })
			.y(function(d) { return d.value })
			.showLabels(false);

		d3.select("#mod1_chart svg")
			.datum(data)
		    .transition().duration(1200)
		    .call(chart);

		return chart;
	});
}

function marketGraph(stateData) {
	console.log(stateData);
	var data = {
	    labels: [stateData[1], stateData[3], "USA"],
	    datasets: [
	        {
	            label: "Farmers Market Density",
	            fillColor: "rgba(48,214,0,0.5)",
	            strokeColor: "rgba(66,255,35,0.8)",
	            highlightFill: "rgba(48,214,0,0.75)",
	            highlightStroke: "rgba(66,255,35,1)",
	            data: [stateData[0], stateData[2], stateData[4]]
	        }
	    ]
	};
	var ctx = document.getElementById("myChart").getContext("2d");
	var myBarChart = new Chart(ctx).Bar(data);
}


function povertyGraph(data) {
	nv.addGraph(function() {
	  var chart = nv.models.lineChart()
	    .useInteractiveGuideline(false)
	    .showLegend(false)
	    .interactive(false)
	    ;

	  chart.xAxis
	    .axisLabel('')
	    .tickFormat(d3.format('r'))
	    ;

	  chart.yAxis
	    .axisLabel('Poverty Rate')
	    .tickFormat(d3.format('.02f'))
	    ;

	  d3.select('#mod2_chart svg')
	    .datum(data)
	    .transition().duration(500)
	    .call(chart)
	    ;

	  nv.utils.windowResize(chart.update);

	  return chart;
	});
}





function cityDiv(state, county) {
	$.ajax({
	    url: "webFiles/php/cityDiv.php",
	    data: {'state':parseInt(state), 'county':parseInt(county)},
	    type: "POST",
	    success: function(data) {
	    	data = (JSON.parse(data));
	    	diversity.length = 0;
	    	for(i=1;i<data.length;i++){
	    		if(data[i][7]==state && data[i][8]==county) {
		        	diversity.push({
		        		"label": "White",
		        		"value": (parseInt(data[i][0])/parseInt(data[i][6]))*100
		        	},
		        	{
		        		"label": "Black",
		        		"value": (parseInt(data[i][1])/parseInt(data[i][6]))*100
		        	},
		        	{
		        		"label": "Native American",
		        		"value": (parseInt(data[i][2])/parseInt(data[i][6]))*100
		        	}
		        	,{
		        		"label": "Asian",
		        		"value": (parseInt(data[i][3])/parseInt(data[i][6]))*100
		        	},
		        	{
		        		"label": "Pacific Islander",
		        		"value": (parseInt(data[i][4])/parseInt(data[i][6]))*100
		        	},
		        	{
		        		"label": "Other",
		        		"value": (parseInt(data[i][5])/parseInt(data[i][6]))*100
		        	});
		        	diversityGraph(diversity);	
	    		}
	    	}
	    }
	}); 
}

function cityPov(state, county) {
	poverty = [];
	$.ajax({
	    url: "webFiles/php/cityPov.php",
	    data: {'state': parseInt(state), 'county':parseInt(county)},
	    type: "POST",
	    success: function(data) {
	    	data = (JSON.parse(data));
	        	poverty.push({
	        		"values": [{'x': 2010, 'y': (parseInt(data[0][0])/parseInt(data[0][1])*100)},
	        		{'x': 2011, 'y': (parseInt(data[1][0])/parseInt(data[1][1])*100)},
	        		{'x': 2012, 'y': (parseInt(data[2][0])/parseInt(data[2][1])*100)},
	        		{'x': 2013, 'y': (parseInt(data[3][0])/parseInt(data[3][1])*100)}],
	        		"key": "Poverty Rate",
	        		"color": "#FF00FF"
	        	});
	        	povertyGraph(poverty);
	    }
	}); 	
}

function cityMarket(state, county) {
	market = [];
	$.ajax({
	    url: "webFiles/php/countyFarmersMarkets.php",
	    data: {'state':state,'county':county},
	    type: 'POST',
	    success: function(data) {
	    	data = data.substr(0,data.length-2);
	    	data += ']';
	    	data = JSON.parse(data);
	    	for(i=0;i<data.length;i++){
	    		if(data[i][1]==county && data[i][3]==state){
	    			market = data[i]
	    			marketGraph(market);
	    		}
	    	}
	    }
	}); 	
}


function loadCityGraphs(countyID, stateID, county, state) {
	if(state == 'North Carolina') {
		$('#first').attr('src', '../../imgFiles/ImageGalleryPhotos/AlleghanyNorthCarolina1.jpg');
		$('#sec').attr('src', '../../imgFiles/ImageGalleryPhotos/AlleghanyNorthCarolina2.jpg');
		$('#thrd').attr('src', '../../imgFiles/ImageGalleryPhotos/AlleghanyNorthCarolina3.jpg');
	}
	else if(state == 'Alaska') {
		$('#first').attr('src', '../../imgFiles/ImageGalleryPhotos/AnchorageAlaska1.jpg');
		$('#sec').attr('src', '../../imgFiles/ImageGalleryPhotos/AnchorageAlaska2.jpg');
		$('#thrd').attr('src', '../../imgFiles/ImageGalleryPhotos/AnchorageAlaska3.jpg');
	}
	else if(state == 'Texas') {
		$('#first').attr('src', '../../imgFiles/ImageGalleryPhotos/AngelinaTexas1.jpg');
		$('#sec').attr('src', '../../imgFiles/ImageGalleryPhotos/AngelinaTexas2.jpg');
		$('#thrd').attr('src', '../../imgFiles/ImageGalleryPhotos/AngelinaTexas3.jpg');
	}
	else if(state == 'Massachusetts') {
		$('#first').attr('src', '../../imgFiles/ImageGalleryPhotos/BarnstableMassachusetts1.jpg');
		$('#sec').attr('src', '../../imgFiles/ImageGalleryPhotos/BarnstableMassachusetts2.jpg');
		$('#thrd').attr('src', '../../imgFiles/ImageGalleryPhotos/BarnstableMassachusetts3.jpg');
	}
	else {
		$('#first').attr('src', '../../imgFiles/ImageGalleryPhotos/InghamMichigan1.jpg');
		$('#sec').attr('src', '../../imgFiles/ImageGalleryPhotos/InghamMichigan2.jpg');
		$('#thrd').attr('src', '../../imgFiles/ImageGalleryPhotos/InghamMichigan3.jpg');
	}
	$('#selectedCity').fadeOut('slow', function() {
		$('#selectedCity').html(county + " - " + state);
		$('#selectedCity').fadeIn('slow');
		$('#mod5_head').fadeIn('slow', function() {
			$('#mod1_chart').fadeIn('slow', function() {
				$('#mod3_chart').fadeIn('slow', function() {
					$('#mod4_chart').fadeIn('slow', function() {
						$('#mod2_chart').fadeIn('slow', function() {
							cityPov(parseInt(stateID), parseInt(countyID));
							cityDiv(parseInt(stateID), parseInt(countyID));
							cityMarket(state,county);
						});
					});
				});
			});
		});
	});
}

$('.carousel').carousel({
        interval: 3000
})

$(document).ready(function(){
	

	$('#map').usmap({
	  	click: function(event, data) {
	  		$('#mapTitle').fadeIn('slow',function() {
	  			$('#mapTitle2').fadeOut('slow');
	  		})
			$('#mod1_chart').fadeOut('slow', function() {
				$('#mod3_chart').fadeOut('slow', function() {
					$('#mod4_chart').fadeOut('slow', function() {
						$('#mod2_chart').fadeOut('slow');
					});
				});
			});
	  		$('#countyDropdown').fadeOut('slow');
	  		$('.dropdown-menu').html('');
	      	name = data.name;
	      	state = name.replace('_', ' ');
			$.ajax({
			    url: "webFiles/php/getJSON.php",
			    success: function(data) {	
			    	stateCountyArray = [];	
			    	data = (JSON.parse(data));
			    	for(i=1; i<data.length-1; i++){
			    		countyArray = data[i][0].split(', ');
			    		if (countyArray[1] == state) {
			    			stateCountyArray.push(data[i]);
			    		}
			    	}
			    	list = '';
			    	for(i=0; i<stateCountyArray.length-1; i++){
			    		tempArray = (stateCountyArray[i][0]).split(', ');
			    		selectedState = tempArray[1];
			    		stateCounty = (tempArray[0]).replace(' County', '');
			    		list += '<li><a href="#" style="color:black" onclick="loadCityGraphs(\''+parseInt(stateCountyArray[i][2])+'\', \''+parseInt(stateCountyArray[i][1])+'\', \''+stateCounty+
			    			'\', \''+selectedState+'\')">'+stateCounty+', '+selectedState+'</a></li>';
			    	}
			    	$('.dropdown-menu').html(list);
			    	$('#countyDropdown').fadeIn('slow');
			    }
			}); 
	      	name2 = name.replace('_', '%20');
	      	$('body').css('background-image', 'url(../../imgFiles/'+name2+'.jpg)');
	  }
	});	

	$( '.dropdown-menu' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
	    var e0 = e.originalEvent,
	        delta = e0.wheelDelta || -e0.detail;
	    
	    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 7;
	    e.preventDefault();
	});

});
