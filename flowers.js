console.log('running flowers.js');
let draw =SVG ('drawing').size(1500,1500)
function drawflower(x,y,stem,center,petal){
    let rect = draw.rect(40,200).fill(stem)
    rect.move (x+75,y+100)
    let circle = draw.circle(70).fill(center)
    circle.move(x+60,y+60)
    let ellipse = draw.ellipse(70, 55).fill (petal)
    ellipse.move(x+60,y+120)
    // rotate(degrees)
    ellipse.rotate(90)
    let ellipse1 = draw.ellipse(70, 55).fill (petal)
    ellipse1.move (x+125,y+70)
    let ellipse2 = draw.ellipse(70,55).fill (petal)
    ellipse2.move (x+65,y+15)
    // rotate(degrees)
    ellipse2.rotate(90)
    let ellipse3 = draw.ellipse(70,55).fill (petal)
    ellipse3.move(x+1,y+70)
    let drawflower4 = function(){

        console.log('flower');
       
        drawflower(Math.random() * 1500, Math.random() * 900 ,getRandomColor(),getRandomColor(),getRandomColor());
        
    };
   ellipse.click(drawflower4);
   ellipse1.click(drawflower4);
   ellipse2.click(drawflower4);
   ellipse3.click(drawflower4);
}


drawflower(0,0,'green','yellow','pink');


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  $('#make-a-flower').click(function(){
      console.log('you clicked me');
    let numberflower= $('#make-flower').val();
    
    console.log('number of flowers' + numberflower)
    for (let i = 0; i < numberflower; i++){
      console.log('i works now keep working');
      drawflower(Math.random() * 1500, Math.random() * 900 ,getRandomColor(),getRandomColor(),getRandomColor());
    }


  });

  
  