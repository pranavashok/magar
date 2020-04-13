<?php 
session_start();
require_once('root.php'); ?>
<html>
<head>
	<title>Ragam 2013 | National Institute of Technology, Calicut</title>
	<link href="<?php echo $subDir; ?>css/reset.css" rel="stylesheet"/>
	<link href="<?php echo $subDir; ?>css/style.css" rel="stylesheet"/>
	<link href="<?php echo $subDir; ?>css/animations.css" rel="stylesheet"/>
	<link href="<?php echo $subDir; ?>css/nanoscroller.css" rel="stylesheet" > 
	<link href="<?php echo $subDir; ?>css/autoSuggest.css" rel="stylesheet" > 
	<link href="<?php echo $subDir; ?>css/favicon.ico" rel="icon" type="image/x-icon" />
	<meta name="description" content="Ragam '13 - The annual inter-college fest conducted by the National Institute of Technology, Calicut.">
	<meta name="keywords" content="ragam, nitc, national institute of technology, cultural fest, cultural, fest, college,ragam, tathva, Ragam, shankar, mahadevan, shankar mahadevan, ">
	<link rel="search" type="application/opensearchdescription+xml" title="Search Ragam 2013 Website" href="js/opensearch.xml">

	<!-- gallery.js and shorcut.js only loads when initiated with their respective handler -->
	<!-- prefixfree, proximity, easing, rotate, script, nanoscroller and address are minified -->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<!--<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery.min.js"></script>-->
	<script type="text/javascript" src="<?php echo $subDir; ?>js/prefixfree.min.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/prefixfree.jquery.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/prefixfree.dynamic-dom.min.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery.proximity.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jQueryRotateCompressed.2.2.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery.history.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery.autoSuggest.minified.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery-ui-1.10.1.custom.min.js"></script>
	<!-- <script type="text/javascript" src="<?php echo $subDir; ?>js/min.js"></script> -->
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery.autocomplete.min.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/script.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery.nanoscroller.min.js"></script>
	<script type="text/javascript" src="<?php echo $subDir; ?>js/jquery.address-1.4.min.js"></script>
	<!--<script async type="text/javascript" src="<?php echo $subDir; ?>js/arbor.js"></script>
	<script async type="text/javascript" src="<?php echo $subDir; ?>js/arbor-tween.js"></script>
	<script async type="text/javascript" src="<?php echo $subDir; ?>js/arbor-graphics.js"></script>-->
	<!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>-->
</head>
<body>
	
	<div id="light"></div>
	<div id="construction">coming soon</div>
	<div id="notfound">Sorry<br /><span class="small">The page you requested is unavailable. Go back to the homepage and try again.</span></div>
	<ul class="spinner">
		<li></li>
		<li></li>
		<li></li>
	</ul>
	<div id="dark"></div>
	<div id="gallery">
	</div>
	<?php 
		if (!isset($_SESSION['uname']) || !isset($_SESSION['ragID'])) {
    ?>
	<div id="login-form-wrapper">
		<form id="loginform">
		<input class="emailentry" type="email" name="email" title="email" placeholder="email" onblur="inputBlur(this)" autocomplete="off"/>
		<input class="passwordentry" type="password" name="password" title="password" placeholder="password" onblur="inputBlur(this)" autocomplete="off"/>
		<input class="submit_login" type="submit" name="Submit" value="Submit" /> 
		</form>
		<div id="tip">press enter to log in...</div>
	</div>
	<div id="signup-form-wrapper">
		<div id="tip">Online registration for Ragam 2013 is closed.</div>
	</div>
	<?php } else{ ?>
	<div id="eventreg-form-wrapper">
		<div id="sub">
		</div>
		<div id="tip">Online registration for Ragam 2013 is closed. Now you can register at the venue.</div>
	</div>
	<?php } ?>
	<div id="shortcut" >
		<canvas id="sitemap"></canvas>
	</div>
	<?php 
		if (isset($_SESSION['uname']) && isset($_SESSION['ragID'])) {
    ?>
	<div id="myevents">
	</div>
	<?php } ?>
	<div id="wrapper">
		<div class="active-links">
			<div id="session">
				<?php 
					if (!isset($_SESSION['uname']) || !isset($_SESSION['ragID'])) {
    			?>
				<a id="login-link" href="#">
					<img src="<?php echo $subDir; ?>img/login.png" />
				</a>
				<a id="signin-link" href="#">
					<img src="<?php echo $subDir; ?>img/signup.png" />
				</a>
				<?php }else{ ?>
			
				<div id="welcome">
					<span><?php echo $_SESSION['uname']; ?>&nbsp;&nbsp;</span><span class="symbol" id="settings-icon">V</span>
					<div id='login-options-wrapper'><ul id='login-options'><li id="my-events">my events</li><li id="logout-button">logout</li></ul></div>
				</div>
				
				<?php } ?>
			</div>

			<div id="signin-dropdown">
			</div>
		</div>
		<section class="pane" id="font-pane">
			<div id="logo">
				<img src="<?php echo $subDir; ?>img/font.png" />
			</div>
		</section>

		<section class="pane" id="mainmenu-pane">
			<nav id="mainlinks">
				<ul>
					<a href="Events"><li id="mainlink1" title="Events">events</li></a>
					<a href="Proshows"><li id="mainlink2" title="Proshows">proshows</li></a>
					<a href="Workshops"><li id="mainlink3" title="Workshops">workshops</li></a>
					<a href="Showcase"><li id="mainlink4" title="Showcase">showcase</li></a>
					<a href="Sponsors"><li id="mainlink5" title="Sponsors">sponsors</li></a>
				</ul>
			</nav>
		</section>
		<section class="pane" id="inner-pane-events">
			<div id="content-half-events">
				<div id="subsubmenu-events">
					<ul id="subsubmenu-links-events">
					</ul>
				</div>
				<div id="content-container-events">
					<div id="content-wrapper-events">

						<div id="content-heading-events">
						</div>
						
							<?php 
							if (isset($_SESSION['uname']) && isset($_SESSION['ragID'])) {
						?>
						<div class="symbol event-register" id="after-login-register" title="register">M</div>
						<?php }
							else {?>
								<div class="symbol event-register" id="before-login-register" onClick="$('#login-link').click();">M</div>
								<?php } ?>	
						<div id="content-reg-events">
				
						</div>
						<div id="content-content-wrapper-events" class="nano">
							<div id="content-content-events" class="content">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="submenu-half-events">
				<div id="submenu-events">
					<ul id="submenu-links-events">
					</ul>
				</div>
				<div id="painting-events">
				</div>
			</div>
		</section >
		<section class="pane" id="inner-pane-proshows">
			<div id="heading-proshows">
				proshows
			</div>
			<div id="content-container-proshows">

				<div id="content-wrapper-proshows">
				<div id="proshow-links">
				<ul>
				<li id="popularnite">Popular Nite</li>  |
				<li id="combonite">Combo Nite</li> |
				<li id="pepperfest">Pepperfest</li>
				</ul>
				</div>
					<div id="content-heading-proshows">				

					</div>

					<div id="content-content-wrapper-proshows" class="nano">
						<div id="content-content-proshows" class="content">
							We give you: the Popular Nite of the Year. <strong>Shankar Mahadevan</strong> at NIT Calicut. The National Award winning singer and music director is all set to leave the crowds <em>Breathless</em> at NIT Calicut. The creator of music for <em>Vishwaroopam</em>, <em>Zindagi Na Milegi Dobara</em> and more, the voice behind chart-toppers like <em>Kajra Re</em> and <em>Wake Up Sid</em>, this all-out entertainer will blow you away. So come prepared. Shankar Live. Only at Ragam '13.
						</div>
					</div>
				</div>
			</div>
			<div id="painting-proshows" class="popularnite">
			</div>
		<div id="mehendi">
		</div> 
		</section>


		<section class="pane" id="inner-pane-sponsors" style="background:white">
			<div id="heading-sponsors">
				sponsors
			</div>
			<div id="content-container-sponsors">
				<div id="content-wrapper-sponsors">
					<div id="content-heading-sponsors">
						
					</div>
					<div id="content-content-wrapper-sponsors">
						<div id="content-content-sponsors" class="content">
						
						<span id="currspons"> Current Sponsors</span> | <span id="prevspons"> Previous Sponsors </span><br>
						<img id="cspons" src="img/sponsors.jpg" height="400px" >
						<img id="pspons" src="img/prevsponsors.jpg" height="450px" >

						</div>
					</div>
				</div>
			</div>
		</section>


		<section class="pane" id="inner-pane-workshops">
			<div id="heading-workshops">
				workshops
			</div>
			<div id="content-container-workshops">
				<div id="content-wrapper-workshops">
					<div id="workshop-links">
						<ul>
							<li id="happyfeetstudio">Happy Feet Studio</li>  |
							<li id="shuttercraft">Shutter Craft</li> |
							<li id="other-workshops">Others</li>
						</ul>
					</div>
						
					<div id="content-content-wrapper-workshops" class="nano">
						<div id="content-content-workshops" class="content">
							<strong>Bachata</strong><br/>Bachata is a dance full of sensuality and musicality inspired by the soulful melodic rhythms of guitars. Dive deep into this dance and you'll find a freedom unlike any other. Transport yourself onto a steamy Latin street this Ragam and lose yourself in the playful steps and the sensuous movements of Bachata. <br/>Entry Fee: INR 400 per couple.<br/><br/> <strong>Salsa</strong><br/>Salsa is a lively and passionate dance form. Sway to the fiery tunes under the spell of the music and feel the romance and connection. Learn to move with confidence and grace and show off the hot new steps that you can master at the Salsa workshop, only at Ragam '13.<br/>Entry Fee: INR 400 per couple.<br/><br/>Combo Offer (Bachata + Salsa): INR 600 per couple.<br/><hr/><br/>Conducted by: <br/><em>George Jacob</em><br/> - International Performer and Choreographer for the last 15 years with expertise in styles like Salsa, Cha Cha, Bollywood, Merengue and Bachata.<br/> - Assistant choreographer for Bollywood movies like Hum Tum, Mangal Pandey, Page 3 etc.<br/> - Official Choreographer of Miss Mauritius 2009 and Miss Mauritius 2010.<br/><br/>
						</div>
					</div>
				</div>
			</div>
			<!--<div id="painting-workshops" class="popularnite">
			</div>
			<div id="mehendi">
			</div> -->
		</section>
		<section class="pane" id="inner-pane-showcase">
			<div id="content-half-showcase">
				<div id="content-container-showcase">
					<div id="content-wrapper-showcase">
						<div id="content-heading-showcase">
						</div>
						<div id="content-content-wrapper-showcase" >
							<div id="content-content-showcase" class="content">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="submenu-half-showcase">
				<div id="submenu-showcase">
					<ul id="submenu-links-showcase">
					</ul>
				</div>
				<div id="painting-showcase">
				</div>
			</div>

		</section >
	</div>
	<div id ="suggestions"></div>
	<div id="support-pane">
		<div id="footer_inner">
			<div id="supportpane_top">
				<div id="ticker">
					<div>Welcoming one and all to Ragam 2013</div>
					<div>The Ragam 2013 <strong><a href="<?php echo $subDir; ?>schedule.html">schedule</a></strong> has been updated on Mar 8th.</div>
					<div>College ID/Photo ID is mandatory for registration as well as participation.</div>
				</div>
				<form id="searchform" action="" method="">
					<span id="search_panel">
						<input id="searchBox" type="text" placeholder="type to search" onkeyup="lookup(this.value);" name="q" autocomplete="off">
					</span>
				</form>
				<div id="social_panel">
						<!--<a style="width:48px; height:48px; display:inline; opacity:0"><img src="<?php echo $subDir; ?>img/twitter.png"></a>
						<!--<a href="facebook.com" target="blank" ><img src="<?php echo $subDir; ?>img/twitter.png"></a>-->
						<span class="social_button"><a href="https://www.youtube.com/user/RagamCulfest" target="blank"><img src="<?php echo $subDir; ?>img/youtube.png"></a></span>
						<span class="social_button"><a href="https://www.facebook.com/Ragam.nitc" target="blank"><img src="<?php echo $subDir; ?>img/facebook.png"></a></span>
				</div>
			</div>
		<div id="supportpane_bot">
			<div id="menu_tab">
				<span class="menu_item menu_click">contacts</span>
				<span class="menu_item menu_nonclick"><a href="<?php echo $subDir; ?>schedule.html" target="_blank" 
					style="text-decoration:none">schedule</a></span>
				<span class="menu_item menu_click">faq</span>	
				<span class="menu_item menu_click">info</span>
				<span class="menu_item menu_nonclick gallery">gallery</span>
				<span class="menu_item menu_click">reach us</span>
				<span class="menu_item menu_click">feedback</span>	
			</div>	
			<div id="menu_info">
				<div id="contacts">	
					<table width="100%">
					<tbody><tr>
					<td>
					<span class="contactname" > V Nikhilesh Paliath</span> <br>
					<span class="contacttitle" >Convener</span> <br>
					<span class="contactphone">+91 980 993 5914</span> <br>
					<span class="contactemail"><a href="mailto:convener@ragam.org.in">convener@ragam.org.in</a></span>  <br>
					<br><br>
					</td>
					<td>
					<span class="contactname" > Rojith Jones</span> <br>
					<span class="contacttitle">General Secretary</span> <br>
					<span class="contactphone">+91 949 730 8105</span> <br>
					<span class="contactemail"><a  href="mailto:rojith@ragam.org.in">rojith@ragam.org.in</a></span>  <br>	
					<br><br>
					<td>
					<span class="contactname" > Nitheesh K Pai</span> <br>
					<span class="contacttitle" >Marketing Coordinator</span> <br>
					<span class="contactphone">+91 989 568 9519</span> <br>
					<span class="contactemail"><a  href="mailto:nitheeshkpai@ragam.org.in">nitheeshkpai@ragam.org.in</a></span>  <br>	
					<br><br>
					</td>
					</tr>
					<tr>
					<td>
					<span class="contactname"> Vijeesh VN</span> <br>
					<span class="contacttitle">Events Coordinator</span> <br>
					<span class="contactphone">+91 974 659 4938</span> <br>
					<span class="contactemail"><a  href="mailto:vijeesh@ragam.org.in">vijeesh@ragam.org.in</a></span>  <br>	
					<br><br>
					</td>
					<td>
					<span class="contactname"> Nitheesh I S</span> <br>
					<span class="contacttitle">Events Coordinator</span> <br>
					<span class="contactphone">+91 949 726 9030</span> <br>
					<span class="contactemail"><a  href="mailto:nitheeshis@ragam.org.in">nitheeshis@ragam.org.in</a></span>  <br>	
					<br><br>
					</td>
					<td>
					<span class="contactname"> Benevant Mathew</span> <br>
					<span class="contacttitle">Hospitality Coordinator</span> <br>
					<span class="contactphone">+91 980 961 5184</span> <br>
					<span class="contactemail"><a  href="mailto:benevant@ragam.org.in">benevant@ragam.org.in</a></span>  <br>	
					<br><br>
					</td>
					</tr>
					<tr>
					<td>
					<span class="contactname"> Anoob Joseph</span> <br>
					<span class="contacttitle">Registration Coordinator</span> <br>
					<span class="contactphone">+91 889 172 5651</span> <br>
					<span class="contactemail"><a  href="mailto:anoobjoseph@ragam.org.in">anoobjoseph@ragam.org.in</a></span>  <br>	
					<br><br>
					</td>
					<td>
					<span class="contactname"> Sandeep K P</span> <br>
					<span class="contacttitle">Workshops Coordinator</span> <br>
					<span class="contactphone">+91 953 933 4067</span> <br>
					<span class="contactemail"><a  href="mailto:sandeepkp@ragam.org.in">sandeepkp@ragam.org.in</a></span>  <br>	
					<br><br>
					</td>
					<td>
					<span class="contactname"> Rosemary Toms</span> <br>
					<span class="contacttitle">Hospitality Coordinator</span> <br>
					<span class="contactphone">+91 949 736 8866</span> <br>
					<span class="contactemail"><a  href="mailto:rosemary@ragam.org.in">rosemary@ragam.org.in</a></span>  <br>	
					<br><br>
					</td>
					</tr>					
					</tbody></table>
					</div>
				<div id="credits">	
					<table width="100%">
					<tbody>
					<tr>
					<td>
					<span class="creditsname">Pranav Ashok</span><br>
					<span class="credititle">Designer</span><br>
					<span class="creditsmail">pranav@ragam.org.in</span><br>
					<br><br>
					</td>
					<td>
					<span class="creditsname">Shamil CM</span><br>
					<span class="credititle">Designer</span><br>
					<span class="creditsmail">shamil@ragam.org.in</span><br>
					<br><br>
					</td>
					<td>
					<span class="creditsname">Sachin Krishnan T V</span><br>
					<span class="credititle">Developer</span><br>
					<span class="creditsmail">sachin@ragam.org.in</span><br>
					<br><br>
					</td>
					</tr>
					<tr>
					<td>
					<span class="creditsname">Pratham Karnik</span><br>
					<span class="credititle">Artist</span><br>
					<span class="creditsmail">pratham@ragam.org.in</span><br>
					<br><br>
					</td>
					<td>
					<span class="creditsname">Hashin Jithu</span><br>
					<span class="credititle">Developer</span><br>
					<span class="creditsmail">hashin@ragam.org.in</span><br>
					<br><br>
					</td>
					<td>
					<span class="creditsname">Nithin Mohan</span><br>
					<span class="credititle">Developer</span><br>
					<span class="creditsmail">nithin@ragam.org.in</span><br>
					<br><br>
					</td>
					</tr>					
					</tbody></table>
				</div>
				<div id="feedback">
				<form>
					<input class="nameentry" type="text" name="name" title="name" placeholder="name" onblur="inputBlur(this)" />
			        <input class="emailentry" type="email" name="email" title="email" placeholder="email" onblur="inputBlur(this)" />
					<textarea class="feedbackentry" name="feedback" title="feedback" placeholder="Please enter your feedback here." onblur="inputBlur(this)"></textarea><br/>
					<a id="feedback-submit" href="#">Submit</a>
				</form>
				<div id="tip"></div>
				</div>
				<div id="faq-wrapper" class="nano">
					<div id="faq" class="content">
					<ol>
						<li><strong>What to do at Ragam '13?</strong></li> 

						With over 5 lakhs to be won in 40+ events, this is the opportunity for you to make it big. Various workshops and exhibitions on art and art forms will be conducted throughout the 3 days. The icing on the cake will be the proshows by Shankar Mahadevan, a combo performance by Haricharan and Tanvi Shaha accompanied by Bennet and the band. For the first time ever we introduce 'Pepper Fest', the ultimate rock night by upcoming bands. 
						<br /><br />
						<li><strong>Where to register for Ragam '13?</strong></li> 

						Online registration has already begun. You can sign up directly from this site (Home Page -> Sign Up). Registration can also be done at the Registration desk (MB 206) which will be functioning throughout the 3 days of Ragam. The certificates will also be issued at the Registration Desk.
						<br /><br />
						<li><strong>How to avail rooms for outsiders?</strong></li> 

						We have a dedicated set of team that will ensure your pleasant stay. A Hospitality Desk will be working 24 hours a day during Ragam in MB 207. 

						<br /><br />
						<li><strong>To eat or not to eat?</strong></li> 

						No Ragam is complete without its array of food stalls that serve all kinds of cuisine. In addition to all that, we have the Main Canteen which is right outside the Main Gate and also the Mini Canteen (which houses an AFC and Amul outlet among others). Apart from these, one could also try out the various restaurants in Kattangal, the nearest junction.
						<br /><br />
						<li><strong>Availability of ATMs?</strong></li> 

						There are 4 ATMs within the campus. There is one ATM near the centre circle, within the college; another ATM next to the Main Ladies Hostel Gate; a Punjab National Bank ATM in the School of Management Studies campus and the farthest one is right next to SBI which is a 5 minutes' walk from the main gate.
						 <br /><br />
						<li><strong>Queries regarding events?</strong></li> 

						The event description and rules are given in the Events section of the website. For any queries regarding individual events, feel free to contact the event co-ordinators which has been listed. It is highly recommended that you keep the contact numbers of the respective event co-ordinators so that any doubts regarding clash of events, schedule, etc. can be sorted out. An exclusive PC Room will be set up in MB 105, for further clarifications.


						<br /><br />
						<li><strong>Entries for proshow?</strong></li> 

						For non-NIT students, tickets for the proshow will be sold during the 3 days of Ragam at the MB Lobby. This ticket along with your respective college ID card will be adequate. For NIT-C students, the college ID card and the Hostel ID card (or slip from Hostel Ofiice if you are a day scholar) will suffice.
						 <br /><br />
						<li><strong>Acronyms used that you can familiarise with?</strong></li> 

						Every college has its own set of names that it associates with its buildings/spots. Here are our famous few:  
						<em>ELHC</em> - Electronics Lecture Hall Complex; 
						<em>NLHC</em> - New Lecture Hall Complex;
						<em>MB</em> - Main Building; 
						<em>DB</em> - Department Building; 
						<em>CC</em> - Central Computing Centre (yes, one C is missing, :D);
						<em>MC</em> - Main Canteen; 
						<em>Pits</em> - the steps in front of the ELHC; 
						<em>MBDH</em> - MB Drawing Hall;
						<em>AB</em> - Academic Building, apart from the common few like the 
						<em>OAT</em> - Open Air Theatre; 
						<em>Audi</em> - Auditorium etc.
						<br /><br />
						<li><strong>Places to see in and around Calicut?</strong></li> 

						Since it is an opportunity you get to visit Calicut, why not make it a tour to remember? There are a lot of places one could visit- 
						Calicut Beach, 
						Kappad Beach (THE Vasco da Gama beach),
						Beypore,
						Sarovaram Bio-Park and you can even stopover at Wayanad which is a 1 hour drive from campus. 
						<br /><br />
						<li><strong>For further details?</strong></li> 

						You can contact us at info@ragam.org.in, and even approach the Help Desk which will be located in the MB Lobby during Ragam.
					</ol>
					</div>
				</div>
				<div id="info-wrapper" class="nano">
					<div id="info" class="content">
					
					
					<strong>Registration and Hospitality details</strong>
						<ol>
						<li>Participants should have a confirmed Ragam ID for participating in any event, attending workshop or to avail accommodation. The online registered Ragam ID should be confirmed at the registration desk for the same.</li>
						<li>Participants should bring a valid college ID as the proof for identity. </li>
						<li>All the events for which the participant has registered online will be confirmed once the registration procedure is completed. </li>
						<li>On the spot registration for Ragam ID as well as Events will be provided at the registration desk. </li>
						<li>Once registered, participant can take part in any event or free workshop of Ragam. </li>
						<li>Only those with Ragam ID will be given accomodation. </li>
						<li> Prizes and certificates can be collected from the Registration Desk, once the results are out. For team events, prizes will be handed over to the EVENT TEAM CAPTAIN</li>
						</ol> <br/><br/>	
						<ul>
						<li>Registration fees: Rs.150</li>
						<li>Hospitality fees:Rs.50 (caution deposit of Rs.50 will also be collected, which will be refunded at the return of utilities provided)</li>
						<li>Workshops: As per the stipulated fee(No other registration fee required</li>
						</ul>
						
						<br>
						<b>For the special attention of the participants coming in groups:</b>
						<br/>
						<ol>
							<li>A member of the group should be assigned as the group leader and he/she must have a list of all group members along with their RAGAM ID's at the time of check in. Carrying such a list can considerably reduce the delay at the registration desk.</li>
							<li>A representative from each group is strongly advised to contact the Hospitality Manager prior to their arrival at the campus to avoid delays in registration, for confirmation of accommodation and to avail transportation facilities during odd hours from the Calicut city.
							</li>
						</ol>
						<br/>
						<strong>NOTE:</strong>
						<ol>
							<li>Online provided Ragam ID becomes valid only when it is confirmed at the Registration Desk</li>
							<li>The Ragam Registration Committee reserves the right to deduct from the caution deposit or from the prize money, for any loss/damage caused by the participants.</li>
							<li>The Ragam Registration Committee will have the sole right to disqualify any team engaged in any form of malpractice during Registration</li>
							<li>  Ragam'13 Registration Desk will be open from 6.00 PM, 14th March to 9.00AM, 18th March. In case of early arrival at NIT Campus, contact the hospitality manager to avail temporary accomodation</li>
							</ol>	
					</div>
				</div>
				<div id="reachus">

				<form id="form" name="form" method="post" action="javascript:feedback()">
				</form>
				
				<p></p><br /><br/>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.179538060995!2d75.93144721555139!3d11.32158435198812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba642fd50000001%3A0xbe8a77db953bda6c!2sNIT%20Calicut!5e0!3m2!1sen!2sde!4v1586790897700!5m2!1sen!2sde" width="400" height="350" frameborder="0" style="border:0;float:left;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><br>
			
				<div style="padding:0px 0px 0px 430px; align:right; font-size:10pt; ">

				From Calicut Railway Station  (22 kms)<br><br>By Bus<br>  <i>Take a 10minute walk or get a rickshaw for a fare of INR 16 to Palayam bus stand  and board a bus to REC / NIT Calicut
				<br><br>By Rickshaw<br>  Get a rickshaw from the Railway Station to NIT Calicut for a fare of INR 400 </i><br><br>By Taxi<br>  <i>You may get a taxi from the railway station to NIT Calicut for a fare of INR 500. </i><br><br><br>
				<b>From Calicut Airport </b> <br><br>  Calicut Airport is located at Karipur, 27 Kms south-east of the city and it is  45 kms  from NIT Calicut. You can reach NIT Calicut by taxi from the Calicut Airport and the taxi fare is approximately &#8377; 1000. <br><br>
				</div>

				</div>
		
			<div id="menu_bot">
				<hr style="border-top: 1px dotted #ccc">
				<div id="nitc_details">
				<span id="nitc_addr">National Institute of Technology Calicut. <a target="_blank" href="https://nitc.ac.in">https://nitc.ac.in</a></span><span id="menubotlinks"> <span id="credits-button">Credits</span> | <a href="#sitemap">Sitemap</a></span>
				</div>			
			</div>
	</div>

		</div>	
	
	 </div>


	</div>
</div>

<div id="home-button">
	<img src="<?php echo $subDir; ?>img/back.png">	
</div>
<div id="hidden-box">
	<div id="hidden-submenu-links">
	</div>
	<div id="hidden-subsubmenu-links">
	</div>
	<div id="hidden-art">
		<div id='general' />
		<div id='fine_arts' />
		<div id='music' />
		<div id='dance' />
		<div id='literary' />
		<div id='dramatics' />
		<div id='thematic' />
	</div>
	<div id="hidden-info">
		<div id="hidden-name"><?php 
		if (isset($_SESSION['uname']) && isset($_SESSION['ragID'])) {
			echo $_SESSION['uname'];
			echo '</div><div id="hidden-ragID">';
			echo $_SESSION['ragID'];
 			echo '</div><div id="hidden-college">';
			echo $_SESSION['college'];

		}?></div>
	</div>
</div>
</body>
</html>
