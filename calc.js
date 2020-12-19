/* to do:
- still relies on eval() as of now
- doesn't delete the old answer when you put in a new calculation
- looks bad
- doesn't stop multiple decimals/operators consecutively
*/


function addToExpression(newVal) {

    if(document.getElementById("display").value == "ERR"){
        clearDisp();
    }
    document.getElementById("display").value += newVal;
}

function backspace() {
    let val = document.getElementById("display").value;

    if(val == "ERR"){
        clearDisp();
    } else{
        document.getElementById("display").value = val.substring(0, val.length-1);
    }
}

function clearDisp() {
    document.getElementById("display").value = "";
}

function equals() {
    let val = document.getElementById("display").value;

    if(val != "") {
        if(eval(val) == NaN || eval(val) == undefined || eval(val) == Infinity){
            document.getElementById("display").value = "ERR";
        } else {
            document.getElementById("display").value = eval(val);
        }
    }
}