$( "#recovery_red_start" ).on( "submit", function(e) {
				e.preventDefault();

				var errors = 0;

				var email = $('#email').val();
				if (email === '') {
					$('.validation').eq(0).html('<img src ="img/invalid.png">');
					errors++;
				} else {
					$('.validation').eq(0).html('<img src ="img/valid.png">');
				}

		});

		$( '#cancel' ).click(function(e) {
			$( ".validation" ).each(function( index ) {
 				$(this).html('');
			});
		});