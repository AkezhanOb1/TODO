
$(".fa-plus").on('click', function() {
	$('#newEl').slideToggle(400)
})

$(document).delegate('div input', 'keypress', function(event) {
	let value = $("div input").val()
	if(event.which === 13) {
		$("#elements").append("<span><i class='fas fa-trash-alt'></i><li>" + value + "</li></span>")
		$("div input").val("")
		$('#elements span:nth-child(2n)').addClass('greyElement')
	}
})


$('#elements').on('click', 'li', function() {
	$(this).toggleClass('doneElements')
}) 

$('#elements').on('click', 'i', function() {
	$(this).parent().fadeOut(300, function() {
		$(this).remove()
		$('span').removeClass('greyElement')
		$('#elements span:nth-child(2n)').addClass('greyElement')
	})
})

$('#elements').on('mouseenter', 'span', function() {
	 $(this).children('i').fadeIn( 600 )
}).on('mouseleave', 'span', function() {
	 $(this).children('i').fadeOut( 300 )
})

