let text = document.getElementById("text")
let tour_left = document.getElementById("tour_left")
let tour_right = document.getElementById("tour_right")

window.addEventListener('scroll', () => {
    let value = window.scrollY
    text.style.marginTop = value * 1.5 + 'px'
    tour_left.style.left = value * -2 + 'px'
    tour_right.style.right = value * -2 + 'px'
})
