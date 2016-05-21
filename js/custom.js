/*$('.isotope-wrapper').each(function(){
    var $isotope = $('.isotope-box', this);
    var $filterCheckboxes = $('input[type="radio"]', this);
    var filter = function(){
        var type = $filterCheckboxes.filter(':checked').data('type') || '*';
        if(type !== '*'){
            type = '[data-type="'+ type +'"]';
        }
        $isotope.isotope({ filter: type });
    };
    $isotope.isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'masonry'
    });
    $(this).on('change', filter);
    filter();
});*/
/*
var $container = $('isotope-box');

$(function(){*/
$('.isotope-wrapper').each(function(){
    var $isotope = $('.isotope-box', this);
    /* $isotope.isotope({
         layoutMode : 'masonry',
         itemSelector : '.isotope-item'
     });*/
    
    $('#filters .filter').click(function() {
        var rel = $(this).attr('rel');
        $isotope.isotope( {filter: rel});
    });
});
