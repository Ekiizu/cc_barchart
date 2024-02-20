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

      
      // this.maxValue = this.calculatingTotal();
      // let maxValue = max(this.data.map((x) => x.Total))
      // let scale = this.chartHeight / max(this.data.map((x) => x.Total));
    // }
    // let maxValue = max(this.data.map((x) => x.Total))
    // let scale = this.chartHeight / max(this.data.map((x) => x.Total));
    // calculatingTotal (){

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
  
      
      
      //ticks
      
      // line(0,0,-10,0)
     
      let tickGap = this.chartHeight / this.numTicks;
  
      for (let i = 0; i <= this.numTicks; i++) {
        noFill();
        stroke(this.tickColour)
        line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);
        
        noStroke();
        fill(this.tickTextColour);
        textAlign(RIGHT, CENTER)
        textSize(16)
        text(maxValue/this.numTicks * i, -this.tickPadding + -this.tickStrokeLength, -i * tickGap);
      }
      

    //   textSize(30)
    //   fill(this.labelColour)
    //   textFont(fontReg)
    //   text(Emma,0,0,0)
  
      pop();
    }
    
    
  }


  


  