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

    let newSpan = document.createElement('span')
    let exitSymbol = document.createTextNode('\u00D7')

    newSpan.className = 'exitButton'
    newSpan.appendChild(exitSymbol)
    newLI.appendChild(newSpan)

    // for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function() {
    //       var div = this.parentElement;
    //       div.style.display = "none";
    //     }
    // }

    document.getElementById('listInput').value = ''
}


$(document).ready( function() {
    $('#listInput').bind('keypress', function(e) {
        if (e.which == 13) {
            createNewItem()
            e.preventDefault()           
        }
    })
    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('checked')
    })    
    
})