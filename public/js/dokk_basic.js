
$(document).ready(function(){

	//높이값 갱신
	var ht = $(window).height();	
	$("section").height(ht);
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});

  
	// fullpage customization
	$('#fullpage').fullpage({
		easing:'easeOutSine',
   		scrollingSpeed: '1000',
		sectionSelector: '.vertical-scrolling',
		slideSelector: '.horizontal-scrolling',
		css3: true,
		controlArrows: false,
		anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
		menu: '#gnb',
	
		afterLoad: function(anchorLink, index) {
			if (index == 5) {
				$('#gnb').fadeOut();
				$('.scroll').fadeOut();
			}
		},
	
		onLeave: function(index, nextIndex, direction) {
			if(index == 5) {
				$('#gnb').fadeIn();
				$('.scroll').fadeIn();
			}
		},
			
	}); 

	$(document).on('click', '.scroll', function(){
		var index = ($(".section.active").index());
		console.log(index);
		$.fn.fullpage.moveTo(index+2)
	});
	
	//toggle
	$(".mobile_header").on("click", mobileFn);
	var mobileChk = false;
	function mobileFn(e) {
		if(mobileChk) {
			//내려와 있다면
			$(".m_header").animate({"right":"-210px"}, function() {
				mobileChk = false;
			});
		}
		else {
			//올라가 있다면
			$(".m_header").animate({"right":"-50px"}, function() {
				mobileChk = true;
			});
		}
		
	}
	
	//main
	$(function() {
		new Typed('#typed', {
			strings: ["NOT"],
			typeSpeed: 100,
			backDelay: 1500,
			loop: true,
			callback: function(){}
		});
	});

	//footer
	$(document).on('click', '.f_site', function () {
		if($(".site_list").css('display') == 'block') {
			$(".f_site > i").addClass("fa-angle-up");
			$(".f_site > i").removeClass("fa-angle-down");
			$(".site_list").css({"display":"none"});
		} else {
			$(".f_site > i").removeClass("fa-angle-up");
			$(".f_site > i").addClass("fa-angle-down");
			$(".site_list").css({"display":"block"});
		}
	});

});


