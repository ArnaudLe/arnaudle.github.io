$(document).ready(function() 
{
	/*** Smooth scroll pour les clics sur le nav ***/
	$('.scrollTo').on('click', function()
	{ // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate({scrollTop: $(page).offset().top}, speed); // Go
		return false;
	});


	/*** Hilight la section active sur le nav ***/
	var sections = $('section');
	var nav = $('nav');
	var nav_height = nav.outerHeight();
	
	$(window).on('scroll', function () 
	{
		var cur_pos = $(this).scrollTop();
	
		sections.each(function()
		{
			var top = $(this).offset().top - nav_height;
			var bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom)
			{
				nav.find('li').removeClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"] li').addClass('active');

				// Gere le cas de la section #centres
				if($(window).scrollTop() + $(window).height() == $(document).height()) 
				{
					nav.find('li').removeClass('active');
       				nav.find('a[href="#centres"] li').addClass('active');
   				}
			}		
	  	});
	});


	/*** Animation des skills bar lorsque l'on passe sur la section competences ***/
	$(window).on('scroll', function()
	{
		var competencesDiv = $('#competences');
	  	var winT = $(window).scrollTop();
	    var winH = $(window).height();
	    var skillsT = competencesDiv.offset().top;

		if (winT + winH > (skillsT + (skillsT/10)))
		{
			$('.skill-bar').each(function()
			{
				$(this).find('.count-bar').animate({width:$(this).attr('data-percent')}, 2000);
			});
		}
	});
});

