Meteor.subscribe("comments");

Template.videoDiscussion.helpers({
	comments: function(){
		return Comments.find({videoId: this._id});
	}
})