/**
 * Created by wayne on 2017/03/12.
 */
$(function(){

 $(document).on('click', '#submitedBtn', function(){
   $.mobile.loading('show');
   $('#firstSlide').addClass('animated fadeOutLeft');
   $('#slide').removeClass('firstIntro');

   for(var i = 0; i < 4; i++)
     {
         var cardsHtml  = '';
         cardsHtml += '<div class="card col-sm-3 animated slideInRight">';
         cardsHtml += '<div class="img-responsive">';

         if(i == 3){
             cardsHtml += '<div class="productIntroFourth">';
         }else{
             cardsHtml += '<div class="productIntro">';
         }

         if(i == 0){
             cardsHtml += '<h2>20/200 Million</h2>';
             cardsHtml += '<span> NT: 658 </span>';
         }else if(i == 1){
             cardsHtml += '<h2>20/200 Million</h2>';
             cardsHtml += '<span class="discount"> NT: 2212 </span>';
             cardsHtml += '<span> NT: 1920 </span>';
         }else if(i == 2){
             cardsHtml += '<h2>20/200 Million</h2>';
             cardsHtml += '<h2>20/400 Million</h2>';
             cardsHtml += '<span> NT: 2309 </span>';
         }else if(i == 3){
             cardsHtml += '<h2>Other Options?</h2>';
         }

         cardsHtml += '</div>';
         cardsHtml += '</div>';
         cardsHtml += '<div class="card-block">';
         cardsHtml += '<div class="card-content">';
         if(i == 0 || i == 2){
             cardsHtml += '<h4 class="card-title">1 year</h4>';
         }else if(i == 1){
             cardsHtml += '<h4 class="card-title">2 year</h4>';
         }else if(i == 3){
             cardsHtml += '<h4 class="card-title"></h4>';
         }

         if(i == 0){
             cardsHtml += '<p class="card-text">CTPL</p>';
         }else if(i == 1){
             cardsHtml += '<p class="card-text">CTPL + Driver</p>';
         }else if(i == 2 ){
             cardsHtml += '<p class="card-text">CTPL + Driver + VTPL</p>';
         }else if(i == 3){
             cardsHtml += '<p class="card-text"></p>';
         }
         cardsHtml += '</div>';

         if(i == 3){
             cardsHtml += '<button  class="btn btn-default productOther">選擇</button>';
         }else{
             cardsHtml += '<button  class="btn btn-default productGo">選擇</button>';
         }
         cardsHtml += '</div>';
         cardsHtml += '</div>';

         $('#slide').append(cardsHtml);
     }
     $.mobile.loading('hide');
  })

    $(document).on('click', '.productGo', function(){
        $.mobile.loading('show');
        $(this).parents('.card').removeClass('slideInRight').addClass('slideOutUp');
        $(this).parents('#slide').find('.slideInRight').removeClass('slideInRight').addClass('flipOutY');
        $.mobile.loading('hide');
    })

});