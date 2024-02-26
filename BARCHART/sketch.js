let data;
let cleanData = [];
let barCharts = [];

let fontLight;
let fontReg;
let fontBold;

let canvasWidth = 1800;
let canvasHeight = 1300;

// Colours
let backgroundColour = "#2C2C2C";




function preload() {
	// data = loadTable("data/Combined.csv", "csv", "header");
	data = loadTable("data/barchart.csv", "csv", "header");
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

		barWidth:25,
	    barColour: "",
		barStrokeColour:"#f1f1f1",
		barStrokeThickness: 3,
		
		yAxisValue:"Female",
		xAxisLabel:"Age_Group",

		
        axisColour: "#C2ED8C",
        axisThickness: 3,
		
		labelPadding:8,
		labelColour: "#f1f1f1",
		labelRotation:60,
		

		titleText: "Number of Disabled Women by Age",
		titleXOffset: -170,
		titleYOffset: 10,
		titleWidth: 400,
		titleSize: 18,


		//tick
		tickStrokeWeight:1,
		tickStrokeLength:10,
		tickColour: "#f1f1f1",
		tickPadding: 10,
		numTicks:5,
		tickTextColour:"#f1f1f1",
		tickTextSize: 14,
		tickDecimalPlace:  1,
		

	};

	//second barchart
	let barChart02 = {
		data: cleanData,
		chartWidth: 400,
		chartHeight: 400,
		x: 650,
		y: 500,

		barWidth:25,
		barColour: "",
		barStrokeColour:"#f1f1f1",
		barStrokeThickness: 3,
		
		yAxisValue:"Total",
		xAxisLabel:"Year",

		
		axisColour: "#879CE9", 
		axisThickness: 3,
		
		labelPadding:8,
		labelColour: "#f1f1f1",
		labelRotation:60,
		

		titleText: "Disabled People by Year ",
		titleXOffset: -115,
		titleYOffset: 10,
		titleWidth: 400,
		titleSize: 18,


		//tick
		tickStrokeWeight:1,
		tickStrokeLength:10,
		tickColour: "#f1f1f1",
		tickPadding: 10,
		numTicks:5,
		tickTextColour:"#f1f1f1",
		tickTextSize: 14,
		tickDecimalPlace:  1,			
		//lines
		lineColour:  "#FD6A94",
		lineThickness: 2,
		pointSize: 8,
		pointColour: "#96DED1",
		

	};

	
	
        //third chart
		let barChart03 = {
			data: cleanData,
			chartWidth: 400,
			chartHeight: 400,
			x: 1200,
			y: 500,
	
			barWidth:25,
			barColours: ["#57CE60", "#879CE9", "#FD6A94 "], //array of colours 
			barStrokeColour:"#57CE60",
			barStrokeThickness: 3,
			
			yAxisValue:"Total",
			xAxisLabel:"Age_Group",
	
			
			axisColour: "#f1f1f1",
			axisThickness: 3,
			
			labelPadding:8,
			labelColour:  ["#FF3176",  "#c2ed8c", "#a9d4ff" , "#f1f1f1"],
			labelRotation:0,


			titleText: "Total of Disabled People by Age Group",
			titleXOffset: -170,
			titleYOffset: 10,
			titleWidth: 400,
			titleSize: 18,
			
	
			
	
	
			//tick
			tickStrokeWeight:1,
			tickStrokeLength:10,
			tickColour: "#f1f1f1",
			tickPadding: 10,
			numTicks:5,
			tickTextColour:"#f1f1f1",
			tickTextSize: 14,
			tickDecimalPlace:  1,
			
	
		};



				
	
					




				

					//fourth barchart
					let barChart04 = {
						data: cleanData,
						chartWidth: 400,
						chartHeight: 400,
						x: 100,
						y: 1100,
				
						barWidth:25,
						barColours:  ["#879CE9","#c2ed8c",],
						barStrokeColour:"#879CE9",
						barStrokeThickness: 2,
						
						yAxisValue: ["Total", "Male"],
						xAxisLabel:"Age_Group",
						
				
						
						axisColour: "#f1f1f1",
						axisThickness: 3,
						
						labelPadding:8,
						labelColour:  ["#879CE9","#f1f1f1"],
						labelRotation:60,
						
				
						titleText: "Male and Female Disablitys by Age Group",
						titleXOffset: -190,
						titleYOffset: 10,
						titleWidth: 400,
						titleSize: 18,
				
				
						//tick
						tickStrokeWeight:1,
						tickStrokeLength:10,
						tickColour: "#879CE9",
						tickPadding: 10,
						numTicks:5,
						tickTextColour:"#879CE9",
						tickTextSize: 14,
						tickDecimalPlace:  1,
						
				
					};


					//fifth barchart
					let barChart05 = {
						data: cleanData,
						chartWidth: 400,
						chartHeight: 400,
						x: 650,
						y: 1100,
				
						barWidth:20,
						barColours:  ["#FF3176","#a9d4ff",],
						barStrokeColour:"#879CE9",
						barStrokeThickness: 3,
						
						yAxisValue: ["Female", "Male"],
						xAxisLabel:"Year",
						
				
						
						axisColour: "#f1f1f1",
						axisThickness: 3,
						
						labelPadding:8,
						labelColour:  ["#879CE9","#f1f1f1"],
						labelRotation:60,
						
				
						titleText: "Men and Women Registered as Having a Disability by Year",
						titleXOffset: -200,
						titleYOffset: 30,
						titleWidth: 400,
						titleSize: 17,
				
				
						//tick
						tickStrokeWeight:1,
						tickStrokeLength:10,
						tickColour: "#879CE9",
						tickPadding: 10,
						numTicks:5,
						tickTextColour:"#879CE9",
						tickTextSize: 16,
						tickDecimalPlace:  1,
						
				
					};


						//sixth barchart
						let barChart06 = {
							data: cleanData,
							chartWidth: 400,
							chartHeight: 400,
							x: 1200,
							y: 1100,
					
							barWidth:20,
							
							barStrokeColour:"#57CE60",
							barStrokeThickness: 4,
							
							yAxisValue: ["Female", "Male"],
							xAxisLabel:"Age_Group",
							
					
							
							axisColour: "#f1f1f1",
							axisThickness: 3,
							
							labelPadding:8,
							labelColour:   ["#FF3176",  "#c2ed8c", "#a9d4ff" , "#f1f1f1"],
							labelRotation:60,
							
					
							titleText: "Amoun of Men vs Women with Disabilitys",
							titleXOffset: -180,
							titleYOffset: 11,
							titleWidth: 400,
							titleSize: 18,
					
					
							//tick
							tickStrokeWeight:1,
							tickStrokeLength:10,
							tickColour: "#f1f1f1",
							tickPadding: 20,
							numTicks:5,
							tickTextColour:"#FF3176",
							tickTextSize: 16,
							tickDecimalPlace:  1,
	
							//lines
							lineColour:   ["#FF3176",  "#c2ed8c",],
							lineThickness: 4,
							pointSize: 10,
							pointColour: "#f1f1f1"
							
					
						};

		
			

	

	barCharts.push(new BarChart(barChart01));
	barCharts.push(new eBarChart(barChart02));
	barCharts.push(new hBarChart(barChart03));
	barCharts.push(new sBarChart(barChart04));
	barCharts.push(new oBarChart(barChart05));
	barCharts.push(new lBarChart(barChart06));
	
}

function draw() {
	
	
		
		
	
	background(backgroundColour);

	textFont(fontReg)
	textSize(25);
	    fill("#f1f1f1")
		text("People Registered as Having an Intellectual Disability", canvasWidth / 3.5,50);
	
	barCharts.forEach(bar => bar.render());
}
