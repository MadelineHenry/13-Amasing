//récupéré main dans le doc HTML
document.querySelector("body");
const main = document.createElement("main");
main.className = "main";

document.body.appendChild(main);

const multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

//separe la multiligne en ligne
const lineArray = multiline.split("\n");


//séparer la ligne en charactère
for(let i=0; i<= lineArray.length-1; i++){
    const divLine = document.createElement("div");
    divLine.classList.add("divLine");
    divLine.id=i;
    const line = lineArray[i];

    for(let j=0 ; j<=line.length-1 ; j++){
        const characterDiv = document.createElement("div");
        const character = line.split("");
        characterDiv.innerHTML = character[j];
        characterDiv.classList.add("tile");
        divLine.appendChild(characterDiv);
        //donner un nom de classe pour chaque symbole
        if (characterDiv.innerHTML === "*"){
        characterDiv.classList.add("wall");
        characterDiv.innerHTML = "";        
        }
        if (characterDiv.innerHTML === "." ){
        characterDiv.classList.add("path");
        characterDiv.innerHTML = "";
        }
        if (characterDiv.innerHTML === "S" ){
        characterDiv.className ="starting";
        characterDiv.innerHTML = "";
        }
        if (characterDiv.innerHTML === "T" ){
        characterDiv.className ="treasure";
        characterDiv.innerHTML = "";
        }
    main.appendChild(divLine);
    }
document.querySelector("#\\31  > div.starting");
}

let x= 2;
let y= 1;

let hero = document.createElement("div");
hero.classList.add("hero");

document.querySelector("#\\31 > div.starting").appendChild(hero);

function winner(){
    if(document.querySelector("#\\3" + y + "> div:nth-child("+ x +")").classList.contains("treasure")){
        alert("HEYY, you are out of the maze !")
    }
}

function move(e){
    if(e.code == "ArrowRight"){
        x++;
        if(document.querySelector("#\\3" + y + "> div:nth-child("+ x +")").classList.contains("wall")){
        alert("STOP, you cannot go through walls!");
        x--;
        }
    }
    else if(e.code == "ArrowLeft"){
        x--;
        if(document.querySelector("#\\3" + y + "> div:nth-child("+ x +")").classList.contains("wall")){
        alert("STOP, you cannot go through walls!");
        x++;
        }
    }
    else if(e.code == "ArrowUp"){
        y--;
        if(document.querySelector("#\\3" + y + "> div:nth-child("+ x +")").classList.contains("wall")){
        alert("STOP, you cannot go through walls!");
        y++;
        }
    }
    else if(e.code == "ArrowDown"){
        y++;
        if(document.querySelector("#\\3" + y + "> div:nth-child("+ x +")").classList.contains("wall")){
        alert("STOP, you cannot go through walls!");
        y--;
        }
    }
    document.querySelector("#\\3" + y + "> div:nth-child("+ x +")").appendChild(hero);
    winner()
}

document.addEventListener("keydown", move);