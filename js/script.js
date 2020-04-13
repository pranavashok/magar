var title = '';
var aniSpd = 5000;
var fadeSpd = 200;
var menu;
var collegeList = "NIT, Calicut:Acquinas College, Edacochin:Adhiyamaan College Of Engineering, Hosur:Adi Sankara Institute of Engg. & Tech., Kalady:Al-Ameen College of Engineering, Pattambi:Al-ameen College, Edathala:All Saints College, Trivandrum:Alphonsa College, Pala:Amal Jyothi Engineering College, Kanjirapally:Amala Institute of Medical Sciences, Thrissur:Amrita Vishwa Vidyapeetham, Coimbatore.:Amrita Vishwa Vidyapeetham, Kollam:Annoor Dental College, Puthupaddy P.O, Ernakulam:Ansar Arabic College, Valavannur:Anvarul Islam Arabic College, Kuniel Areacode, Malappuram:Anvarul Islam Women Arabic College, Mongam, Malappuram:Assumption College, Changancherry:Avinashilingam University for Women, Coimbatore:AWH Engineering College, Kuttikatoor, Kozhikkode:B.A.M.College, Thuruthicaud:B.K.College for Women, Kottayam:Baselios Mathew II College of Engg., Sasthamcotta:Baselius College, Kottayam:Baselius Poulose II Catholicate College, Piravam:Bharatha matha College, Thrikkakara:Bishop Choolaparambil Memorial College, Kottayam:Bishop Moore College, Mavelikkara:C. K .Govindan Nair Memorial Government College, Perambra:CMS College, Kottayam:Calicut Medical College:Calicut University Institute of Engg. and Tech, Kohinoor:Canara Engineering College, Mangalore:Carmel College, Mala:Carmel Engineering College, Koonamkara, Ranni:Catholicate College, Pathanamthitta:Chembai Memorial Music College, Palakkad:Christ College, Bangalore:Christ College, Irinjalakuda:Christian College, Kattakada:Christian College, Chengannur:Cochin College, Cochin:Cochin University Of Science And Technology:College of Applied Science Pattuvam:College of Dairy Science and Technology, Mannuthy:College of Engineering Eranjoli P.O, Thalassery, Kannur:College of Engineering Kidangoor, Kidangoor South:College of Engineering Perumon, Perinad:College of Engineering Thiruvananthapuram:College of Engineering Trikaripur, Cheemeni:College of Engineering, Adoor:College of Engineering, Attingal, Thiruvananthapuram:College of Engineering, Chengannur P.O, Alappuzha:College of Engineering, County Hills Munnar:College of Engineering, Kallooppara, Kadamankulam:College of Engineering, Karunagapally, Pada.North:College of Engineering, Pallippuram:College of Engineering, Thekkekara P.O, Poonjar:College of Engineering, Thrikkannamangal, Kottarakara:College of Teacher Education Kozhikode:College of Teacher Education, Thalasserry:College of Teacher Education, Thiruvananthapuram:Co-Operative Arts and Science College, Madayi:Co-operative Institute of Technology, Mandarathur:Co-operative Medical College, Cochin:D. B. College, Thalayolaparambu:Darul Aloom Arabic College, Paral, Thalassery:Darul Irshad Arabic College, Paral, Kannur:Darunnajith Arabic College, Karuvarakundu:Devamatha College. Kuravilangad:Devaswom Board College, Parumala, Pamba:Devaswom Board College, Sasthamcotta Kollam:Don Bosco College, Kannur:Don Bosco College, Trichur:Dr. Somervell Memorial CSI Medical College, Karakonam:EMEA College, Kondotty:ER&DCI-Institute of Technology, Trivandrum:Farook College, Farook:Farook Training College, Farook:Fathima Matha National College, Kollam:Federal Institute of Science & Tech., Mookkannoor:Fr. Muller Medical College, Mangalore:Goverment Dental College, Thiruvananthapuram:Government College of Engineering Mangattuparamba:Government Dental College, Kottayam:Government Dental College, Kozhikode:Government Engineering College Kozhikode, West Hill:Government Engineering College Painavu, Idukki:Government Engineering College Palakkad, Sreekrishnapuram:Government Engineering College Thrissur, R V Puram:Government Engineering College Wayanad, Nalloornad:Government Engineering College, Barton Hill:Government Rajiv Gandhi Institute of Technology, Vellore:Government Sanskrit College, Pattambi:Government Victoria College, Palakkad:Govt. Arts & Science College, Calicut:Govt. Brennen College, Thalassery:Govt. College for Women, Trivandrum:Govt. College, Kariavattom, Trivandrum:Govt. Homoeopathic Medical College, Calicut:Govt. Law College, Kozhikode:Govt. Medical College, Alappuzha:Govt. Medical College, Kottayam:Govt. Medical College, Kozhikode:Govt. Medical College, Thiruvananthapuram:Govt. Medical College, Thrissur:Govt. Sanskrit College, Trivandrum:Govt. Arts College, Trivandrum:HCET, Thiruvananthapuram:Henry Baker College, Melukavu:I E S College of Engineering, Thrissur:IHRD, Calicut:IIM, Kozhikode:IIT, Madras:Ilahia College of Engineering & Tech., Mulavoor:Indira Gandhi National Open University, New Delhi:Institute of Advanced Study in Education, Thrissur:Institute of Chartered Accountants of India:Iqbal College, Peringamala:Jeppiaar Engineering College, Chennai:JDT Arts and Science College, Calicut:JNTU, Kakinada:Jubilee Mission Medical College & Research Centre, Thrissur:Jyothi Engineering College, Cheruthuruthy:K E College, Mannanam:K M E A Engineering College, Alwaye:KLN College of Engineering:Kannur Medical College, Anjarakkandy:Karmala Rani Training College, Kollam:Karuna Medical College, Palakkad.:Kelappaji College of Agricultural Engineering and Technology:Keyi Sahib Training College Taliparamba:KKTM Govt College, Pullut:KMCT College of Engineering, Kozhikode:KMCT Medical College, Kozhikode:Krishna Menon Memorial Govt. Women's College, Kannur:Krupanidhi Business School, Bangalore:Kuriakose Gregrios College, Pampady, Kottayam:LBS College of Engineering, Kasaragod, Povval, Muliyar:LBS Institute of Technology for Women, Poojapura:Little Flower College Guruvayoor:Lourdes Matha College of Science & Tech., Kuttichal:Loyola College of Social Sciences, Trivandrum:M E A Engineering College, Chemmaniyod, Malappuram:M E S College of Engineering, Kuttippuram:M G College of Engineering, Thiruvallom:M G College, Thiruvananthapuram:M G College, Iritty:M S Ramiah Institute of Technology, Bangalore:Maamallan Institute of Technology:Madeerathul Uloom Arabic College, Pulikkal, Malappuram:Madurai Kamaraj University, Madurai:Maharajas College, Ernakulam:Mahatma Gandhi University College of Engineering, Muttom:Malabar Christian College:Malabar Christian College, Kozhikode:Mangalam College of Engineering, Ettumanoor:Mannam Memorial NSS College, Kottiyam, Kollam:Mannaniya College of Arts & Science, Pangode:Mar Athanasius College of Engineering, Kothamangalam:Mar Baselios Christian College of Engg. & Tech., Peermede:Mar Baselios College of Engineering & Tech., Nalanchira:Mar Baselios Dental College, Kothamangalam:Mar Dianysius College, Pazhanji:Mar Ivanios College, Thiruvananthapuram:Mar Thoma College for Women, Perumbavoor:Mar Thoma College, Chungathara:Marian College, Peerumade:Marian Engineering College, Kazhakuttom:Markaz College of Arts and Science, Kozhikode:Martheophilus Training College, Bathanihills:Marthoma College, Thiruvalla:Mary Matha Arts and Science College, Mananthavady:Mary Matha College of Engineering, Olathanni:Matha College of Technology, Manakappadi:MEA Sullamussalam Science College, Areacode, Malappuram:Mercy College, Palakkad:MES Asmabi College, Vemballur:MES College, Ponnani:MES KVM College, Valancherry:MES Mampad College, Mampad:MES Medical College, Perinthalmanna:MGM College:Miladi sherif Memorial College, Kayamkulam:Model Engineering College, B.M.C Post, Thrikkaara:Mohandas College of Engg. & Tech., Nedumangad:Morning Star Home Science College, Angamaly:MOSC Medical College, Kolenchery:Mount Carmel Training College, Kottayam:Mount Tabour Training College, Pathanapuram:Mount Zion College of Engg., Pathanamthitta:Muhammed Adburahiman Memorial Orphange College, Mannassery:Musaliar College of Engineering & Tech., Kumpazha:Muslim Association College of Engineering, Venjaramoodu:Muslim Education Society Kalladi College, Mannarghat:Muslim Educational Society College, Marampally:Muslim Educational Society College, Nedumkandam:National University of Advanced Legal Studies, Kochi:NSS College of Engineering, Palakkad:Nangelil Ayurveda Medical College, Ernakulam:Nasarathul Islam Arabic College, Kadavanthara:Nehru Arts and Science College, Kanhangad:Nehru College of Engg. & Research Centre, Thiruvillwamala:Newman College , Thodupuzha:Nirmala College, Muvattupuzha:Nirmalagiri College, Koothuparambu:NIFT, Kannur:NIFT, Chennai:NIT, Surathkal:NIT, Trichy:NIT, Warangal:NMAMIT, Karnataka:Noorul Islam College of Dental Science, Trivandrum:NSS College for Women, Thiruvananthapuram:NSS College of Engineering, Palakkad:NSS College, Cherthala:NSS College, Manjeri:NSS College, Nemmara:NSS College, Nilamel. Kollam:NSS College, Ottapalam:NSS College, Pandalam:NSS College, Rajakumari:NSS Hindu College, Changanacherry:NSS Training College, Changanacherry:NSS Training College, Ottapalam:NSS Training College, Pandalam:Oriental College of Teacher Education, Kozhikode:P A Aziz College of Engineering & Technology, Karakulam:P.K.M.College of Education:P.T.M Govt. College, Perinthalmanna:Pariyaram Medical College, Kannur:Pavanatma College, Murickassery:Payyannur College, Payyannur:Pazhassi raja NSS College, Mattannur:Pazhassiraja College, Pulpally:Peet Memorial Training College, Mavelikkara:Physical Education College East Hill, Kozhikode:Prajyothi Nikethan College, Puthukkad, Thrissur:Providence Women`s College, Kozhikode:PSG College Of Arts & Science, Coimbatore:PSG College of Technology, Coimbatore:PSMO College, Thirurangadi:PSN College Of Engineering And Technology, Tirunelveli:Pushpagiri College of Dental Sciences, Thiruvalla:R K M Vivekananda College, Chennai:Rajagiri College of Social Science, Kalamassery:Rajagiri School of Engg. & Tech., Kakkanad:Rajalakshmi Engineering College, Chennai:Rajiv Gandhi Institute of Technology, Kottayam:Ronsathal Uloom Arabic College, Farook:Royal College of Engineering & Technology, Akkikkavu:Royal Dental College, Palakkad:Saranathan College of Engineering, Trichy:SRM University, Kattankulathur:S. E. S. College, Sreekandapuram:S. N. College for Women, Kollam:S. N. College, Alathur:S. N. College, Chathannoor, Kollam:S. N. College, Chempazhanthy:S. N. College, Chengannur:S. N. College, Cherthala:S. N. College, Nattika:S. N. College, Punalur, Kollam:S. N. College, Sivagiri, Varkala:S. N. College, Thottada, Kannur:S. N. Guru College, Chelannur:S. N. Training College, Nedumganda:S. N. College, Kollam:SNM College, Maliankara:Sacred Heart College, Chalakudy:Sacred Heart College, Thevara:SAE College, Chennai:Sahodaran Ayyappan Smaraka Yogam College, Konni:Sahrdaya College of Engineering & Technology., Kodakara:Saintgits College of Engineering, Pathamuttom:Sanatana Dharma College, Alappuzha:Sarabhai Institute of Science & Technology, Kattakada:School of Management Studies, CUSAT:SCMS School of Engg. & Tech., Ernakulam:Shahul Hameed Memorial Engineering College, Kadakkal:Sir Syed College, Thaliparamba:Sir Syed Institute For Technical Studies, Thaliparamba:SMU Manipal:SNS College of Engineering, Coimbatore:SNS College of Technology, Coimbatore:Sree Buddha College of Engineering, Pattoor:Sree Chitra Thirunal College of Engineering, Pappanamcode:Sree Gokulam Medical College & Research Foundation, Trivandrum:Sree Kerala Varma College, Thrissur:Sree Krishna College, Thrissur:Sree Narayana Guru College of Engineering & Technology, Payyannur:Sree Narayana Gurukulam College of Engineering, Kadayiruppu:Sree Narayana Mangalam Inst. of Mgmt. & Tech., Maliankara:Sree Narayana Mangalam Training College, Moothakunnam:Sree Narayana Trust College, Shoranur:Sree Sankara College, Kalady:Sree Swathi Thirunal College of Music Thiruvananthapuram:Sree Vivekananda College, Kizhoor:Sree Vyasa NSS College, wadakkancherry:Sri Venkateswara College of Engineering, Chennai:Sri. Ayyappa Devaswom Board College, Eramalikaraa:Sri. Sankara Dental College, Varkala.:Sri. Vidyadiraja NSS College, Vazhoor:Srinivas Institute of Management Studies, Mangalore:SSV. College, Perumbavoor:St. Aloysius College, Edathua:St. Berchmans College, Changanacherry:St. Cyrils College, Adoor:St. Dominic College, Kanjirappally:St. George College, Aruvithura:St. Gregorios College, Kottarakara:St. Gregorios Dental College, Kothamangalam:St. Johns College Anchal:St. Joseph College of Communication, Changanassery:St. Joseph College for Women, Alappuzha:St. Joseph Training College for Women, Ernakulam:St. Joseph Training College, Mannanam, Kottayam:St. Joseph`s College of Engg. & Technology, Palai:St. Josephs College, Devagiri:St. Josephs College, Irinjalakuda:St. Josephs College, Moolamattom:St. Mary`s College, Sulthan bathery:St. Michaels College, Cherthala:St. Stephen College, Pathanapuram:St. Stephens College, Uzhavoor:St. Theresas College, Ernakulam:St. Thomas College, Kozhencherry:St. Thomas College, Ranni:St. Thomas Training College, Palai:St. Xaviers College for Women, Aluva:St. Xaviers College, Kothavara, Vaikom:St. Xaviers College, Thiruvananthapuram:St. Alberts College, Ernakulam:St. Aloysius College, Elthuruthu:St. Marys College, Manarcadu:St. Marys College, Thrissur:St. Peters College, Kolencherry:St. Pius College, Rajapuram:St. Thoma College, Thrissur:St. Thomas College, Pala:Sullamussalam Arabic College, Areacode:Sunnivva Arabic College, Chennamangallur:SUT Medical College, Trivandrum:T. K. M Institute of Technology, Ezhukone:T.K.Madhavan Memorial College, Nangiarkulangara:Thangal Kunju Memorial Arts and science College, Kollam:Titus II Teachers Colleges Thiruvalla:TKM College of Engineering, TKM College Post, Kollam:Toc H Institute of Science & Technology, Mulamthurutthy:Travancore Engineering College, Aayoor:Union Christian College, Aluva:Unity women`s College, Manjeri:University College of Engineering, Kariavattom, :University College, Thiruvananthapuram:Veda Vyasa Institute of Technology, Ponnempadam:Vidya Academy of Science & Technology, Thrissur:Vidyodaya Pre University College, Udupi:Vimal Jyothi Engineering College, Chemperi:Vimala College, Thrissur:Viswajyothi College of Engineering & Technology, Vazhakkulam:VTB College, Mannampatta:VTM NSS College, Dhanuvachapuram:W. M. O. Arts and Science College, Muttil:Younus College of Engineering & Technology, Kollam:Zamorins Guruvayurappan College, Kozhikode:Other";
var evcode = '';
var gallery = '<div class="pe-container"><ul id="pe-thumbs" class="pe-thumbs"><li><a href="#"><img src="' + subDir + 'img/thumbs/1.jpg" /><div class="pe-description"><h3>Music</h3><p>Dedicated, for its alluring elegance </p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/2.jpg" /><div class="pe-description"><h3>Ingress</h3><p>Even the wonderland needed an entrance, and here it is!!</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/3.jpg" /><div class="pe-description"><h3>Careen</h3><p>Whiles both his youth and virtue did intend</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/4.jpg" /><div class="pe-description"><h3>Brilliance</h3><p>He made it possible, its not a virtue, but an achievement</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/5.jpg" /><div class="pe-description"><h3>Determination</h3><p>Who has won the battles without a lifetime spoiled in coliseum</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/6.jpg" /><div class="pe-description"><h3>Fashion</h3><p>Get lost in the show of elegance</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/7.jpg" /><div class="pe-description"><h3>life was graced</h3><p>But his own worth, wherein his life was graced</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/8.jpg" /><div class="pe-description"><h3>the same</h3><p>Sith as that ever he maintained the same?</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/9.jpg" /><div class="pe-description"><h3>oblivion</h3><p>Oblivion in the darkest day to come</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/10.jpg" /><div class="pe-description"><h3>sin shall tread</h3><p>When sin shall tread on merit in the dust</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/11.jpg" /><div class="pe-description"><h3>lamentable tomb</h3><p>Cannot rase out the lamentable tomb</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/12.jpg" /><div class="pe-description"><h3>short-lived deserts</h3><p>Of his short-lived deserts; but still they must</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/13.jpg" /><div class="pe-description"><h3>hearts and memories</h3><p>Even in the hearts and memories of men</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/14.jpg" /><div class="pe-description"><h3>respect</h3><p>Claim fit respect, that they, in every limb</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/15.jpg" /><div class="pe-description"><h3>comfort</h3><p>Remembering what he was, with comfort then</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/16.jpg" /><div class="pe-description"><h3>pattern</h3><p>May pattern out one truly good, by him</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/17.jpg" /><div class="pe-description"><h3>truly good</h3><p>For he was truly good, if honest care</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/18.jpg" /><div class="pe-description"><h3>harmless conversation</h3><p>Of harmless conversation may commend</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/19.jpg" /><div class="pe-description"><h3>recompensed</h3><p>Ill recompensed only in his end</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/20.jpg" /><div class="pe-description"><h3>tongue</h3><p>Nor can the tongue of him who loved him least</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/21.jpg" /><div class="pe-description"><h3>superlative</h3><p>To one superlative above the rest</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/22.jpg" /><div class="pe-description"><h3>steady faith</h3><p>Of many men in steady faith reprove</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/23.jpg" /><div class="pe-description"><h3>constant temper</h3><p>His constant temper, in the equal weight</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/24.jpg" /><div class="pe-description"><h3>thankfulness</h3><p>Of thankfulness and kindness: Truth doth leave</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/25.jpg" /><div class="pe-description"><h3>proof</h3><p>Sufficient proof, he was in every right</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/26.jpg" /><div class="pe-description"><h3>thankful</h3><p>As kind to give, as thankful to receive.</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/27.jpg" /><div class="pe-description"><h3>curious eye</h3><p>The curious eye of a quick-brained survey</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/28.jpg" /><div class="pe-description"><h3>scantly find</h3><p>Could scantly find a mote amidst the sun</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/29.jpg" /><div class="pe-description"><h3>too-shortened days</h3><p>Of his too-shortened days, or make a prey</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/30.jpg" /><div class="pe-description"><h3>faulty errors</h3><p>Of any faulty errors he had done</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/31.jpg" /><div class="pe-description"><h3>spleenful sense</h3><p>Not that he was above the spleenful sense</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/32.jpg" /><div class="pe-description"><h3>spite of malice</h3><p>And spite of malice, but for that he had</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/33.jpg" /><div class="pe-description"><h3>innocence</h3><p>Warrant enough in his own innocence</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/34.jpg" /><div class="pe-description"><h3>nature</h3><p>Against the sting of some in nature bad</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/35.jpg" /><div class="pe-description"><h3>absolutely blest</h3><p>Yet who is he so absolutely blest</p></div></a></li><li><a href="#"><img src="' + subDir + 'img/thumbs/36.jpg" /><div class="pe-description"><h3>mortal frame</h3><p>That lives encompassed in a mortal frame</p></div></a></li></ul></div>';
function setCssR(a) {
	vright = $(a).css('right');
	vtop = $(a).css('top');
	$(a).css({
		right: vright,
		top: vtop
	});
}

function inputBlur(i) {
    //validation
}

function setCssL(a) {
	vleft = $(a).css('left');
	vtop = $(a).css('top');
	$(a).css({
		left: vleft,
		top: vtop
	});
}

function setMenu(j) {
	menu = j;
}

function loadingAnimation(b) {
	if (b) {
		$('#light').show();
		$('.spinner').show();
	}else {
		$('#light').fadeOut();
		$('.spinner').fadeOut();
	}
}

function lookup(inputString) {
		if (inputString.length == 0) {
			$('#suggestions').fadeOut(); // Hide the suggestions box
		}
		else {
			$('#suggestions').fadeIn(); // Show the suggestions box
			$('#s-loader').show();
			$.post(subDir + 'search.php', {q: ''+ inputString + ''}, function(data) { // Do an AJAX call
				$('#suggestions').html(data); // Fill the suggestions box
				$('#s-loader').hide();
      			});
   		}
}

(function(window, undefined) {
	var History = window.History;
	if (!History.enabled) {
		return false;
	}
	$(function() {
		$('#suggestions').fadeOut();
		//$("#feedback").fadeOut();
		var w = $(window).width();
		var h = $(window).height();
		var flag = 0;
		/*$('body').keydown(function(event) {
			if (event.target.type == 'text' || event.target.type == 'email' || event.target.type == 'password' || event.target.name == 'accommodation')
;
			else {
				if (event.which == 27) $('#shortcut').hide();
				if (event.which >= 37 && event.which <= 40) { //If direction keys press
					if (flag == 0) {
						$.getScript(subDir + 'js/shortcut.js', function() {
	  						$('#shortcut').show();
	  						flag = 1;
	  					});
					}
					else
						$('#shortcut').show();
				}
			}
		});*/
		History.Adapter.bind(window, 'statechange', function() { // Note: We are using statechange instead of popstate
			var State = History.getState(), // Note: We are using History.getState() instead of event.state
				rootUrl = History.getRootUrl().slice(0, -1), // Get rid of trailing slash
				relativeUrl = State.url.replace(/\/?$/, '').replace(rootUrl + subDir.replace(/\/?$/, ''), '').slice(1);
			//History.log(State.data, State.title, State.url);
			if (relativeUrl == '') {
				if ($('#mainmenu-pane').attr('class') == 'moveout') {
					$('#mainmenu-pane').attr('class', 'movein');
					$('#font-pane').attr('class', 'movein');
				} else if ($('#mainmenu-pane').attr('class') == 'pane') {
					$('#mainmenu-pane').attr('class', 'loading');
					$('#font-pane').attr('class', 'loading');
					History.pushState({
						timestamp: (new Date().getTime())
					}, 'Ragam 2013', '#');
				}
			} else {
				if (relativeUrl[relativeUrl.length - 1] == '/') relativeUrl = relativeUrl.substr(0, relativeUrl.length - 1);
				setCssL('#font-pane');
				setCssR('#mainmenu-pane');
				if (relativeUrl.split('/')[0] == 'Events') { //Events section
					$('.pane').hide();
					$('#inner-pane-events').show();
					$('#content-wrapper-events').fadeOut();
					if ($('#mainmenu-pane').attr('class') != 'moveout')
						$('#inner-pane-events').attr('class', 'pane'); //Reset the inner-pane-events just before opening
					$('#mainmenu-pane').attr('class', 'moveout');
					$('#font-pane').attr('class', 'moveout');
					if (relativeUrl.search('/') == -1) { //If it's a first level page
						$('#painting-events').fadeIn();
						if ($('#inner-pane-events').attr('class') == 'moveright')
							$('#inner-pane-events').attr('class', 'moveback');

						title = relativeUrl;
						$.ajax({
							dataType: 'json',
							url: subDir + 'manager/fetchlinks.php',
							data: {
								'cat': title
							},
							type: 'POST',
							success: function(d) {
								setMenu(d);
								var catlinks = '';
								d.forEach(function(ele) {
									catlinks = catlinks + "<a href='" + subDir + title + '/' + ele.name.replace(/\ /g, '_') + "'><li>" + ele.name + '</li></a>';
								});
								$('#submenu-links-events').html(catlinks);
								loadingAnimation(false);
							}
						});
					} else { //Its a second level url
						$('#painting-events').fadeOut();
						$('#inner-pane-events').attr('class', 'moveright');
						var n = relativeUrl.split('/');
						eve = relativeUrl.split('/')[n.length - 1];
						$.ajax({
							dataType: 'json',
							url: subDir + 'manager/content.php',
							data: {
								'event': eve
							},
							type: 'POST',
							success: function(d) {
								if (d.name != null) {
									$('#content-heading-events').text(d.name);
									$('#content-content-events').html(d.content);
									evcode = d.code;
								}else {
									$('#content-heading-events').text('Choose an event from right');
								}
								$('#content-wrapper-events').fadeIn();
								$('#content-content-wrapper-events.nano').nanoScroller({
									scrollTop: '0px'
								});
							}
						});
						//Load menu
						title = relativeUrl.split('/')[0];
						category = relativeUrl.split('/')[0].replace(/_/g, ' ');
						if (n.length > 2)
							subcategory = relativeUrl.split('/')[2].replace(/_/g, ' ');
						$.ajax({
							dataType: 'json',
							url: subDir + 'manager/fetchlinks.php',
							data: {
								'cat': title
							},
							type: 'POST',
							success: function(d) {
								setMenu(d);
								var catlinks = '';
								d.forEach(function(ele) {
									if (ele.name == category)
										catlinks = catlinks + "<a href='" + subDir + title + '/' + ele.name.replace(/\ /g, '_') + "' class='selected'><li>" + ele.name + '</li></a>';
									else
										catlinks = catlinks + "<a href='" + subDir + title + '/' + ele.name.replace(/\ /g, '_') + "' class='notselected'><li>" + ele.name + '</li></a>';
								});
								sublinks = '';
								if (n.length > 2)
								{
									for (ele in menu) {
										if (menu[ele].name == category) {
											for (s in menu[ele]['sublinks']) {
												if (menu[ele]['sublinks'][s].name == subcategory)
													sublinks = sublinks + "<li><a href='" + subDir + title + '/' + menu[ele].name.replace(/\ /g, '_') + '/' + menu[ele]['sublinks'][s].name.replace(/\ /g, '_') + "' class='selected'>" + menu[ele]['sublinks'][s].name + "<br/><span class='shortdesc'>" + menu[ele]['sublinks'][s].shortdesc + '</span></a></li>';
												else
													sublinks = sublinks + "<li><a href='" + subDir + title + '/' + menu[ele].name.replace(/\ /g, '_') + '/' + menu[ele]['sublinks'][s].name.replace(/\ /g, '_') + "' class='notselected'>" + menu[ele]['sublinks'][s].name + "<br/><span class='shortdesc'>" + menu[ele]['sublinks'][s].shortdesc + '</span></a></li>';
											}
											break;
										}
									}
								}
								$('#hidden-submenu-links').html(catlinks);
								$('#hidden-subsubmenu-links').html(sublinks);
								$('#submenu-links-events').html($('#hidden-submenu-links').html());
								$('#subsubmenu-links-events').html($('#hidden-subsubmenu-links').html());
								loadingAnimation(false);
							}
						});
					}
				} //Endif events
				else if (relativeUrl.split('/')[0] == 'Workshops') {
					//Workshops code comes here
					loadingAnimation(false);
					$('.pane').hide();
					$('#inner-pane-workshops').show();
					if ($('#mainmenu-pane').attr('class') != 'moveout')
						$('#inner-pane-workshops').attr('class', 'pane'); //Reset the inner-pane-workshops just before opening
					$('#mainmenu-pane').attr('class', 'moveout');
					$('#font-pane').attr('class', 'moveout');
					$('#content-content-wrapper-workshops.nano').nanoScroller({
						scrollTop: '0px'
					});
					loadingAnimation(false);
					/*if (relativeUrl.search("/") == -1) { //If it's a first level page
						$("#painting-workshops").fadeIn();
						title = relativeUrl;
						loadingAnimation(false);
					} else { //Its a second level url
						$("#painting-workshops").fadeOut();
						var n = relativeUrl.split("/");
						eve = relativeUrl.split("/")[n.length - 1];
					}*/

				} //Endif workshops
				else if (relativeUrl.split('/')[0] == 'Proshows') {
					//Proshows code
					$('.pane').hide();
					$('#inner-pane-proshows').show();
					if ($('#mainmenu-pane').attr('class') != 'moveout')
						$('#inner-pane-proshows').attr('class', 'pane'); //Reset the inner-pane-proshows just before opening
					$('#mainmenu-pane').attr('class', 'moveout');
					$('#font-pane').attr('class', 'moveout');
					if (relativeUrl.search('/') == -1) { //If it's a first level page
						$('#painting-proshows').fadeIn();
						title = relativeUrl;
						loadingAnimation(false);
					} else { //Its a second level url
						$('#painting-proshows').fadeOut();
						var n = relativeUrl.split('/');
						eve = relativeUrl.split('/')[n.length - 1];
					}
				} //Endif proshows

				else if (relativeUrl.split('/')[0] == 'Showcase') {
					//Showcase code
					$('.pane').hide();
					$('#inner-pane-showcase').show();
					if ($('#mainmenu-pane').attr('class') != 'moveout')
						$('#inner-pane-showcase').attr('class', 'pane'); //Reset the inner-pane-showcase just before opening
					$('#mainmenu-pane').attr('class', 'moveout');
					$('#font-pane').attr('class', 'moveout');
					if (relativeUrl.search('/') == -1) { //If it's a first level page
						$('#painting-showcase').fadeIn();
						title = relativeUrl;
						$.ajax({
							dataType: 'json',
							url: subDir + 'manager/fetchlinks.php',
							data: {
								'cat': title
							},
							type: 'POST',
							success: function(d) {
								setMenu(d);
								var links = '';
								d.forEach(function(ele) {
									links = links + "<a href='" + subDir + title + '/' + ele.name.replace(/\ /g, '_') + "'><li>" + ele.name + '</li></a>';
								});
								$('#submenu-links-showcase').html(links);
								loadingAnimation(false);
							}
						});
					} else { //Its a second level url
						$('#painting-showcase').fadeOut();
						$('#inner-pane-showcase').attr('class', 'moveright');

						var n = relativeUrl.split('/');
						eve = relativeUrl.split('/')[n.length - 1];
						$.ajax({
							dataType: 'json',
							url: subDir + 'manager/content.php',
							data: {
								'event': eve
							},
							type: 'POST',
							success: function(d) {

								$('#content-heading-showcase').text(d.name);
								$('#content-content-showcase').html(d.content);
								$('#content-wrapper-showcase').fadeIn();
								$('#content-content-wrapper-proshows.nano').nanoScroller({
									scrollTop: '0px'
								});
							}

						});
					}
				} //Endif showcase
				else if (relativeUrl.split('/')[0] == 'Sponsors') {
					//Sponsors code
					$('.pane').hide();
					$('#inner-pane-sponsors').show();
					if ($('#mainmenu-pane').attr('class') != 'moveout')
						$('#inner-pane-sponsors').attr('class', 'pane'); //Reset the inner-pane-sponsors just before opening
					$('#mainmenu-pane').attr('class', 'moveout');
					$('#font-pane').attr('class', 'moveout');
					$('#painting-sponsors').fadeIn();
					title = relativeUrl;
					loadingAnimation(false);
				} //Endif sponsors
				else {
					$('#notfound').show();
					$('#wrapper').attr('class', 'blur');
					//Go to 404
				}
			}
		});

		$(window).bind('load', function() {
			History.pushState({
				timestamp: (new Date().getTime())
			}, 'Ragam 2013 | National Institute of Technology Calicut', '');
			loadingAnimation(false);
		});
		var startIndex = 0;
		var endIndex = $('#ticker div').length;
		$('#ticker div:first').fadeIn(fadeSpd);

		window.setInterval(function() {
			$('#ticker div:eq(' + startIndex + ')').delay(fadeSpd).fadeOut(fadeSpd);
			    startIndex++;
			    $('#ticker div:eq(' + startIndex + ')').stop(true, true).fadeIn(fadeSpd);
		        if (endIndex == startIndex) startIndex = -1;
	    }, aniSpd);


// Proshows Links
		$('#popularnite').click(function() {
			$('#painting-proshows').hide();
			$('#content-content-proshows').hide();
			$('#painting-proshows').attr('class', 'popularnite');
			$('#content-content-proshows').html("We give you: the Popular Nite of the Year. <strong>Shankar Mahadevan</strong> at NIT Calicut. The National Award winning singer and music director is all set to leave the crowds <em>Breathless</em> at NIT Calicut. The creator of music for <em>Vishwaroopam</em>, <em>Zindagi Na Milegi Dobara</em> and more, the voice behind chart-toppers like <em>Kajra Re</em> and <em>Wake Up Sid</em>, this all-out entertainer will blow you away. So come prepared. Shankar Live. Only at Ragam '13.");
			$('#painting-proshows').fadeIn();
			$('#content-content-proshows').fadeIn();

		});
		$('#combonite').click(function() {
			$('#painting-proshows').hide();
			$('#content-content-proshows').hide();
			$('#painting-proshows').attr('class', 'combonite');
			$('#content-content-proshows').html("<strong>Haricharan</strong><br /><br />Trained Carnatic musician and popular playback singer <em>Haricharan</em>, the singer of chart toppers like <em>Thuli Thuli</em> from <em>Paiya</em>, <em>Vathilil Aa Vathilil</em> from <em>Ustad Hotel</em> and more, comes to Ragam '13. The voice that has taken South India by storm is all set to conquer Kerala.<br /><br /><strong>Tanvi Shah</strong><br /><br />Her musical journey started with <em>Fanaa</em>, and scaled spectacular heights with a Grammy Award for <em>Jai Ho</em>. This versatile young artiste has collaborated with <em>AR Rahman</em> on a wide range of popular songs from <em>Slumdog Millionaire</em> to <em>Delhi-6</em>. Presenting the gorgeous Tanvi Shah, first time at a college fest - Only at Ragam '13. <br /><br /><strong>Bennet and the Band</strong><br /><br /><em>Bennet and the Band</em> comprises of highly talented session artists and musicians with roots in eclectic genres and revolves around the founder member <em>Bennet</em>, who has beem a music composer and a performer for over 15 years. A symphony of opposites, Indian classical and jazz with overtones of progressive Rock – The Ragam Stage awaits.");
			$('#painting-proshows').fadeIn();
			$('#content-content-proshows').fadeIn();

		});
		$('#pepperfest').click(function() {
			$('#painting-proshows').hide();
			$('#content-content-proshows').hide();
			$('#content-content-proshows').html("<p><strong>Pepperfest</strong> aims at going beyond the standard definition of a concert by bringing the music off stage and involving each of the 13,000 attendees of Ragam. With open ground jamming sessions through the day and diverse music all around, Pepperfest is an attempt to integrate the best of every genre into the feel of this musical feast. </p><br /><p>With the Pepperfest we hope to inculcate a fresh interpretation of music on campus, to give the talented independant indian bands a place to perform, and to get the audience to play as much music as the bands on stage. Pepperfest 2013 will play host to <strong>Skrat</strong> and <strong>Jhanu</strong>, two very talented rock bands from Chennai.</p>");
			$('#painting-proshows').attr('class', 'pepperfest');
			$('#painting-proshows').fadeIn();
			$('#content-content-proshows').fadeIn();

		});
// Workshop Links
		$('#happyfeetstudio').click(function() {
			//$("#painting-workshops").hide();
			$('#content-content-workshops').hide();
			//$("#painting-workshops").attr("class", "popularnite");
			$('#content-content-workshops').html("<strong>Bachata</strong><br/>Bachata is a dance full of sensuality and musicality inspired by the soulful melodic rhythms of guitars. Dive deep into this dance and you'll find a freedom unlike any other. Transport yourself onto a steamy Latin street this Ragam and lose yourself in the playful steps and the sensuous movements of Bachata. <br/>Entry Fee: INR 400 per couple.<br/><br/> <strong>Salsa</strong><br/>Salsa is a lively and passionate dance form. Sway to the fiery tunes under the spell of the music and feel the romance and connection. Learn to move with confidence and grace and show off the hot new steps that you can master at the Salsa workshop, only at Ragam '13.<br/>Entry Fee: INR 400 per couple.<br/><br/>Combo Offer (Bachata + Salsa): INR 600 per couple.<br/><hr/><br/>Conducted by: <br/><em>George Jacob</em><br/> - International Performer and Choreographer for the last 15 years with expertise in styles like Salsa, Cha Cha, Bollywood, Merengue and Bachata.<br/> - Assistant choreographer for Bollywood movies like Hum Tum, Mangal Pandey, Page 3 etc.<br/> - Official Choreographer of Miss Mauritius 2009 and Miss Mauritius 2010.<br/><br/>");
			//$("#painting-workshops").fadeIn();
			$('#content-content-workshops').fadeIn();
			$('#content-content-wrapper-workshops.nano').nanoScroller({
				scrollTop: '0px'
			});


		});
		$('#shuttercraft').click(function() {
			//$("#painting-workshops").hide();
			$('#content-content-workshops').hide();
			//$("#painting-workshops").attr("class", "popularnite");
			$('#content-content-workshops').html("South India's largest Nikon certified photography workshop<br/><br/><strong>Digital Photography</strong><br/>Always wanted to try out that awesome DSLR camera, but not quite sure how to go about it? Then this is just the place for all you prospective hot shot photographers. Get creative inspiration, expert tips and advice at our Photography workshop, from the giants NIKON themselves. Then get out there and click some mind blowing pictures!<br/>Entry Fee: INR 200<br/><br/>Conducted by: <br/> <em>Nikon India Private Limited</em><br/>Nikon India is a 100 % subsidiary of Nikon Corporation, a Multinational Corporation headquartered in Tokyo, Japan, specializing in optics and imaging. For more info, visit <a target='_blank' href='http://www.nikon.co.in'>website</a><br/><br/><strong>Street Photography</strong><br/>Street photographers strive to capture the life and culture of city streets, featuring their subjects in candid poses and searching for those special moments that can make an incredible photograph. Attend our workshop on street photography and then unleash yourself onto the streets and capture some amazing shots.<br/>Entry Fee: INR 200<br/><br/><strong>Macro Photography</strong><br/>Macro and close-up photography can take the viewer to new and seldom seen vantage points. Here is your chance to learn how to take some super cool larger than life photos at Ragam '13. <br/>Entry Fee: INR 200<br/><br/>Conducted by: <br/><em>Aroon Kalandy</em><br/> - Recipient of many awards from prestigious groups like Times Photo Journal, Photos trope and from online photographic giants like Flickr and Red Bubble.<br/> - With a high number of sales of macro photographs to his credit from Red Bubbles and Sen6, Aroon have had his macros published in top Indian Magazines like 'Better Photography' and 'Smart Photography'.<br/> - In 2010, one of his images was selected by Penguin Australia to be featured as the cover for an Australian Author, Fiona Macintosh.<br/><br/>Combo Offer: Join all the photography workshops for INR 500 and be a Nikon certified photographer.<br/><br/>");
			//$("#painting-workshops").fadeIn();
			$('#content-content-workshops').fadeIn();
			$('#content-content-wrapper-workshops.nano').nanoScroller({
				scrollTop: '0px'
			});
		});
		$('#other-workshops').click(function() {
			//$("#painting-workshops").hide();
			$('#content-content-workshops').hide();
			//$("#painting-workshops").attr("class", "popularnite");
			$('#content-content-workshops').html("<strong>Self Grooming Workshop</strong><br/>Everyone knows the importance of first impressions. You get only one chance to make it or break it! Hence be it in your personal or professional capacity, it is important to look your best at every possible opportunity. In this Grooming Workshop handled by professionals held exclusively for ladies, you will learn the basics of how you can get your hair-style, clothes and make-up really work their magic for you. Feel good about yourself and let the world know it.<br/>Entry Fee: INR 200<br/><br/>Conducted By:<br/><em>Queens Innovations:</em><br/>Queens Beauty Parlor is a creative innovation of Mrs. Thahira Nizar's lifelong passion for beauty.<br/>A thorough professional and a recipient of many international awards form internationally celebrated brands like L’Oreal Paris and Women’s World International; Mrs Thahira Nizar pioneered the concept of innovative beauty solutions in Kerala.<br/>Under the umbrella of Queens Innovation, Mrs. Thahira Nizar has held customized workshops and seminars in Maldives, Singapore and Malaysia.<br/><a target='_blank' href='http://www.queensbeautyparlour.com/'>Website</a><br/><br/>Contacts<br/>Ganesh +91 989 547 8995<br/>Mahesh +91 889 178 1730<br/><br/>");
			//$("#painting-workshops").fadeIn();
			$('#content-content-workshops').fadeIn();
			$('#content-content-wrapper-workshops.nano').nanoScroller({
				scrollTop: '0px'
			});
		});

		$('#content-content-wrapper-events.nano').hover(function() {
			$(this).nanoScroller();
		});
		$('#content-content-wrapper-workshops.nano').hover(function() {
			$(this).nanoScroller();
		});
		$('#faq-wrapper.nano').hover(function() {
			$(this).nanoScroller();
		});
		$('#info-wrapper.nano').hover(function() {
			$(this).nanoScroller();
		});
		$('#mainlinks a').click(function(e) {
			e.preventDefault();
		});
		$('#construction').click(function() {
			$('#construction').fadeOut();
			$('#wrapper').attr('class', '');
		});
		$('#notfound').click(function() {
			$('#notfound').fadeOut();
			History.pushState({
				timestamp: (new Date().getTime())
			}, 'Ragam 2013 | National Institute of Technology Calicut', subDir);
			$('#wrapper').removeAttr('class', 'blur');
		});
		$('#mainlinks li').click(function() {
			title = $(this).data('title');
			if ($(this).data('title') == 'Showcase') {
				$('#construction').show();
				$('#wrapper').attr('class', 'blur');
			}
			else {
				loadingAnimation(true);
				History.pushState({timestamp: (new Date().getTime())}, title + ' | Ragam 2013', $(this).parent('a').attr('href'));
			}
		});
		$('#submenu-links-events a').live({
			mouseenter: function() {
				var sublinks = '';
				for (ele in menu) {
					if (menu[ele].name == $(this).text()) {
						for (s in menu[ele]['sublinks']) {
							sublinks = sublinks + "<li><a href='" + subDir + title + '/' + menu[ele].name.replace(/\ /g, '_') + '/' + menu[ele]['sublinks'][s].name.replace(/\ /g, '_') + "'>" + menu[ele]['sublinks'][s].name + "<br/><span class='shortdesc'>" + menu[ele]['sublinks'][s].shortdesc + '</span></a></li>';
						}
						break;
					}
				}
				$('#subsubmenu-links-events').html(sublinks);
				var tmp = $(this).text();
				tmp = tmp.replace(' ', '_');

				$('#painting-events').hide();
				$('#painting-events').css('background-image', $('div#'+ tmp).css('background-image'));
				$('#painting-events').css('background-position', $('div#'+ tmp).css('background-position'));
				$('#painting-events').css('background-repeat', 'no-repeat repeat');
				if ($('#inner-pane-events').attr('class') != 'moveright')
					$('#painting-events').stop(true, true).fadeIn(250);

				$('#submenu-links-events a').each(function() {
					$(this).attr('class', 'notselected');
				});
				$(this).attr('class', 'selected');
			},
			click: function(e) {
				e.preventDefault();
			}
		});
		$('#subsubmenu-links-events a').live({
			click: function(e) {
				e.preventDefault();
				$('#painting-events').fadeOut();
				$('#subsubmenu-links-events a').each(function() {
					$(this).attr('class', 'notselected');
				});
				$(this).attr('class', 'selected');
				title = $(this).html();
				title = title.split('<br>')[0];
				History.pushState(null, title + ' | Ragam 2013', $(this).attr('href'));
			},
			mouseenter: function(e) {
				$('#subsubmenu-links-events a').each(function() {
					$(this).attr('class', 'notselected');
				});
				$(this).attr('class', 'selected');
				/*$(this).children(".shortdesc").show();
			},
			mouseleave: function(e) {
				$(this).children(".shortdesc").hide();*/
			}
		});
		$('#content-container-events').mouseenter(function() {
			if ($('#inner-pane-events').attr('class') == 'moveright')
			{
				$('#submenu-links-events').html($('#hidden-submenu-links').html());
				$('#subsubmenu-links-events').html($('#hidden-subsubmenu-links').html());
			}
		});
		$('.menu_click').click(function() {
			$('#wrapper').attr('class', 'support-up');
			$('#support-pane').attr('class', 'support-up');
			$('#menu_tab').attr('class', 'up');
		});
		$(document).mouseup(function(e) {
			var container = $('#support-pane');
			if (container.has(e.target).length === 0 && $('#wrapper').attr('class') == 'support-up') {
				container.attr('class', 'support-down');
				$('#wrapper').attr('class', 'support-down');
				$('.menu_item').css({'border-bottom': '0px solid #444'});
			}
		});




	$('#submenu-links-workshops a').live({
			mouseenter: function() {
				var sublinks = '';
				for (ele in menu) {
					if (menu[ele].name == $(this).text()) {
						for (s in menu[ele]['sublinks']) {
							sublinks = sublinks + "<li><a href='" + subDir + title + '/' + menu[ele].name.replace(/\ /g, '_') + '/' + menu[ele]['sublinks'][s].name.replace(/\ /g, '_') + "'>" + menu[ele]['sublinks'][s].name + "<br/><span class='shortdesc'>" + menu[ele]['sublinks'][s].shortdesc + '</span></a></li>';
						}
						break;
					}
				}
				$('#subsubmenu-links-workshops').html(sublinks);
				var tmp = $(this).text();
				tmp = tmp.replace(' ', '_');
				$('#painting-workshops').hide();
				$('#painting-workshops').css('background-image', 'url("' + $('img#'+ tmp).attr('src') + '")');
				$('#painting-workshops').stop(true, true).fadeIn(250);

				$('#submenu-links-workshops a').each(function() {
					$(this).attr('class', 'notselected');
				});
				$(this).attr('class', 'selected');
			},
			click: function(e) {
				e.preventDefault();
				History.pushState(null, $(this).text() + ' | Ragam 2013', $(this).attr('href'));
			}
		});



		$('.menu_nonclick').click(function()
		{
			if ($('#menu_tab').hasClass('up'))
			{
				var container = $('#support-pane');
				container.attr('class', 'support-down');
				$('#wrapper').attr('class', 'support-down');
				$('.menu_item').css({'border-bottom': '0px solid #444'});
				$('#menu_tab').removeClass('up');
			}
		});

		$('#home-button').click(function() {
			History.pushState({
				timestamp: (new Date().getTime())
			}, 'Ragam 2013 | National Institute of Technology Calicut', subDir);
			$('#font-pane').show();
			$('#mainmenu-pane').show();
			//$("#support-pane").fadeIn();
			$('#content-wrapper-events').fadeOut();
		});

		$('a#signin-link').click(function() {
			if ($('#signin-link').attr('class') == 'cancel') {
				$(this).html('<img src="' + subDir + 'img/signup.png" />');
				$('#signin-link').attr('class', 'enabled');
				$('#dark').attr('class', 'overlayoff');
				$('#signup-form-wrapper').hide();
			} else {
				$(this).html('<img src="' + subDir + 'img/cancel.png" />');
				$('a#signin-link').attr('class', 'cancel');
				$('a#login-link').attr('class', 'enabled');
				$('a#login-link').html('<img src="' + subDir + 'img/login.png" />');
				$('#dark').attr('class', 'overlayon');
				$('#login-form-wrapper').hide();
				$('#signup-form-wrapper').fadeIn();
			}
		});
		$('#login-link').click(function() {
			if ($('#login-link').attr('class') == 'cancel') {
				$(this).html('<img src="' + subDir + 'img/login.png" />');
				$('#login-link').attr('class', 'enabled');
				$('#dark').attr('class', 'overlayoff');
				$('#login-form-wrapper').hide();
			} else {
				$(this).html('<img src="' + subDir + 'img/cancel.png" />');
				$('a#login-link').attr('class', 'cancel');
				$('a#signin-link').attr('class', 'enabled');
				$('a#signin-link').html('<img src="' + subDir + 'img/signup.png" />');
				$('#dark').attr('class', 'overlayon');
				$('#signup-form-wrapper').hide();
				$('#login-form-wrapper').fadeIn();
			}
		});

		$('#dark').click(function() {
		    $('#login-link').html('<img src="' + subDir + 'img/login.png" />');
		    $('#signin-link').html('<img src="' + subDir + 'img/signup.png" />');
		    $('#login-link').attr('class', 'enabled');
		    $('#dark').attr('class', 'overlayoff');
		    $('#login-form-wrapper').hide();
		    $('#signup-form-wrapper').hide();
		    $('#eventreg-form-wrapper').hide();
		    $('#myevents').hide();
		});
		$('.gallery').click(function() {
			$('#gallery').html(gallery);
			$('#gallery').show();
  			$('#gallery').attr('class', 'overlayon');
			$.ajax({
				url: subDir + 'js/gallery.js',
				dataType: 'script',
				success: function(){
					
				}
			});
			
		});

		$('#gallery').click(function() {
			$('#gallery').hide();
			$('#gallery').attr('class', 'overlayoff');
		});
		$('.menu_item').click(function()
		{
			$(this).siblings().css({'border-bottom': '0px solid #444'});
			$(this).siblings().removeClass('menu_select');
			$(this).css({'border-bottom': '2px solid #444'});
			$(this).addClass('menu_select');
			if ($('.menu_select').text() == 'contacts') {
				$('#reachus').hide();
				$('#contacts').fadeIn();
				$('#faq-wrapper.nano').hide();
				$('#info-wrapper.nano').hide();
				$('#feedback').hide();
				$("#credits").hide();
			}
			else if ($('.menu_select').text() == 'reach us') {
				$('#contacts').hide();
				$('#reachus').fadeIn();
				$('#faq-wrapper.nano').hide();
				$('#info-wrapper.nano').hide();
				$('#feedback').hide();
				$("#credits").hide();
			}
			else if ($('.menu_select').text() == 'faq') {
				$('#contacts').hide();
				$('#reachus').hide();
				$('#faq-wrapper.nano').fadeIn();
				$('#info-wrapper.nano').hide();
				$('#feedback').hide();
				$("#credits").hide();
			}
			else if ($('.menu_select').text() == 'info') {
				$('#contacts').hide();
				$('#reachus').hide();
				$('#faq-wrapper.nano').hide();
				$('#info-wrapper.nano').fadeIn();
				$('#feedback').hide();
				$("#credits").hide();
			}
			else if ($('.menu_select').text() == 'feedback') {
				$('#contacts').hide();
				$('#reachus').hide();
				$('#faq-wrapper.nano').hide();
				$('#info-wrapper.nano').hide();
				$('#feedback').show();
				$("#credits").hide();
			}
		});
		
		$('.menu_item').mouseover(function()
		{
			$(this).css({'border-bottom': '2px solid #444'});
		});

		$('.menu_item').mouseout(function()
		{
		if (!($(this).hasClass('menu_select')))
		{
			$(this).css({'border-bottom': '0px solid #444	'});
		}
		});
		$("#credits-button").click(function(){
			$('#contacts').hide();
			$('#reachus').hide();
			$('#faq-wrapper.nano').hide();
			$('#info-wrapper.nano').hide();
			$('#feedback').hide();
			$('#credits').show();
		});
		$('#feedback-submit').click(function() {
	      	$.ajax({
				url: subDir + 'manager/feedback.php',
				data: {
					'name': $('#feedback input.nameentry').val(),
					'email': $('#feedback input.emailentry').val(),
					'feedback': $('#feedback textarea.feedbackentry').val()
				},
				type: 'POST',
				success: function(d) {
					if (d == 1) {
						$('#feedback form').hide();
						$('#feedback #tip').text('Thank you for your feedback! :)');
					}
					else {
						$('#feedback #tip').text('Sorry. Please try again later.');
					}
					//$("#feedback").hide();
	      			//$("#feedback").attr("class", "overlayoff");
				}
			});
	    });
		$('#font-pane').bind('mousewheel', function(event) {
    		if (event.originalEvent.wheelDelta >= 0) {
        			if ($('#wrapper').attr('class') != 'support-down') {
        				$('#wrapper').attr('class', 'support-down');
        				$('#support-pane').attr('class', 'support-down');
        			}
    		}
    		else {
        		if ($('#wrapper').attr('class') != 'support-up') {
        			$('#wrapper').attr('class', 'support-up');
					$('#support-pane').attr('class', 'support-up');
				}
    		}
		});
		$('#college').autocomplete(collegeList.split(':'));
		$('#signupform').submit(function() {
			loadingAnimation(true);
	        $.ajax({
	        	dataType: 'json',
	            type: 'POST',
	            url: subDir + 'manager/register.php',
	            data: $('#signupform').serializeArray(),
	            success: function(data) {
	            	loadingAnimation(false);
	            	if (data.success)
					{
						$('#signupform').slideUp();
	            		$('#signup-form-wrapper #tip').html(data.msg);
	            		$('#signup-form-wrapper #tip').css('color', '#77b708');
	            		$('#signup-form-wrapper #tip').css('font-size', '28px');
	            		setTimeout("$('a#signin-link.cancel').trigger('click');", 15000);
	            	}else
	            	{
	                	$('#signup-form-wrapper #tip').html(data.msg);
	                	$('#signup-form-wrapper #tip').css('color', '#dd181f');
	                }
	            }
	        });

	        return false;
    	});
    	$('#loginform').submit(function() {
    		loadingAnimation(true);
	        $.ajax({
	        	dataType: 'json',
	            type: 'POST',
	            url: subDir + 'manager/login.php',
	            data: $('#loginform').serializeArray(),
	            success: function(data) {
	            	loadingAnimation(false);
	            	if (data.success == 1)
					{
						$('#loginform').slideUp();
						/*$("#login-form-wrapper #tip").text(data.msg);
	                	$("#login-form-wrapper #tip").css('color','#77b708');
	                	$("#login-form-wrapper #tip").css('font-size','28px');
	                	$("#login-form-wrapper").fadeOut(2500,function() {
	                		$("#dark").attr("class", "overlayoff");	*/
	                		location.reload();
	                	//});
	            	}else
	            	{
	                	$('#login-form-wrapper #tip').text(data.msg);
	                	$('#login-form-wrapper #tip').css('color', '#dd181f');
	                }
	            }
	        });
	        return false;
	    });
	    $('#welcome').live({
	    	mouseenter: function() {
	    		$('#settings-icon').css('background', '#eee');
	    		var width = $('#welcome').width() > 115 ? $('#welcome').width() : 115;
				$('#login-options-wrapper').css('width', width + 'px');
				$('#login-options-wrapper').stop().show();
			},
			mouseleave: function() {
				$('#settings-icon').css('background', '');
				$('#login-options-wrapper').stop().hide();
			}
	    });

	    $('#my-events').live({
	    	click: function() {
				$('#dark').attr('class', 'overlayon');
				$('#eventregform').hide();
				$('#myevents').show();
				$.ajax({
		        	dataType: 'json',
		            type: 'GET',
		            url: subDir + 'manager/myevents.php',
		            data: { 'id' : $('#hidden-ragID').text()},
		            success: function(data) {
		            	var content = "<table id='myevents-table'><tr><th>Event</th><th>Team ID</th><th>Team Leader</th></tr>";
		            	if (data.length == 0)
		            		content += '<tr>You have not registered for any events yet.</tr>';
		            	else
		            	{
		            		data.forEach(function(ele) {
		            			if (ele.name == $('#hidden-name').text())
		            				content += '<tr><td>'+ ele.event_name + '</td><td>'+ ele.event_id + ele.team_id + '</td><td>You</td></tr>';
		            			else
		            				content += '<tr><td>'+ ele.event_name + '</td><td>'+ ele.event_id + ele.team_id + '</td><td>'+ ele.name + '</td></tr>';
		            		});
		            	}
		            	content += '</table>';
		            	$('#myevents').html(content);
		            }
				});
			}
		});
	    $('#logout-button').live({
	    	click: function() {
				$.ajax({
				dataType: 'json',
	            type: 'POST',
	            url: subDir + 'manager/rlogout.php',
	            success: function(data) {
					location.reload();
	            }
	        	});
			}
	    });
	    $('#eventreg-form-wrapper #sub input[type=radio]').live({
	    	click: function() {
	    		evcode = $(this).val();
	    		$.ajax({
		        	dataType: 'json',
		            type: 'POST',
		            url: subDir + 'manager/teamcheck.php',
		            data: { 'event': evcode, 'ragamid' : $('#hidden-ragID').text()},
		            success: function(data) {
		            	if (data.success == 1)
						{
							$('#eventregform').hide();
							$('#eventreg-form-wrapper #tip').text(data.msg);
		                	$('#eventreg-form-wrapper #tip').css('color', '#77b708');
		            	}else if (data.success == 0)
		            	{
		            		$('#eventregform').show();
		            		$('#eventreg-form-wrapper #tip').text('press enter to submit...');
		                	$('#eventreg-form-wrapper #tip').css('color', '#838383');
		                }
		            }
		        });
	    	}
	    });
		$( ".event-register" ).tooltip({
      		position: {
        		my: "center bottom-10",
        		at: "center top",
        		using: function( position, feedback ) {
          			$( this ).css( position );
          			$( "<div>" )
            		.addClass( "arrow" )
            		.addClass( feedback.vertical )
            		.addClass( feedback.horizontal )
            		.appendTo( this );
        		}
      		}
    	});

	    $('#after-login-register').live({
	    	click: function() {
	    		$('#dark').attr('class', 'overlayon');
	    		$('#eventreg-form-wrapper').show();
	    		/*$.ajax({
		        	dataType: 'json',
		            type: 'POST',
		            url: subDir + 'manager/teamcheck.php',
		            data: { 'event': evcode, 'ragamid' : $('#hidden-ragID').text()},
		            success: function(data) {
		            	if (data.success == 1)
						{
							$('#eventregform').hide();
							$('#eventreg-form-wrapper #tip').text(data.msg);
							$('#eventreg-form-wrapper #sub').html('');
		                	$('#eventreg-form-wrapper #tip').css('color', '#77b708');
		            	}else if (data.success == 3)
		            	{
		            		$('#eventreg-form-wrapper #sub').html(data.sub);
		            		$('#eventreg-form-wrapper #tip').text(data.msg);
		            		$('#eventreg-form-wrapper #tip').css('color', '#77b708');
		            	}else
		            	{
		            		$('#eventregform').show();
		            		$('#eventreg-form-wrapper #tip').text('press enter to submit...');
		            		$('#eventreg-form-wrapper #sub').html('');
		                	$('#eventreg-form-wrapper #tip').css('color', '#838383');
		                }
		            }
		        });
		        $('#eventreg-form-wrapper').show();
	    		$('#multiname').autoSuggest(subDir + 'manager/queryname.php', {
	    				neverSubmit: false,
	    				startText: '',
	    				minChars: 1,
	    				matchCase: false,
	    				asHtmlID: 'evreg',
	    				selectedItemProp: 'name',
	    				selectedValuesProp: 'ragID',
	    				searchObjProps: 'name',
	    				retrieveLimit: 10,
	    				selectionLimit: 30,
	    				formatList: function(data, elem) {
							new_elem = elem.html(data.name + ' (RAG' + data.ragID + ') - ' + data.college);
							return new_elem;
						},
						retrieveComplete: function(data) {
							var new_data = [];
							for (i in data) {
								if (data[i].ragID != $('#hidden-ragID').text())
									new_data[i] = data[i];
							}
							return new_data;
						},
						selectionAdded: function(elem) {
							$('.as-results').empty();
						}
	    		});
	    		$('.as-selection-item').remove();
	    		$('.as-result-item').remove();
	    		$('#as-values-evreg').val(',');
	    		$('#evreg').focus();*/
	    	}
	    });
	    $('#eventregform').submit(function(e) {
	    	e.preventDefault();
	    	var r = confirm('Confirm your registration by clicking OK.');
	    	if (r)
	    	{
	    		var team = $('#as-values-evreg').val();
	    		var members = team.split(',');
	    		var inttest = /^[0-9]{4}$/;
	    		team = '';
	    		for (i in members)
	    			if (inttest.test(members[i]))
	    				team += members[i] + ',';
	    		loadingAnimation(true);
		        $.ajax({
		        	dataType: 'json',
		            type: 'POST',
		            url: subDir + 'manager/createteam.php',
		            data: { 'event': evcode, 'teamleader' : $('#hidden-ragID').text(), 'teammembers' : team},
		            success: function(data) {
		            	loadingAnimation(false);
		               	$('#eventreg-form-wrapper #tip').text(data.msg);
		            	if (data.success)
						{
							$('#eventregform').hide();
		                	$('#eventreg-form-wrapper #tip').css('color', '#77b708');
		            	}else
		                	$('#eventreg-form-wrapper #tip').css('color', '#dd181f');
		            }
		        });
	    	}
	        return false;
	    });
		$("#currspons").click(function(){
			$("#pspons").hide();
			$("#cspons").show();
		});
		$("#prevspons").click(function(){
			$("#cspons").hide();
			$("#pspons").show();
		});
		$('[title]').mouseover(function() {
        	$(this).data('title', $(this).attr('title'));
        	$(this).attr('title', '');
    	}).mouseout(function() {
    	    $(this).attr('title', $(this).data('title'));
    	});
    	$('#faq-wrapper.nano').nanoScroller({
			scrollTop: '0px'
		});
		$('#info-wrapper.nano').nanoScroller({
			scrollTop: '0px'
		});
	});

})(window);
