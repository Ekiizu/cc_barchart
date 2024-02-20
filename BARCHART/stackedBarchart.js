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


      this.maxValue = this.calculatingTotal();
     
      
    }
    
  
 
      calculatingTotal() {
        let maxValues = this.data.map(item => {
          let male = parseFloat(item.Male); // Parse "Male" property as float
          let female = parseFloat(item.Female); // Parse "Female" property as float
          let sum = male + female;
          console.log("Sum:", sum);
          return sum;
      });
      console.log("Max Values:", maxValues);
      return Math.max(...maxValues);
  }

    
    render() {
      // console.log(data);
      push();
      translate(this.x, this.y);
  
      noFill();
      stroke(this.axisColour);
      strokeWeight(this.axisThickness);
  
      line(0, 0, this.chartWidth, 0);
      line(0, 0, 0, -this.chartHeight);
  
      noFill();
      stroke(this.barStrokeColour);
      strokeWeight(this.barStrokeThickness)
    
      let barGap = (this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1);

      let labels = this.data.map(item => item[this.xAxisLabel]);

      for (let i = 0; i < this.numBars; i++) {
          let jump = barGap * (i + 1) + this.barWidth * i;
          let maleHeight = (this.data[i].Male / this.maxValue) * this.chartHeight;
          // console.log(maleHeight)
          // console.log(this.barColours);
          fill(this.barColours[0]); // Male segment color
          rect(jump, 0, this.barWidth, -maleHeight);
      }

      for (let i = 0; i < this.numBars; i++) {
          let jump = barGap * (i + 1) + this.barWidth * i;
          let femaleHeight = (this.data[i].Female / this.maxValue) * this.chartHeight;

          fill(this.barColours[1]); // Female segment color
          rect(jump, -this.data[i].Male, this.barWidth, -femaleHeight);
      }
        
     
      for (let i = 0; i < this.numBars; i++) {
        let jump = barGap * (i + 1) + this.barWidth * i;
        // let colHeight = this.data[i][this.yAxisValue] * scale;
  
        // rect(jump, 0, this.barWidth, -colHeight);
  
        noStroke();
        fill("#f1f1f1");
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
        text(this.maxValue /this.numTicks * i, -this.tickPadding + -this.tickStrokeLength, -i * tickGap);
      }
      

  
      pop();
    }
    
    
  }  


  


  