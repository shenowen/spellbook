console.log('testing')

const heading = document.querySelector('#header2')
const button = document.querySelector('button')

function changeTextBonus(){
    heading.textContent = 'changed text bois'
}

button.addEventListener("click", changeTextBonus)

let changingheader = document.querySelector('h2')
//const changebutton = document.querySelector('#button2')


function changeHeaderText(){
    changingheader.textContent = document.getElementById('headertext').value
}