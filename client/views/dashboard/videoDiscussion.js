Meteor.subscribe("comments");

Template.videoDiscussion.helpers({
	comments: function(){
		return Comments.find({videoId: this._id}, {sort: {'$natural': -1}});
	}
});

Template.videoDiscussion.events({
	'click #submit': function(e){
		e.preventDefault();

		var currentUser = Meteor.user();
		
		if (currentUser != null){
			var form = $('#comment-form');
			var mess = form.find('#message');
			var message = mess.val();
			mess.val("");

			var comment = {
				videoId: this._id,
				userId: currentUser._id,
				message: message
			}

			Comments.insert(comment);
		} else {
			alert('Yo dawg you\'re not signed in.');
		}
	}
});