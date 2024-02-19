class sBarChart {
  constructor(obj) {
    //used for the data
    this.data = obj.data;
    this.yAxisValue = obj.yAxisValue;
    this.xAxisLabel = obj.xAxisLabel;
    this.zAxisValue = obj.zAxisValue;

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
  }

  render() {
    push();
    translate(this.x, this.y);

    noFill();
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);

    line(0, 0, this.chartWidth, 0);
    line(0, 0, 0, -this.chartHeight);

    fill(this.barColour);
    stroke(this.barStrokeColour);
    strokeWeight(this.barStrokeThickness)
  

    let barGap =(this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1);
    let maxValue = max(this.data.map((x) => x[this.yAxisValue]));
    let scale = this.chartHeight / maxValue;
    let labels = this.data.map(item => item[this.xAxisLabel]);
	  // console.log(scale);
    for (let i = 0; i < this.numBars; i++) {
      let xPos = barGap * (i + 1) + this.barWidth * i;
      let yPos = 0; //starting position for the first bars
      let zPos = 0; //starting position for the second bars

      for (let j = 0; j < this.yAxisValue.length; j++) {
        let value = this.data[i][this.yAxisValue[j]];
        let colHeight = value * scale;

        fill("#96DED1");
        rect(xPos - this.barWidth / 2, yPos, this.barWidth, -colHeight);
        yPos -= colHeight; //updating position for the next bar 
      }

      //repeat
      for (let j = 0; j < this.zAxisValue.length; j++) {
        let value = this.data[i][this.zAxisValue[j]];
        let colHeight = value * scale;

        fill("#966781");
        rect(xPos - this.barWidth / 2, zPos, this.barWidth, -colHeight);
        zPos -= colHeight;
      }
      

      noStroke();
      fill(this.labelColour);
	    textSize (15);
	    textFont(fontReg)
      textAlign(LEFT, CENTER);
      

    
push ()
      translate(xPos + this.barWidth/2 , this.labelPadding);
      rotate(this.labelRotation);
      text(labels[i], 0, 0);
	  pop ()
    }

    
    
    //ticks
    
    // line(0,0,-10,0)
   
    let tickGap = this.chartHeight / this.numTicks;

    for (let i = 0; i <= this.numTicks; i++) {
      noFill();
      stroke('#57CE60')
      line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);
      
      noStroke();
      fill(this.tickTextColour);
      textAlign(RIGHT, CENTER)
      textSize(16)
      text(maxValue/this.numTicks * i, -this.tickPadding + -this.tickStrokeLength, -i * tickGap);
    }

    pop();
  }
  
}

  