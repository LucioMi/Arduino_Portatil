const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click',() =>{
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click',() =>{
    navMenu.classList.remove('show')
})

var counter =1;
setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
},6000);