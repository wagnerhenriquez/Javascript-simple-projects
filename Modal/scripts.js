const open = document.querySelector('.modal-btn')
const close = document.querySelector('.close-btn')
const modal = document.querySelector('.modal-overlay')

open.addEventListener('click', () => {
    modal.style.visibility = 'initial'
    modal.style.zIndex = '0'
    
})
close.addEventListener('click', () => {
    modal.style.visibility = 'hidden'
    modal.style.zIndex = '-10'
})