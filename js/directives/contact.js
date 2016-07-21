app.directive('contact', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/contact.html' 
  }; 
});
