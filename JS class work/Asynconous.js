console.log("Start of the loop......");

setTimeout(function (){
    console.log("1st set timout......");
},5000);

for(i=0; i<10; i++){
    console.log(i);
}

setTimeout(function (){
    console.log("2nd  set timeout......")
},2000);

console.log("End of the loop....");