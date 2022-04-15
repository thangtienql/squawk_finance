(function( $ ){
   $(document).ready( function() {

       $('.__contract .__address .__copy').click( function() {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($('.__address .address_wallet').text()).select();
            document.execCommand("copy");
            $temp.remove();

            $('.__contract .__address .__copy span').fadeIn('slow');
            setTimeout( function() {
                $('.__contract .__address .__copy span').fadeOut('fast');
            }, 1500 );
       });

       // Scroll to section
        $('a[href*=\\#]:not([href=\\#])').on('click', function(){
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: (target.offset().top)
                    }, 300);
                    return false;
                }
            }
        });
    
   });
})( jQuery );