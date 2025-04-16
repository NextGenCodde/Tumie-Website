let innermenu = document.querySelectorAll(".has-submenu")
let submenu = document.querySelectorAll('.submenu-nav')

for(let i = 0; i<innermenu.length; i++){
    innermenu[i].addEventListener("mouseenter" , function(){
        submenu[i].style.visibility = 'visible'
        submenu[i].style.opacity = '1'
        submenu[i].style.pointerEvents = 'visible'
    })
}



for(let i = 0; i<innermenu.length; i++){
    innermenu[i].addEventListener("mouseleave" , function(){
        submenu[i].style.visibility = 'hidden'
        submenu[i].style.opacity = '0'
        submenu[i].style.pointerEvents = 'none'
    })
}




let search = document.querySelector('.shopping-search-btn')
// console.log(search);
let show = document.querySelector('.offcanvas.offcanvas-top')
let searchclose = document.querySelector('.search-close')
// console.log(show);



search.addEventListener('click' , function(){
   show.classList.add("showsearch")
})


searchclose.addEventListener('click' , function(){
    setTimeout(() => {
        show.classList.remove("showsearch")
    }, 100);
})