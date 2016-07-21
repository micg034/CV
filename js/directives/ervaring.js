app.directive('ervaring', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/ervaring.html' 
  }; 
});
