// JavaScript Document

$(document).ready(function(){
            $('body').plusAnchor({
                easing: 'easeInOutExpo',
                speed:  1000
            });
            
            $('.fade').bxSlider({
				
            });
			
			$('#nav-icon2').click(function(){
				$(this).toggleClass('open');
			});
			
			// code for arrow navigation up and down $(document).smartscroll(
//              {
//                section: '.section', 
//                anchor: '.scroll', 
//                fullscreen: true, 
//                activelink: '.active', 
//                nav: true, 
//                controls: true, 
//                totop: true, 
//                speed: 1000, 
//                totopspeed: 1000
//              }
//          );
			
			// Scroll Function for the Contact button on the Menu Bar
			$('.contactBtn').click(function () {
			  var WH = $(window).height();  
			  var SH = $('body')[0].scrollHeight;
			  $('html, body').stop().animate({scrollTop: SH+WH}, 1500);
			});
			
			$('.homeBtn').click(function () {
			  $('html, body').stop().animate({scrollTop: 0}, 1500);
			});
			
			if($(window).width() > 0)
	{

		var headerHeight = $('header').height();

		$(document).scroll(function() {
			var pos = $(document).scrollTop();

			$('#footer').css('display', ((pos > headerHeight) ? 'block' : 'none'));

				var parallax = parseInt(pos * -0.3) + 'px';
				var rgba		 = ((pos / headerHeight) * 0.4) + 0.2;

				$('.harvinBlock').css('margin-top', parallax);
				$('header').css('background', 'rgba(0,0,0,' + rgba);

			
		});
	
	}
            
            
        });
		
		var error = false;
		
		$("#submit").click(function(e) {
			
			var fields = {
			name	:	$("#name"),
			email	:	$("#email"),
			subject	:	$("#subject"),
			message	:	$("#message")
			};
			
			if(fields.name.val()=="") { fields.name.addClass("error"); error = true; }
			else
			{
				fields.name.removeClass("error"); 
				error = false;
			}
			if(fields.email.val()=="") { 
			fields.email.addClass("error"); 
			error = true; 
			} else {
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if(!reg.test(fields.email.val())) {
				fields.email.addClass("error"); 
				error = true;
			}
			else
			{
				fields.email.removeClass("error"); 
				error = false;
			}
			
		}
		if(fields.subject.val()=="") { fields.subject.addClass("error"); error = true; }
		else
			{
				fields.subject.removeClass("error"); 
				error = false;
			}
		if(fields.message.val()=="") { fields.message.addClass("error"); error = true; }
		else
			{
				fields.message.removeClass("error"); 
				error = false;
			}
		
		if(!error) {
			$.ajax({
			  type: "POST",
			  url: "http://flypaperplane.com/api",
			  data: { 
				email: fields.email.val(), 
				name: fields.name.val(),
				subject: fields.subject.val(),
				message: fields.message.val()
				
			  },
			  success: function(response) {
				console.log(response);
			  },
			  dataType: "json"
			});
		}
		e.preventDefault()
		});
		
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-56225101-1', 'auto');
    ga('send', 'pageview');