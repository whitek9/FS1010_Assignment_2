const createNewItem = () => {
    
    // Create new "li"
    let newLI = document.createElement('li')
    let inputValue = document.getElementById('listInput').value
    let newNode = document.createTextNode(inputValue)
    
    newLI.appendChild(newNode)
    
    // Check if input field is empty
    if (inputValue === '') {
        alert('Type something in the box to add a list item!')
    } else {
        document.getElementById('todoUL').prepend(newLI)
    }

    // Create checkbox span
    let checkBox = document.createElement('span')
        
    checkBox.className = 'unCheckedBox'
    newLI.prepend(checkBox)

    // Create close button span
    let closeSpan = document.createElement('span')
    let closeSymbol = document.createTextNode('\u00D7')

    closeSpan.className = 'closeButton'
    closeSpan.appendChild(closeSymbol)
    newLI.appendChild(closeSpan)

    // Reset input field to default
    document.getElementById('listInput').value = ''
}


$(document).ready( function() {
    
    // Call "createNewItem" if enter key is pressed, prevent default behaviour of resetting form/page
    $('#listInput').bind('keypress', function(e) {
        if (e.which == 13) {
            createNewItem()
            e.preventDefault()           
        }
    })
    
    // When the checkbox span is clicked, operates on the li to move it up/down the list
    $('ul').on('click', 'span', function() {
        $(this).parent('li').toggleClass('checked')
        $(this).toggleClass('checkedBox')
        if ($(this).parent('li').hasClass('checked')) {
            $(this).parent('li').appendTo($(this).parent().parent())
        } else {
            $(this).parent('li').prependTo($(this).parent().parent())
        }
    })   
    
    // Removes the item when the close button is clicked
    $('ul').on('click', 'span', function(e) {
        if ($(this).hasClass('closeButton')){
            $(this).parent('li').toggleClass('hidden')
            return false
        }
    })

    // Makes the list sortable
    $('#todoUL').sortable().disableSelection()
})