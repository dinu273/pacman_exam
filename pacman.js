var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
var direction = 0;
var focus = 0;
 
function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
            pos -= 1;
            img.style.bottom = pos + "px";
        } else {
            pos += 1;
            img.style.top = pos + 'px';
        }
 
}
setInterval(Run, 200);
 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
            if(pos >=1400){
              direction =1;
            }
            if(pos == 0){
              direction = 0;
            }
  return direction;
}

 
module.exports = checkPageBounds;

