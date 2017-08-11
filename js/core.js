(function (global,$) {
    'use strict';

    $('.d-menu-button').click(function(){
        $('.menu_fix_top').animate({transform: 'translateY(0%)'});
    });

    $('.close_btn').click(function(){
        $('.menu_fix_top').animate();
    });


})(this, this.jQuery);