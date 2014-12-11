// $(function() {

//   setTimeout(function() {
//     console.log($('#sidebar').length ,$('.open-menu').length);
//     $('.open-menu').click(function() {
//       // var $this = $(this);
//       $('#sidebar').toggleClass('open');
//       // console.log('click', $this.find('svg').length);
//       // $this.find('svg').addClass('animated flipInY');
//     });
//   }, 0);

// }());

sfHover = function() {
        var sfEls = document.getElementById("menu").getElementsByTagName("LI");
        for (var i=0; i<sfEls.length; i++) {
                sfEls[i].onmouseover=function() {
                        this.className+=" sfhover";
                }
                sfEls[i].onmouseout=function() {
                        this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
                }
        }
}
if (window.attachEvent) window.attachEvent("onload", sfHover);