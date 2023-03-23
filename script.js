let colors = [];

let length = 6;  // lenth of color array


// Assigning random color in our array
for (let i = 0; i < 6; i++) {
  colors[i] = randomColorGenerator();
}
//Picking random color from our colors array
let givenColor = randomPicker(length);

// Declaring all the related variable
let box = Array.from(document.getElementsByClassName("box"));
let result = document.getElementById("result");
let bannerColor = document.getElementById("givenColor");
let newColor = document.getElementById("newColor");
let navbar = document.getElementById("navback");
let easy = document.getElementById("easy");
let hard = document.getElementById("hard");


// Code for easy button
easy.addEventListener("click", ()=>{
length=3;
easy.style.backgroundColor= "rgb(10, 99, 99)";
easy.style.color="white";
hard.style.backgroundColor= "white";
hard.style.color="rgb(10, 99, 99)";

if(newColor.innerText==="PLAY AGAIN"){
    for (let i = 0; i < 6; i++) {
        if(i<length)
        {colors[i]=givenColor;}
        else
        colors[i]="rgb(5, 3, 30)"; //bg
      }

      box.forEach((element, i) => {
        element.style.backgroundColor = colors[i];
      });
}
else
{for (let i = 0; i < 6; i++) {
    if(i<length)
    {}
    else
    colors[i]="rgb(5, 3, 30)";  //bg
  }

  givenColor = randomPicker(length);
  bannerColor.innerText = givenColor.toUpperCase();
  newColor.innerText = "NEW COLOR";
  result.innerText = "";
  navbar.style.backgroundColor =  "rgb(10, 99, 99)"; //navbar default color
  box.forEach((element, i) => {
    element.style.backgroundColor = colors[i];
  });}

  

}
)



//Code for hard button
hard.addEventListener("click", ()=>{
    length=6;
    easy.style.backgroundColor= "white";
    easy.style.color="rgb(10, 99, 99)";
    hard.style.backgroundColor= "rgb(10, 99, 99)";
    hard.style.color="white";

    for (let i = 0; i < 6; i++) {
        if(i<3)
        {}
        else
        colors[i] = randomColorGenerator();
      }
    
      givenColor = randomPicker(length);
      bannerColor.innerText = givenColor.toUpperCase();
      newColor.innerText = "NEW COLOR";
      result.innerText = "";
      navbar.style.backgroundColor =  "rgb(10, 99, 99)";
      box.forEach((element, i) => {
        element.style.backgroundColor = colors[i];
      });

    }
    )

bannerColor.innerText = givenColor.toUpperCase();

// console.log(box);

// Event lestioner to all block and checking color match or not 
box.forEach((element, i) => {
  element.style.backgroundColor = colors[i];

  element.addEventListener("click", () => {
    if (givenColor === element.style.backgroundColor) {
      result.innerText = "CORRECT ANSWER";
      newColor.innerText = "PLAY AGAIN";
      
      changeColor(givenColor , length);
      navbar.style.backgroundColor = givenColor;
    } else {
      result.innerText = "WRONG ANSWER";

      element.style.backgroundColor = "rgb(5, 3, 30)";
    }
  });
});


// For changing present color or play again
newColor.addEventListener("click", () => {
    if(easy.style.backgroundColor==="rgb(10, 99, 99)"){
        length=3;
    }
    for (let i = 0; i < 6; i++) {
        if(i<length)
        colors[i] = randomColorGenerator();
        else
        colors[i]="rgb(5, 3, 30)";  //bg color
      }
  givenColor = randomPicker(length);
  bannerColor.innerText = givenColor.toUpperCase();
  newColor.innerText = "NEW COLOR";
  result.innerText = "";
  navbar.style.backgroundColor =  "rgb(10, 99, 99)";  //navbar default color
  box.forEach((element, i) => {
    element.style.backgroundColor = colors[i];
  });
});



// Function for changing color
function changeColor(color,length) {
  box.forEach((element,i) => {
    if(i<length)
    {element.style.backgroundColor = color;}

    else{
        element.style.backgroundColor = "rgb(5, 3, 30)";
    }
  });
}


//Function for random color picker
function randomPicker(length) {
    let temp=0;
    if(length==3)
   { temp=Math.floor(Math.random() * 3);}
    else
     {temp = Math.floor(Math.random() * colors.length);}
  return colors[temp];
}


//Function for random color generator
function randomColorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}


