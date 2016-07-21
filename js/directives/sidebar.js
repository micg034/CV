app.directive('sidebarApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/sidebar.html' 
  }; 
});
