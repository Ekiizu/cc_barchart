class oBarChart {
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
      this.barColours = obj.barColours;
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


      this.titleText = obj.titleText;
      this.titleXOffset = obj.titleXOffset;
        this.titleYOffset = obj.titleYOffset;
          this.titleWidth = obj.titleWidth;
          this.titleSize = obj.titleSize;
     
      
    
    }

    render() {
        push();
        translate(this.x, this.y);

      
        textAlign(LEFT);
        textSize(this.titleSize);
        fill(270); 
        text(this.titleText, this.chartWidth / 2 + this.titleXOffset, -this.chartHeight - this.titleYOffset, this.titleWidth); 

        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);

        line(0, 0, this.chartWidth, 0);
        line(0, 0, 0, -this.chartHeight);

        noFill();
        stroke(this.barStrokeColour);
        strokeWeight(this.barStrokeThickness);

        let barGap = (this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1);
        let labels = this.data.map(item => item[this.xAxisLabel]);

        for (let i = 0; i < this.numBars; i++) {
            let jump = barGap * (i + 1) + this.barWidth * i;
            let totalValue = this.data[i].Female + this.data[i].Male;

            let femaleHeight = (this.data[i].Female / totalValue) * this.chartHeight;
            let maleHeight = (this.data[i].Male / totalValue) * this.chartHeight;

            fill(this.barColours[0]); 
            rect(jump, 0, this.barWidth, -femaleHeight);

            fill(this.barColours[1]); 
            rect(jump, -femaleHeight, this.barWidth, -maleHeight);

            // Labels
            noStroke();
            fill(this.labelColour[0]); 
            textSize(this.labelTextSize);
            textAlign(LEFT, BOTTOM);
            text(this.data[i].Female, jump + this.barWidth / 2, -femaleHeight - this.labelPadding);

            fill(this.labelColour[1]); 
            text(this.data[i].Male, jump + this.barWidth / 2, -femaleHeight - maleHeight - this.labelPadding);

            // X-axis labels
            fill("#f1f1f1");
            textSize(this.labelTextSize);
            textFont(fontReg);
            textAlign(LEFT, CENTER);
            push();
            translate(jump + this.barWidth / 2, this.labelPadding);
            rotate(this.labelRotation);
            text(labels[i], 0, 0);
            pop();
        }

        // Ticks
        let tickGap = this.chartHeight / this.numTicks;
        for (let i = 0; i <= this.numTicks; i++) {
            noFill();
            stroke(this.tickColour);
            line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);

            noStroke();
            fill(this.tickTextColour);
            textAlign(RIGHT, CENTER);
            textSize(this.tickTextSize);
            text((this.maxValue / this.numTicks * i).toFixed(this.tickDecimalPlaces), -this.tickPadding - this.tickStrokeLength, -i * tickGap);
        }

        pop();
    }
}

//LOL DOES NOT WORK