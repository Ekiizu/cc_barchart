let data;
let cleanData = [];
let barCharts = [];

let fontLight;
let fontReg;
let fontBold;

let canvasWidth = 1200;
let canvasHeight = 1200;

// Colours
let backgroundColour = "#2C2C2C";




function preload() {
	data = loadTable("data/Combined.csv", "csv", "header");
	fontLight = loadFont('fonts/Montserrat-Thin.ttf');
	fontReg = loadFont('fonts/Montserrat-Medium.ttf');
}

function setup() {

	

	createCanvas(canvasWidth, canvasHeight);
	angleMode(DEGREES)
	for (let i = 0; i < data.rows.length; i++) {
		cleanData.push(data.rows[i].obj);
	}



	numBars = cleanData.length;
    
	//first chart
	let barChart01 = {
		data: cleanData,
		chartWidth: 400,
		chartHeight: 400,
		x: 100,
		y: 500,

		barWidth:20,
	    barColour: "#57CE60",
		barStrokeColour:"#57CE60",
		barStrokeThickness: 2,
		
		yAxisValue:"Total",
		xAxisLabel:"Age_Group",

		
        axisColour: "#57CE60",
        axisThickness: 3,
		
		labelPadding:8,
		labelColour: "#FD6A94",
		labelRotation:60,
		

		titleText: "EXAMPLE",
		titleXOffset: -30,
		titleYOffset: 50,
		titleWidth: 300,
		TitleSize: 20,


		//tick
		tickStrokeWeight:1,
		tickStrokeLength:10,
		tickColour: "#fafafa",
		tickPadding: 10,
		numTicks:5,
		tickTextColour:"#FD6A94 ",
		tickTextSize: 14,
		tickDecimalPlace:  1,
		

	};

	
	
        //secondchart
		let barChart02 = {
			data: cleanData,
			chartWidth: 400,
			chartHeight: 400,
			x: 600,
			y: 500,
	
			barWidth:20,
			barColour: "#57CE60",
			barStrokeColour:"#57CE60",
			barStrokeThickness: 2,
			
			yAxisValue:"Total",
			xAxisLabel:"Age_Group",
	
			
			axisColour: "#57CE60",
			axisThickness: 3,
			
			labelPadding:8,
			labelColour: "#57CE60",
			labelRotation:60,
			
	
			titleText: "EXAMPLE",
			titleXOffset: -30,
			titleYOffset: 50,
			titleWidth: 300,
			TitleSize: 20,
	
	
			//tick
			tickStrokeWeight:1,
			tickStrokeLength:10,
			tickColour: "#fafafa",
			tickPadding: 10,
			numTicks:5,
			tickTextColour:"#FD6A94 ",
			tickTextSize: 14,
			tickDecimalPlace:  1,
			
	
		};
	

	

	barCharts.push(new BarChart(barChart01));
	barCharts.push(new hBarChart(barChart02));
}

function draw() {

	
	background(backgroundColour);
	
	barCharts.forEach(bar => bar.render());
}
