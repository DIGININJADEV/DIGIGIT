/* GLOBAL VARIABLES */
var input = '';
var result = '';
var bOperatorPressed = false;
var bOperatorFinished = true;
var bInOperation = false;
var keyPressCount = 0;
var mathOperator = '';

function calculate(num)
{
    var displayInput = document.getElementById("display");
    var currentValue = displayInput.value;
    num = input;
    if(mathOperator == '*')
    {
        var calculatedResult = parseFloat(currentValue) * num;
    }
    if(mathOperator == '+')
    {
        var calculatedResult = parseFloat(currentValue) + parseFloat(num);
    }
    if(mathOperator == '/')
    {
        var calculatedResult = parseFloat(currentValue) / num;
    }
    if(mathOperator == '-')
    {
        var calculatedResult =  num - parseFloat(currentValue);
    }
    
    var roundedResult = calculatedResult.toFixed(3);

    
    var displayInput = document.getElementById("display");
    displayInput.value = roundedResult;
    bOperatorPressed = false;
    bOperatorFinished = false;
    document.getElementById("operator").innerHTML = '=';
    keyPressCount = 0;
}



function clearDisplay()
{
  var displayInput = document.getElementById("display").value = '0.';
  document.getElementById("operator").innerHTML = '';
}

function turnOff()
{
  var displayInput = document.getElementById("display").value = '';
  document.getElementById("operator").innerHTML = '';
}

function numPress(num)
{
    //input = input + ' ' + num;
    var displayInput = document.getElementById("display");
    var currentValue = displayInput.value;
    if((currentValue != '0.')&&(bOperatorFinished == true))
    {
        displayInput.value = currentValue + num;
    }else{
        if(keyPressCount > 0)
        {
           displayInput.value = currentValue + num;
        }else{
           displayInput.value = num;
            keyPressCount = keyPressCount + 1;
        }
        
        
    }
}

function arithmetic(type)
{
    bOperatorPressed = true;
    bOperatorFinished = false;
    mathOperator = type;
    document.getElementById("operator").innerHTML = type;
    keyPressCount = 0;
    var CurrentValue = document.getElementById("display").value;
    input = CurrentValue;
}