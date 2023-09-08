// const clock = document.querySelector('#clock')
// or ..another wat to select ...
const clock = document.getElementById('clock')

            // ( COMSOLE LOG ma dekhase :)
            
// let date = new Date();  
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

},1000)