class hBarChart {
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

    //Horizontal barchart
    //very similar to my vertical barchart
  
    render() {
      push();
      translate(this.x, this.y);
      
      textFont(fontReg)
      textAlign(LEFT);
      textSize(this.titleSize);
      fill(270); 
      text(this.titleText, this.chartWidth / 2 + this.titleXOffset, -this.chartHeight - this.titleYOffset, this.titleWidth);
  
      noFill();
      noStroke();
      stroke(this.axisColour);
      strokeWeight(this.axisThickness);
  
      line(0, 0, this.chartWidth, 0);
      line(0, 0, 0, -this.chartHeight);
      
  
      let barGap =(this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1);
      let maxValue = max(this.data.map((x) => x[this.yAxisValue]));
      let scale = this.chartWidth / max(this.data.map((x) => x.Total));
      let labels = this.data.map((x) => x[this.xAxisLabel]);
        // console.log(scale);

      noStroke();
      
     
      for (let i = 0; i < this.numBars; i++) {
      let jump = ( barGap * (i + 4)) + (this.barWidth * i);
      let colHeight = this.data[i][this.yAxisValue] * scale;
  
        rect(0, -jump, colHeight, this.barWidth);
  
       
        
        fill(this.labelColour[i % this.labelColour.length]);
        textSize (15);
        textFont(fontReg)
        textAlign(LEFT, CENTER);
        
  
        //labels
        push();
        translate(colHeight + this.labelPadding, -jump + this.barWidth / 2);
        rotate(this.labelRotation);
        text(labels[i], 0, 0);
        pop();

        
      }
  
      
      
      
      let tickGap = this.chartHeight / this.numTicks; 

      for (let i = 0; i <= this.numTicks; i++) {
          noFill();
          
          stroke(this.tickColour)
          let xPos = i * tickGap;
          // translate(-(i*(-this.chartHeight/this.numTicks)) / 3,2 ); // Moving the origin to the x-axis and moving the tick position (DID NOT WORK)
          line(xPos, 0, xPos, this.tickStrokeLength); // Draws a line for each tick
      
          noStroke();
          fill(this.tickTextColour);
          textAlign(CENTER, TOP); 
          textSize(16);
          text((maxValue / this.numTicks * i).toFixed(this.tickDecimalPlaces), xPos, this.tickPadding); // Reversing tick labels and positioning??
      }
      
      pop();
      
      
    }
    
  }
  