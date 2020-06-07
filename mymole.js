let holes = document.querySelectorAll(".hole");
let moles = document.querySelectorAll(".mole");
let score = document.querySelector(".score");
let counter = 0;

function randomHole(holes){
    let randomIndex = Math.floor(Math.random()*holes.length);
    let hole = holes[randomIndex];
    return hole;
}

function showMole(){
    let hole = randomHole(holes);
    hole.classList.add("up");
    let mole = hole.querySelector('.mole');
    wackMole(mole);
    setTimeout(function(){
        hole.classList.remove("up");
    }, 1000);


}

function startGame(){
    counter = 0;
    score.innerHTML = 0;
    let gameTime = setInterval(function(){

        // set timer to end game in 10sec
        setTimeout(function(){
            clearInterval(gameTime);
        }, 10000);
        
        // show mole every 1.1sec
        showMole();

    },1100)

}

function wackMole(mole){
    mole.addEventListener("click", moleCounter)
}

function moleCounter(){
    this.removeEventListener("click", moleCounter)
    counter++
    score.innerHTML = counter;
}




