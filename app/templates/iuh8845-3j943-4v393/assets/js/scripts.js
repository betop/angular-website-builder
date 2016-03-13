$(document).ready(function () {
	 'use strict';
	
	var contactURL = 'http://originalthemes.co/caravan/contact-booking.php'

	$('.question').each(function () {
		var tis = $(this),
			state = false,
			answer = tis.next('.answer').slideUp();
		tis.click(function () {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active', state);
		});
	});

	$('.header-navigation > li').bind('mouseover', openSubMenu);
	$('.header-navigation > li').bind('mouseout', closeSubMenu);

	function openSubMenu() {
		$(this).find('ul').css('visibility', 'visible');
	};

	function closeSubMenu() {
		$(this).find('ul').css('visibility', 'hidden');
	};

	$(".header-navigation").tinyNav({
		active: 'selected', // String: Set the "active" class
		header: 'Navigation', // String: Specify text for "header" and show header instead of the active item
		indent: '- ', // String: Specify text for indenting sub-items
	});

	$('#calendar-input').glDatePicker(
		{
		showAlways: true,
			  container: $('.calendar'),
			 dowOffset: 1,
			    onClick: function(target, cell, date, data) {
					$(location).attr('href', contactURL + '?date=' + date.toLocaleDateString())
        target.val(date.getFullYear() + ' - ' +
                    date.getMonth() + ' - ' +
                    date.getDate());

        if(data != null) {
            alert(data.message + '\n' + date);
        }
    }
		} );
	
});