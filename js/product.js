$app = angular.module( "productApp", [] );
$app.controller( "myCtrl", function( $scope ){

	$scope.products = ['Apple', 'Bread', 'Cake'];
	$scope.addItem = function(){

		$scope.errorText = "";
		if (!$scope.addMe) {
			$scope.errorText = "Please add item.";
			return;
		}
		if ($scope.products.indexOf( $scope.addMe ) == -1 ){
			$scope.products.push( $scope.addMe );
			$scope.addMe = "";
		}else{
			$scope.errorText = "This item is already exists."
		}
	}
	$scope.removeItem = function( x ){

		$scope.products.splice( x, 1 );
		$scope.errorText = "Item deleted.";
	}
} )