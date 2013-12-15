Meteor.subscribe("comments");

Template.videoDiscussion.helpers({
	comments: function(){
		return Comments.find({videoId: this._id}, {sort: {'$natural': -1}});
	}
});

Template.videoDiscussion.events({
	'click #submit': function(e){
		e.preventDefault();

		var message = $('#message').val();

		var comment = {
			videoId: this._id,
			message: message
		}

		Comments.insert(comment);
	}
});