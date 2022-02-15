var text = document.getElementById('display')
var selection = 'degree'

function radian() {
    var selectionvalue = document.getElementById("b1")
    selectionvalue.style.backgroundColor = "red"; 
    var selectiondegree = document.getElementById("b2")
    selectiondegree.style.background = "black";             
    selection = "radian"
}
function insert(value) {
    text.value += value
}
function equal() {
    let x = text.value
    let y = eval(x)
    text.value = y
}
function resin() {
    text.value = text.value * 392.9;
}
function back() {
    var bk = text.value
    text.value = bk.substring(0, bk.length - 1)
}
function pii() {
    text.value = text.value * 22 / 7;
}
function remove() {
    text.value = ''
}
function sqr(){
var sqr = text.value
text.value = sqr*2;
}
function loge() {
    var loge = text.value
    text.value = Math.log(loge);
}
function rounde() {
    text.value = Math.round(text.value)
}
function per() {
    text.value = text.value / 100
}
function sin(data) {
    if (selection == "degree") {
        text.value += data;
        let disply = data
        let y = Math.sin(disply)
        console.log("degree")
        return (disply.value = y);
    }
    else if (selection == "radian") {
        text.value += data;
        let disply = data
        let y = Math.sin(disply * (Math.PI / 180))
        console.log("radian")
        return (disply.value = y);
    }
}

function cos(data) {
    if (selection == "degree") {
        text.value += data;     
        let disply = data
        let y = Math.cos(disply)
        console.log("degree")
        return (disply.value = y);
    }
    else if (selection == "radian") {
        text.value += data;
        let disply = data
        let y = Math.cos(disply * (Math.PI / 180))
        console.log("radian")
        return (disply.value = y);
    }
}
function tan(data) {
    if (selection == "degree") {
        text.value += data;     
        let disply = data
        let y = Math.tan(disply)
        console.log("degree")
        return (disply.value = y);
    }
    else if (selection == "radian") {
        text.value += data;
        let disply = data
        let y = Math.tan(disply * (Math.PI / 180))
        console.log("radian")
        return (disply.value = y);
    }
}
