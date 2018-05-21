var myApp = {};

myApp.message = "day 1 training";

myApp.show = function()
{
    console.log(myApp.message+Math.random(2500)*1000);
}

myApp.UpdateHeading = function()
{
    var heading  = document.getElementsByTagName('h1')[0];
    heading.innerText = "JAVASCRIPT LEARNING";    
    console.log("Heading Updated" +Math.random(2500)*1000);
}
myApp.init = function()
{
    var btnGreeting = document.getElementById("btnGreeting");
    btnGreeting.onclick = myApp.show;
    //btnGreeting.onclick = myApp.show(); - called without event gets triggered.

    var btnChangeHeading = document.getElementById("btnChangeHeading");
    btnChangeHeading.addEventListener('click',myApp.UpdateHeading);
}

myApp.init();


var t = 1;
console.log(!t)
if(!t)
{
    alert(t);
}