$( "#enter" ).on( "submit", function(e) {
				e.preventDefault();

				var errors = 0;

				var username = $('#username').val();
				if (username === '') {
					$('.validation').eq(0).html('<img src ="img/invalid.png">');
					errors++;
				} else {
					$('.validation').eq(0).html('<img src ="img/valid.png">');
				}
				
				// var email = $('#email').val();
				// if (email === '') {
				// 	$('.validation').eq(1).html('<img src ="img/invalid.png">');
				// 	errors++;
				// } else {
				// 	$('.validation').eq(1).html('<img src ="img/valid.png">');
				// }

				var pass = $('#pass').val();
				if (pass === '') {
					$('.validation').eq(1).html('<img src ="img/invalid.png">');
					errors++;
				} else {
					$('.validation').eq(1).html('<img src ="img/valid.png">');
				}

				// var pass1 = $('#pass1').val();
				// if (pass1 === '' || pass1 !== pass) {
				// 	$('.validation').eq(3).html('<img src ="img/invalid.png">');
				// 	errors++;

				// } else {
				// 	$('.validation').eq(3).html('<img src ="img/valid.png">');
				// }

		});

		$( '#cancel' ).click(function(e) {
			$( ".validation" ).each(function( index ) {
 				$(this).html('');
			});
		});