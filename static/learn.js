const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");



let w = canvas.width = window.innerWidth;
let h = canvas.height=1000;

let hf = window.innerHeight;

if (hf == 740)  {
  h = canvas.height = 2000;
}
let cols = Math.floor(w / 20) + 1;
let ypos = Array(cols).fill(0);


resize_canvas();

var Matrix=function(){
  ctx.fillStyle='rgba(0,0,0,.05)';

  ctx.fillRect(0,0,window.innerWidth,h);

  ctx.fillStyle = 'rgb(0, 255, 0, 0.3)';
  ctx.font = '15pt monospace';

  ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = ind * 20;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
  });
};
setInterval(Matrix,50);


function resize_canvas(){
  if (canvas.width  < window.innerWidth) {
    w = canvas.width =window.innerWidth ;
  }
  
  
  cols = Math.floor(w / 20) + 1;
  ypos = Array(cols).fill(0);
}





var i = 0;
var txt = 'Blockchain Oriented Technical Club';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = function() {
typeWriter()
}

