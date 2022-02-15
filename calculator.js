var selection = 'radian'

function degree(){
  var selectionvalue = document.getElementById("b1")
  selectionvalue.style = "backgroundColor:red"
  var selectiondegree = document.getElementById("b2")
  selectiondegree.style = "font: solid Yellow"
  selection = "degree"
  console.log(selection);
}

function radian(){
  var selectionvalue = document.getElementsByClassName("b1")
  selectionvalue.style = "font:solid yellow"
  var selectiondegree = document.getElementsByClassName("b2")
  selectiondegree.style = "font: solid red"
  selection = "radian"
}


function insert(num){
  var text = document.getElementById('display') 
  text.value += num
}

function equal(){
  var text = document.getElementById('display')
  let x=text.value
  let y=eval(x)
  text.value =y
}

function resin(){
  var text = document.getElementById('display')
  text.value = text*392.9;
}

function back(){
  var text = document.getElementById('display')
  text.value= text.substring(0,text.length-1)
}

function pii(){
  var text = document.form.textinput.value
  document.getElementById('display')= text*22/7;
}

function remove(){
  document.getElementById('display')= ''
}

function sqr(){
  document.form.textinput.value*2;
}

function loge(){
  text = document.form.textinput.value
  document.getElementById('display')= Math.log(text)
}

function rounde(){
  text = document.form.textinput.value
  document.getElementById('display')= Math.round(text)
}

function per(){
  var text = document.form.textinput.value
  document.getElementById('display')= text/100
  }

function sin(data){
var text=document.getElementById("display")
text.value+=data;
let disply = data
let y=Math.sin(disply)
console.log(y)
return  disply.value = y;
}

function cos(data){
var text=document.getElementById("display")
text.value+=data;
var disply = data
  let y=Math.cos(disply)
  console.log(y)
  return  disply.value = y;
}



// {
//   var text = document.getElementById('display')
//   text.value+=data
//   console.log(display.value)
//   if (selection == "radian"){
//     display.value = Math.sin(text.value)
//   }else if (selection == "degree"){
//     text = Math.sin(text * (Math.PI / 180))
//   }
// }


// function cos(){
//   console.log("cos")
//   var text = document.form.textinput
//   if (selection == "radian"){
//     document.getElementById('display')= Math.cos(text)
//     // document.getElementById('display')= `Cos(${Math.cos(text)}`
//   } else if (selection == "degree"){
//     document.getElementById('display')= Math.cos(text * (Math.PI / 180))
//   }
//   // return document.form.textinput.value
// }

// function tan(){
//   var text = document.form.textinput.value
//   if (selection == "radian"){
//     document.getElementById('display')= Math.sin(text)
//   } else if (selection == "degree"){
//     document.getElementById('display')= Math.sin(text * (Math.PI / 180))
//   }
//   return document.form.textinput.value
// }


// function sininput(value)
// {
//   var text=document.form.textinput.value;
//   display=Math.sin(value*text)
//   // var text=document.form.textinput.value;
//   // document.getElementById('display')+= value;

//   // let x = Math.sin(value)
//   return display;
// }
