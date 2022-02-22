//shows where the mouse is on the browser
window.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').textContent = e.x;
    document.getElementById('y-value').textContent = e.y;
});

//dropdown menu
document.getElementById("myBtn").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//bouncing the ball
startbtn.addEventListener ("click", function (){
    ball.style.animation = "bounce 0.9s infinite";
});
stopbtn.addEventListener ("click", function (){
    ball.style.animation = "";
});
startbtn.addEventListener ("click", function (){
    shadow.style.animation = "shrink 0.9s infinite";
});
stopbtn.addEventListener ("click", function (){
    shadow.style.animation = "";
});