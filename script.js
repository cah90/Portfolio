$( document ).ready( function () {

    //Scroll of the page
   
    $( "a" ).on( "click", function ( event ) {

        var hash = this.hash;
        // console.log( 'this is, see below' );
        // console.log( this );
        // console.log( 'this.hash is see below' );
        // console.log( this.hash );

        if ( hash !== "" ) {
            event.preventDefault();
            // hash is '#about'
            var mySelection = $( hash );
            console.log( mySelection );
            var myTop;

            if ( hash == '#about' ) {
                // if we clicked on about, we scroll to 250px from the top, which is the same as the profile image distance from top
                myTop = 0;
            } else {
                // otherwise, if for example hash is '#contact', we scroll to the top of the element with id "contact"
                myTop = $( hash ).offset().top;
            }

            $( "html, body" ).animate( {
                scrollTop: myTop
            }, 700, function () {
            } );

        }

    } );
    
    //Scrollspy

(function(){
    var jqSections = $(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(jqSections, function(e) { //"e" becomes every div with the class section.
        console.log(e);
        sections[e.id] = e.offsetTop;
    
    });

    console.log(sections);

    window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollPositionPlusGap = scrollPosition + 50;
        // $("#debugScrollPosition").html(scrollPosition + ' (plus gap is : '+scrollPositionPlusGap + ')');


    for (i in sections) {
      if (sections[i] <= scrollPositionPlusGap) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();
    
    //Form

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
            // console.log( "checkInput part" );
            checkInput();
        } ); /*generalInput*/

    } ); /*form-group each*/

    //Modal box for projects section

    $(".clickable").on("click", function toggleModal() {
        var clickable = $(this).data("image");
        $(clickable).addClass("showModal");
     });

    $(".modal").on("click", function(e){
        clickedElement = e.target;
        console.log(clickedElement);
        console.log(clickedElement.className);
        if (clickedElement.className == 'modal showModal' || clickedElement.className == 'closeButton') {
            $(".modal").removeClass("showModal");
        }
 
    }); 

    // Responsive Menu
    $(function() {
        $("#mySideNav").on("click", function() {
            $("#menu-mobile").toggle();
        });
    });

    // Form Validation

    $( "#submit" ).on( "click", async function ( event ) {
        event.preventDefault();

        await main();
    } );

   }); /*document ready*/

   async function main() {


    var formData = new FormData();
    formData.append('name', $("#name").val());
    formData.append('email', $("#email").val());
    formData.append('message', $("#message").val());


    var response = await fetch( "https://cassiabernardo.com/processForm.php", {
        method: "POST",
        body: formData
    } );

    var responseText = await response.text();
    console.log(responseText);

    $("#contact .confirmation-message").html(responseText);
    $("#contact .confirmation-message").addClass("show");

    
}


