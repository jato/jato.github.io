$(document).ready(function(){

    $(".jato").hide();  
    $(".jato").fadeIn(3000);  
    $("section #services h2").hide();
    $("section #services h2").fadeIn(1500);
    $("section #services li").hide();
    $("section #services li").fadeIn(2000);
    // $("footer").hide();
    // $("footer").fadeIn(2000);
    $("footer p").mouseover(function() {
      $(this).animate({ color: '#f00'},500);
  }).mouseout(function() {
      $(this).animate({ color: '#ccc'},500);
  });


  $('#proj-id').click(function(e) {
    e.preventDefault(); 

    $('#content').fadeToggle(900, 'linear');

      $('html, body').animate({scrollTop:$('#content').position().top}, 'slow');
      
    // var pageToLoad = $(this).attr('href'); // gets the href of the clicked link
    // $('#content').load(pageToLoad); // loads the remote page into the content div without refresh

    // $.ajax({ 
    //  url: "projects/project_index.html", dataType: "html" 
    // }).done(function( responseHtml ) {
    //  $("#content").html(responseHtml);
    // });

    // $('head').append('<link rel="stylesheet" type="text/css" href="stylesheets/projects.css"/>');
    });

        // $('a[href*=#]:not([href=#])').click(function() {
        //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        //         || location.hostname == this.hostname) {

        //         var target = $(this.hash);
        //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        //     if (target.length) {
        //        $('html,body').animate({
        //            scrollTop: target.offset().top
        //        }, 1000);
        //        return false;
        //        }
        //   }
        // });

    // Slide out Menu
    $('.nav-side .nav-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('nav-open');
    });
});

