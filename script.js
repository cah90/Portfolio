$(document).ready(function(){
   var formGroups = $(".form-group");
   

   formGroups.each(function () {
    var formGroup = $(this);
    var label = formGroup.find('label');
    var input = formGroup.find('input');    

    function checkInput(){
        
        var valueLength = input.val().length;
        console.log(messageLength);
       
        console.log("input value is: " + valueLength);

        if (valueLength > 0) {
            console.log('valueLength is > 0. so I will add freeze');
            label.addClass("freeze");
        } else {
            label.removeClass("freeze");
        }

    }

    input.change(function(){
        console.log("checkInput part");
        checkInput();
        });
    });
});

