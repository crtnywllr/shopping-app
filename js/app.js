//Step1

//add item
function addItem() {
    //alert("I've just activated the addItem() function");
    var itemValue = $('#new-item').val();

    //check input
    if (itemValue.length === 0) {
        alert('Please add an item!');
    }

    //valid input
    else {
        //add one row in list
        appendItem(itemValue);

        //empty input box
        itemValue = $('#new-item').val('');
    }

}

//check item
function checkItem() {
    $(this).parent().toggleClass('click');
    //alert("I've just activated the checkItem() function");
}

//delete item
function deleteItem() {
    $(this).parent().remove();
    //alert("I've just activated the deleteItem() function");
}
//clear list
function clearList() {
    $('.shopping-list').empty();
    //alert("I've just activated the clearList() function");
}

//append item
function appendItem(itemValue) {
    var row = $('<li><button class="checkbox">✓</button><span>' + itemValue + '</span><button class="delete">X</button></li>');
    //add after previous list items
    $('.shopping-list').append(row);
}


//Step 2
$(document).ready(function () {
    /*on click(#add) function addItem()*/
    $('#add').on('click', function () {
        addItem();
    });
    /*on click(.clear) function clearList ()*/
    $('.clear').on('click', function () {
            clearList();
        })
        /*on click(.popular li) function addBottom ()*/
    $('.popular li').on('click', function () {
        var itemValue = $(this).text();
        appendItem(itemValue);

    })

});
/*on click (.checkbox) function checkItem()*/
$(document).on('click', '.checkbox', checkItem);
/*on click(.delete) function deleteItem ()*/
$(document).on('click', '.delete', deleteItem);

//add on enter
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItem();
    }
});
