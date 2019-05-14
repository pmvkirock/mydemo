$('.dropdown-container').on('click', '#filter-button1', function() {
		var rgbcolor = $(this).css('backgroundColor');
		var color = hexc(rgbcolor);
		if(color == "#2c3576"){
			$(this).css("background-color", "#3581df");
			$( '#x1' ).removeClass( "fa-caret-down" ).addClass( "fa-caret-right" );
		}
		if(color == "#3581df"){
			$(this).css("background-color", "#2c3576");
			$( '#x1' ).removeClass( "fa-caret-right" ).addClass( "fa-caret-down" );
		}
		$(this).siblings('#dropdown-list1').toggle();
	})
	.on('change', '[type="checkbox"]', function() {
        var container = $(this).closest('.dropdown-container');
        var numChecked = container. find('[type="checkbox"]:checked').length;
    	container.find('.quantity').text(numChecked || 'Any');
	});
	
$('.dropdown-container').on('click', '#filter-button2', function() {
		var rgbcolor = $(this).css('backgroundColor');
		var color = hexc(rgbcolor);
		if(color == "#2c3576"){
			$(this).css("background-color", "#3581df");
			$( '#x2' ).removeClass( "fa-caret-down" ).addClass( "fa-caret-right" );
		}
		if(color == "#3581df"){
			$(this).css("background-color", "#2c3576");
			$( '#x2' ).removeClass( "fa-caret-right" ).addClass( "fa-caret-down" );
		}
		$(this).siblings('#dropdown-list2').toggle();
	})
	.on('change', '[type="checkbox"]', function() {
        var container = $(this).closest('.dropdown-container');
        var numChecked = container. find('[type="checkbox"]:checked').length;
    	container.find('.quantity').text(numChecked || 'Any');
	});
	
$('.dropdown-container').on('click', '#filter-button3', function() {
		var rgbcolor = $(this).css('backgroundColor');
		var color = hexc(rgbcolor);
		if(color == "#2c3576"){
			$(this).css("background-color", "#3581df");
			$( '#x3' ).removeClass( "fa-caret-down" ).addClass( "fa-caret-right" );
		}
		if(color == "#3581df"){
			$(this).css("background-color", "#2c3576");
			$( '#x3' ).removeClass( "fa-caret-right" ).addClass( "fa-caret-down" );
		}
		$(this).siblings('#dropdown-list3').toggle();
	})
	.on('change', '[type="checkbox"]', function() {
        var container = $(this).closest('.dropdown-container');
        var numChecked = container. find('[type="checkbox"]:checked').length;
    	container.find('.quantity').text(numChecked || 'Any');
	});
	
$('.dropdown-container').on('click', '#filter-button4', function() {
		var rgbcolor = $(this).css('backgroundColor');
		var color = hexc(rgbcolor);
		if(color == "#2c3576"){
			$(this).css("background-color", "#3581df");
			$( '#x4' ).removeClass( "fa-caret-down" ).addClass( "fa-caret-right" );
		}
		if(color == "#3581df"){
			$(this).css("background-color", "#2c3576");
			$( '#x4' ).removeClass( "fa-caret-right" ).addClass( "fa-caret-down" );
		}
		$(this).siblings('#dropdown-list4').toggle();
	})
	.on('change', '[type="checkbox"]', function() {
        var container = $(this).closest('.dropdown-container');
        var numChecked = container. find('[type="checkbox"]:checked').length;
    	container.find('.quantity').text(numChecked || 'Any');
	});

$('.dropdown-container').on('click', '#filter-button5', function() {
		var rgbcolor = $(this).css('backgroundColor');
		var color = hexc(rgbcolor);
		if(color == "#2c3576"){
			$(this).css("background-color", "#3581df");
			$( '#x5' ).removeClass( "fa-caret-down" ).addClass( "fa-caret-right" );
		}
		if(color == "#3581df"){
			$(this).css("background-color", "#2c3576");
			$( '#x5' ).removeClass( "fa-caret-right" ).addClass( "fa-caret-down" );
		}
		$(this).siblings('#dropdown-list5').toggle();
	})
	.on('change', '[type="checkbox"]', function() {
        var container = $(this).closest('.dropdown-container');
        var numChecked = container. find('[type="checkbox"]:checked').length;
    	container.find('.quantity').text(numChecked || 'Any');
	});
	
$('.dropdown-container').on('click', '#filter-button6', function() {
		var rgbcolor = $(this).css('backgroundColor');
		var color = hexc(rgbcolor);
		if(color == "#2c3576"){
			$(this).css("background-color", "#3581df");
			$( '#x6' ).removeClass( "fa-caret-down" ).addClass( "fa-caret-right" );
		}
		if(color == "#3581df"){
			$(this).css("background-color", "#2c3576");
			$( '#x6' ).removeClass( "fa-caret-right" ).addClass( "fa-caret-down" );
		}
		$(this).siblings('#dropdown-list6').toggle();
	})
	.on('change', '[type="checkbox"]', function() {
        var container = $(this).closest('.dropdown-container');
        var numChecked = container. find('[type="checkbox"]:checked').length;
    	container.find('.quantity').text(numChecked || 'Any');
	});
	
	var internalfilter = [
		{ name: 'After Sales', abbreviation: 'AS'},
		{ name: 'Sales', abbreviation: 'S'},
		{ name: 'VAS', abbreviation: 'VAS'}
	];

	var stateTemplate = _.template(
		'<li>' +
			'<input name="<%= abbreviation %>" type="checkbox">' +
			'<label for="<%= abbreviation %>"><%= capName %></label>' +
		'</li>'
	);

	_.each(internalfilter, function(s) {
		s.capName = s.name;
		$('#filter-ul1').append(stateTemplate(s));
	});
	
	_.each(internalfilter, function(s) {
		s.capName = s.name;
		$('#filter-ul2').append(stateTemplate(s));
	});
	
	_.each(internalfilter, function(s) {
		s.capName = s.name;
		$('#filter-ul3').append(stateTemplate(s));
	});
	
	_.each(internalfilter, function(s) {
		s.capName = s.name;
		$('#filter-ul4').append(stateTemplate(s));
	});
	
	_.each(internalfilter, function(s) {
		s.capName = s.name;
		$('#filter-ul5').append(stateTemplate(s));
	});
	
	_.each(internalfilter, function(s) {
		s.capName = s.name;
		$('#filter-ul6').append(stateTemplate(s));
	});
	
	function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    var color = '#' + parts.join('');
	return color;
	}
	