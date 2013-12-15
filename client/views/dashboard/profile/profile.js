Template.profile.events({
	'click #submit': function(e){
		e.preventDefault();
		var form = $('#profile');
		var name = form.find('#name').val();

		var currentUser = Meteor.user();
		if (currentUser != null){
			// alert(name);
			Meteor.users.update({ _id: currentUser._id },
				{ $set: { "profile.name": name }
			});

		} else {
			alert('how and why did you do that');
		}
	}
});