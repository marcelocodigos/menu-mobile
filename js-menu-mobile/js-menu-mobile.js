let navMenu=document.getElementById("menu-hamburger");

toogleMenu=()=>{
    let navegacao=document.getElementById("nav");
    navegacao.classList.toggle("menu-ativo");
    
}

navMenu.addEventListener("click",toogleMenu);