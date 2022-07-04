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

	var btnStyle = document.querySelectorAll('#btn_style');
	const header = document.getElementById('navheader');
	const logoHome = document.getElementById('logohome');
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
		  		
			  	body.classList.add('dark_theme', 'dark_theme_bg');

			    
			    header.classList.add('dark_theme_nav');
			    logoHome.classList.add('colorb');
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
			     
		  		 body.classList.remove('dark_theme', 'dark_theme_bg');

			   	 header.classList.remove('dark_theme_nav');
			     logoHome.classList.remove('colorb');
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
		  		
			    body.classList.remove('dark_theme', 'dark_theme_bg');
			    body.classList.add('style_meme');
			    body.classList.add('colorw');			    

		  	}

		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		
		  		
			  	body.classList.add('style_meme');
			    body.classList.add('colorw');
			    

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
			  	body.classList.add('dark_theme', 'dark_theme_bg');


			    

		  	}


		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		
		  		
			  	body.classList.remove('style_meme');
			    body.classList.remove('colorw', 'dark_theme_bg');

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

		  		body.classList.add('dark_theme', 'dark_theme_bg');

			    readMore.classList.remove('colorb');
			    readMore.classList.add('colorw');

			    header.classList.add('dark_theme_nav');
			    logoHome.classList.add('colorb');
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


		  		 body.classList.remove('dark_theme', 'dark_theme_bg');

			     readMore.classList.remove('colorw');
			     readMore.classList.add('colorb');

			   	 header.classList.remove('dark_theme_nav');
			     logoHome.classList.remove('colorb');
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
		  		
			    body.classList.remove('dark_theme', 'dark_theme_bg');
			    body.classList.add('style_meme');
			    body.classList.add('colorw');
			    viewBGNekos.classList.remove('displayn');
			    

		  	}

		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		
		  		readMore.classList.remove('colorb');
			    readMore.classList.add('colorw');
			  	body.classList.add('style_meme');
			    body.classList.add('colorw');
			    body.classList.remove('dark_theme_bg');
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
			  	body.classList.add('dark_theme', 'dark_theme_bg');
			    viewBGNekos.classList.add('displayn');


			    

		  	}


		  	if (localStorage.getItem('darkTheme') === 'false') {
		  		
		  		readMore.classList.remove('colorw');
			    readMore.classList.add('colorb');
			  	body.classList.remove('style_meme');
			    body.classList.remove('colorw', 'dark_theme_bg');
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


