const navMenu = document.getElementById('nav-menu')
const navOuter = document.getElementById('nav-outer')

function navMenuClick(){
    navMenu.style = "transform: translateX(0)"
    navOuter.style = "opacity: .5"
}

function closeNavMenu(){
    navMenu.style = ""
    navOuter.style = ""
}