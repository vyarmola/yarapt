$(function() {
	$('form input[type=submit]').click(function(e) {
		e.preventDefault();
		const form = $('form')[0];
		$.ajax({
			url: "https://formspree.io/yarvas@googlemail.com",
			method: "POST",
			data: {
				userName: $('#user-name').val(),
				userEmail: $('#user-email').val(),
				userTel: $('#user-tel').val(),
				userText: $('#user-textarea').val(),
			},
			dataType: "json"
		}).done(function() {
			form.reset();
		});
	});
});