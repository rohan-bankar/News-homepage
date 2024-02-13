const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');

menu.addEventListener('click',(e)=>{
    document.querySelector('ul').style.display = 'block';
})

menuClose.addEventListener('click',(e)=>{
    document.querySelector('ul').style.display = 'none';
})