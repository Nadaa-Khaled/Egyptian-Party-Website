// leftMenu////

$('.openNav').on('click',function(){
        $('#leftMenu').animate({width:'300px'},200)
})


$(".closeNav").on('click',function(){
    $('#leftMenu').animate({width:'0px'},200)
})

/*scrollmenu*/
$("#leftMenu a[href^='#']").on('click',function(){
   
    
    let sectionId= $(this).attr("href");
    
    let sectionOffset = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop: sectionOffset},2000);
    
})


/* Acordion*/
$('#sliderDown .slider').on('click',function(){
    $('.sliderContent ').not($(this).next()).slideUp(500)
    $(this).next().slideToggle(500)
});

/* counter*/


let countDownDate = new Date("Dec 31, 2025 23:59:59" )
let counter = setInterval(() =>{
let dateNow = new Date().getTime();
let dateDiff = countDownDate - dateNow;

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
$('.days').html(days < 10 ? `0${days}` : days)
$('.hours').html(hours < 10 ? `0${hours}` : hours)
$('.minutes').html(minutes < 10 ? `0${minutes}` : minutes)
$('.seconds').html(seconds < 10 ? `0${seconds}` : seconds)

},1000);
/*textarea*/

let count = 100;
$('textarea').on('keyup',function() {
  let length = $("textarea").val().length;
  if(count-length<=0)
            {
                 $("#alert").text("your available character finished");
                 $('#characterRemaining').css('display', 'none');
                
            }
        else{
        
        $("#alert").text(count-length);
        }
});