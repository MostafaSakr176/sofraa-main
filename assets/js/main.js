var talabName = document.getElementById("talabName");
var desc = document.getElementById("talabDesc");
var submitButton = document.getElementById("submitButton");

var currentIndex ; //to stor the current index


var talabatContainer ;
if(localStorage.getItem("talabatContainer") == null){
    talabatContainer = [];
}else{
    talabatContainer = JSON.parse(localStorage.getItem("talabatContainer"));
    displayTalab();
}


function submit(){
                    var Talab = {
                    name : talabName.value ,
                    desc : desc.value
                    }
                    talabatContainer.push(Talab);
                    localStorage.setItem("talabatContainer", JSON.stringify(talabatContainer));
                    displayTalab();
                
    }
function displayTalab(){
    var cartona = ``;
    for(var i = 0 ; i<talabatContainer.length ; i++){
        cartona += `<div class="current-card">
        <div class="info row">
            <div class="image">
                <img src="imgs/burger.jpg" alt="">
            </div>
            <div class="details">
                <h2 class="main-color">${talabatContainer[i].name}</h2>
                <ul>
                    <li>الوصف و الاضافات : <span>${talabatContainer[i].desc}</span></li>
                    <li>رقم الطلب: <span>${i+1}</span></li>
                    <li>المجموع: <span>75 ريال</span></li>
                </ul>
            </div>
            <div class="options">
                <button class="receive mb-4" data-toggle="modal"
                    data-target="#receive">استلام</button>
                <button class="refuse" data-toggle="modal" data-target="#refuse">رفض</button>
            </div>
        </div>
    </div>;`
    }
    document.getElementById("TalabList").innerHTML = cartona;
}







$( function() {
    $( "#from" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
    });
  });

$( function() {
    $( "#to" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
});


$('input').iCheck({
  checkboxClass: 'icheckbox_square-blue',
  radioClass: 'iradio_square-blue',
  increaseArea: '20%' // optional
});


$(".my-rating").starRating({
  starSize: 45,
  totalStars:	5,
  initialRating: 3,
  useFullStars: true,
  emptyColor: '#240040',
  hoverColor: '#ff4057',
  activeColor: '#ff4057',
  ratedColor: '#ff4057',
  useGradient: false,
  disableAfterRate: false,
  strokeColor: '#ff4057',
  starShape: 'rounded',
});

$('#count-example').jQuerySimpleCounter({

  // start number
  start:  0,

  // end number
  end:    155,

  // easing effect
  easing: 'swing',

  // duration time in ms
  duration: 1000,

  // callback function
  complete: ''

});


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav: false,
    dots: true,
    dotsEach: 3,
    rtl: true,
    responsive:{
        0:{
            items:1,
            dots: false,
        },
        600:{
            items:2,
            dots: false,
        },
        1000:{
            items:4
        }
    }
  });
});