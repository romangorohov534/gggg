var wk ={
    prise:0,
    calories:0, 
    small:  {
        prise:350,
        calories:0,     
    },
    large: {
        prise:400,
        calories:0,
    
    },
    noodles: {
        prise:0,
        calories:300
    },
    rice: {
        prise:0,
        calories:200
    },
    meet : {
        prise:90,
        calories:250 
    },
    pig : {
        prise:100,
        calories: 300 
    },
    chicken: {
        prise:60,
        calories:280 
    },
    vegetables :{
        prise:20,
        calories:30 
    },
    seeds: {
    prise:15,
    calories:10
    },
    sauce: {
        prise:15,
        calories:10
    },

    calculate :function(size, base){
    this.prise=wk[size].prise;
    this.calories=wk[base].calories;
        if (wk[size]=="small") {
            this.calories =this.calories *2;
        } else {
            this.calories=this.calories *3.5;
        }
    var checkboxArray = document.querySelectorAll ('input[name="add"]:checked');
        for (var i=0;i<checkboxArray.length;i++){
            var type = checkboxArray[i].id;
            this.prise+= wk[type].prise;
            this.calories+= wk[type].calories;  
        }
    console.log(this.prise);
    wk.result(this.prise,this.calories);
    },
    result: function(prise,calories){
        document.getElementById("prise").innerHTML = prise;
        document.getElementById("calories").innerHTML = calories;
    },
    reset_all: function(){
    this.price=0;
    this.calories=0;
    }
}
    document.getElementById("form").addEventListener('submit', (e)=>{
        e.preventDefault();
    var size_=document.querySelector('input[name="size"]:checked').value;
    var base_=document.querySelector('input[name="base"]:checked').value;
        wk.calculate(size_, base_ );
    })