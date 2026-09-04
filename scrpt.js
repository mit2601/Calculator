const display = document.querySelector("#display");
const buttoncontainer = document.querySelector(".buttons");
let str = "";

buttoncontainer.addEventListener("click",(event)=>{
if (event.target.tagName !== "BUTTON") return;
if(event.target.classList.contains("clear")){
    str = "";
    display.value = "";
}
else if (event.target.classList.contains("equals")) {
    claculate();
    // try {
    //   str = eval(str);
    //   display.value = str;
    // } catch {
    //   display.value = "ERROR!";     
    //   str = ""
    // }
  } 
  else {
    str+=event.target.innerText;
    display.value =str;
    
  }
});

document.addEventListener("keydown" , (m)=>{
  m.preventDefault();
  const ops = ["+","-","/","*"];
if (m.key>=0 && m.key<=9 ||m.key==="."){
  str+=m.key;
  display.value=str;
}
else if(ops.includes(m.key)){
  if(str.charAt(str.length-1) === m.key){
     str = str.slice(0, -1) + m.key;
     display.value = str
  }
   else if (str === "") {
      display.value = "Invalid input";
      return;
    } 


}
else if(m.key==="Backspace"){
  str = str.slice(0,-1);
  display.value = str
}
else if(m.key === "=" || m.key === "Enter"){
  claculate();
  // try{
  //   console.log(str);
  // str = eval(str);
  // display.value = str;
  // }
  // catch{
  //   display.value="ERROR!"
  //   str="";
  // }
}

else if(m.key === "Escape"){
  str = "";
  display.value=""
}
});

function claculate(){
  try{
    console.log(str);
  str = eval(str);
  display.value = str;
  }
  catch{
    display.value="ERROR!"
    str="";
  }
}
