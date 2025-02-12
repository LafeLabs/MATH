
inLine = false;
lineArrayStack = [];
lineArray =[];

function setup() {
    rawdata = "";
    data = [];
    var httpc = new XMLHttpRequest();
    httpc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            rawdata = this.responseText;
            stringarray = rawdata.split(" ");
            for(var index = 0;index < stringarray.length;index++){
                data.push(parseInt(stringarray[index]));
            }
        }
    };
    httpc.open("GET", "fileloader.php?filename=data.txt", true);
    httpc.send();

    squareWidth = 100;

    if(innerWidth > innerHeight){
        squareWidth = innerHeight;
    }
    else{
        squareWidth = innerWidth;
    }
    
    createCanvas(0.5*squareWidth - 50, 0.5*squareWidth - 70);
    background('#808080');
    stroke(0);
    strokeWeight(30);
}

function draw() {
  
  stroke(0);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    inLine = true;
    var r  ={};
    r.x = mouseX;
    r.y = mouseY;
    lineArray.push(r);
  }
  else{
      if(inLine){
          lineArrayStack.push(lineArray);
          lineArray = [];
      }
      inLine = false;
  }
}