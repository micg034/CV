app.directive('ervaringApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/ervaring.html' 
  }; 
});
