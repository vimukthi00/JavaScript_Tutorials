function fun2(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var a = document.getElementById("a");
    var halfday;
    if (hours>=12) {
        halfday="pm";
        hours=hours-12;
    }
    else{
        halfday="am";
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    var a = document.getElementById("a");   
    a.textContent = "Now the time is "+hours+"."+minutes+" "+halfday;
    a.innerText = "Now the time is "+hours+"."+minutes+" "+halfday;
    var hrs;
    var half_hrs;
    if (minutes>30) {
        hrs=23;
        half_hrs=11;
    }else{
        hrs=24;
        half_hrs=12;
    }
    if(halfday == 'am'){
        c.textContent = "Remains "+(hrs-hours)+" hours more....";
        c.innerText = "Remains "+(hrs-hours)+" hours more....";
    }
    else{
      c.textContent = "Remains "+(half_hrs-hours)+" hours more....";
      c.innerText = "Remains "+(half_hrs-hours)+" hours more....";
    }
}
