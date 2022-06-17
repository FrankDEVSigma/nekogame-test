/*window.addEventListener("scroll", function(){

	var altura = window.innerHeight/1.3;
	//var boxContent = document.getElementById('homesecundaryshorts');
	var box2 = document.getElementById("two");
	var box3 = document.getElementById("three");
	var box4 = document.getElementById("four");
	var box6 = document.getElementById("six");



	//var distancia = boxContent.getBoundingClientRect().top;
	var distancia2 = box2.getBoundingClientRect().top;
	var distancia3 = box3.getBoundingClientRect().top;
	var distancia4 = box4.getBoundingClientRect().top;
	var distancia6 = box6.getBoundingClientRect().top;


	//boxContent.classList.add('con_view_up');

	box2.classList.add('con_view_up');
	box3.classList.add('con_view_up');
	box4.classList.add('con_view_up');
	


	if(distancia2 <= altura){
		box2.classList.remove('sin_view');
		box2.classList.add('con_view');
		console.log('yep1');

	}else{
		box2.classList.remove('con_view');
		box2.classList.add('sin_view');
		console.log('yep2');

	}

	if(distancia3 <= altura){
		box3.classList.remove('sin_view');
		box3.classList.add('con_view');
		console.log('yep1');

	}else{
		box3.classList.remove('con_view');
		box3.classList.add('sin_view');
		console.log('yep2');

	}

	if(distancia4 <= altura){
		box4.classList.remove('sin_view');
		box4.classList.add('con_view');
		console.log('yep1');

	}else{
		box4.classList.remove('con_view');
		box4.classList.add('sin_view');
		console.log('yep2');

	}

	if(distancia6 <= altura){
		box6.classList.remove('sin_view');
		box6.classList.add('con_view');
		console.log('yep1');

	}else{
		box6.classList.remove('con_view');
		box6.classList.add('sin_view');
		console.log('yep2');

	}
});
*/

	const homeView = document.getElementById('homeprincipal');
	const otherView = document.getElementById('otherview');


	window.onload = function (){
		const preLoader = document.querySelector('.preLoaderView');

		
		if (homeView) {
			preLoader.classList.add('displayn');
			homeView.classList.remove('displayn');
		}

		if (otherView) {
			preLoader.classList.add('displayn');
			otherView.classList.remove('displayn');
		}
		
		


	}

	const themeColor = document.getElementById('themec');
	const themeStyle = document.getElementById('themes');
	const body = document.getElementById('body');
	const bgOne = document.getElementById('bg-one');
	const bgTwo = document.getElementById('bg-two');

	var btnStyle = document.querySelectorAll('#btn_style');
	const header = document.getElementById('navheader');
	const logoHome = document.getElementById('logohome');
	const nav = document.getElementById('nav');
	const navLogoNekoFaceB = document.getElementById('navlogonekofb');
	const navLogoNekoFaceW = document.getElementById('navlogonekofw');


	const menuDesplegable = document.getElementById('dMenu');

	const readMore = document.getElementById('readmore');


	const footer = document.getElementById('footer');
	const socialsFooterB = document.getElementById('socialsfooterb');
	const socialsFooterW = document.getElementById('socialsfooterw');

	const linksFooter = document.getElementById('link');


	var line = document.querySelectorAll('#line');
	var linew = document.querySelectorAll('#linew');

	var linefooter = document.querySelectorAll('#linefoot');
	var linefooterb = document.querySelectorAll('#linefootb');



	



	

	if (localStorage.getItem('darkTheme') === null) {
		localStorage.setItem('darkTheme', 'false');
	}

	if (localStorage.getItem('memeStyle') === null) {
		localStorage.setItem('memeStyle', 'false');
	}

	

	if (otherView) {

		verifyDarkTheme();

		function verifyDarkTheme(){

			if (localStorage.getItem('darkTheme') === "true") {
				themeColor.checked = true;
				verifyCheckT();
			}else{
				themeColor.checked = false;
				verifyCheckT();
			}
		}

		verifyStyleTheme();

		function verifyStyleTheme(){

			if (localStorage.getItem('memeStyle') === "true") {
				themeStyle.checked = true;
				verifyCheckS();
			}else{
				themeStyle.checked = false;
				verifyCheckS();
			}
		}


		themeColor.addEventListener("change", verifyCheckT, false);
		function verifyCheckT(){
		  const checked = themeColor.checked;
		  console.log('checked is'+checked);
		  if(checked){
		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		localStorage.setItem('darkTheme', 'true');
		  	}

		  	if (localStorage.getItem('memeStyle') === 'false') {
		  		
			  	body.classList.add('dark_theme');
			    bgOne.classList.add('bg-oneB');
			    bgTwo.classList.add('bg-twoB');

			    
			    header.classList.add('dark_theme_nav');
			    logoHome.classList.add('colorb');
			    nav.classList.add('dark_theme_nav');
			    navLogoNekoFaceB.classList.remove('displayn');
			    navLogoNekoFaceW.classList.add('displayn');
			    menuDesplegable.classList.add('dark_theme_nav');
			    footer.classList.add('dark_theme_nav');
			    socialsFooterB.classList.add('displayn');
			    socialsFooterW.classList.remove('displayn');

			    linksFooter.classList.add('colorb');

			    

				var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linefooter.length; i++) {
				    linefooter[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linefooterb.length; i++) {
				    linefooterb[i].classList.remove('displayn');
				}

		  	}

		  	if (localStorage.getItem('memeStyle') === 'true') {

			    
			    header.classList.add('dark_theme_nav');
			    logoHome.classList.add('colorb');
			    nav.classList.add('dark_theme_nav');
			    navLogoNekoFaceB.classList.remove('displayn');
			    navLogoNekoFaceW.classList.add('displayn');
			    menuDesplegable.classList.add('dark_theme_nav');
			    footer.classList.add('dark_theme_nav');
			    socialsFooterB.classList.add('displayn');
			    socialsFooterW.classList.remove('displayn');

			    linksFooter.classList.add('colorb');

			    

				var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linefooter.length; i++) {
				    linefooter[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linefooterb.length; i++) {
				    linefooterb[i].classList.remove('displayn');
				}

		  	}
		  	
		    


		  }else{

		  	if (localStorage.getItem('darkTheme') === 'true') {
		  		localStorage.setItem('darkTheme', 'false');
		  	}


		  	if (localStorage.getItem('memeStyle') === 'false') {
			     
		  		 body.classList.remove('dark_theme');
			  	 bgOne.classList.remove('bg-oneB');
			     bgTwo.classList.remove('bg-twoB');

			   	 header.classList.remove('dark_theme_nav');
			     logoHome.classList.remove('colorb');
			     nav.classList.remove('dark_theme_nav');
			     navLogoNekoFaceB.classList.add('displayn');
			     navLogoNekoFaceW.classList.remove('displayn');
			     
			   	 menuDesplegable.classList.remove('dark_theme_nav');
			   	 footer.classList.remove('dark_theme_nav');
			     socialsFooterW.classList.add('displayn');
			     socialsFooterB.classList.remove('displayn');


			     linksFooter.classList.remove('colorb');

			     

				var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.remove('displayn');
				}
				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linefooter.length; i++) {
				    linefooter[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linefooterb.length; i++) {
				    linefooterb[i].classList.add('displayn');
				}

		  	}


		  	if (localStorage.getItem('memeStyle') === 'true') {

			   	 header.classList.remove('dark_theme_nav');
			     logoHome.classList.remove('colorb');
			     nav.classList.remove('dark_theme_nav');
			     navLogoNekoFaceB.classList.add('displayn');
			     navLogoNekoFaceW.classList.remove('displayn');
			     
			   	 menuDesplegable.classList.remove('dark_theme_nav');
			   	 footer.classList.remove('dark_theme_nav');
			     socialsFooterW.classList.add('displayn');
			     socialsFooterB.classList.remove('displayn');


			     linksFooter.classList.remove('colorb');

			     

				

				var i;
				for (i = 0; i < linefooter.length; i++) {
				    linefooter[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linefooterb.length; i++) {
				    linefooterb[i].classList.add('displayn');
				}

		  	}	

		  }
		}

		themeStyle.addEventListener("change", verifyCheckS, false);
		function verifyCheckS(){
		  const checked = themeStyle.checked;
		  console.log('checked is'+checked);
		  if(checked){
		  	if (localStorage.getItem('memeStyle') === 'false') {
		  		localStorage.setItem('memeStyle', 'true');
		  	}
		  	
		  	if (localStorage.getItem('darkTheme') === 'true') {
		  		
			    body.classList.remove('dark_theme');
			    body.classList.add('style_meme');
			    body.classList.add('colorw');
			    bgOne.classList.add('displayn');
			    bgTwo.classList.add('displayn');
			    

		  	}

		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		
		  		
			  	body.classList.add('style_meme');
			    body.classList.add('colorw');
			    bgOne.classList.add('displayn');
			    bgTwo.classList.add('displayn');
			    

			    var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.remove('displayn');
				}

		  	}


		  }else{

		  	if (localStorage.getItem('memeStyle') === 'true') {
		  		localStorage.setItem('memeStyle', 'false');
		  	}

		  	if (localStorage.getItem('darkTheme') === 'true') {
		  		

			  	body.classList.remove('style_meme');
			    body.classList.remove('colorw');
			  	body.classList.add('dark_theme');
			    bgOne.classList.remove('displayn');
			    bgTwo.classList.remove('displayn');
			    bgOne.classList.add('bg-oneB');
			    bgTwo.classList.add('bg-twoB');

			    

		  	}


		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		
		  		
			  	body.classList.remove('style_meme');
			    body.classList.remove('colorw');
			    bgOne.classList.remove('displayn');
			    bgTwo.classList.remove('displayn');
			    bgOne.classList.remove('bg-oneB');
			    bgTwo.classList.remove('bg-twoB');

			    var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.add('displayn');
				}

		  	}


		  }
		}
	}

	if (homeView) {

		const homeInfoTokenB = document.querySelector('.infotokenlogosb');
		const homeInfoTokenW = document.querySelector('.infotokenlogosw');
		const homeInfoSocialB = document.querySelector('.infosociallogob');
		const homeInfoSocialW = document.querySelector('.infosociallogow');
		const viewBGNekos = document.getElementById('viewbgnekos');

		verifyDarkTheme();

		function verifyDarkTheme(){

			if (localStorage.getItem('darkTheme') === "true") {
				themeColor.checked = true;
				verifyCheckT();
			}else{
				themeColor.checked = false;
				verifyCheckT();
			}
		}

		verifyStyleTheme();

		function verifyStyleTheme(){

			if (localStorage.getItem('memeStyle') === "true") {
				themeStyle.checked = true;
				verifyCheckS();
			}else{
				themeStyle.checked = false;
				verifyCheckS();
			}
		}


		themeColor.addEventListener("change", verifyCheckT, false);
		function verifyCheckT(){
		  const checked = themeColor.checked;
		  console.log('checked is'+checked);
		  if(checked){
		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		localStorage.setItem('darkTheme', 'true');
		  	}
		  	
		  	if (localStorage.getItem('memeStyle') === 'false') {

		  		body.classList.add('dark_theme');
			    bgOne.classList.add('bg-oneB');
			    bgTwo.classList.add('bg-twoB');

			    readMore.classList.remove('colorb');
			    readMore.classList.add('colorw');

			    header.classList.add('dark_theme_nav');
			    logoHome.classList.add('colorb');
			    nav.classList.add('dark_theme_nav');
			    navLogoNekoFaceB.classList.remove('displayn');
			    navLogoNekoFaceW.classList.add('displayn');
			    homeInfoTokenB.classList.remove('displayn');
			    homeInfoTokenW.classList.add('displayn');
			    homeInfoSocialB.classList.remove('displayn');
			    homeInfoSocialW.classList.add('displayn');
			    menuDesplegable.classList.add('dark_theme_nav');
			    footer.classList.add('dark_theme_nav');
			    socialsFooterB.classList.add('displayn');
			    socialsFooterW.classList.remove('displayn');

			    linksFooter.classList.add('colorb');

			    

			    var i;
				for (i = 0; i < btnStyle.length; i++) {
				    btnStyle[i].classList.add('dark_theme_nav');
				}

				var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linefooter.length; i++) {
				    linefooter[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linefooterb.length; i++) {
				    linefooterb[i].classList.remove('displayn');
				}

		  	}


		  	if (localStorage.getItem('memeStyle') === 'true') {


		  		readMore.classList.remove('colorb');
			    readMore.classList.add('colorw');
		  		header.classList.add('dark_theme_nav');
			    logoHome.classList.add('colorb');
			    nav.classList.add('dark_theme_nav');
			    navLogoNekoFaceB.classList.remove('displayn');
			    navLogoNekoFaceW.classList.add('displayn');
			    homeInfoTokenB.classList.remove('displayn');
			    homeInfoTokenW.classList.add('displayn');
			    homeInfoSocialB.classList.remove('displayn');
			    homeInfoSocialW.classList.add('displayn');
			    menuDesplegable.classList.add('dark_theme_nav');
			    footer.classList.add('dark_theme_nav');
			    socialsFooterB.classList.add('displayn');
			    socialsFooterW.classList.remove('displayn');

			    linksFooter.classList.add('colorb');

			    

			    var i;
				for (i = 0; i < btnStyle.length; i++) {
				    btnStyle[i].classList.add('dark_theme_nav');
				}

				var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linefooter.length; i++) {
				    linefooter[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linefooterb.length; i++) {
				    linefooterb[i].classList.remove('displayn');
				}
		  	}

		    


		  }else{

		  	if (localStorage.getItem('darkTheme') === 'true') {
		  		localStorage.setItem('darkTheme', 'false');
		  	}


		  	if (localStorage.getItem('memeStyle') === 'false') {


		  		 body.classList.remove('dark_theme');
			  	 bgOne.classList.remove('bg-oneB');
			     bgTwo.classList.remove('bg-twoB');

			     readMore.classList.remove('colorw');
			     readMore.classList.add('colorb');

			   	 header.classList.remove('dark_theme_nav');
			     logoHome.classList.remove('colorb');
			     nav.classList.remove('dark_theme_nav');
			     navLogoNekoFaceB.classList.add('displayn');
			     navLogoNekoFaceW.classList.remove('displayn');
			     homeInfoTokenB.classList.add('displayn');
			     homeInfoTokenW.classList.remove('displayn');
			     homeInfoSocialB.classList.add('displayn');
			     homeInfoSocialW.classList.remove('displayn');
			   	 menuDesplegable.classList.remove('dark_theme_nav');
			   	 footer.classList.remove('dark_theme_nav');
			     socialsFooterW.classList.add('displayn');
			     socialsFooterB.classList.remove('displayn');


			     linksFooter.classList.remove('colorb');

			     
			     var i;
				for (i = 0; i < btnStyle.length; i++) {
				    btnStyle[i].classList.remove('dark_theme_nav');
				}

				var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.remove('displayn');
				}
				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linefooter.length; i++) {
				    linefooter[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linefooterb.length; i++) {
				    linefooterb[i].classList.add('displayn');
				}

		  	}

		  	if (localStorage.getItem('memeStyle') === 'true') {

			   	 header.classList.remove('dark_theme_nav');
			     logoHome.classList.remove('colorb');
			     nav.classList.remove('dark_theme_nav');
			     navLogoNekoFaceB.classList.add('displayn');
			     navLogoNekoFaceW.classList.remove('displayn');
			     homeInfoTokenB.classList.add('displayn');
			     homeInfoTokenW.classList.remove('displayn');
			     homeInfoSocialB.classList.add('displayn');
			     homeInfoSocialW.classList.remove('displayn');
			   	 menuDesplegable.classList.remove('dark_theme_nav');
			   	 footer.classList.remove('dark_theme_nav');
			     socialsFooterW.classList.add('displayn');
			     socialsFooterB.classList.remove('displayn');


			     linksFooter.classList.remove('colorb');

			     
			     var i;
				for (i = 0; i < btnStyle.length; i++) {
				    btnStyle[i].classList.remove('dark_theme_nav');
				}

				var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.remove('displayn');
				}
				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linefooter.length; i++) {
				    linefooter[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linefooterb.length; i++) {
				    linefooterb[i].classList.add('displayn');
				}
		  	}

		  }
		}//

		themeStyle.addEventListener("change", verifyCheckS, false);
		function verifyCheckS(){
		  const checked = themeStyle.checked;
		  console.log('checked is'+checked);
		  if(checked){
		  	if (localStorage.getItem('memeStyle') === 'false') {
		  		localStorage.setItem('memeStyle', 'true');
		  	}
		  	
		  	if (localStorage.getItem('darkTheme') === 'true') {
		  		
			    body.classList.remove('dark_theme');
			    body.classList.add('style_meme');
			    body.classList.add('colorw');
			    bgOne.classList.add('displayn');
			    bgTwo.classList.add('displayn');
			    viewBGNekos.classList.remove('displayn');
			    

		  	}

		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		
		  		readMore.classList.remove('colorb');
			    readMore.classList.add('colorw');
			  	body.classList.add('style_meme');
			    body.classList.add('colorw');
			    bgOne.classList.add('displayn');
			    bgTwo.classList.add('displayn');
			    viewBGNekos.classList.remove('displayn');
			    

			    var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.add('displayn');
				}

				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.remove('displayn');
				}

		  	}


		  }else{

		  	if (localStorage.getItem('memeStyle') === 'true') {
		  		localStorage.setItem('memeStyle', 'false');
		  	}

		  	if (localStorage.getItem('darkTheme') === 'true') {
		  		
			  	body.classList.remove('style_meme');
			    body.classList.remove('colorw');
			  	body.classList.add('dark_theme');
			    bgOne.classList.remove('displayn');
			    bgTwo.classList.remove('displayn');
			    bgOne.classList.add('bg-oneB');
			    bgTwo.classList.add('bg-twoB');
			    viewBGNekos.classList.add('displayn');


			    

		  	}


		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		
		  		readMore.classList.remove('colorw');
			    readMore.classList.add('colorb');
			  	body.classList.remove('style_meme');
			    body.classList.remove('colorw');
			    bgOne.classList.remove('displayn');
			    bgTwo.classList.remove('displayn');
			    bgOne.classList.remove('bg-oneB');
			    bgTwo.classList.remove('bg-twoB');
			    viewBGNekos.classList.add('displayn');

			    var i;
				for (i = 0; i < line.length; i++) {
				    line[i].classList.remove('displayn');
				}

				var i;
				for (i = 0; i < linew.length; i++) {
				    linew[i].classList.add('displayn');
				}

		  	}


		  }
		}


	}

	



const lineProjects = document.getElementById('lineProjects');

