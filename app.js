const menuBtn=document.getElementById('menu-btn')
const closeBtn=document.getElementById('close-btn')
const aside=document.getElementById('aside')
const toggler=document.querySelector('.toggler')



menuBtn.addEventListener('click', function(){
    aside.classList.add('show')
})
closeBtn.addEventListener('click', function(){
    aside.classList.remove('show')
})

toggler.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    toggler.querySelector('span:nth-child(1)').classList.toggle('active')
    toggler.querySelector('span:nth-child(2)').classList.toggle('active')
})