

function nameValidation(){
    var userName = document.getElementById("name");
    var a = userName.value;
    var button = document.getElementById("button");

    if (a.trim() == "" || a.length < 3) {
        console.log("invalid data...");
        document.getElementById("nameMsg").innerHTML = "<span style='color:red'>Invalid data...</span>";
        button.disabled = true;
        //return false; 
    }
    else{
        console.log("valid data...");
        document.getElementById("nameMsg").innerHTML = "  ";
        button.disabled = false;
        //return true;
    }
}
function emailValidation(){
    var mail=document.getElementById("email");
    var b=mail.value;
    var button=document.getElementById("button");

    if(b.trim() =="" || !b.includes("@") || !b.endsWith(".com")){
        console.log("invalid email...");
        document.getElementById("emailMsg").innerHTML= "<span style='color:red'>invalid email</span>";
        button.disabled=true;
    }
    else{
        console.log("valid email...");
        document.getElementById("emailMsg").innerHTML= "  ";
        button.disabled=false;
    }

}

function mobileNumber(){
   var c= document.getElementById("number").value;
   var button=document.getElementById("button");

   if(c.trim() == "" || isNaN(c) || c.length != 10){
    console.log("invalid number");
    document.getElementById("numberMsg").innerHTML="<span style='color:red'> invalid number</span>";
    button.disabled=true;
   }
   else{
    console.log("valid number...");
    document.getElementById("numberMsg").innerHTML=" ";
    button.disabled=false;
   }
}
