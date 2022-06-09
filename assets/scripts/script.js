var menus = document.querySelectorAll(".menu1")

function changeClass(){
    for(let i=0;i<menus.length;i++){
        if ( menus[i].className.match(/(?:^|\s)activated(?!\S)/) ){
            menus[i].classList.remove('activated');
            menus[i].classList.add('deactivated');
            document.getElementById("act-btn").src = "assets/img/HAMBURGER.svg";
            document.getElementById("act-btn1").src = "assets/img/HAMBURGER.svg";
        }
        else{
            menus[i].classList.remove('deactivated');
            menus[i].classList.add('activated');
            document.getElementById("act-btn").src = "assets/img/X.png";
            document.getElementById("act-btn1").src = "assets/img/X.png";
        }
    }
    
}

const wait = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string' ? document.querySelector(elementOrSelector) : elementOrSelector)
    .style.display = visible ? 'block' : 'none';

const fadePage = (elementOrSelector) => 
    (typeof elementOrSelector === 'string' ? document.querySelector(elementOrSelector) : elementOrSelector)
        .classList.add("fade");

document.addEventListener('DOMContentLoaded', () => wait(2000).then(() => {
    console.log('loading');
    setVisible('.page', true);
    fadePage(".loading");
    wait(1000).then(() => 
        setVisible('.loading',false)
    );
    wait(3000).then(()=>
        fadePage(".ball")
    );
    
}));

window.onload = function(){
    document.getElementById("act-btn1").addEventListener( 'click', changeClass);
    document.getElementById("act-btn").addEventListener( 'touchend', changeClass);
    
}

