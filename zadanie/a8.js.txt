var arr = [1,3,4,2,6,5,2,4]
var res = arr.reduce(function(sum, current) {
    if(current==10){
       return current; 
    }
    else{
        return sum + current;
    }
  }, 0);
  alert(res)