function fun7(type){
    var x = document.getElementsByName(type.name);
    var y = document.getElementById(type.id);

    if (y.checked) {
      for(var i=0; i < x.length; i++){

          if(!x[i].checked){
              x[i].disabled = true;
          }else{
              x[i].disabled = false;
          }
      } 
    }
    else {
      for(var i=0; i < x.length; i++){
        x[i].disabled = false;
      } 
    }    
}