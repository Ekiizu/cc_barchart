class sBarChart {
    constructor(obj) {
      //used for the data
      this.data = obj.data;
      this.yAxisValue = obj.yAxisValue;
      this.xAxisLabel = obj.xAxisLabel;
      this.zValue = obj.zValue;
  
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

      //Alannah showed me this lol
      // this.maxValue = this.calculatingTotal();
      this.maxValue = (this.data.map(item => +(item[this.yAxisValue[1],this.yAxisValue[0]])));
      console.log(this.maxValue)
      
      
    }
    
    
    render() {
      // console.log(data);
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
  
      line(0, 0, this.chartWidth, 0); //draws x axis
      line(0, 0, 0, -this.chartHeight); //draws y axis
  
      noFill();
      stroke(this.barStrokeColour);
      strokeWeight(this.barStrokeThickness)
    
      let barGap = (this.chartWidth - this.numBars * this.barWidth) / (this.numBars + 1);

      let labels = this.data.map(item => item[this.xAxisLabel]);
    

      for (let i = 0; i < this.numBars; i++) {
        push()
        for (let j = 0; j < this.yAxisValue.length; j++) {
          let currentYAxis = this.yAxisValue[j]; //gets current yAxisValue
         
          //loops through each bar
   
          let height =
            (this.data[i][currentYAxis] / this.maxValue) * this.chartHeight; //calculates the height of the bar
            let jump = barGap * (i + 1) + this.barWidth * i; //x position for bar
       
          fill(this.barColours[j]); // Use different color for each yAxisValue
          rect(jump, 0, this.barWidth, -height); //draws the bar
          translate(0,-height)
        }
        pop()
       
      }


        
     //loops through each bar the display the labels
      for (let i = 0; i < this.numBars; i++) {
        let jump = barGap * (i + 1) + this.barWidth * i; //calculates x position of current bar
        
        // let colHeight = this.data[i][this.yAxisValue] * scale;
        // rect(jump, 0, this.barWidth, -colHeight);
  
        //style for the labels
        noStroke();
        fill("#f1f1f1");
        textSize (15);
        textFont(fontReg)
        textAlign(LEFT, CENTER);
        
  
        //label rotations
        push ()
        translate(jump + this.barWidth/2 , this.labelPadding);
        rotate(this.labelRotation);
        text(labels[i], 0, 0);
        pop ()
      }
  
      

     
      let tickGap = this.chartHeight / this.numTicks; // gap between ticks
      
      //loops through each tick
      for (let i = 0; i <= this.numTicks; i++) {
        noFill();
        stroke(this.tickColour)
        line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);
        
        noStroke();
        fill(this.tickTextColour);
        textAlign(RIGHT, CENTER)
        textSize(16)
        text(this.maxValue /this.numTicks * i, -this.tickPadding + -this.tickStrokeLength, -i * tickGap); // displays tick labels
      }
      

      //added a legend for yAxisValues so chart is easy to understand
        let legendX = 160;
        let legendY = 100; 
        let legendItemWidth = 30;
        let legendItemHeight = 20; 
     
      //loop to draw the legend items
      for (let j = 0; j < this.yAxisValue.length; j++) {
          fill(this.barColours[j]);
          rect(legendX + j * (legendItemWidth + 30), legendY, legendItemWidth, legendItemHeight); //+20 to add some padding in between the boxes
          

          //text
          fill(255)
          textAlign(CENTER);
          textSize(15); 
          text(this.yAxisValue[j], legendX + j * (legendItemWidth + 30) + legendItemWidth / 2 , legendY + legendItemHeight + 20);
      }
  
      

  
      pop();
    }
    
    
  }  


  
 //This worked but i could not toggle the values from sketch.js :( 

      // for (let i = 0; i < this.numBars; i++) {
      //     let jump = barGap * (i + 1) + this.barWidth * i;
      //     let maleHeight = (this.data[i][this.yAxisValue] / this.maxValue) * this.chartHeight;
      //     // console.log(maleHeight)
      //     // console.log(this.barColours);
      //     fill(this.barColours[0]); // Male segment color
      //     rect(jump, 0, this.barWidth, -maleHeight);
      // }

      // for (let i = 0; i < this.numBars; i++) {
      //     let jump = barGap * (i + 1) + this.barWidth * i;
      //     let femaleHeight = (this.data[i][this.yAxisValue] / this.maxValue) * this.chartHeight;

      //     fill(this.barColours[1]); // Female segment color
      //     rect(jump, -this.data[i][this.yAxisValue], this.barWidth, -femaleHeight);
      // }