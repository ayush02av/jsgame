const loaderTime = 3;
setTimeout(function(){
	document.getElementById('loader').style.display = "none";
	document.getElementById('root').style.display = "block";
}, loaderTime*1000);

function redirect(url, newTab=false){
	if(newTab){
		window.open(url);
	}else{
		window.location = url;
	}
}

$("#header-container").load("/components/header.html");
$("#footer-container").load("/components/footer.html");