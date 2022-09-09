function newItem(){

    //jQuery
    //1. Adding a new item to the list of items: 
    let inputValue = $('#input').val();
    let li = $('<li></li>').append(document.createTextNode(inputValue));
    
    inputValue === '' ? alert("You must write something!") : $('#list').append(li);

    //2. Crossing out an item from the list of items:
    li.on("dblclick", function() {
        li.toggleClass("strike");
    });

    //3(i). Adding the delete button "X" with CLASS DELETE (DISPLAY: NONE) from the css: 
    let crossOutButton = $("<crossOutButton></crossOutButton>").append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", function() {
        li.addClass("delete");
    });
    
    // 4. Reordering the items: 
    $('#list').sortable();
    
}