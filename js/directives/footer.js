app.directive('footerApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/footer.html' 
  }; 
});
