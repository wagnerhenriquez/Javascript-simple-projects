const txt = document.getElementById('txt')
const btn = document.getElementById('btn')
const message = document.getElementById('message')

txt.addEventListener('input', () => {
    let content = txt.value
})

btn.addEventListener('click', () => {
    if (!txt.value) {
        message.textContent = 'You did not text anything!'
    } else {
        message.textContent = txt.value
        }
    })