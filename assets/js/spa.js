angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope', function ($scope){

  io.socket.get('/emoji', function (data){
    $scope.emojis = data;
    $scope.$apply();
  });

  io.socket.on('emoji', function (event){
    switch (event.verb) {
      case 'created':
        $scope.emojis.push(event.data);
        $scope.$apply();
        break;
    }
  });

}]);
