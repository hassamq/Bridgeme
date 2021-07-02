$(window).ready(function() {
	$(".navbar-phone").click(function(a) {
		a.preventDefault(), $(".navbar-list").toggleClass("open")
	}), $(".navbar-item").click(function() {
		$(".navbar-list").removeClass("open")
	}), $(".go-back").click(function() {
		let a = $("#index");
		"0" == a.val() || (a.val(parseInt(a.val()) - 1), $(`.testimonial-image[data-index!=${a.val()}]`).attr("class", "testimonial-image close"), $(`.review-single[data-index!=${a.val()}]`).attr("class", "review-single close"), $(`.testimonial-image[data-index=${a.val()}]`).attr("class", "testimonial-image open"), $(`.review-single[data-index=${a.val()}]`).attr("class", "review-single open"))
	}), $(".go-forward").click(function() {
		let a = $("#index");
		"2" == a.val() || (a.val(parseInt(a.val()) + 1), $(`.testimonial-image[data-index!=${a.val()}]`).attr("class", "testimonial-image close"), $(`.review-single[data-index!=${a.val()}]`).attr("class", "review-single close"), $(`.testimonial-image[data-index=${a.val()}]`).attr("class", "testimonial-image open"), $(`.review-single[data-index=${a.val()}]`).attr("class", "review-single open"))
	}), setInterval(() => {
		let a = $("#index");
		a.val(parseInt(a.val()) + 1), "3" == a.val() && a.val(0), $(`.testimonial-image[data-index!=${a.val()}]`).attr("class", "testimonial-image close"), $(`.review-single[data-index!=${a.val()}]`).attr("class", "review-single close"), $(`.testimonial-image[data-index=${a.val()}]`).attr("class", "testimonial-image open"), $(`.review-single[data-index=${a.val()}]`).attr("class", "review-single open")
	}, 6e3)
}), window.onscroll = onScroll;
var navbar = document.getElementById("navbar"),
	cover = document.getElementById("cover"),
	sticky = navbar.offsetTop;

function onScroll() {
	window.pageYOffset >= sticky && navbar.classList.add("sticky"), 2 > window.pageYOffset && navbar.classList.remove("sticky")
}