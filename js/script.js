

function countdown(hours, minutes, seconds) {
   let totalSeconds = hours * 3600 + minutes * 60 + seconds;
 

   let timer = setInterval(function() {
    
     let hoursRemaining = Math.floor(totalSeconds / 3600);
     let minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
     let secondsRemaining = totalSeconds % 60;

     document.getElementById("timer").innerHTML = hoursRemaining + ":" + minutesRemaining + ":" + secondsRemaining;

     totalSeconds--;

     if (totalSeconds < 0) {
       clearInterval(timer);
       document.getElementById("timer").innerHTML = "Time is out";
     }
   }, 1000);
 }
 countdown(24, 0, 0);

 //sliders------------------------------
 const swiper1 = new Swiper('.slippers_slider', {
   // loop: true,
   slidesPerView: 1,
   spaceBetween: 20,
   effect: 'fade',

   thumbs: {
      swiper: {
         el: '.slippers_slider_mini',
         slidesPerView: 4,
         spaceBetween: 12,
      }
   }
 });


 