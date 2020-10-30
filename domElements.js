function setup() {
    let cnv = createCanvas(300, 300);
    let par = select('#pID01');
    par.html(random() + '<br>' + random() + '<br>' + random());
    par.style('margin:6px');
    par.style('padding:10px');
    par.style('font-size:12pt');
    // par.style('font-size', '24pt');
    par.style('text-align:center');
    // par.style('text-align', 'center');
    par.style('background-color:yellow')

    // cnv.position((windowWidth - width) / 2,
    //     (windowHeight - height) / 2);
    cnv.parent('sketch-holder');

    let par2 = select('#pID02');
    par2.html(random() + '<br>' + random() + '<br>' + random());
    par2.style('margin:6px');
    par2.style('padding:10px');
    par2.style('font-size:12pt');
    par2.style('text-align:center');
    par2.style('background-color:cyan')
}

function draw() {
    background(128);
    rectMode(CENTER);
    rect(width / 2, height / 2, 100, 100);
}