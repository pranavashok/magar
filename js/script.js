var title = '';
var aniSpd = 5000;
var fadeSpd = 200;
var menu;

function setCssR(a) {
	vright = $(a).css("right");
	vtop = $(a).css("top");
	$(a).css({
		right: vright,
		top: vtop
	});
}

function inputBlur(i){
    //validation
}

function setCssL(a) {
	vleft = $(a).css("left");
	vtop = $(a).css("top");
	$(a).css({
		left: vleft,
		top: vtop
	});
}

function setMenu(j) {
	menu = j;
}

function loadingAnimation(b) {
	if(b){
		$("#light").show();
		$(".spinner").show();
	}else{
		$("#light").fadeOut();
		$(".spinner").fadeOut();
	}
}

function lookup(inputString) {
		if(inputString.length == 0) {
			$('#suggestions').fadeOut(); // Hide the suggestions box
		} 
		else {
			$('#suggestions').fadeIn(); // Show the suggestions box
			$("#s-loader").show();
			$.post("search.php", {q: ""+inputString+""}, function(data) { // Do an AJAX call
				$('#suggestions').html(data); // Fill the suggestions box
				$("#s-loader").hide();
      			});
   		}
}

(function (window, undefined) {
	var History = window.History;
	if (!History.enabled) {
		return false;
	}
	$(function () {
		$("#suggestions").fadeOut();
		//$("#feedback").fadeOut();
		var w = $(window).width();
		var h = $(window).height();
		var flag=0;
		$("body").keydown(function (event) {
			if (event.which == 27) $("#shortcut").hide();
			if (event.which >= 37 && event.which <= 40) { //If direction keys press
				if(flag==0){
					$.getScript('/'+subDir+'/js/shortcut.js', function() {
  						$("#shortcut").show();
  						flag=1;
  					});
				}
				else
					$("#shortcut").show();
			}
		});
		History.Adapter.bind(window, 'statechange', function () { // Note: We are using statechange instead of popstate
			var State = History.getState(), // Note: We are using History.getState() instead of event.state
				rootUrl = History.getRootUrl(),
				relativeUrl = State.url.replace(rootUrl + subDir + '/', '');
			//History.log(State.data, State.title, State.url);
			if (relativeUrl == "") {
				if ($("#mainmenu-pane").attr("class") == "moveout") {
					$("#mainmenu-pane").attr("class", "movein");
					$("#font-pane").attr("class", "movein");
				} else if ($("#mainmenu-pane").attr("class") == "pane") {
					$("#mainmenu-pane").attr("class", "loading");
					$("#font-pane").attr("class", "loading");
					History.pushState({
						timestamp: (new Date().getTime())
					}, "Ragam 2013", "#");
				}
			} else {
				if (relativeUrl[relativeUrl.length - 1] == '/') relativeUrl = relativeUrl.substr(0, relativeUrl.length - 1);
				setCssL('#font-pane');
				setCssR('#mainmenu-pane');
				if(relativeUrl.split("/")[0]=="Events") { //Events section
					$(".pane").hide();
					$("#inner-pane-events").show();
					$("#content-wrapper-events").fadeOut();
					if($("#mainmenu-pane").attr("class")!="moveout")
						$("#inner-pane-events").attr("class", "pane"); //Reset the inner-pane-events just before opening
					$("#mainmenu-pane").attr("class", "moveout");
					$("#font-pane").attr("class", "moveout");
					if (relativeUrl.search("/") == -1) { //If it's a first level page
						$("#painting-events").fadeIn();
						if($("#inner-pane-events").attr("class")=="moveright")
							$("#inner-pane-events").attr("class","moveback");

						title = relativeUrl;
						$.ajax({
							dataType: "json",
							url: "/" + subDir + "/manager/fetchlinks.php",
							data: {
								"cat": title
							},
							type: "POST",
							success: function (d) {
								setMenu(d);
								var catlinks = "";
								d.forEach(function (ele) {
									catlinks = catlinks + "<a href='/" + subDir + "/" + title + "/" + ele.name.replace(/\ /g, "_") + "'><li>" + ele.name + "</li></a>";
								});
								$("#submenu-links-events").html(catlinks);
								loadingAnimation(false);			
							}
						});
					} else { //Its a second level url
						$("#painting-events").fadeOut();
						$("#inner-pane-events").attr("class", "moveright");
						var n = relativeUrl.split("/");
						eve = relativeUrl.split("/")[n.length - 1];
						$.ajax({
							dataType: "json",
							url: "/" + subDir + "/manager/content.php",
							data: {
								"event": eve
							},
							type: "POST",
							success: function (d) {
								if(d.name!=null){
									$("#content-heading-events").text(d.name);
									$("#content-content-events").html(d.content);
								}else{
									$("#content-heading-events").text("Choose an event from right");
								}
								$("#content-wrapper-events").fadeIn();
								$("#content-content-wrapper-events.nano").nanoScroller({
									scrollTop: '0px'
								});
							}
						});
						//Load menu
						title = relativeUrl.split('/')[0];
						category = relativeUrl.split('/')[1].replace(/_/g," ");
						if(n.length>2)
							subcategory = relativeUrl.split('/')[2].replace(/_/g," ");
						$.ajax({
							dataType: "json",
							url: "/" + subDir + "/manager/fetchlinks.php",
							data: {
								"cat": title
							},
							type: "POST",
							success: function (d) {
								setMenu(d);
								var catlinks = "";
								d.forEach(function (ele) {
									if(ele.name == category)
										catlinks = catlinks + "<a href='/" + subDir + "/" + title + "/" + ele.name.replace(/\ /g, "_") + "' class='selected'><li>" + ele.name + "</li></a>";
									else
										catlinks = catlinks + "<a href='/" + subDir + "/" + title + "/" + ele.name.replace(/\ /g, "_") + "' class='notselected'><li>" + ele.name + "</li></a>";
								});
								sublinks='';
								if(n.length>2)
								{
									for (ele in menu) {
										if (menu[ele].name == category) {
											for (s in menu[ele]['sublinks']) {
												if(menu[ele]['sublinks'][s].name == subcategory)
													sublinks = sublinks + "<li><a href='/" + subDir + "/" + title + "/" + menu[ele].name.replace(/\ /g, "_") + "/" + menu[ele]['sublinks'][s].name.replace(/\ /g, "_") + "' class='selected'>" + menu[ele]['sublinks'][s].name+"<br/><span class='shortdesc'>"+menu[ele]['sublinks'][s].shortdesc+"</span></a></li>";
												else
													sublinks = sublinks + "<li><a href='/" + subDir + "/" + title + "/" + menu[ele].name.replace(/\ /g, "_") + "/" + menu[ele]['sublinks'][s].name.replace(/\ /g, "_") + "' class='notselected'>" + menu[ele]['sublinks'][s].name+"<br/><span class='shortdesc'>"+menu[ele]['sublinks'][s].shortdesc+"</span></a></li>";
											}
											break;
										}
									}
								}
								$("#hidden-submenu-links").html(catlinks);
								$("#hidden-subsubmenu-links").html(sublinks);
								$("#submenu-links-events").html($("#hidden-submenu-links").html());
								$("#subsubmenu-links-events").html($("#hidden-subsubmenu-links").html());
								loadingAnimation(false);			
							}
						});
					}
				} //Endif events
				else if(relativeUrl.split("/")[0]=="Workshops") {
					//Workshops code comes here
					$(".pane").hide();
					$("#inner-pane-workshops").show();
					if($("#mainmenu-pane").attr("class")!="moveout")
						$("#inner-pane-workshops").attr("class", "pane"); //Reset the inner-pane-workshops just before opening
					$("#mainmenu-pane").attr("class", "moveout");
					$("#font-pane").attr("class", "moveout");
					if (relativeUrl.search("/") == -1) { //If it's a first level page
						$("#painting-workshops").fadeIn();
						title = relativeUrl;
						$.ajax({
							dataType: "json",
							url: "/" + subDir + "/manager/fetchlinks.php",
							data: {
								"cat": title
							},
							type: "POST",
							success: function (d) {
								setMenu(d);
								var links = "";
								d.forEach(function (ele) {
									links = links + "<a href='/" + subDir + "/" + title + "/" + ele.name.replace(/\ /g, "_") + "'><li>" + ele.name + "</li></a>";
								});
								$("#submenu-links-workshops").html(links);
								loadingAnimation(false);			
							}
						});
					} else { //Its a second level url
						$("#painting-workshops").fadeOut();
						$("#inner-pane-workshops").attr("class", "moveright");

						var n = relativeUrl.split("/");
						eve = relativeUrl.split("/")[n.length - 1];
						$.ajax({
							dataType: "json",
							url: "/" + subDir + "/manager/content.php",
							data: {
								"event": eve
							},
							type: "POST",
							success: function (d) {
								
								$("#content-heading-workshops").text(d.name);
								$("#content-content-workshops").html(d.content);
								$("#content-wrapper-workshops").fadeIn();
								$("#content-content-wrapper-workshops.nano").nanoScroller({
									scrollTop: '0px'
								});
							}

						});
					}

				} //Endif workshops
				else if(relativeUrl.split("/")[0]=="Proshows") {
					//Proshows code
					$(".pane").hide();
					$("#inner-pane-proshows").show();
					if($("#mainmenu-pane").attr("class")!="moveout")
						$("#inner-pane-proshows").attr("class", "pane"); //Reset the inner-pane-proshows just before opening
					$("#mainmenu-pane").attr("class", "moveout");
					$("#font-pane").attr("class", "moveout");
					if (relativeUrl.search("/") == -1) { //If it's a first level page
						$("#painting-proshows").fadeIn();
						title = relativeUrl;
						loadingAnimation(false);
					} else { //Its a second level url
						$("#painting-proshows").fadeOut();
						var n = relativeUrl.split("/");
						eve = relativeUrl.split("/")[n.length - 1];
					}
				} //Endif proshows

				else if(relativeUrl.split("/")[0]=="Showcase") {
					//Showcase code
					$(".pane").hide();
					$("#inner-pane-showcase").show();
					if($("#mainmenu-pane").attr("class")!="moveout")
						$("#inner-pane-showcase").attr("class", "pane"); //Reset the inner-pane-showcase just before opening
					$("#mainmenu-pane").attr("class", "moveout");
					$("#font-pane").attr("class", "moveout");
					if (relativeUrl.search("/") == -1) { //If it's a first level page
						$("#painting-showcase").fadeIn();
						title = relativeUrl;
						$.ajax({
							dataType: "json",
							url: "/" + subDir + "/manager/fetchlinks.php",
							data: {
								"cat": title
							},
							type: "POST",
							success: function (d) {
								setMenu(d);
								var links = "";
								d.forEach(function (ele) {
									links = links + "<a href='/" + subDir + "/" + title + "/" + ele.name.replace(/\ /g, "_") + "'><li>" + ele.name + "</li></a>";
								});
								$("#submenu-links-showcase").html(links);
								loadingAnimation(false);			
							}
						});
					} else { //Its a second level url
						$("#painting-showcase").fadeOut();
						$("#inner-pane-showcase").attr("class", "moveright");

						var n = relativeUrl.split("/");
						eve = relativeUrl.split("/")[n.length - 1];
						$.ajax({
							dataType: "json",
							url: "/" + subDir + "/manager/content.php",
							data: {
								"event": eve
							},
							type: "POST",
							success: function (d) {
								
								$("#content-heading-showcase").text(d.name);
								$("#content-content-showcase").html(d.content);
								$("#content-wrapper-showcase").fadeIn();
								$("#content-content-wrapper-proshows.nano").nanoScroller({
									scrollTop: '0px'
								});
							}

						});
					}
				} //Endif showcase
				else if(relativeUrl.split("/")[0]=="Sponsors") {
					//Sponsors code
					$(".pane").hide();
					$("#inner-pane-sponsors").show();
					if($("#mainmenu-pane").attr("class")!="moveout")
						$("#inner-pane-sponsors").attr("class", "pane"); //Reset the inner-pane-sponsors just before opening
					$("#mainmenu-pane").attr("class", "moveout");
					$("#font-pane").attr("class", "moveout");
					$("#painting-sponsors").fadeIn();
					title = relativeUrl;
					loadingAnimation(false);
				} //Endif sponsors
				else {
					$("#notfound").show();
					$("#wrapper").attr("class", "blur");
					//Go to 404
				}
			}
		});

		$(window).bind('load', function () {
			History.pushState({
				timestamp: (new Date().getTime())
			}, "Ragam 2013 | National Institute of Technology Calicut", "");
			loadingAnimation(false);
		});
		var startIndex = 0;
		var endIndex = $('#ticker div').length;
		$('#ticker div:first').fadeIn(fadeSpd);

		window.setInterval(function() {
			$('#ticker div:eq(' + startIndex + ')').delay(fadeSpd).fadeOut(fadeSpd);
			    startIndex++;
			    $('#ticker div:eq(' + startIndex + ')').stop(true,true).fadeIn(fadeSpd);
		        if (endIndex == startIndex) startIndex = -1;
	    }, aniSpd);
	    
		
// Proshows Links
		$("#popularnite").click( function(){
			$("#painting-proshows").hide();
			$("#content-content-proshows").hide();
			$("#painting-proshows").attr("class", "popularnite");
			$("#content-content-proshows").html("We give you: the Popular Nite of the Year. <strong>Shankar Mahadevan</strong> at NIT Calicut. The National Award winning singer and music director is all set to leave the crowds <em>Breathless</em> at NIT Calicut. The creator of music for <em>Vishwaroopam</em>, <em>Zindagi Na Milegi Dobara</em> and more, the voice behind chart-toppers like <em>Kajra Re</em> and <em>Wake Up Sid</em>, this all-out entertainer will blow you away. So come prepared. Shankar Live. Only at Ragam '13.");	
			$("#painting-proshows").fadeIn();
			$("#content-content-proshows").fadeIn();

		});
		$("#combonite").click( function(){
			$("#painting-proshows").hide();
			$("#content-content-proshows").hide();
			$("#painting-proshows").attr("class", "combonite");
			$("#content-content-proshows").html("<strong>Haricharan</strong><br /><br />Trained Carnatic musician and popular playback singer <em>Haricharan</em>, the singer of chart toppers like <em>Thuli Thuli</em> from <em>Paiya</em>, <em>Vathilil Aa Vathilil</em> from <em>Ustad Hotel</em> and more, comes to Ragam '13. The voice that has taken South India by storm is all set to conquer Kerala.<br /><br /><strong>Tanvi Shah</strong><br /><br />Her musical journey started with <em>Fanaa</em>, and scaled spectacular heights with a Grammy Award for <em>Jai Ho</em>. This versatile young artiste has collaborated with <em>AR Rahman</em> on a wide range of popular songs from <em>Slumdog Millionaire</em> to <em>Delhi-6</em>. Presenting the gorgeous Tanvi Shah, first time at a college fest - Only at Ragam '13. <br /><br /><strong>Bennet and the Band</strong><br /><br /><em>Bennet and the Band</em> comprises of highly talented session artists and musicians with roots in eclectic genres and revolves around the founder member <em>Bennet</em>, who has beem a music composer and a performer for over 15 years. A symphony of opposites, Indian classical and jazz with overtones of progressive Rock – The Ragam Stage awaits.");
			$("#painting-proshows").fadeIn();
			$("#content-content-proshows").fadeIn();

		});
		$("#pepperfest").click( function(){
			$("#painting-proshows").hide();
			$("#content-content-proshows").hide();
			$("#content-content-proshows").html("True to its past history as one of the biggest platforms for rock music in India, Ragam introduces the <strong>Pepper Fest</strong> – the ultimate stage. Witness the up-and-coming and what's new in the world of music, as bands from all over the country take the stage at Ragam '13.");			
			$("#painting-proshows").attr("class", "pepperfest");
			$("#painting-proshows").fadeIn();
			$("#content-content-proshows").fadeIn();

		});


		$("#content-content-wrapper-events.nano").hover(function(){
			$(this).nanoScroller();
		});
		$("#info-wrapper.nano").hover(function(){
			$(this).nanoScroller();
		});
		$("#mainlinks a").click(function (e) {
			e.preventDefault();
		});
		$("#construction").click(function() {
			$("#construction").fadeOut();
			$("#wrapper").attr("class", "");
		});
		$("#notfound").click(function() {
			$("#notfound").fadeOut();
			History.pushState({
				timestamp: (new Date().getTime())
			}, "Ragam 2013 | National Institute of Technology Calicut", "/" + subDir + "/");
			$("#wrapper").removeAttr("class", "blur");
		});
		$("#mainlinks li").click(function () {
			title = $(this).data('title');
			if($(this).data('title') == "Workshops" || $(this).data('title') == "Showcase") {
				$("#construction").show();
				$("#wrapper").attr("class", "blur");
			}
			else {
				loadingAnimation(true);
				History.pushState({timestamp: (new Date().getTime())}, title + " | Ragam 2013", $(this).parent("a").attr("href"));
			}
		});
		$("#submenu-links-events a").live({
			mouseenter: function () {
				var sublinks = "";
				for (ele in menu) {
					if (menu[ele].name == $(this).text()) {
						for (s in menu[ele]['sublinks']) {
							sublinks = sublinks + "<li><a href='/" + subDir + "/" + title + "/" + menu[ele].name.replace(/\ /g, "_") + "/" + menu[ele]['sublinks'][s].name.replace(/\ /g, "_") + "'>" + menu[ele]['sublinks'][s].name+"<br/><span class='shortdesc'>"+menu[ele]['sublinks'][s].shortdesc+"</span></a></li>";
						}
						break;
					}
				}
				$("#subsubmenu-links-events").html(sublinks);
				var tmp = $(this).text();
				tmp = tmp.replace(' ', '_');
				
				$("#painting-events").hide();
				$("#painting-events").css('background', $("img#"+tmp).css("background"));
				$("#painting-events").css('background-repeat', 'no-repeat repeat');
				if($('#inner-pane-events').attr('class')!='moveright')	
					$("#painting-events").stop(true,true).fadeIn(250);
				
				$("#submenu-links-events a").each(function () {
					$(this).attr("class", "notselected");
				});
				$(this).attr("class", "selected");
			},
			click: function (e) {
				e.preventDefault();
			}
		});
		$("#subsubmenu-links-events a").live({
			click: function (e) {
				e.preventDefault();
				$("#painting-events").fadeOut();
				$("#subsubmenu-links-events a").each(function () {
					$(this).attr("class", "notselected");
				});
				$(this).attr("class", "selected");
				title = $(this).html();
				title = title.split('<br>')[0];
				History.pushState(null, title + " | Ragam 2013", $(this).attr("href"));
			},
			mouseenter: function(e) {
				$("#subsubmenu-links-events a").each(function () {
					$(this).attr("class", "notselected");
				});
				$(this).attr("class", "selected");
				$(this).children(".shortdesc").show();
			},
			mouseleave: function(e) {
				$(this).children(".shortdesc").hide();
			}
		});
		$("#content-container-events").mouseenter(function() {
			if($("#inner-pane-events").attr("class")=="moveright")
			{
				$("#submenu-links-events").html($("#hidden-submenu-links").html());
				$("#subsubmenu-links-events").html($("#hidden-subsubmenu-links").html());
			}
		});
		$(".menu_click").click(function () {
			$("#wrapper").attr("class", "support-up");
			$("#support-pane").attr("class", "support-up");
			$("#menu_tab").attr("class","up");
		});
		$(document).mouseup(function (e) {
			var container = $("#support-pane");
			if (container.has(e.target).length === 0 && $("#wrapper").attr("class") == "support-up") {
				container.attr("class", "support-down");
				$("#wrapper").attr("class", "support-down");
				$(".menu_item").css({"border-bottom":"0px solid #444"});
			}
		});
		



	$("#submenu-links-workshops a").live({
			mouseenter: function () {
				var sublinks = "";
				for (ele in menu) {
					if (menu[ele].name == $(this).text()) {
						for (s in menu[ele]['sublinks']) {
							sublinks = sublinks + "<li><a href='/" + subDir + "/" + title + "/" + menu[ele].name.replace(/\ /g, "_") + "/" + menu[ele]['sublinks'][s].name.replace(/\ /g, "_") + "'>" + menu[ele]['sublinks'][s].name+"<br/><span class='shortdesc'>"+menu[ele]['sublinks'][s].shortdesc+"</span></a></li>";
						}
						break;
					}
				}
				$("#subsubmenu-links-workshops").html(sublinks);
				var tmp = $(this).text();
				tmp = tmp.replace(' ', '_');
				//var currBg = $("#painting").css('background-image');
        		//var newBg = $("img#"+tmp).attr("src"); 
        		//currBgs = currBg.replace('url(','').replace(')','').split('/');
        		//newBgs = newBg.split('/');
        		//alert(currBg+' -- '+$("img#"+tmp).attr("src"));
				//if(currBgs[currBgs.lenth-1]!=newBgs[newBgs.length-1])
				$("#painting-workshops").hide();
				$("#painting-workshops").css('background-image', 'url("'+ $("img#"+tmp).attr("src") + '")');	
				$("#painting-workshops").stop(true,true).fadeIn(250);
				
				$("#submenu-links-workshops a").each(function () {
					$(this).attr("class", "notselected");
				});
				$(this).attr("class", "selected");
			},
			click: function (e) {
				e.preventDefault();
				History.pushState(null, $(this).text() + " | Ragam 2013", $(this).attr("href"));
			}
		});



		$(".menu_nonclick").click(function()
		{
			if($("#menu_tab").hasClass("up"))
			{
				var container = $("#support-pane");
				container.attr("class", "support-down");
				$("#wrapper").attr("class", "support-down");
				$(".menu_item").css({"border-bottom":"0px solid #444"});
				$("#menu_tab").removeClass("up");
			}
		});
		
		$("#home-button").click(function () {
			History.pushState({
				timestamp: (new Date().getTime())
			}, "Ragam 2013 | National Institute of Technology Calicut", "/" + subDir + "/");
			$("#font-pane").show();
			$("#mainmenu-pane").show();
			//$("#support-pane").fadeIn();
			$("#content-wrapper-events").fadeOut();
		});

		$('a#signin-link').click(function () {
			if ($("#signin-link").attr("class") == "cancel") {
				$(this).html('<img src="/' + subDir + '/img/signup.png" />');
				$("#signin-link").attr("class", "enabled");
				$("#dark").attr("class", "overlayoff");
				$("#signup-form-wrapper").hide();
			} else {
				$(this).html('<img src="/' + subDir + '/img/cancel.png" />');
				$("a#signin-link").attr("class", "cancel");
				$("a#login-link").attr("class", "enabled");
				$("a#login-link").html('<img src="/' + subDir + '/img/login.png" />');
				$("#dark").attr("class", "overlayon");
				$("#login-form-wrapper").hide();
				$("#signup-form-wrapper").fadeIn();
			}
		});
		$('#login-link').click(function () {
			if ($("#login-link").attr("class") == "cancel") {
				$(this).html('<img src="/' + subDir + '/img/login.png" />');
				$("#login-link").attr("class", "enabled");
				$("#dark").attr("class", "overlayoff");
				$("#login-form-wrapper").hide();
			} else {
				$(this).html('<img src="/' + subDir + '/img/cancel.png" />');
				$("a#login-link").attr("class", "cancel");
				$("a#signin-link").attr("class", "enabled");
				$("a#signin-link").html('<img src="/' + subDir + '/img/signup.png" />');
				$("#dark").attr("class", "overlayon");
				$("#signup-form-wrapper").hide();
				$("#login-form-wrapper").fadeIn();
			}
		});
		$('#dark').click(function () {
		    $("#login-link").html('<img src="/' + subDir + '/img/login.png" />');
		    $("#signin-link").html('<img src="/' + subDir + '/img/signup.png" />');
		    $("#login-link").attr("class", "enabled");
		    $("#dark").attr("class", "overlayoff");
		    $("#login-form-wrapper").hide();
		    $("#signup-form-wrapper").hide();
		});
		$(".gallery").click(function()
		{
			$.getScript('/'+subDir+'/js/gallery.js', function() {
  					$("#gallery").show();
  					$("#gallery").attr("class", "overlayon");
			});
		});
		$(".feedback_link").click(function()
		{
				$("#feedback").show();
				$("#feedback").attr("class", "overlayon");
		});
		$("#gallery").click(function () {
			$("#gallery").hide();
			$("#gallery").attr("class", "overlayoff");
		});
		$('.menu_item').click(function()
		{
			$(this).siblings().css({"border-bottom":"0px solid #444"});
			$(this).siblings().removeClass("menu_select");
			$(this).css({"border-bottom":"2px solid #444"});
			$(this).addClass("menu_select");
			if($('.menu_select').text() == 'contacts') {
				$("#info-wrapper.nano").hide();
				$("#reachus").hide();
				$("#contacts").fadeIn();
			}
			else if($('.menu_select').text() == 'reach us') {
				$("#info-wrapper.nano").hide();
				$("#contacts").hide();
				$("#reachus").fadeIn();
			}
			else if($('.menu_select').text() == 'faq') {
				$("#contacts").hide();
				$("#reachus").hide();
				$("#info-wrapper.nano").fadeIn();
			}
		});

		$('.menu_item').mouseover(function()
		{
			$(this).css({"border-bottom":"2px solid #444"});
		});
		
		$('.menu_item').mouseout(function()
		{
		if(!($(this).hasClass("menu_select")))
		{
			$(this).css({"border-bottom":"0px solid #444	"});
		}
		});
		$("#feedback-submit").click(function(){
	      	$.ajax({
				url: "/" + subDir + "/manager/feedback.php",
				data: {
					"name": $("#feedback input.nameentry").val(),
					"email": $("#feedback input.emailentry").val(),
					"feedback": $("#feedback textarea.feedbackentry").val()
				},
				type: "POST",
				success: function (d) {
					if(d==1) {
						$("#fbmessgage").text("Thank You!");
						alert("Thank You!")
					}
					else {
						$("#fbmessgage").text("Sorry. Please try again.");
						alert("Sorry. Please try again later.");
					}
					$("#feedback").hide();
	      			$("#feedback").attr("class", "overlayoff");
				}
			});
	    });
	    $("#feedback-cancel").click(function(){
	    	$("#feedback").hide();
	      	$("#feedback").attr("class", "overlayoff");
	    });
		$("#font-pane").bind('mousewheel', function(event) {
    		if (event.originalEvent.wheelDelta >= 0) {
        			if($("#wrapper").attr("class")!="support-down") {
        				$("#wrapper").attr("class", "support-down");
        				$("#support-pane").attr("class", "support-down");
        			}
    		}
    		else {
        		if($("#wrapper").attr("class")!="support-up"){
        			$("#wrapper").attr("class", "support-up");
					$("#support-pane").attr("class", "support-up");
				}
    		}
		});
		$("#signupform").submit(function () {
	        $.ajax({
	        	dataType: 'json',
	            type: 'POST',
	            url: "/" + subDir + "/manager/register.php",
	            data: $("#signupform").serializeArray(),
	            success: function (data) {
	            	if(data.success)
					{
						$("#signupform").slideUp();	           
	            		$("#signup-form-wrapper #tip").text(data.msg);
	            		$("#signup-form-wrapper #tip").css('color','#77b708');
	            		$("#signup-form-wrapper #tip").css('font-size','28px');
	            		setTimeout("$('a#signin-link.cancel').trigger('click');",7000);
	            	}else
	            	{
	                	$("#signup-form-wrapper #tip").text(data.msg);
	                	$("#signup-form-wrapper #tip").css('color','#dd181f');
	                }
	            }
	        });

	        return false; 
    	});
    	$("#loginform").submit(function () {
	        $.ajax({
	        	dataType: 'json',
	            type: 'POST',
	            url: "/" + subDir + "/manager/login.php",
	            data: $("#loginform").serializeArray(),
	            success: function (data) {
	            	if(data.success)
					{
						$("#loginform").slideUp();	           
						$("#login-form-wrapper #tip").text(data.msg);
	                	$("#login-form-wrapper #tip").css('color','#77b708');
	                	$("#login-form-wrapper #tip").css('font-size','28px');
	                	$("#login-form-wrapper").fadeOut(2500,function() {
	                		$("#dark").attr("class", "overlayoff");	
	                	});
						$("#session").html("<div id='welcome'>Hello "+data.uname+"<div id='login-options-wrapper' class='close'><ul id='login-options'><a href='#'><li id='logout-button'>Logout</li></a></ul></div></div>");
	            	}else
	            	{
	                	$("#login-form-wrapper #tip").text(data.msg);
	                	$("#login-form-wrapper #tip").css('color','#dd181f');
	                }
	            }
	        });
	        return false;
	    });
	    $("#welcome").live({
	    	click: function(){
				$("#login-options-wrapper").slideToggle();
			}
	    });
	    $("#logout-button").live({
	    	click: function(){
				$.ajax({
				dataType: "json",
	            type: 'POST',
	            url: "/" + subDir + "/manager/rlogout.php",
	            success: function (data) {
					location.reload();						
	            }
	        	});
			}	
	    });

		$('[title]').mouseover(function () {
        	$(this).data('title', $(this).attr('title'));
        	$(this).attr('title', '');
    	}).mouseout(function () {
    	    $(this).attr('title', $(this).data('title'));
    	});
    	$("#info-wrapper.nano").nanoScroller({
			scrollTop: '0px'
		});
	});
	    
})(window);
