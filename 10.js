function show(character)
{
    document.getElementById('result').value+=character;
    return character;
}

function calculate()
{
    var x=document.getElementById('result').value;
    var y=eval(x);
    document.getElementById('result').value=y;
    return y;
}

function clearScreen()
{
    document.getElementById('result').value='';
}