var a=100;

function b(){
    if(true){
        var a=101;
    }
    console.log(a);
}
b();

var cost=400;

function display(){
    if(true){
        var f=800;
    }
    console.log(f);
}

display();

let price=300;

function mssg(){
    if(true){
        let price=400;
    }
    console.log(price);
}

mssg();

const amount=100;

function data(){
    if(true){
        const amount=200;
    }
    console.log(amount);
}

data();

var r=(d,h)=>{
    return d+h; 
}
console.log(r(10,20));


var j=function l(){
    console.log("this is a function");
};

console.log(j);
j();