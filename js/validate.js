
	function doLimitText(v){
		len  = v.length;
		if(len>355){
			k = v.substr(0,355);
			document.contactForm.message.value = k;
			alert("Your message should not be more than 355 char");
	}
	}
	function doLimitName(v){
		len  = v.length;
		if(len>30){
			m = v.substr(0,30);
			document.contactForm.name.value = m;
			alert("Your Name must be less than 30 char");
	}
	}
