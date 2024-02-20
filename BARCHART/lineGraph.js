class lBarChart {
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

      //line
      this.lineColour =obj.lineColour;
      this.lineThickness = obj.lineThickness;
      this.pointSize = obj.pointSize;
      this.pointColour = obj.pointColour;
    }
  
    render() {
        push();
        translate(this.x, this.y);

        // Draw x and y axes
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line(0, 0, this.chartWidth, 0); // X axis
        line(0, 0, 0, -this.chartHeight); // Y axis

        // Calculate maximum value for scaling
        let maxValue = max(this.data.map((x) => x[this.yAxisValue]));
        let xJump = this.chartWidth / (this.data.length - 1); // Calculate jump size for x-axis

        // Draw lines connecting data points
        noFill();
        stroke(this.lineColour);
        strokeWeight(this.lineThickness);
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let xPos = i * xJump;
            let yPos = map(this.data[i][this.yAxisValue], 0, maxValue, 0, -this.chartHeight);
            vertex(xPos, yPos);
        }
        endShape();

        // Draw points at data points
        fill(this.pointColour);
        noStroke();
        for (let i = 0; i < this.numBars; i++) {
            let xPos = i * xJump;
            let yPos = map(this.data[i][this.yAxisValue], 0, maxValue, 0, -this.chartHeight);
            ellipse(xPos, yPos, this.pointSize);
        }

        // Draw ticks and labels on the y-axis
        let tickGap = this.chartHeight / this.numTicks;
        for (let i = 0; i <= this.numTicks; i++) {
            let tickY = -i * tickGap;
            stroke(this.tickColour);
            line(-this.tickStrokeLength, tickY, 0, tickY); // Tick mark
            noStroke();
            fill(this.tickTextColour);
            textAlign(RIGHT, CENTER);
            textFont(fontReg)
            textSize(this.tickTextSize);
            text(nf(maxValue / this.numTicks * i, this.tickNumRounding, this.tickDecimalPlaces), -this.tickPadding, tickY); 
            
        }

        // Draw labels on the x-axis
        noStroke();
        textAlign(LEFT,CENTER);
        textSize(14);
        fill(this.labelColour);

        
        for (let i = 0; i < this.numBars; i++) {
            let xPos = i * xJump;
            let label = this.data[i][this.xAxisLabel];
            push();
            translate(xPos, this.labelPadding);
            rotate(this.labelRotation);
            text(label, 0, 0);
            pop();
        }

        pop();
    }
    
  }
  