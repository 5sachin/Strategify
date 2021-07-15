
  $(document).ready(function(){
  $(window).scroll(function(){
  if($(window).scrollTop() > 60 ){
  $('.my-navbar').addClass('navbar-scroll');
  $('.nav-item a').css('color', 'black');
  $('.navbar-brand').css('color', 'black');
  }
  else{
  $('.my-navbar').removeClass('navbar-scroll');
  $('.navbar-brand').css('color','white');
  $('.nav-item a').css('color', 'white');
  }
  });
  });
  

