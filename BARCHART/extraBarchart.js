class eBarChart {
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
    //Vertical barchart with different data
    //This is the same as my first one so I did not comment it 
    render() {
  
      push();
      translate(this.x, this.y);
      
      textFont(fontReg)
      textAlign(LEFT);
      
      textSize(this.titleSize);
      fill(270); 
      text(this.titleText, this.chartWidth / 2 + this.titleXOffset, -this.chartHeight - this.titleYOffset, this.titleWidth); 
     
  
      noFill();
      stroke(this.axisColour);
      strokeWeight(this.axisThickness);
  
      line(0, 0, this.chartWidth, 0);
      line(0, 0, 0, -this.chartHeight);
  
      fill(this.barColour);
      stroke(this.barStrokeColour);
      strokeWeight(this.barStrokeThickness)
    
  
      let barGap =(this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1);
      let maxValue = max(this.data.map((x) => x.Total))
      let scale = this.chartHeight / max(this.data.map((x) => x.Total));
        let labels = this.data.map((x) => x[this.xAxisLabel]);
        // console.log(scale);
      for (let i = 0; i < this.numBars; i++) {
        let jump = ( barGap * (i + 1)) + (this.barWidth * i);
        let colHeight = this.data[i][this.yAxisValue] * scale;
  
        rect(jump, 0, this.barWidth, -colHeight);
  
        noStroke();
        fill(this.labelColour);
          textSize (15);
          textFont(fontReg)
        textAlign(LEFT, CENTER);
        
  
      
  push ()
        translate(jump + this.barWidth/2 , this.labelPadding);
        rotate(this.labelRotation);
        text(labels[i], 0, 0);
        pop ()
      }
  
      
      
      
     
      let tickGap = this.chartHeight / this.numTicks;
  
      for (let i = 0; i <= this.numTicks; i++) {
        noFill();
        stroke("#879CE9")
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