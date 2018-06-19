
let box1 = createReactClass({

	getInitialState: function() {
		return {
			newMessage: ''
		}
	},


	render: function() {

		return (
			<div className="chat-container">
				<div className="messages" id="beauty2">
					
				</div>
				<div className="message-input">
					<input 
						type="text"
						placeholder="Type Here Young Padawan Learner.."
						value={this.state.newMessage}
						onChange={this.typeMessages}
						onKeyPress={this.enterMessage}
						id="beauty" 
					/>
				</div>
				<div className="message-button">
					<button onClick={this.submitMessage}>Submit</button>
				</div>

			</div>
		);
	},


	typeMessages: function(event) {
		this.setState({
			newMessage: event.target.value
		});
	},

	submitMessage: function() {
		if(this.state.newMessage.length > 0){
			let words = this.state.newMessage;
			// let languageSelect = $('.language').find(':selected').val();
			// console.log(words);
			sessionStorage.setItem("memory", words);
			let deleteRecall = sessionStorage.getItem("memory");



      		$.ajax({
	    		type:'POST',
	    		url:'/inputs',
	    		data: JSON.stringify({name:words}),
	    		contentType: 'application/json',
	   				success:function(data){
	   					loadPadawan();
	   					loadYoda();
	    			}
			});

			this.setState({
				newMessage: ''
			});
		}

	},

	enterMessage: function(event) {
		if(event.charCode === 13 && this.state.newMessage.length > 0){
			let words = this.state.newMessage;
			// let languageSelect = $('.language').find(':selected').val();
			// console.log(words);
			sessionStorage.setItem("memory", words);
			let deleteRecall = sessionStorage.getItem("memory");



      		$.ajax({
	    		type:'POST',
	    		url:'/inputs',
	    		data: JSON.stringify({name:words}),
	    		contentType: 'application/json',
	   				success:function(data){
	    			}
			});

			this.setState({
				newMessage: ''
			});
		}
	},


	componentDidMount: function() {
		console.log('mounted1');
		$('#beauty').focus();
	},

	componentDidUpdate: function() {
		console.log('updated1');
		$('#beauty').focus();
		document.getElementById("beauty2").scrollTop = document.getElementById("beauty2").scrollHeight;
	},
});