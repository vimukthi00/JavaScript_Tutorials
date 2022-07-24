function fun3(){
    var today = new Date();
    var name=document.getElementById("1").value;
    var birthday = document.getElementById("2").value;
    var year = birthday.substr(0, 4);
    var age = today.getFullYear() - year;

    alert(name +"'s age : "+age);
  }