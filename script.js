var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump() {
    if (character.classList != "animate" || counter == 0) {
        character.classList.add("animate");
        counter++
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

var checkDead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert(`YOU LOSE! YOUR SCORE IS ${counter}`)
        location.reload();
    }
},10);