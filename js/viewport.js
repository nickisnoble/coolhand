

    $(window).resize(function () {
		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			y = w.innerHeight || e.clientHeight || g.clientHeight;
		$('section').css('height', y);
    });
    
