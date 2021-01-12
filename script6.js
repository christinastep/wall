
let buttonDownload=document.querySelector(".download");
let buttonReload=document.querySelector(".reload");
let buttonColor=document.querySelector("#color");
let buttonMoins=document.querySelector("#moins");
let buttonPlus=document.querySelector("#plus");

let starNumberInput=document.querySelector("#starNumber");
let text=document.querySelector(".box__text")

let starNumber=20;

let input=document.querySelector("textarea");
let wrapper=document.querySelector(".wrapper");

let chaos=false;
let message=false;
let saveCenter=false;

let colors=["red","blue","yellow","green","violette","white"];

let forms=["round","square"]
let size =[5,10,20,30];
sizeLevel=1;
var boxTotal;


document.addEventListener("DOMContentLoaded", function(event) {
   calcBoxes();
   creatBoxes(boxTotal)
  window.addEventListener("resize", function(){
    calcBoxes();
    creatBoxes(boxTotal)
  });  
});


 


function changePosition(){
  let boxes=document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.setAttribute("data-counter", Math.floor(Math.random() * 5));
  }
}

function changeColor(){
  let boxes=document.querySelectorAll(".box");
  let color=colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.style.backgroundColor=color
  }
}

function lessBoxes(){
  if (sizeLevel>0) {
    sizeLevel= sizeLevel - 1;
    calcBoxes()
    creatBoxes(boxTotal)
  }
}

function moreBoxes(){
  if (sizeLevel<size.length) {
    sizeLevel= sizeLevel + 1;
    calcBoxes()
    creatBoxes(boxTotal)
  }
}

function calcBoxes(){
  //width=80vw
  //height=90vh
  var heightViewport= window.innerHeight*0.9;


  var boxWidth= (window.innerWidth*0.8)/size[sizeLevel];

  console.log("box par row "+size[sizeLevel])
  console.log("wrapper height "+document.querySelector(".output").offsetHeight)
  console.log("box Widh "+boxWidth)
  let wrapperHeight=document.querySelector(".output").offsetHeight;

  var rowNumber = Math.floor(wrapperHeight/boxWidth);
  console.log(rowNumber)
  boxTotal = rowNumber*size[sizeLevel];

  document.documentElement.style.setProperty('--size', boxWidth +"px");
}


function creatBoxes(boxTotal){
  for (let i = 0; i < boxTotal; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.setAttribute("data-counter", Math.floor(Math.random() * 5));
    newDiv.innerHTML = '<div class="box__circle"></div>';
    document.querySelector(".output").appendChild(newDiv);
  }

  let boxes = document.querySelectorAll(".box");

  for (let i = 0; i < boxes.length; i++) {
    let counter = boxes[i].getAttribute("data-counter");
    boxes[i].addEventListener("click",function(){
      console.log("counter")
      counter++;
      if(counter == 1){
        boxes[i].setAttribute("data-counter",1);
      }
      if(counter == 2){
        boxes[i].setAttribute("data-counter",2);
      }
      if(counter == 3){
        boxes[i].setAttribute("data-counter",3);
      }
      if(counter == 4){
        boxes[i].setAttribute("data-counter",4);
        counter = 4;
      }
      if(counter == 5){
        boxes[i].setAttribute("data-counter",0);
        counter = 0;
      }
    })
  }

}




buttonReload.addEventListener("click",function(){
  changePosition()
});

buttonColor.addEventListener("click",function(){
  changeColor()
});
buttonMoins.addEventListener("click",function(){
  lessBoxes()
});
buttonPlus.addEventListener("click",function(){
  moreBoxes();
  
});


buttonDownload.addEventListener("click",function(){
  console.log("click");
  var node = document.querySelector('.wrapper');

  domtoimage.toPng(node, { 
    height: node.offsetHeight * 2,
    width: node.offsetWidth * 2,
    style: {
      transform: "scale(2)",
      transformOrigin: "top left",
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
      quality: 0.95
    }
    })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'tolette.png';
        link.href = dataUrl;
        link.click();
    });
  })




