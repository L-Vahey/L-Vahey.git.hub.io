function Start() {

$('#maker-on-hover').on({

mouseenter: function () { $('#maker-image-swap').prop('src', 'gifs/makergreybackground.gif') },
mouseleave: function () { $('#maker-image-swap').prop('src', 'img/maker2.png') }

  });
}

function Start2() {
	
$('#scribbler-on-hover').on({

mouseenter: function () { $('#scribbler-image-swap').prop('src', 'gifs/scribbler.gif') },
mouseleave: function () { $('#scribbler-image-swap').prop('src', 'img/scribbler.png') }

  });
}

$(Start);
$(Start2);