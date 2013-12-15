Videos = new Meteor.Collection('videos');
Comments = new Meteor.Collection('comments');

Comments.allow({
	insert: function(userId, doc){
		return !! userId;
	}
});