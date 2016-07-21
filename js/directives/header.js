app.directive('headerApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/header.html' 
  }; 
});
