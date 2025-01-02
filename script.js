
function submit(){
   var cities=document.getElementsByClassName("city")
for(var city of cities){ 
   if(city.checked){
      console.log(city.value)
   }
}
}