let data;
let cleanData = [];
let barCharts = [];

let fontLight;
let fontReg;
let fontBold;

let canvasWidth = 600;
let canvasHeight = 600;

// Colours
let backgroundColour = "#2C2C2C";
let axisColour = "57CE60";
let axisThickness = 3;
let barColour = "#57CE60";

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
		barWidth:30,
		barColour: "#57CE60",
        axisColour: "#57CE60",
		axisThickness: 3,
		xAxisLabel:"Female",
		labelPadding:1,
		labelColour:"#50DFC3",
		labelRotation:90
		

	};

	barCharts.push(new BarChart(barChart01));
}

function draw() {

	
	background(backgroundColour);
	
	barCharts.forEach(bar => bar.render());
}
