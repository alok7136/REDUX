var text = document.getElementById('display')
var btn = document.querySelectorAll('button')
var selection = 'degree'
// for(item of btn)
//     {
//         item.addEventListener('click',(e)=>{
//             btntext=e.target.value
//             if(btntext =='')
//             {
//                 btntext= '';
//             }

//             if(btntext=='a,b,c')
//             {
//                 btntext='';
//             }
//             text.value+=btntext;
//         });
//     }

function radian() {
    var selectionvalue = document.getElementById("b1")
    selectionvalue.style.backgroundColor = "red"; 
    var selectiondegree = document.getElementById("b2")
    selectiondegree.style.background = "black";             
    selection = "radian"
}

function degree() {
    var selectionvalue = document.getElementById("b1")
    selectionvalue.style.backgroundColor = "black"; 
    var selectiondegree = document.getElementById("b2")
    selectiondegree.style.background = "red";             
    selection = "degree"
}

function insert(value) {
    text.value += value
}
function equal() {
    let x = text.value
    let y = eval(x)
    text.value = y
}
function resin(data) {
    text.value += data;     
    let disply = data
    let y = disply*392.9;
    console.log(y)
    return (disply.value = y);
}
function back() {
    var bk = text.value
    text.value = bk.substring(0, bk.length - 1)
}
function pi(data) {
    text.value += data;     
    let disply = data
    let y = disply*(22/7);
    console.log(y)
    return (disply.value = y);
}
function remove() {
    text.value = ''
}

function sqr(data){
    text.value += data;     
    let disply = data
    let y = disply*disply;
    console.log(y)
    return (disply.value = y);
}

function log(data) {
    text.value += data;
    let disply = data
    let y = Math.log(disply)
    console.log("degree")
    return (disply.value = y);
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
