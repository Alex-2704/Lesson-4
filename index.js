const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const normal = document.querySelector('#normal')
const bold = document.querySelector('#bold')
const italic = document.querySelector('#italic')
const text = document.querySelector('h3')

let fontSize = 20;

minus.addEventListener('click', () => {
  fontSize-- 
  text.style.fontSize = fontSize + 'px'
})

plus.addEventListener('click', () => {
  fontSize++ 
  text.style.fontSize = fontSize + 'px'
})

bold.addEventListener('click', () => {
  text.style.fontWeight = 'bold'
})

italic.addEventListener('click', () => {
  text.style.fontStyle = 'italic'
})

normal.addEventListener('click', () => {
  text.style.fontWeight = 'normal'
  text.style.fontStyle = 'normal'
})
