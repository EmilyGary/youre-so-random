//switch
let screen = 0;
let receipt = 0;

//sizing
let imgsize = 120;
let vidSizeX = 221*1.3;
let vidSizeY = 430*1.3;
canvasWidth = 1200;
canvasHeight = 800;

//font
let compFont;

//color
let paper1 = [245, 250, 250];
//let paper2= [232, 237, 237];
let tiktokblue = [61, 245, 239];
let tiktokred = [245, 29, 68];
let tiktokred2 = [250, 90, 125];
let tiktokblue2 = [181, 245, 243];
let tiktokblue3 = [47, 163, 160];

let paper2 = tiktokred;
let graphbackground = paper1;

//videos
let jenVideos = [];
let DadGFAccent;
let totalJenVideos = 7;

//audio
let vol = 0.2;

//character arc
let arcside = 1;
let arc_col=3;

//character arc images
let arcImage = [];
let numImages = 7;
let relationship;
let dance;
let military;
let blowdryer;
let dating;
let rap;
let beats;


//data
let visuals;
let gender_col = 4;
let age_col = 5;
let race_col = 6;
let gender_calc =0;
let age_calc= 0;
let race_w = 1;
let race_b = 1;
let race_a = 1;
let race_l = 1;
let race_na = 1;
let pie_w = 72;
let pie_b = 72;
let pie_a = 72;
let pie_l = 72;
let pie_na = 72;

let start_age = 25;
let age = start_age;
let start_gender = 0;
let gender = start_gender;
let pie = [pie_w,pie_b,pie_a,pie_l,pie_na];

let barchartw = 150;
let barcharth = vidSizeY/3/4;

// questions
let yes;
let no;
let question_col = 2;
let thankyou;

function preload(){
    jenVideos = [createVideo('JenVideos/DadGFAccent.mp4'),createVideo('JenVideos/BellyDancing.mp4'), createVideo('JenVideos/MilitaryHair.mp4'), 
                 createVideo('JenVideos/MilitaryHair.mp4'),
                 createVideo('JenVideos/NYCDating.mp4'), createVideo('JenVideos/islandboys.mp4'), createVideo('JenVideos/beats.mp4')];
  
visuals = loadTable('data/UrSoRandomVisualKey.csv','csv','header');
  
  relationship1 = loadImage('CharacterArc/relationship.png');
  dance1 = loadImage('CharacterArc/dance.png');
 military1 = loadImage('CharacterArc/military.png');
    blowdryer1 = loadImage('CharacterArc/blowdryer.png');
    dating1 = loadImage('CharacterArc/dating.png');
    rap1 = loadImage('CharacterArc/rap.png');
    beats1 =loadImage('CharacterArc/beats.png');

  compFont = loadFont('fonts/VCR_OSD_MONO.ttf');
}
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  colorMode(RGB);
  textFont(compFont);
  
  //arcImages
  relationship = new charArc(relationship1,0);
  dance = new charArc(dance1,1);
  military = new charArc(military1,2);
  blowdryer = new charArc(blowdryer1,3);
  dating = new charArc(dating1,4);
  rap = new charArc(rap1,5);
  beats = new charArc(beats1,6);
  
  arcImage = [relationship,dance,military,blowdryer,dating,rap,beats]; 
  
  //buttons
  yes = createButton('YES');
  no = createButton('NO');
  yes.position(canvasWidth/2-vidSizeX/4,1.28*vidSizeY+80);
  no.position(canvasWidth/2+vidSizeX/7,1.28*vidSizeY+80);
  
  thankyou = createButton('I AGREE');
  thankyou.position(canvasWidth/2-vidSizeX/10,1.28*vidSizeY);
  
}

function draw() {
  background(0,0,0);
  
 // console.log(mouseX,mouseY); 
  
  switch(receipt){
      case(0):
      
      yes.hide();
      no.hide();
      thankyou.show();
      thankyou.position(width/2,height/2);
      
      // Jennifer Videos
  for(i=0;i<totalJenVideos;i++){
  jenVideos[i].hide();} 
      
      push();
      fill("white");
      text("SCREEN 0!!!", width/2, height/2);
      pop();
      
      thankyou.show();
      thankyou.mousePressed(nextVid);
      console.log("receipt = 0, screen = " +screen);
      break;
      
    case(1):
    push();
      translate(0,80);
      
    //hide and show buttons
    thankyou.hide();
    yes.show();
    no.show();
    
     // Analyzing Header 
    push();
      textSize(42);
      fill(tiktokred);
      text("NOW ANALYZING...", 430,-30);
      pop();
    
      // Name header
      push();
      textSize(32);
      fill("white");
      text("JENNIFER LEJOS",480,20);
      pop();
    
      //Videos
      console.log("receipt = 1, screen = " +screen);
  displayVideos(jenVideos,totalJenVideos);
  
  //character arc
    arcReel();
      
  // Question Box
    questionbox(visuals.getString(screen,question_col));
      
  // Button functions
  yes.mousePressed(yesClick);
  no.mousePressed(noClick);
      
  // character arc      
     for(i=0;i <= 6; i++){
       arcImage[screen].print();
       arcImage[screen].scroll(i);
          // chart label
  push();
  textFont(compFont);
  textSize(16);
    fill(tiktokred);
  text("CHARACTER ARC", canvasWidth/2-vidSizeX-0.25*vidSizeX,canvasHeight/2+0.4*vidSizeY );
  pop();
       pop();
     }
           
  // graphs
    genderChart();
    ageChart();
    raceChart();    
  break;
  
  case(2):
  
      yes.hide();
      no.hide();
      thankyou.show();
      thankyou.mousePressed(nextVid);
  
      background("black");
      for(i=0;i<totalJenVideos;i++){
        jenVideos[i].hide();
        jenVideos[i].volume(0);
        yes.hide();
        no.hide();
      }
      push();
      fill(paper1);
      rectMode(CENTER);
      rect(width/2,height/2,200,600);
      pop();
      
      push();
      fill("black");
      textSize(30);
      textAlign(CENTER);
      text("OPPORTUNITY SUMMARY", width/2+5, height/2+10,200,600);
      pop();
      
      push();
      fill("black");
      textSize(15);
      textAlign(LEFT);
      text("BEAUTY      $3,394.93", width/2+5, height/2+100,200,600);
      text("DATING APPS $1,392.35", width/2+5, height/2+120,200,600);
      text("WEIGHT LOSS                       $4,782.81", width/2+5, height/2+140,200,600);
      text("CLOTHING    $1,832.67", width/2+5, height/2+180,200,600);
      text("HAIR SALON                          $642.99", width/2+5, height/2+200,200,600);
      text("CONCERTS      $427.53", width/2+5, height/2+240,200,600);
      pop();
      
      push();
      fill("black");
      textSize(18);
      textAlign(CENTER);
      text("MOST PROFITABLE CHARACTERISTICS", width/2+5, height/2+300,200,600);
      pop();
      
      push();
      textSize(16);
      textAlign(CENTER);
      text("FEMALE", width/2+5, height/2+360,200,600);
      text("INSECURE", width/2+5, height/2+380,200,600);
      text("SELF-ABSORBED", width/2+5, height/2+400,200,600);
      pop();
      
      push();
      fill("black");
      textSize(24);
      textAlign(CENTER);
      text("THANK YOU FOR YOUR TRANSACTION!", width/2, 900,200,600);
      pop();
      break;
  } // end of switch
  
  
} // end of draw

//character arc functions
function arcReel(){
    push();
  rectMode(CENTER);
  fill(color(tiktokred));
  rect(canvasWidth/2-vidSizeX-5,canvasHeight/2-0.15*vidSizeY,0.75*vidSizeX,vidSizeY);
  pop();
  
  push();
  rectMode(CENTER);
  fill(color(tiktokblue));
  rect(canvasWidth/2-vidSizeX,canvasHeight/2-0.15*vidSizeY,0.75*vidSizeX,vidSizeY);
  pop();
  
}

class charArc{
  constructor(img, index){
  this.img = img;
  this.index = index;
  this.y = 0.65*canvasHeight;
  this.x = canvasWidth/4-imgsize/3;
  this.side = 2*imgsize/3;
  }
  
  print(){
    for(i=0;i<6;i++){
image(this.img,this.x,this.y+i*imgsize,imgsize,imgsize);
image(this.img,this.x+this.side,this.y+i*imgsize,imgsize,imgsize);
    }
  }
  
  
  scroll(){
    if( this.y > -imgsize ){       
      this.print();
      this.y--;
  }  
  else{
    this.print();
    this.y = 0;
  } 
}
  
}


// video functions
function displayVideos(vidArray,numVid){
  let i = 0;
  if(screen == 0){
      vidArray[screen].show();
      vidArray[screen].volume(vol);
    console.log(screen + " is screen when == 0");
    }
  while(i<numVid){
    if(i!=screen){
      console.log(screen + " is screen first loop" );
    vidArray[i].hide();
    vidArray[i].volume(0);  
    }
    if(i==screen){
      vidArray[screen].show();
      vidArray[screen].volume(vol);
    }
    i++;
  }
  
}

// button functions
function nextVid(){
  
  if(receipt == 0){
    // Jennifer Videos
  for(i=0;i<totalJenVideos;i++){
  jenVideos[i].size(vidSizeX,vidSizeY);
  jenVideos[i].position(canvasWidth/2-vidSizeX/2,canvasHeight/2 - 0.65*vidSizeY+80);
  jenVideos[i].loop();
  } 
    screen = 0;
    receipt = 1;
    
  }
  
  else if(receipt == 1 && screen < totalJenVideos-1){
    screen++;
  }
  else if (receipt == 1){
    receipt = 2;
  }
  
  else if (receipt == 2 ){
      screen = 0;
      receipt = 0;
 gender_calc =0;
 age_calc= 0;
 race_w = 1;
 race_b = 1;
 race_a = 1;
 race_l = 1;
 race_na = 1;
 pie_w = 72;
 pie_b = 72;
 pie_a = 72;
 pie_l = 72;
 pie_na = 72;
 start_age = 25;
 age = start_age;
 start_gender = 0;
 gender = start_gender;
           }
   
}

function yesClick(){
  gender_calc = gender_calc+visuals.getNum(screen,gender_col);
  age_calc = age_calc + visuals.getNum(screen,age_col);
  if(visuals.getNum(screen,race_col)==0){
    race_w+=2;
  }
  else if(visuals.getNum(screen,race_col)==1){
    race_b+=2;
  }
  else if(visuals.getNum(screen,race_col)==2){
    race_a+=2;
  }
  else if(visuals.getNum(screen,race_col )==3){
    race_l+=2;
  }
  else if(visuals.getNum(screen,race_col)==4){
    race_na+=2;
  }
  
  nextVid();
}

function noClick(){
if(visuals.getNum(screen,gender_col)==0){
  gender_calc = gender_calc+1;
}
  if(visuals.getNum(screen,gender_col)==1){
  gender_calc = gender_calc+0;
}
  age_calc = age_calc + -1*visuals.getNum(screen,age_col);
  
  if(visuals.getNum(screen,race_col)==0 && race_w >0){
      race_w--;
  }
  else if(visuals.getNum(screen,race_col)==1 && race_b >0){
    race_b--;
  }
  else if(visuals.getNum(screen,race_col)==2 && race_a >0){
    race_a--;
  }
  else if(visuals.getNum(screen,race_col) ==3 && race_l >0 ) {
    race_l--;
  }
  else if(visuals.getNum(screen,race_col)==4 && race_na >0){
    race_na--;
  }  
  
  nextVid();
}

// questions
function questionbox(words){
 push();
  noStroke();
  fill(paper2);
  rect(width/2+5,height/2+vidSizeY/2+5,vidSizeX,vidSizeY/4);
  pop();
  
  push();
  noStroke();
  fill(paper1);
  rect(width/2,height/2+vidSizeY/2,vidSizeX,vidSizeY/4);
  pop();
  
  push();
  textSize(28);
  textAlign(CENTER);
  textFont(compFont);
  text(words,width/2+20,height/2+0.55*vidSizeY,vidSizeX,vidSizeY/4);
  pop();
}

// metrics functions
function calcAge() {
  //sum of age responses
  age = start_age + age_calc;
  ageError = 7-screen;
}
function calcGender(){
  //average of gender responses
  gender = (start_gender + gender_calc)/(screen+1);
}

function calcRace(){
  // find the angles allocated
  pie_w = (race_w/(race_w+race_b+race_a+race_l+race_na))*360;
  pie_b = (race_b/(race_w+race_b+race_a+race_l+race_na))*360;
  pie_a = (race_a/(race_w+race_b+race_a+race_l+race_na))*360;
  pie_l = (race_l/(race_w+race_b+race_a+race_l+race_na))*360;
  pie_na = (race_na/(race_w+race_b+race_a+race_l+race_na))*360;
  pie = [pie_w,pie_b,pie_a,pie_l,pie_na];
}

function pieChart(diameter,x,y) {
  calcRace();
  let lastAngle = 0;
  push();
  for (let i = 0; i < pie.length; i++) {
    let colors = [tiktokred,tiktokblue,tiktokred2,tiktokblue2, "white"];
    fill(colors[i]);
    arc(
      x,
      y,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(pie[i])
    );
    lastAngle += radians(pie[i]);
  }
  pop();
}

function genderChart(){
  let startchartw = 2*width/3;
  let startcharth = height/20;
  let starttextw = 0.65*width;
  let starttexth = height/20+1.6*barcharth;
  let graphoffset = vidSizeY/6-barcharth;
  
  calcGender();
  
  //background
  /*push();
  fill(graphbackground);
  rectMode(CORNER);
  rect(startchartw,startcharth, barchartw,3*barcharth);
  pop();*/
  
  push();
  fill(255,255,255);
  text("F",starttextw,starttexth);
  text("M",starttextw+barchartw+30,starttexth);  
  pop();
  
  // Female
  push();
  fill(tiktokred);
  noStroke();
  rectMode(CORNER);
  rect(startchartw,startcharth+graphoffset,(barchartw-map(gender,0,1,0,barchartw)),barcharth);
  pop();
  
  // Male
  push();
  fill(tiktokblue);
  noStroke();
  rectMode(CORNER);
 rect(startchartw+(barchartw-map(gender,0,1,0,barchartw)),startcharth+graphoffset,(map(gender,0,1,0,barchartw)),barcharth);
  pop();
  
  // chart label
  push();
  textFont(compFont);
  textSize(14);
    fill(tiktokblue);
  text("GENDER ANALYTICS", startchartw+barchartw/12,startcharth+2.8*barcharth );
  pop();

}

function ageChart(){
  let startchartw = 2*width/3;
  let startcharth = height/20+4.1*barcharth;
  let starttextw = 0.65*width;
  let starttexth = height/20+5.6*barcharth;
  let graphoffset = 5.35*barcharth;
  let bracketoffset = 5.5*barcharth;
  
  calcAge();
  
  
  //background box
  push();
  fill(tiktokblue);
  rectMode(CORNER);
  rect(startchartw,startcharth, barchartw,3*barcharth);
  pop();
  
  push();
  fill(255,255,255);
  text("13",starttextw,starttexth);
  text("60",starttextw+barchartw+30,starttexth);  
  pop();
  
  // line
  push();
line(startchartw,barcharth+graphoffset,startchartw+barchartw,barcharth+graphoffset);
  pop();
  
  // min age
  push();
  textSize(24);
  text(char(91),map(age-ageError/2,13,60,startchartw,startchartw+barchartw),barcharth+bracketoffset);
  pop();
  
  // max age
  push();
  textSize(24);  text(char(93),map(age+ageError/2,13,60,startchartw,startchartw+barchartw),barcharth+bracketoffset);
  pop();
  
    //tick marks
  push();
  textSize(8);  text(char(124),map(20,13,60,startchartw,startchartw+barchartw),barcharth+bracketoffset-3);  text('20',map(20,13,60,startchartw-6,startchartw+barchartw),barcharth+bracketoffset+12); text(char(124),map(30,13,60,startchartw,startchartw+barchartw),barcharth+bracketoffset-3);  text('30',map(30,13,60,startchartw-8,startchartw+barchartw),barcharth+bracketoffset+12);
  text(char(124),map(40,13,60,startchartw,startchartw+barchartw),barcharth+bracketoffset-3);  text('40',map(40,13,60,startchartw-6,startchartw+barchartw),barcharth+bracketoffset+12);  text(char(124),map(50,13,60,startchartw,startchartw+barchartw),barcharth+bracketoffset-3);  text('50',map(50,13,50,startchartw-8,startchartw+barchartw),barcharth+bracketoffset+12);
  text(char(124),map(80,13,100,startchartw,startchartw+barchartw),barcharth+bracketoffset-3);  text('80',map(80,13,100,startchartw-8,startchartw+barchartw),barcharth+bracketoffset+12);
  pop();
  
  // chart label
  push();
  textFont(compFont);
  textSize(14);
    fill(tiktokred);
  text("AGE ANALYTICS", startchartw+barchartw/5,startcharth+3.5*barcharth );
  pop();

}

function raceChart(){
  let startchartw = 2*width/3;
  let startcharth = height/20+8.3*barcharth;
  let starttextw = 0.65*width;
  let starttexth = height/20+9.6*barcharth;
  let graphoffset = barchartw/2;
  let d = barchartw - 20;
  
  //background
  /*push();
  fill(graphbackground);
  rectMode(CORNER);
  rect(startchartw,startcharth, barchartw,3*barcharth);
  pop();*/
  
  //pie chart
  pieChart(d,startchartw+graphoffset,startcharth+graphoffset-5);
  
  // chart label
  push();
  textFont(compFont);
  fill(tiktokblue);
  textSize(14);
  text("RACE ANALYTICS", startchartw+barchartw/5,startcharth+3.5*barcharth );
  pop();

}
//NOTES - MIGHT NEED LATER
//image(jenVideos[0],width/2,height/2, vidSizeX, vidSizeY);
  //jenVideos[screen].onended(nextVid);