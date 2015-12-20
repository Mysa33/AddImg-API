//addImgApi

//Actualiser la page
	
	$( "#BTN2").on( "click", function() {
		alert("Permet d'actualiser votre API");
		localStorage.clear();
		location.reload();
			});
		
			
//Ajouter et supprimer des images
	
	$( "#BTN1").on( "click", function() {
    		
			
		var UrlSaisie= $('input').val();
		var compte = 0;//Nombre d'URLs
		var historique = [];//historique des URLs
		historique[compte]=UrlSaisie;
		for( compte = 0; compte<localStorage.length; compte++)
		//var A= compte++;
		//alert("La valeur de A est"+A+"");		
		
		//Varibales classe et ID
		var IdBtn = "bt" +compte+"eff";
		var ClassImage = "cl" +compte +"img";
	        		
		
		
		//Le contenu à ajouter
		var Contenu="<li><img class="+ClassImage+" src="+UrlSaisie+"/><span><button id='"+ IdBtn+"'>Supprimer</button></span><span><i class='fa fa-check-square-o blue'></i>L'url de votre image est :"+UrlSaisie+"</span></li>";
			
		
		$('.globale ul').append(Contenu);
		$( "img" ).addClass( "img-thumbnail" );//On ajoute à toutes les images la classe Bootstrap .img-tumbnail
		$( "button#bt0eff" ).addClass( "btn-primary" );//On ajoute à toutes les images la classe Bootstrap .btn-primary
			
		$("button #bt0eff ").on("click", function() {
        //alert("Votre image va être supprimée" );
		$(this).parent().parent().hide(1500,'swing');
				
    	});

	compte++;//Le nombre d'URLs saisies		
			
});		
	

