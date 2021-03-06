$(document).ready(function() {
    var sendScrollToFAQ = true;
    
    setTimeout(function() {   //makes 10 second event
        ga('send', {
            hitType: 'event',
            eventCategory: 'Timing',
            eventAction: 'Stayed on landing page for 10 seconds',
            eventLabel: 'Stayed on landing page'
        }); 
    }, 10000);
    
    $('#sample a span').click(function() {
        ga('send', {
            hitType: 'event',
            eventCategory: 'Click',
            eventAction: 'Clicked on "View Sample Data Set"',
            eventLabel: 'Sample Data Set Click'
        }); 
    })
    
    $('#reg').click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 600);
    });
    
    $('#pw1, #pw2').on('input', function() {
        if($('#pw1').val() != $('#pw2').val()) {
            $('#noMatch').css('visibility', 'visible')
            $('.box form button').prop('disabled', true)
        }
        else if($('#pw1').val() == '') {
            $('.box form button').prop('disabled', true)
            $('#noMatch').css('visibility', 'hidden')
        }
        else {
            $('#noMatch').css('visibility', 'hidden')
            $('.box form button').prop('disabled', false)
        }
    })

    
    $('#register').waypoint(function(direction) {
        console.log(direction)
        if(direction == 'down') {
            $('#reg').css({'display':'block'})
            $('#login div').css({'width':'66px'})
            $('.header').css({'background':'rgba(255,255,255,1)', 'height': '50px'})
            $('#logo h1').css({'margin-left':'5px', 'float': 'right'});
        }
        else {
            $('#reg').css('display','none')
            $('#login div').css({'width':'76px'})
            $('.header').css({'background':'rgba(255,255,255,0.7)', 'height': '75px'})
            $('#logo h1').css({'margin-left':0, 'float': 'none'});
        }
    })
    
    $('#moveLeft').waypoint(function() {
        $('#moveLeftContent').css('margin-left',0);
    }, {offset:'100%'})
    
    $('#moveRight').waypoint(function() {
        $('#moveRightContent').css('margin-left', '50%')
    },{offset:'100%'})
    
    
    $('.faq').waypoint(function() {
        if(sendScrollToFAQ) {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Scroll',
                eventAction: 'Scrolled to FAQ',
                eventLabel: 'Scroll Down'
            });
            sendScrollToFAQ = false;
        }
    }) 
    
})
