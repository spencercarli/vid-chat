Template.videoSubmit.events({
	'click #submit': function(e){
		e.preventDefault();

		var currentUser = Meteor.user();

		if (currentUser != null){
			var form = $('#new-video-form');
			var video = {
				userId: currentUser._id,
				title: form.find('#title').val(),
				url: form.find('#videoURL').val()
			}
			
			video._id = Videos.insert(video);
			Router.go('videoDiscussion', video);
		} else {
			console.log("you shouldn't be doing that.")
		}
	}
});