const ul = document.querySelector('nav .ul');
const closeIcon = document.querySelector('#close-icon')
const menuIcon = document.querySelector('#menu-icon')


closeIcon.addEventListener('click', ()=>{
    ul.classList.remove('open')
})
menuIcon.addEventListener('click', ()=>{
    ul.classList.add('open')
})
