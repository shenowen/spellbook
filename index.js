const form = document.querySelector('form')

const addListElement = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const manaCost = f.manaCost.value

  const spellsDiv = document.querySelector('#spells')
  /*spellsDiv.innerHTML += `<li>${spellName}</li>`
  spellsDiv.innerHTML += `<li>${manaCost} mana</li>` */// old way before createElement()
  //Spellname createElement method call below
  let spellEntry = createListElement()
  //addSpan method calls for the spell and mana below
  addSpan(spellEntry, spellName)
  addSpan(spellEntry, ' : ' + manaCost + ' mana\n ')
  //append into the list of spells
  spellsDiv.appendChild(spellEntry)

  f.reset()
}

function createListElement(){//simply generates the li element
  return document.createElement('li')
}

function addSpan(parentElement, string){// passes in the li element and string to create spans
    let entrySpan = document.createElement('span')
    entrySpan.appendChild(document.createTextNode(string + ' '))
    parentElement.appendChild(entrySpan)
    return entrySpan
}


form.addEventListener('submit', addListElement)