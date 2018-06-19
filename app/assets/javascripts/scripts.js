
	$(window).load(function(){
    setTimeout(function() {
      $('.loader').fadeOut();
      $('body').css('overflowY', 'auto'); 
    }, 3000);
	});

$(document).ready(function() {
	// let recall = sessionStorage.getItem("memory");
	
 //    $.ajax({
	// 	type:'DELETE',
	// 	url:'/inputs/0',
	// 	data:{name:recall},
	// 	success:function(data){

	//    	}
	// });
	console.log('u');
	sessionStorage.clear();


	let = loadPadawan = function() {
		let recall = sessionStorage.getItem("memory");
		// console.log(recall);
		$.ajax({
			type: 'GET',
			url: '/inputs',
			dataType: 'json',
			data:{name:recall},
			success: function (data) {
				if (recall === null) {
    					console.log('nothing Box1');
    				}
    			else {
    				console.log('yes box1');
					let array = [];
					for (var i=0 ; i < data.length ; i++){
						if(data[i]["name"] === recall){
							let toTranslate = '<p id="padawanStuff">Padawan:&nbsp;'+recall+'</p>'
							$('#padawanStuff').remove();
    						$('#beauty2').append(toTranslate);
    						return false;
							}
						else {
							console.log('not there');
							}
						}
					}
			},
			error: function(data) {
    			console.log('error box1');
			}
		});
	}


	let = loadYoda = function() {
		console.log('uhOh')
		let recall = sessionStorage.getItem("memory");
		// console.log(recall);
		if (recall === null) {
    					console.log('nothing box2');
    				}
    	else {
			$.ajax({
				type: 'GET',
				url: '/inputs',
				dataType: 'json',
				data:{name:recall},
				success: function (data) {
      				console.log('yes box2');
			
					$.getJSON("//api.funtranslations.com/translate/yoda.json?text=" + recall, function( data ) {
					let toTranslate2 = '<p id="yodaStuff">Yoda:&nbsp;'+data.contents.translated+'</p>'
					$('#yodaStuff').remove();
      		 		$('#beauty2Box2').append(toTranslate2);
   					});
    			// let translate = '<p>'+toTranslate+'</p>'
    			// $('#beauty2Box2').append(translate);
    			// console.log('totalRecall');
				},
				error: function(data) {
    				console.log('errorBox2');
				}
			});
		}
	}
});