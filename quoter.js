$(document).ready(function(){

	var quoter = [
		{
			"quote": "Never unterrupt your enemy when he is making a mistake.",
			"author": "Napoleon Boneparte",
			"color": "#16a085"
		},
		{
			"quote": "Mother is mercy, is this the end of Rico?",
			"author": "Little Caesar",
			"color": "#27ae60"
		},
		{
			"quote": "Whether you think that your can, or that you can't, you are usually right.",
			"author": "Henry Ford",
			"color": "#2c3e50"
		},
		{
			"quote": "Dancing is silent poetry.",
			"author": "Simonides",
			"color": "#f39c12"
		},
		{
			"quote": "I find that the harder I work, the more luck I seem to have.",
			"author": "Thomas Jefferson",
			"color": "#e74c3c"
		},
		{
			"quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
			"author": "Sherlock Holmes",
			"color": "#9b59b6"
		},
		{
			"quote": "If you build it, hew will come.",
			"author": "Field of dreams",
			"color": "#FB6964"
		},
		{
			"quote": "Political correctness is tyranny with manners.",
			"author": "Charlton Heston",
			"color": "#342224"
		},
		{
			"quote": "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.",
			"author": "Bjarne Stroustrup",
			"color": "#BDBB99"
		},
		{
			"quote": "May the force be with you.",
			"author": "Star Wars",
			"color": "#73A857"
		}
	];

	var dbquotes = '<i class="fa fa-quote-left"></i>';

	$("button").click(function(){
		var random = Math.floor((Math.random() * 10) + 1) - 1;

		$("#quote").animate({ opacity: 0}, 500, function(){
			$(this).toggleClass("curve");
			$(this).animate({ opacity: 1}, 500);
			$("#text").html(dbquotes + quoter[random].quote);
			$("#author").html("- " + quoter[random].author);
		});
		
		$("body").animate({backgroundColor: quoter[random].color}, 1000);
		$("#text, #author").animate({color: quoter[random].color}, 1000);
		$("button").animate({backgroundColor: quoter[random].color}, 1000);
	});

});