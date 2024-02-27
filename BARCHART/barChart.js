class BarChart {
  constructor(obj) {
    //used for the data
    this.data = obj.data;
    this.yAxisValue = obj.yAxisValue;
    this.xAxisLabel = obj.xAxisLabel;

    //position and size
    this.x = obj.x;
    this.y = obj.y;

    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;

    //bars
    this.barWidth = obj.barWidth;
    this.barColour = obj.barColour;
    this.numBars = obj.data.length;
    this.barStrokeColour = obj.barStrokeColour;
    this.barStrokeThickness = obj.barStrokeThickness;

    //axis
    this.axisColour = obj.axisColour;
    this.axisThickness = obj.axisThickness;

    //ticks
    this.tickColour = obj.tickColour;
    this.numTicks = obj.numTicks;
    this.tickTextColour = obj.tickTextColour;
    this.tickTextSize = obj.tickTextSize;
    this.tickPadding = obj.tickPadding;
    this.tickStrokeWeight = obj.tickStrokeWeight;
    this.tickStrokeLength = obj.tickStrokeLength;
    this.tickNumRounding = obj.tickNumRounding;
    this.tickDecimalPlaces =obj.tickDecimalPlaces;

    //labels
    this.labelColour = obj.labelColour;
    this.labelPadding = obj.labelPadding;
    this.labelRotation = obj.labelRotation;
    this.labelTextSize = obj.labelTextSize;
    this.labelAlignment = obj.labelAlignment;

    //text 

    this.titleText = obj.titleText;
    this.titleXOffset = obj.titleXOffset;
		this.titleYOffset = obj.titleYOffset;
		this.titleWidth = obj.titleWidth;
		this.titleSize = obj.titleSize;
	
  }

  //Vetical barchart

  render() {

    push(); // saves the current drawing style and transformation
    translate(this.x, this.y);


    //text
    textFont(fontReg)
    textAlign(LEFT);
    textSize(this.titleSize);
    fill(270); 
    text(this.titleText, this.chartWidth / 2 + this.titleXOffset, -this.chartHeight - this.titleYOffset, this.titleWidth); 
   
    //style for the axes
    noFill();
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);

     //draws the x and y axes
    line(0, 0, this.chartWidth, 0);
    line(0, 0, 0, -this.chartHeight);
    
    //style for the bars
    fill(this.barColour);
    stroke(this.barStrokeColour);
    strokeWeight(this.barStrokeThickness)
  
    
    
    let barGap =(this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1); //calculates the gap between each bar
    let maxValue = max(this.data.map((x) => x.Total)) //Will find the maximum value of the data
    let scale = this.chartHeight / maxValue; // calculates the scale
	  let labels = this.data.map((x) => x[this.xAxisLabel]); //finds the labels from the data 
	  // console.log(scale);


    //Loops through each bar
    for (let i = 0; i < this.numBars; i++) {

    
      let jump = ( barGap * (i + 1)) + (this.barWidth * i); //finds the X position of the current bar
      let colHeight = this.data[i][this.yAxisValue] * scale; //finds the height

      rect(jump, 0, this.barWidth, -colHeight);//makes the bar


      //style for the labels
      noStroke();
      fill(this.labelColour);
	    textSize (15);
	    textFont(fontReg)
      textAlign(LEFT, CENTER);
      

    //rotates each label for each bar
      push ()
      translate(jump + this.barWidth/2 , this.labelPadding);
      rotate(this.labelRotation);
      text(labels[i], 0, 0);
	    pop ()
    }

    
  
   
    let tickGap = this.chartHeight / this.numTicks; //calculates the gap between the ticks
    
    //loops through each tick
    for (let i = 0; i <= this.numTicks; i++) {


      noFill();
      stroke('#C2ED8C')
      line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap); //draws the tick
      
      //tick labels
      noStroke();
      fill(this.tickTextColour);
      textAlign(RIGHT, CENTER)
      textSize(16)
      text(maxValue/this.numTicks * i, -this.tickPadding + -this.tickStrokeLength, -i * tickGap);
    }

    pop();
  }
  
}
