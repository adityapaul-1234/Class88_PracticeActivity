var score = 0;

function Update(){
    score += 1;
    document.getElementById("score").innerHTML = score;
}

function Save(){
    localStorage.setItem("score", score);
}

function NextPg(){
    window.location="imaginary.html";
}