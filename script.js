$( document ).ready( function () {

    $( "a" ).on( "click", function ( event ) {
    
            var hash = this.hash;
            console.log('this is, see below');
            console.log(this);
            console.log('this.hash is see below');
            console.log(this.hash);

            if ( hash !== "" ) {
                event.preventDefault();
// hash is '#about'
var mySelection = $(hash);
console.log(mySelection);
                var myTop;

                if (hash == '#about') {
                    // if we clicked on about, we scroll to 250px from the top, which is the same as the profile image distance from top
                    myTop = 0;
                } else {
                    // otherwise, if for example hash is '#contact', we scroll to the top of the element with id "contact"
                    myTop = $(hash).offset().top;
                }

               $("html, body").animate(
                   {
                       scrollTop: myTop
                   }, 700, function(){
                       console.log("last function executed");
                   }
               );
        
            }

    });






    /*Form*/

    var formGroups = $( ".form-group" );


    formGroups.each( function () {
        var formGroup = $( this );
        var label = formGroup.find( 'label' );
        var textareaSelection = formGroup.find( 'textarea' );
        var generalInput = formGroup.find( 'input' ).add( textareaSelection ); /*selection*/
        console.log( "generalInput is " );
        console.log( generalInput );

        function checkInput() {

            console.log( "generalInput.val() is " + generalInput.val() );

            var valueLength = generalInput.val().length;


            console.log( "generalInput value length is: " + valueLength );

            if ( valueLength > 0 ) {
                console.log( 'valueLength is > 0. so I will add freeze' );
                label.addClass( "freeze" );
            } else {
                label.removeClass( "freeze" );
            }

        }



        generalInput.change( function () {
            console.log( "checkInput part" );
            checkInput();
        } ); /*generalInput*/

    } ); /*form-group each*/

} ); /*document ready)*/