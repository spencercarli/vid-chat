Meteor.subscribe("videos");

Template.dashboard.helpers({
  video: function(){
    return Videos.find();
  }
});