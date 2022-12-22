let navMenu=document.getElementById("menu-hamburger");
let subMenuItem=document.getElementById("sub-menu-item");

toogleMenu=()=>{
    let navegacao=document.getElementById("nav");
    navegacao.classList.toggle("menu-ativo");

}

toogleSubMenuItem=()=>{
   subMenuItem.classList.toggle("subMenu-item-ativo");
   if(document.querySelector('li.subMenu-item-ativo') !== null){
    let subItens=document.getElementById('sub-menu-items').style.display='block';
 
   }else{
    document.getElementById('sub-menu-items').style.display='none';
   }
}
navMenu.addEventListener("click",toogleMenu);
subMenuItem.addEventListener("click",toogleSubMenuItem);