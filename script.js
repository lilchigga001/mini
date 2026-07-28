const text = [
"AI Engineer",
"Machine Learning Enthusiast",
"Future Researcher",
"Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let typing = document.getElementById("typing");

function type(){

if(i < text.length){

if(j < text[i].length){

current += text[i][j];

typing.innerHTML = current;

j++;

setTimeout(type,80);

}

else{

setTimeout(()=>{
current="";
j=0;
i++;

if(i===text.length)
i=0;

type();

},1200);

}

}

}

type();

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const c=+counter.innerText;

const inc=target/100;

if(c<target){

counter.innerText=Math.ceil(c+inc);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});
