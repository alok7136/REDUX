var display = document.querySelector('#display');
var buttons = document.querySelectorAll('button');
var displayValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonValue = e.target.value;
        if (buttonValue == '*') {
            displayValue += buttonValue;
            display.value = displayValue;
        }
        else if (buttonValue == 'C') {
            displayValue = "";
            display.value = displayValue;
        }
        else if (buttonValue == '=') {
            display.value = eval(displayValue);
        }
        else {
            displayValue += buttonValue;
            display.value = displayValue;
        }
    })
}

function sin()
{
    display.value =Math.sin(display.value)
}

function back()
{
    display.value=display.value.substr(0,display.value.length-1)
    console.log(display.value)
    }