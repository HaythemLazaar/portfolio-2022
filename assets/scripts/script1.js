var menus = document.querySelectorAll(".menu1")

function changeClass(){
    for(let i=0;i<menus.length;i++){
        if ( menus[i].className.match(/(?:^|\s)activated(?!\S)/) ){
            menus[i].classList.remove('activated');
            menus[i].classList.add('deactivated');
            document.getElementById("act-btn").src = "../img/HAMBURGER.svg";
            document.getElementById("act-btn1").src = "../img/HAMBURGER.svg";
        }
        else{
            menus[i].classList.remove('deactivated');
            menus[i].classList.add('activated');
            document.getElementById("act-btn").src = "../img/X.png";
            document.getElementById("act-btn1").src = "../img/X.png";
        }
    }
    
}


window.onload = function(){
    document.getElementById("act-btn1").addEventListener( 'click', changeClass);
    document.getElementById("act-btn").addEventListener( 'touchend', changeClass);
}

