Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  }
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('dashboard', {
    path: '/dashboard'
  });

  this.route('videoSubmit', {
    path: '/dashboard/submit'
  });

  this.route('profile', {
    path: '/profile'
  });

  this.route('videoDiscussion', {
    path: '/dashboard/:_id',
    data: function() { 
      return Videos.findOne(this.params._id); 
    }
  });  
});
