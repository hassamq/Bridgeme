$(window).ready(function () {
  $('.navbar-phone').click(function (e) {
    e.preventDefault();
    $('.navbar-list').toggleClass('open');
  })

  $('.navbar-item').click(function () {
    $('.navbar-list').removeClass('open');
  });

  $('.go-back').click(function (e) {
    let index = $('#index');
    if (index.val() == '0') return ;

    index.val(parseInt(index.val()) - 1);
    
    $(`.testimonial-image[data-index!=${index.val()}]`).attr('class', 'testimonial-image close')
    $(`.review-single[data-index!=${index.val()}]`).attr('class', 'review-single close')

    
    $(`.testimonial-image[data-index=${index.val()}]`).attr('class', 'testimonial-image open')
    $(`.review-single[data-index=${index.val()}]`).attr('class', 'review-single open')
  })

  $('.go-forward').click(function (e) {
    let index = $('#index');
    if (index.val() == '2') return ;
    
    index.val(parseInt(index.val()) + 1);

    
    $(`.testimonial-image[data-index!=${index.val()}]`).attr('class', 'testimonial-image close')
    $(`.review-single[data-index!=${index.val()}]`).attr('class', 'review-single close')

    $(`.testimonial-image[data-index=${index.val()}]`).attr('class', 'testimonial-image open')
    $(`.review-single[data-index=${index.val()}]`).attr('class', 'review-single open')
  });

  setInterval(() => {
    let index = $('#index');
    index.val(parseInt(index.val()) + 1);

    if (index.val() == '3') index.val(0);

    $(`.testimonial-image[data-index!=${index.val()}]`).attr('class', 'testimonial-image close')
    $(`.review-single[data-index!=${index.val()}]`).attr('class', 'review-single close')

    $(`.testimonial-image[data-index=${index.val()}]`).attr('class', 'testimonial-image open')
    $(`.review-single[data-index=${index.val()}]`).attr('class', 'review-single open')
  }, 6000)
})

window.onscroll = onScroll;

// Get the navbar
var navbar = document.getElementById("navbar");
var cover = document.getElementById("cover");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function onScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    // cover.classList.add("sticky")
  }
  
  if (window.pageYOffset < 2) {
    navbar.classList.remove("sticky");
    // cover.classList.remove("sticky");
  }
}