class sBarChart {
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
  }

  render() {
    console.log(this.data)
    push();
    translate(this.x, this.y);

    noFill();
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);

    line(0, 0, this.chartWidth, 0);
    line(0, 0, 0, -this.chartHeight);

    let maxValue =  max(this.data.map((x) => x[this.yAxisValue]));
    let scale = this.chartHeight / maxValue;
    let labels = this.data.map((item) => item[this.xAxisLabel]);

    let gap = (this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1);

    for (let i = 0; i < this.data.length; i++) {
        let xPos = gap + i * (this.barWidth + gap);
        let yPos = 0;

        // if (this.data[i][this.yAxisValue]) {

        for (let j = 0; j < this.data[i][this.yAxisValue].length; j++) {
            let stackedHeight = this.data[i][this.yAxisValue][j] * scale;

            // Assign different colors to different parts of the stacked bar
            if (j === 0) {
                fill('#FF0000');
            } else if (j === 1) {
                fill('#00FF00');
            } else if (j === 2) {
                fill('#0000FF');
            } else {
                fill('#FFFF00');
            }

            // Draw the stacked bar
            rect(xPos, yPos, this.barWidth, -stackedHeight);
            yPos -= stackedHeight; // Update position for the next stack category
        }
  //  } else {
  //           console.error(`Missing ${this.yAxisValue} property for data item at index ${i}`);
  //       }
        // Draw labels
        noStroke();
        fill(this.labelColour);
        textSize(15);
        textAlign(LEFT, CENTER);
        text(labels[i], xPos + this.barWidth / 2, this.labelPadding);
    }

    // Draw ticks
    let tickGap = this.chartHeight / this.numTicks;
    for (let i = 0; i <= this.numTicks; i++) {
        noFill();
        stroke(this.tickColour);
        line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);
        noStroke();
        fill(this.tickTextColour);
        textAlign(RIGHT, CENTER);
        textSize(16);
        text(maxValue / this.numTicks * i, -this.tickPadding - this.tickStrokeLength, -i * tickGap);
    }

    pop();
}


  
}

  