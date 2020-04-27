
let min = 5 ;
let max = 95;
let count = 0;

function start() {
    let target = document.getElementById("target");
    target.style.display = "block";
    document.getElementById("s_button").style.display = "none";
}

let finish = function () {
    
    alert("記録は" + count + "回です！");
    count = 0;

    let target = document.getElementById("target");

    document.getElementById("counter").innerText = count;
    document.getElementById("s_button").style.display = "block";
    target.style.display = "none";
    target.style.top = "50%";
    target.style.left = "50%";
}

function move() {

    if (count == 0) {
        setTimeout(finish, 2000);
    }
    
    let x = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    let y = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    let target = document.getElementById("target");
    target.style.top = x+"%";
    target.style.left = y + "%";
    
    document.getElementById('sound-file').play();
    document.getElementById('sound-file').currentTime = 0;
    
    count += 1;
    document.getElementById("counter").innerText = count;
}




