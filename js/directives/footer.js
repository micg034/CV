app.directive('footer', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'footer.html' 
  }; 
});
