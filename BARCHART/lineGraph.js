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

      this.titleText = obj.titleText;
      this.titleXOffset = obj.titleXOffset;
      this.titleYOffset = obj.titleYOffset;
      this.titleWidth = obj.titleWidth;
      this.titleSize = obj.titleSize;
    }
  
      
    render() {
        push();
        translate(this.x, this.y);

        textFont(fontReg)
        textAlign(LEFT);
        textSize(this.titleSize);
        fill(270); 
        text(this.titleText, this.chartWidth / 2 + this.titleXOffset, -this.chartHeight - this.titleYOffset, this.titleWidth);

        
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line(0, 0, this.chartWidth, 0); 
        line(0, 0, 0, -this.chartHeight); 

       
        let maxValue = max(this.data.map(item => Math.max(item[this.yAxisValue[0]], item[this.yAxisValue[1]])));
        let xJump = this.chartWidth / (this.data.length - 1); 

        
        noFill();
        stroke(this.lineColour[0]); 
        strokeWeight(this.lineThickness);
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let xPos = i * xJump;
            let yPos1 = map(this.data[i][this.yAxisValue[0]], 0, maxValue, 0, -this.chartHeight);
            vertex(xPos, yPos1);
        }
        endShape();

        // Draw second line connecting data points
        noFill();
        stroke(this.lineColour[1]);
        strokeWeight(this.lineThickness);
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let xPos = i * xJump;
            let yPos2 = map(this.data[i][this.yAxisValue[1]], 0, maxValue, 0, -this.chartHeight);
            vertex(xPos, yPos2);
        }
        endShape();

        // Draw points for the first line
        fill(this.pointColour[0]);
        noStroke();
        for (let i = 0; i < this.data.length; i++) {
            let xPos = i * xJump;
            let yPos1 = map(this.data[i][this.yAxisValue[0]], 0, maxValue, 0, -this.chartHeight);
            ellipse(xPos, yPos1, this.pointSize);
        }

        // Draw points for the second line
        fill(this.pointColour[1]); 
        noStroke();
        for (let i = 0; i < this.data.length; i++) {
            let xPos = i * xJump;
            let yPos2 = map(this.data[i][this.yAxisValue[1]], 0, maxValue, 0, -this.chartHeight);
            ellipse(xPos, yPos2, this.pointSize);
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
            textSize(this.tickTextSize);
            textFont(fontReg);
            text(nf(maxValue / this.numTicks * i, this.tickNumRounding, this.tickDecimalPlaces), -this.tickPadding, tickY);// SOMETHING WRONG HERE
        }

        let legendX = 160;
        let legendY = 100; 
        let legendItemWidth = 30;
        let legendItemHeight = 20; 
      
        for (let j = 0; j < this.yAxisValue.length; j++) {
            // console.log(this.barColour)
            // console.log(this.lineColour)
            fill(this.lineColour[j]);
            rect(legendX + j * (legendItemWidth+ 30), legendY, legendItemWidth, legendItemHeight); //+20 to add some padding in between the boxes
  
            fill(255)
            textAlign(CENTER);
            textSize(15); 
            text(this.yAxisValue[j], legendX + j * (legendItemWidth + 30) + legendItemWidth / 2 , legendY + legendItemHeight + 20);
        }

        


        

        

        // Draw labels on the x-axis
        noStroke();
        textAlign(LEFT, CENTER);
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



  