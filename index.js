 
  console.log("work")
  const container = document.createElement("div");
  container.classList.add("container");


  const etch = document.createElement("div");
  etch.classList.add("etch");
  

  const square = document.createElement("div");
  square.setAttribute("id","square");

  const left = document.createElement("button");
  left.setAttribute("id","left");
  left.textContent ="Left";


  const right = document.createElement("button");
  right.setAttribute("id","right");
  right.textContent ="Right";


  const up  = document.createElement("button");
  up.setAttribute("id","up");
  up.textContent ="Up";


  const down = document.createElement("button");
  down.setAttribute("id","down");
  left.textContent ="Down";


  const reset = document.createElement("button");
  reset.setAttribute("id","reset");
  left.textContent ="Reset";


  const controls = document.createElement("div");
  controls.classList.add("controls");
  



  const black = document.createElement("div");
  black.classList.add("black");

  const hue = document.createElement("div");
  hue.classList.add("hue");

  const eraser = document.createElement("button");
  eraser.classList.add("eraser");

  
  
  container.appendChild(etch );
  container.appendChild( controls);
  container.appendChild( black);
  container.appendChild(hue);
  container.appendChild(eraser);
  container.textContent = "Magic              ETCH-A-SKETCH                Screen";

  controls.appendChild(right );
  controls.appendChild( left );
  controls.appendChild( up );
  controls.appendChild( down );
  controls.appendChild( reset);
  
  etch.appendChild(square);
   
  
