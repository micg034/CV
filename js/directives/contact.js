app.directive('contactApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/contact.html' 
  }; 
});
