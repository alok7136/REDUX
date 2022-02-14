var selection = 'radian'

function radian(){
  var selectionvalue = document.getElementsByClassName("radian")
  selectionvalue.style = "background: solid red"
  var selectiondegree = document.getElementsByClassName("degree")
  selectiondegree.style = "font: solid Yellow"
  selection = "degree"
}

function degree(){
  var selectionvalue = document.getElementsByClassName("radian")
  selectionvalue.style = "font:solid yellow"
  var selectiondegree = document.getElementsByClassName("degree")
  selectiondegree.style = "font: solid red"
  selection = "radian"
}


function insert(num){
  var text = document.form.textinput.value  
  document.form.textinput.value = text + num
}

function equal(){
  var text = document.form.textinput.value
  document.form.textinput.value = eval(text)
}

function back(){
  var text = document.form.textinput.value
  document.form.textinput.value = text.substring(0,text.length-1)
}

function remove(){
  document.form.textinput.value = ' '
}

function sqr(){
  document.form.textinput.value*2;
}

function loge(){
  text = document.form.textinput.value
  document.form.textinput.value = Math.log(text)
}

function rounde(){
  text = document.form.textinput.value
  document.form.textinput.value = Math.round(text)
}

function per(){
  var text = document.form.textinput.value
  document.form.textinput.value = text/100
  }

function sin(data){
  var data1 = document.form.textinput.value;
   
  
  // if (selection == "radian"){
    // document.form.textinput.value = Math.sin(text)
  // } else if (selection == "degree"){
  //   document.form.textinput.value = Math.sin(text * (Math.PI / 180))
  // }
}

function cos(){
  console.log("cos")
  var text = document.form.textinput.value
  if (selection == "radian"){
    document.form.textinput.value = Math.cos(text)
  } else if (selection == "degree"){
    document.form.textinput.value = Math.cos(text * (Math.PI / 180))
  }
}

function tan(){
  var text = document.form.textinput.value
  if (selection == "radian"){
    document.form.textinput.value = Math.sin(text)
  } else if (selection == "degree"){
    document.form.textinput.value = Math.sin(text * (Math.PI / 180))
  }
}
