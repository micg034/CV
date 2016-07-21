app.directive('404', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: '404.html' 
  }; 
});
