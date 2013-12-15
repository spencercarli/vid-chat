Template.videoSubmit.events({
	'click #submit': function(e){
		e.preventDefault();

		var currentUser = Meteor.user();

		if (currentUser != null){
			var video = {
				userId: currentUser._id,
				title: $('#title').val(),
				url: $('#videoURL').val()
			}
			
			video._id = Videos.insert(video);
			Router.go('videoDiscussion', video);
		} else {
			console.log("you shouldn't be doing that.")
		}
	}
});