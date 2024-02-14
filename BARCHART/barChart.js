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

    //labels
    this.labelColour = obj.labelColour;
    this.labelPadding = obj.labelPadding;
    this.labelRotation = obj.labelRotation;
    this.labelTextSize = obj.labelTextSize;
  }

  render() {
    push();
    translate(this.x, this.y);

    noFill();
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);

    line(0, 0, this.chartWidth, 0);
    line(0, 0, 0, -this.chartHeight);

    noStroke();
    fill(this.barColour);

    let barGap =
      (this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1);
	  let labels = this.data.map((x) => x[this.xAxisLabel]);
	  // console.log(barGap);
    for (let i = 0; i < this.numBars; i++) {
      let jump = barGap * (i + 1) + this.barWidth * i;
      let colHeight = this.data[i].Total * 10;

      rect(jump, 0, this.barWidth, -colHeight);

      noStroke();
      fill(this.labelColour);
	  textSize (15);
	  textFont(fontReg)
      textAlign(LEFT, CENTER);
      
      // console.log(labels)
push ()
      translate(jump + this.barWidth/2 , this.labelPadding);
      rotate(this.labelRotation);
      text(labels[i], 0, 0);
	  pop ()
    }

    noFill();
    //stroke(this.tickColour);
    //strokeWeight(this.tickStrokeWeight);
    let tickGap = this.chartHeight / this.numTicks;

    for (let i = 0; i <= this.numTicks; i++) {
      line(0, -1 * tickGap, -this.tickStrokeLength, -i * tickGap);
      noStroke();
      //fill(this.tickTextColour);
      Text("Emma", -this.tickPadding + -this.tickStrokeLength, -i * tickGap);
    }

    pop();
  }
}
