console.log('running flowers.js');
let draw =SVG ('drawing').size(1500,1500)
function drawflower(stem,center,petal){
    let rect = draw.rect(40,200).fill(stem)
    rect.move (740,364)
    let circle = draw.circle(70).fill(center)
    circle.move(727,320)
    let ellipse = draw.ellipse(70, 55).fill (petal)
    ellipse.move(729,390)
    // rotate(degrees)
    ellipse.rotate(90)
    let ellipse1 = draw.ellipse(70, 55).fill (petal)
    ellipse1.move (792,328)
    let ellipse2 = draw.ellipse(70,55).fill (petal)
    ellipse2.move (733,280)
    // rotate(degrees)
    ellipse2.rotate(90)
    let ellipse3 = draw.ellipse(70,55).fill (petal)
    ellipse3.move(670,340)

}
drawflower('green','yellow','pink')
