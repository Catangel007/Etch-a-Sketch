 
 let controls = document.querySelector(".controls");
 let partAControls = document.querySelector(".partAControls");
const eraser = document.querySelector('#eraser')
  let etch = document.querySelector(".etch");
  
  // div creation from prompt input
 box = parseInt(prompt("Choose a number from 30 to 100 to build")
 );
 let hex = '';
  
      for(let i = 1; i <= box ** 2; i++){
         console.log(i);
         console.log(box);
        let div = document.createElement('div');
        div.style.height ="10px";
        div.style.width = "10px";
        div.style.border = "solid";
        etch.appendChild(div);
        div.setAttribute('id',`draw${i}`);
       
    etch.addEventListener("mouseover", (e) => {
       hex = e.target;
       
        switch(hex.id){
          case `draw${i}`:  
          div.style.backgroundColor = getRandomColor();
          break;
        } 
      }) 
      
        // event delegation for partAControls buttons
    partAControls.addEventListener("click",(e)=>{
      let target = e.target;
      switch(target.id){

        case 'eraser': 
        etch.addEventListener("mouseover", (e) => {
          hex = e.target;
           switch(hex.id){
             case `draw${i}`:
             div.style.backgroundColor = "white";
           } 
         }) 
             break;
          
          case 'black':
            etch.addEventListener("mouseover", (e) => {
            hex = e.target;
             switch(hex.id){
               case `draw${i}`:
               div.style.backgroundColor = "black"; 

             } 
           }) 
                 break;
          
            case 'hue':
              etch.addEventListener("mouseover", (e) => {
                hex = e.target;
                 switch(hex.id){
                   case `draw${i}`:
                   div.style.backgroundColor = getRandomColor();
    
                 } 
               }) 
                break;     
      }
    }) 
       



        const moveAmount = 10;
        let x = 0;
        let y = 0;
   // event delegation for Controls buttons
     controls.addEventListener( "click", (e) => {
        let trace = e.target;
        switch(trace.id){
          case 'reset':
            div.style.backgroundColor = 'white';
            console.log("reset");
            break; 

          case "left":
            etch.addEventListener("click", (e) => {
              hex = e.target;
               switch(hex.id){
                 case `draw${i}`:
                key[ArrowLeft]; ;
                x-=moveAmount;
                 div.style.backgroundColor = "black";
                div.style.width = "12px";
               } 
             }) 
              break;     

        }
     })

    //  function brightness(){
    //     let light = 10;
    //    let darken = div.style.getRandomColor().light(-10);

    //  }brightness();
       
     
    }
  


     

  function getRandomColor(){
    let num = '123456789ABCDEF';
    let color = '#';

    for (let i= 1; i < 7; i++){
     color += num[Math.floor(Math.random()*15)];
     
    }
    
    return color;
     
  }getRandomColor()
  