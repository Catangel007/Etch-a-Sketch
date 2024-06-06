 
 let controls = document.querySelector(".controls");
 let partAControls = document.querySelector(".partAControls");
const eraser = document.querySelector('button.eraser')
  let etch = document.querySelector(".etch");
  
  // div creation from prompt input
 box = parseInt(prompt("How many squares do you want to build?\n Choose a number from 30 to 100")
 );



  //box = box ** 2;
  
      for(let i = 1; i <= box ** 2; i++){
         console.log(i);
         console.log(box);
        let div = document.createElement('div');
        div.style.height ="10px";
        div.style.width = "10px";
        div.style.backgroundColor = sketch;
        div.style.border = "solid";
        etch.appendChild(div);
        div.setAttribute('id',`draw${i}`);
      // div.addEventListener('click', alert("you press me"));
    };



    // event delegation for partAControls buttons
    let draw = document.querySelector(".draw")  

    partAControls.addEventListener("click",(e)=>{
      let target = e.target;
      switch(target.id){
        case 'eraser': etch.onmouseover(
          draw.style.backgroundColor = "white")
          console.log("eraser");
          break;
          case 'black':etch.onmouseover(
            draw.style.backgroundColor = "black")
            console.log("black");
            break;
            case 'hue':
              console.log("hue");
              break;  
            
      }
    })

    // event delegation for Controls buttons
  controls.addEventListener("click",(e)=>{
    let target = e.target;
    switch(target.id){
      case 'left':
        key.left
        console.log("left");
        break;

        case 'right':
          console.log("right");
          break;

          case 'reset':
            console.log("reset");
            break; 

            case 'up':
            console.log("up");
            keyup
            break; 
            
            case 'down':
            console.log("down");
            break;  
    
    }
  })
    
  function getRandomColor(){
    let num = '123456789ABCDEF';
    let color = '#';

    for (let i= 1; i < 7; i++){
     color += num[Math.floor(Math.random()*15)];
     
    } 
    
  }
  

  function sketch (){
    let hex = '';
  etch.addEventListener("mouseover", (e) => {
     hex = e.target.id;
     console.log(hex);
    hex += getRandomColor()
    })   
  }
  sketch()
  console.log(sketch());