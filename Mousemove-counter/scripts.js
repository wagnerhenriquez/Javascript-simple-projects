const counter = document.getElementById('counter')

let suma = 0
window.addEventListener('mousemove', () => {
    suma++
    counter.textContent = suma
    if (suma > 100) {
        counter.style.color = 'blue'
    }
    if (suma > 500) {
        counter.style.color = 'red'
    }
    if (suma > 800) {
        counter.style.color = 'green'
    }
})