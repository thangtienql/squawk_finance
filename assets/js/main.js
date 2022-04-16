(function( $ ){
   $(document).ready( function() {

        //Copy Address
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
                        scrollTop: (target.offset().top) - 48
                    }, 300);
                    return false;
                }
            }
        });

        $('.toggle-mb').click( function() {
            $('.main-header').toggleClass('active-mb');
            $(this).toggleClass('active');

            $('.__primary-menu').slideToggle('fast');
            $('body').toggleClass('not-scroll');
        });

        $('.__primary-menu li a').click( function( e) {
            e.preventDefault();
            $('.main-header').removeClass('active-mb');
            $('.toggle-mb').removeClass('active');

            
            $('body').removeClass('not-scroll');
        });

        if( $(window).scrollTop() > $('.main-header').innerHeight() ){
            $('.main-header').addClass('sticky');
        }else{
            $('.main-header').removeClass('sticky');
        }
        $(window).scroll( function() {
            if( $(window).scrollTop() > $('.main-header').innerHeight() ){
                $('.main-header').addClass('sticky');
            }else{
                $('.main-header').removeClass('sticky');
            }
        });
        $(window).on('rezise load', function() {
            if( $(window).width() < 768 ){

                $('a[href*=\\#]:not([href=\\#])').on('click', function(){
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: (target.offset().top) - 48
                            }, 300);
                            return false;
                        }
                    }
                });

                $('.__primary-menu li a').click( function( e) {
                    e.preventDefault();
                    $('.__primary-menu').slideUp();
                });

            }
        });
        $(window).resize( function() {
            
        });
        
    
   });

   $(document).mouseup(function(e) {
        if( $(window).width() < 768 ){
            headerMb = $('.main-header');
            if ( !headerMb.is(e.target) && headerMb.has(e.target).length === 0 ){
            $('.header-main').removeClass('active-mb');
            $('body').removeClass('not-scroll');
            $('.__primary-menu').slideUp();
            $('.toggle-mb').removeClass('active');
            }
        }

    });
})( jQuery );