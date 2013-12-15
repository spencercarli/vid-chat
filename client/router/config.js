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
  return this.route('dashboard', {
    path: '/dashboard'
  });
});
