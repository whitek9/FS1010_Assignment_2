const createNewItem = () => {
    let newLI = document.createElement('li')
    let inputValue = document.getElementById('listInput').value
    let newNode = document.createTextNode(inputValue)
    newLI.appendChild(newNode)
    
    if (inputValue === '') {
        alert('Type something in the box to add a list item!')
    } else {
        document.getElementById('todoUL').appendChild(newLI)
    }
    
    document.getElementById('listInput').value = ''
}

$(document).ready( function() {
    $('#listInput').bind('keypress', function(e) {
        if (e.which == 13) {
            createNewItem()
            e.preventDefault()           
        }
        
    })
})