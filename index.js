 
 
 

  const etch = document.querySelector(".etch");
  let square= document.querySelector("div.square");
  
 box = parseInt(prompt("How many squares do you want to build?\n Choose a number from 10 to 100")
 );
  box = box ** 2;
  
      for(let i = 1; i <= box; i++){
         console.log(i);
         console.log(box) ;
        let div = document.createElement('div');
        div.style.height="10px";
        div.style.width= "10px";
        div.style.backgroundColor ="blue";
        div.style.border ="solid";
        etch.appendChild(div);

      };
    
      