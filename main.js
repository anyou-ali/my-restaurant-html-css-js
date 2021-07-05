"use strict"

// change background color of navigation when scrolling

// utilisation de la méthode addEventListener sur la fenêtre actuelle avec l'évenement scroll en paramètre et une function anonyme
window.addEventListener("scroll", function(){
    //séléction de la class container-nav avec la méthode querySelector
    let headerNav = document.querySelector(".container-nav");
    // condition
    if(window.pageYOffset > 0){
        // si le nombres de pixels de la page défilés est plus grand que zéro, (c'est à dire si c'est true) ajouter la class scroll-nav
        headerNav.classList.add("scroll-nav");
    }
    else{
        // supprimer la class scroll-nav si la condition est false
        headerNav.classList.remove("scroll-nav");
    }
})

// responsive navigation

// utilisation de la méthode addEventListener sur le burger menu afin qu'il applique la class nav-show-menu lors du clique sur le burger menu
burgerMenu.addEventListener("click", function(){
    // séléction de la class nav__menu avec la méthode querySelector
    let nav = document.querySelector(".nav__menu");
    // ajout de la class toggle nav-show-menu
    nav.classList.toggle("nav-show-menu");
})

// function fermeture de la responsive nav
function closeNav(){
    let navUl = document.querySelector(".nav__menu");
    let navLinks = document.querySelectorAll(".nav__menu__list__link");
    // condition si la largeur de la page est inférieur ou égal à 768px
    if(window.innerWidth <= 768){
        for (let i = 0; i < navLinks.length; i++) {
            // utilisation de la méthode addEventListener sur les liens de da la nav 
            navLinks[i].addEventListener("click", function(){
                // ajout de la class toggle nav-show-menu
                navUl.classList.toggle("nav-show-menu");
            })
        }
    }
}
closeNav();