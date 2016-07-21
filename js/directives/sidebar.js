app.directive('sidebar', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'sidebar.html' 
  }; 
});
