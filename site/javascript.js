$(function() {

  setTimeout(function() {
    console.log($('#sidebar').length ,$('.open-menu').length);
    $('.open-menu').click(function() {
      // var $this = $(this);
      $('#sidebar').toggleClass('open');
      // console.log('click', $this.find('svg').length);
      // $this.find('svg').addClass('animated flipInY');
    });
  }, 0);

}());
