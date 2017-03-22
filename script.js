$(document).ready(function(){
	
	$('#btnSearch').click(function(){

		$("#movieImages").empty();	
		var movie = document.getElementById('search').value;

		$.getJSON('https://www.omdbapi.com/?s='+ encodeURI(movie)).then(function(response){

			for(i=0; i<response.Search.length; i++)
			{

				if(response.Search[i].Poster === "N/A")
				{
					var images = '<div class = "col-sm-4"><div class ="thumbnail"><img src = "No-image-available.jpg"  alt="Check" style="height:300px;width:100%" ><div class = "caption"><b>'+response.Search[i].Title+'<p>Year: '+response.Search[i].Year+'</b></div></div></div>';	
				}

				else{
					var images = '<div class = "col-sm-4"><div class ="thumbnail"><img src ='+ response.Search[i].Poster + 'alt="Check" style="height:300px;width:100%" ><div class = "caption"><b>'+response.Search[i].Title+'<p>Year: '+response.Search[i].Year+'</b></div></div></div>';	
					}
					$("#movieImages").append(images);
			}
		});
	});
		
});