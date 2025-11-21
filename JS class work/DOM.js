  var value=document.children[0].children[1].children[0];

 console.log(value);
 console.log(value.innerHTML);

 value.innerText="Manipulating through JS.....";

 value.innerHTML="<b style='color:red'> inner HTML......</b>";


var a=document.getElementById("h1");
console.log(a.innerText);

var b=document.getElementsByClassName("h2");
console.log(b);

for(var i=0; i<b.length; i++){
  console.log(b[i].innerHTML);
  //b[i].innerHTML="<p style='background-color:blue'>this is h2 tag for class attribute...</p>"
  b[i].innerHTML="<p style='background-color:yellow'>its paragraph tag</p>"

  var ancherTag=document.getElementsByTagName("a");
 console.log(ancherTag);
for(var i=0; i<ancherTag.length; i++){
  if(i==0){
    ancherTag[i].innerHTML="<span style='color:blue'>Security....</span>"
  }

  var all= document.querySelectorAll("a");
  console.log(all);
  for(i=0; i<all.length; i++){
    all[i].innerHTML="<p>quary  selector all...</p>"
  }
}


}
