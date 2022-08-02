 //var click1=document.getElementById("clicked");
 //var display=document.querySelector(".dis>p");
 //function random_n(){
 //   return Math.floor(Math.random()*14);
 //}
 //function hex_value(){
 //   var colors=["a","b","c","d","e","f","1","2","3","4","5","6","7","8","9"];
 //   var value="#";
 //   var ran=0;
 //   for(var i=0;i<6;i++){
 //       ran=colors[random_n()];
 //       value+=ran;
 //   }
 //   return value;
 //}
 //function change_display(){
 //   var hex=hex_value();
 //   display.textContent=hex;
 //   console.log(hex);
 //   document.body.style.backgroundColor= hex;
 //}
 //click1.addEventListener('click',()=>change_display());
 //
 class pick{
    constructor(display){
        this.display=display;
    }
    random_n(){
       return Math.floor(Math.random()*14);
    }
    hex_value(){
       var colors=["a","b","c","d","e","f","1","2","3","4","5","6","7","8","9"];
        var value="#";
       var ran=0;
       for(var i=0;i<6;i++){
        ran=colors[this.random_n()];
        value+=ran;
       }
        return value;
    }
    change_display(){
        var hex=this.hex_value();
        this.display.textContent=hex;
        console.log(hex);
        document.body.style.backgroundColor= hex;
    }

 }
 var click1=document.getElementById("clicked");
 var display=document.querySelector(".dis>p");
 var object= new pick(display);
 click1.addEventListener('click',()=>object.change_display());
 