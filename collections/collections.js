Videos = new Meteor.Collection('videos');

Videos.allow({
	insert: function(userId, doc){
		return !! userId;
	}
});

Comments = new Meteor.Collection('comments');

Comments.allow({
	insert: function(userId, doc){
		return !! userId;
	}
});