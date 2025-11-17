function a(fun){
    console.log(fun);

}

var d=function b(){
    console.log("call back function.....");
    return true;
}

a(d());

var data=function (){
    console.log("its a anonomus function...")
}
console.log(data);
data();