app.directive('about', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/about.html' 
  }; 
});
