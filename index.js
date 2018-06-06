const form = document.querySelector('form')

const addListElement = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const manaCost = f.manaCost.value

  const spellsDiv = document.querySelector('#spells')
  /*spellsDiv.innerHTML += `<li>${spellName}</li>`
  spellsDiv.innerHTML += `<li>${manaCost} mana</li>` */// old way before createElement()
  //Spellname createElement below
  let spellNameEntry = document.createElement('li')
  spellNameEntry.appendChild(document.createTextNode(spellName))
  spellsDiv.appendChild(spellNameEntry)
  //Manacost createElement below
  let manaCostEntry = document.createElement('li')
  manaCostEntry.appendChild(document.createTextNode(manaCost + ' Mana'))
  spellsDiv.appendChild(manaCostEntry)

  f.reset()
}

form.addEventListener('submit', addListElement)