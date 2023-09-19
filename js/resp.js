menu = document.querySelector('.menu')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav  = document.querySelector('.rightnav')



menu.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})