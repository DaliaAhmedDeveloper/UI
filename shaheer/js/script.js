$(document).ready(function(){


    setTimeout(function(){ 
        $('.loader').fadeOut();
     }, 3000);

var maxchars = 280;

$('.add-post .f-group textarea').keypress(function () {
    var tlength = $(this).val().length;
    $(this).val($(this).val().substring(0, maxchars));
    var tlength = $(this).val().length;
    remain = maxchars - parseInt(tlength);
    $('.add-post .subimt span span').text(remain);
});
$('.add-post .f-group textarea').keyup(function () {
    var tlength = $(this).val().length;
    $(this).val($(this).val().substring(0, maxchars));
    var tlength = $(this).val().length;
    remain = maxchars - parseInt(tlength);
    $('.add-post .subimt span span').text(remain);
});
     
    $('.add-to-story-modal-pills li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('select').niceSelect();


    if($('.post-media').length){
        $('.post-media').lightGallery({
            selector : '.post-media-content',
        });
    }
  

    $('.add-post .f-group textarea , #post-comment-form textarea , .mm').emoji({
        place:'after'
    });

    var mouse_is_inside = false;

    $('.imjo-box').hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });

    $("body").mouseup(function(){ 
        if(! mouse_is_inside) $('.imjo-box').hide();
    });
    $('.rep_lay').click(function(e){
        e.preventDefault();
        $(this).parent().find('form.typeAreplay').fadeToggle();
    });
  

    $('.open-side-menu').click(function(){
        $('.side-menu-links-container').toggleClass('appear-menu');
        $(this).toggleClass('icofont-navigation-menu').toggleClass('icofont-close-line');
    });

    $('.open-service-options').click(function(){
        $(this).parent().find('.service-footer').slideToggle();
        $(this).toggleClass('rotate1');
    });

    $('.open-status-menu').click(function(){
        $('.stutus ul').toggleClass('show-status');
        $(this).find('i').toggleClass('rotate1');
    });


        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });

        $('.data-on-hover').each(function(){
            var txt = $(this).attr('data-on-hover');
            $(this).append('<p class="onhover">'+ txt +'</p>');
        });


        $('.cccheckkk label._videoo').hover(function(){
            $('.sp-overlay').fadeIn();
        },function(){
            $('.sp-overlay').fadeOut();
        });

        $( "li.inbox-contact" ).hover(function() {
             $(this).css('background' , '#F6F6F6');
             $(this).find('.inbox-date').hide();
             $(this).find('.inbox-user-options').fadeIn();
            }, function() {
                $(this).css('background' , '#fff');
                $(this).find('.inbox-user-options').hide();
                $(this).find('.inbox-date').fadeIn();
                $(this).find('.pp-options-dots ul').removeClass('show-pp')
        });

        $('#selectAll').click(function () {
            $('.all-in-cart form.proceed-to-checkout .check-label input').prop('checked', this.checked);
        });
    
        $('.all-in-cart form.proceed-to-checkout .check-label input').change(function () {
            var check = ($('.all-in-cart form.proceed-to-checkout .check-label input').filter(":checked").length == $('.all-in-cart form.proceed-to-checkout .check-label input').length);
            $('#selectAll').prop("checked", check);
        });


        $('.card-link').click(function(){
            $(this).find('i').toggleClass('rotate2');
            $(this).parents('.card').siblings().find('i.icofont-thin-down').removeClass('rotate2');
        });

        $('.card .show').parent().find('.card-header i.icofont-thin-down').addClass('rotate2');


        $('.single-post-slider').owlCarousel({
            items:1,
            rtl:true,
            loop:true
        });
        $('.cards-slider').owlCarousel({
            loop:true,
            rtl:true,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2,
                },
                767:{
                    items:3
                }
            }
        });

        /***/
        var placeholder =" ";
        $('input , textarea').focus(function(){
            placeholder = $(this).attr('placeholder');
            $(this).attr('placeholder' , " ");
        });
        
        $('input').blur(function(){
            $(this).attr('placeholder' , placeholder);
        });
        /****/

        $('.tags-slider').owlCarousel({
            loop:false,
            rtl:true,
            dots:false,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2,
                },
                767:{
                    items:3
                }
            }
        });

        $('.filterSearch').click(function(){
            $(this).find('i').toggleClass('icofont-settings icofont-close-line');
        });

        $('.statistics-header').click(function(){
            var toggleWord = $(this).attr('data-toggle-word');
            var txt = $(this).text();
            $(this).attr('data-toggle-word' , txt);

            $(this).find('span').text(toggleWord);

            $(this).parent().find('div.___statistics').fadeToggle(0);
        });


        $('.pp-options-dots ul').click(function(){
            $(this).removeClass('show-pp');
        });


        $( ".unblock-user , .following .follow-user" ).hover(
            function() {
              var toggleWord = $( this ).attr('data-toggle-word');
              var txt = $(this).text();
              $(this).attr('data-toggle-word' , txt)
              $(this).text(toggleWord);
            }, function() {
                var toggleWord = $( this ).attr('data-toggle-word');
              var txt = $(this).text();
              $(this).attr('data-toggle-word' , txt)
              $(this).text(toggleWord);
            }
          );


          $('.pp-options-dots-con , .inbox-user-options').click(function(){
              $(this).parent().find('ul').toggleClass('show-pp');
          });

          $('.searchform form input').focus(function(){
            $('.search-history').addClass('show-pp');
          });

          $('.searchform form input').blur(function(){
            $('.search-history').removeClass('show-pp');
          });

          $('.searchform form input').keypress(function(){
            $('.search-history').removeClass('show-pp');
            $('._search-results').addClass('show-pp');
          });
    
    
    
    
    
    
    
    /****************************************************************/
//GLOBAL
    //Stories Container
var sectionStories = $('.stories-sections'),
//Srories Persons
storiesPersons = sectionStories.find('.stories-sections-container .story-section-person'),
//Srories Persons All
storiesPersonsAll = storiesPersons.find('.stories-sections-item'),
//Number Of Seconds Stoped To Go Next
numberOfSeconds = 5 * 1000,
//First Story In Person
startNumberEachStory = 0,
//To Get Last Number (Person Number)
storyIdPerson,
//Number SetTimeOut To Stop Loop Auto
stopLoopAuto,
//Number SetTimeOut To Stop Loop Auto Continue
stopLoopAutoContinue,
//Container Lines
conLines = $('.stories-sections .stories-sections-container .lines-time-story');
/****************************************************************/

/****************************************************************/
//EVENTS
$(document).on('click', '.stories-into .story-section-others .story , .popup-story', function (e) {
//To Get Person ID
var storyIdPerson = $(this).attr('id');
//To Update Last Number (Person Number) When Clicked
storyIdPerson = getNumberPersonFromID(storyIdPerson);
startNumberEachStory = 0;
//To Show Section Stories
sectionStories.fadeIn(500);
console.log(stopLoopAuto);
clearTimeout(stopLoopAuto);
//To Show Person Story I Clicked And Show First Story For Person
sectionStories.find('.stories-sections-container .story-section-person.story-' + storyIdPerson).addClass('active-parent').show(0).end()
    .find('.stories-sections-container .story-section-person.story-' + storyIdPerson + ' .stories-sections-item:first-of-type').addClass('active-single').fadeIn(200);
    sectionStories.find('.stories-sections-container .story-section-person.story-' + storyIdPerson).siblings().removeClass('active-parent').hide(0);
    sectionStories.find('.stories-sections-container .story-section-person.story-' + storyIdPerson).siblings().find('.stories-sections-item').removeClass('active-single').fadeOut(0);
loopNext(storyIdPerson);
numberOfPersonStoryActiveNewStory(numberOfPersonStoryActiveNewPerson());
});
$(document).on('click', '.stories-sections .stories-sections-container .arrows .arrow', function () {
clearTimeout(stopLoopAuto);
if($(this).hasClass('right-arrow-rr')){
    goRightAndLeftStoryByArrow(true);
} else {
    goRightAndLeftStoryByArrow(false);
}
startNumberEachStory = numberOfPersonStoryActiveNewStory(numberOfPersonStoryActiveNewPerson());
loopNext(numberOfPersonStoryActiveNewPerson());
});
$('.s-close').click(function(){
storiesPersonsAll.removeClass('active-single').hide(0);
clearTimeout(stopLoopAuto);
storiesPersons.removeClass('active-parent').hide(0);
sectionStories.fadeOut(500);
});
/****************************************************************/

/****************************************************************/
//HELPER FUNCTION
//To Get Person Number From ID I Clicked
function getNumberPersonFromID(id) {
var numberPerson = id.replace('story-', '');
return numberPerson;
}

//Loop Story To Next And Stop When Finish
function loopNext(storyIdPerson) {
coreFuction(storyIdPerson);
}

//Function Core
function coreFuction(storyIdPerson) {
var personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + storyIdPerson),
    personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + storyIdPerson + '-' + startNumberEachStory);
drowPoint(personStoryNow.find('.stories-sections-item'), startNumberEachStory);
stopLoopAuto = setTimeout(function () {
    storiesPersonsAll.removeClass('active-single').hide(0);
    personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + storyIdPerson),
    personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + storyIdPerson + '-' + startNumberEachStory);
    if(!personStoryNow.next().length && !personStoryNowEachStory.next().length){
        storiesPersons.removeClass('active-parent').hide(0);
        sectionStories.fadeOut(500);
        return 0;
    }
    if(personStoryNowEachStory.next().length){
        personStoryNow.show(0).addClass('active-parent').siblings('.story-section-person').removeClass('active-parent').hide(0);
        personStoryNowEachStory.next().addClass('active-single').fadeIn(200);
        startNumberEachStory++;
        drowPoint(personStoryNow.find('.stories-sections-item'), startNumberEachStory);
    } else {
        storyIdPerson++;
        startNumberEachStory = 0;
        personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + storyIdPerson);
        personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + storyIdPerson + '-' + startNumberEachStory);
        personStoryNow.show(0).addClass('active-parent').siblings('.story-section-person').removeClass('active-parent').hide(0);
        personStoryNowEachStory.addClass('active-single').fadeIn(200);
        drowPoint(personStoryNow.find('.stories-sections-item'), startNumberEachStory);
    }
    coreFuction(storyIdPerson);
}, numberOfSeconds);
}

//Get Number Of Person (Person Story Active New)
function numberOfPersonStoryActiveNewPerson() {
var activeParent = sectionStories.find('.stories-sections-container .story-section-person.active-parent');
activeParent = activeParent.attr('data-person-id');
activeParent = activeParent.replace('story-', '');
return activeParent;
}

//Get Number Of Person (Person Story Active New)
function numberOfPersonStoryActiveNewStory(numberOfPersonStoryActiveNewPerson){
var activeParent = numberOfPersonStoryActiveNewPerson;
var activeSingle = sectionStories.find('.stories-sections-container .story-section-person.active-parent' + ' .stories-sections-item.active-single').attr('data-person-id');
activeSingle = activeSingle.replace('story-' + activeParent + '-', '');
return activeSingle;
}

//Go To Right And Left Story Using Arrow
function goRightAndLeftStoryByArrow(rightArrow = true) {
var personActiveNumber = numberOfPersonStoryActiveNewPerson(),
    storyActiveNumber = numberOfPersonStoryActiveNewStory(personActiveNumber);
storiesPersonsAll.removeClass('active-single').hide(0);
var personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + personActiveNumber),
    personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + personActiveNumber + '-' + storyActiveNumber);
if(rightArrow == true) {
    if (!personStoryNow.next().length && !personStoryNowEachStory.next().length) {
        storiesPersons.removeClass('active-parent').hide(0);
        sectionStories.fadeOut(500);
        return 0;
    }
    if (personStoryNowEachStory.next().length) {
        personStoryNow.show(0).addClass('active-parent').siblings('.story-section-person').removeClass('active-parent').hide(0);
        personStoryNowEachStory.next().addClass('active-single').fadeIn(200);
        personActiveNumber = numberOfPersonStoryActiveNewPerson();
        storyActiveNumber = numberOfPersonStoryActiveNewStory(personActiveNumber);
        personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + personActiveNumber);
        personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + personActiveNumber + '-' + storyActiveNumber);
        drowPoint(personStoryNow.find('.stories-sections-item'), storyActiveNumber);
    } else {
        personActiveNumber++;
        storyActiveNumber = 0;
        personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + personActiveNumber);
        personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + personActiveNumber + '-' + storyActiveNumber);
        personStoryNow.show(0).addClass('active-parent').siblings('.story-section-person').removeClass('active-parent').hide(0);
        personStoryNowEachStory.addClass('active-single').fadeIn(200);
        personActiveNumber = numberOfPersonStoryActiveNewPerson();
        storyActiveNumber = numberOfPersonStoryActiveNewStory(personActiveNumber);
        personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + personActiveNumber);
        personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + personActiveNumber + '-' + storyActiveNumber);
        drowPoint(personStoryNow.find('.stories-sections-item'), storyActiveNumber);
    }
} else {
    if (personStoryNow.prev().length == 0 && personStoryNowEachStory.prev('.stories-sections-item').length == 0) {
        storiesPersons.removeClass('active-parent').hide(0);
        sectionStories.fadeOut(500);
        return 0;
    }
    if (personStoryNowEachStory.prev('.stories-sections-item').length) {
        personStoryNow.show(0).addClass('active-parent').siblings('.story-section-person').removeClass('active-parent').hide(0);
        personStoryNowEachStory.prev().addClass('active-single').fadeIn(200);

        personActiveNumber = numberOfPersonStoryActiveNewPerson();
        storyActiveNumber = numberOfPersonStoryActiveNewStory(personActiveNumber);
        personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + personActiveNumber);
        personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + personActiveNumber + '-' + storyActiveNumber);

        drowPoint(personStoryNow.find('.stories-sections-item'), storyActiveNumber);
    } else {
        personActiveNumber--;
        personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + personActiveNumber);
        storyActiveNumber = personStoryNow.find('.stories-sections-item').length - 1;
        personStoryNow = $('.stories-sections .stories-sections-container .story-section-person.story-' + personActiveNumber);
        personStoryNowEachStory = personStoryNow.find('.stories-sections-item#story-' + personActiveNumber + '-' + storyActiveNumber);
        personStoryNow.show(0).addClass('active-parent').siblings('.story-section-person').removeClass('active-parent').hide(0);
        personStoryNowEachStory.addClass('active-single').fadeIn(200);
        drowPoint(personStoryNow.find('.stories-sections-item'), storyActiveNumber);
    }
}
}

//Drow Point
function drowPoint(numberOfPoint, nowWaiting) {
conLines.empty();
for(var i = 0; i < numberOfPoint.length; i++){
    conLines.append('<div class="line-hover"><div class="line-cover"></div></div>');
}
var plus = Number(nowWaiting) + 1;
conLines.find('.line-hover:nth-of-type(' + (plus) + ') .line-cover').stop().animate({
    'width': '100%'
}, numberOfSeconds, 'linear');
for(var j = 1; j <= nowWaiting ; j++){
    conLines.find('.line-hover:nth-of-type(' + j + ') .line-cover').css({
        'width': '100%'
    });
}
}
/****************************************************************/

});