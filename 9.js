function fun9()
{
    var x=document.getElementById("1").value;
    var y=document.getElementById("2").value;
    if(y>=50){
        //50% is the pass mark
        document.getElementById("3").value="Congratulations! You are good in "+x;

    }
    else{
        document.getElementById("3").value="Sorry... You have to work hard on "+x;
    }
}