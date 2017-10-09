angular.module("myExp").directive("main", [ "$state", function ($state){
  return {
   restrict:"E",
   templateUrl: 'mainView.html'
 }
}]
).directive("fornav", [ "$state", function ($state){
  return {
   restrict:"E",
   replace:true,
   templateUrl:'navView.html'
 }
}]
).directive("dogmain", [ "$state",  function ($state){
  return {
   restrict:"E",
   replace:true,
   scope: false,
   templateUrl:'dog_main.html'
 }
}]
).directive("flexi", [ "$state",  function ($state){
  return {
   restrict:"E",
   replace:true,
   templateUrl:'flexi.html',
    scope: false,
 }
}]
).directive("flexitov", [ "$state",  function ($state){
  return {
   restrict:"E",
   replace:true,
   scope: false,
   templateUrl:'flexi-tovari.html',
 }
}]
).directive("flexione", [ "$state", function ($state){
  return {
   restrict:"E",
   replace:true,
  scope: false,
   templateUrl:'flexi_one.html',
   /*controller: function($scope){
     $scope.addtocart = function (ice) {
       $scope.ice = ice;
       console.log($scope.ice);
     }
   }*/
 }
}]
).directive("cart", [ "$state", function ($state){
  return {
   restrict:"E",
   replace:true,
   scope: false,
   templateUrl:'cart.html',
   /*controller: function($scope){
     $scope.addtocart = function (ice) {
       $scope.ice = ice;
       console.log($scope.ice);
     }
   }*/
 }
}]
)
