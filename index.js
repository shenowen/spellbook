console.log('testing')

const heading = document.querySelector('h1')
const button = document.querySelector('button')

function changeText(){
    heading.textContent = 'changed text bois'
    
}

button.addEventListener("click", changeText)