
let min = 5 ;
let max = 95;

function move() {
    
    let x = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    let y = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    let target = document.getElementById("target");
    target.style.top = x+"%";
    target.style.left = y + "%";
    
    document.getElementById('sound-file').play();
    document.getElementById( 'sound-file' ).currentTime = 0 ;
}
