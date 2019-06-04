(function() {
	var multiplex = Reveal.getConfig().multiplex;
	var socketId = multiplex.id;
	var socket = io.connect(multiplex.url);
  
  Reveal.addEventListener( 'vote', (data) => {
		var messageData = {
			vote: data.detail,
			secret: multiplex.secret,
			socketId: multiplex.id
		};
		socket.emit( 'multiplex-statechanged', messageData );
	});
}());
