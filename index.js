 
 
 
const eraser = document.querySelector('button.eraser')
  const etch = document.querySelector(".etch");
  
  
 box = parseInt(prompt("How many squares do you want to build?\n Choose a number from 30 to 100")
 );
  //box = box ** 2;
  
      for(let i = 1; i <= box ** 2; i++){
         console.log(i);
         console.log(box);
        let div = document.createElement('div');
        div.style.height ="10px";
        div.style.width = "10px";
        div.style.backgroundColor = "blue";
        div.style.border = "solid";
        etch.appendChild(div);
      };

    // event delegation for partAControls buttons
      let partAControls = document.querySelector(".partAControls");
      partAControls.addEventListener("click",(e)=>{
        let target = e.target;
        switch(target.id){
          case 'eraser':
            etch.last
            console.log("eraser");
            break;
            case 'black':
              console.log("black");
              break;
              case 'hue':
                console.log("hue");
                break;  
              
        }
      })

      // event delegation for Controls buttons
    let controls = document.querySelector(".controls");
    controls.addEventListener("click",(e)=>{
      let target = e.target;
      switch(target.id){
        case 'left':
          etch.last
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
              break; 
              
              case 'down':
              console.log("down");
              break;  
      
      }
    })