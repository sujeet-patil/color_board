const colors= ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'];
const container = document.getElementById('container')
const square = 800;

for(var i=0;i<square;i++){
    const sq = document.createElement("div")
    sq.classList.add("square");

    sq.addEventListener("mouseover", ()=>setColor(sq));
    sq.addEventListener("mouseout",()=>removeColor(sq));

    container.appendChild(sq);
}

function setColor(sq){
    const color = randomColor();
    sq.style.background = color;
    sq.style.boxShadow = "0 0 2px #000"
}

function removeColor(ele){
    ele.style.background = "#1d1d1d";
    ele.style.boxShadow = "0 0 2px #000"
}

function randomColor(){
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
}