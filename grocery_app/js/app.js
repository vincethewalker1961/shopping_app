/**
 * Created by Thomas on 5/28/2015.
 */
var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/groceryList.html",
            controller: "GroceryListItemsController"
        })
        
        .when("/addItem", {
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        
        .when("/addItem/edit/:id/", {
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        
        .otherwise({
            redirectTo: "/"
        })
});

app.service("GroceryService", function() {
    
    var groceryService = {};
    
    groceryService.groceryItems = [
        {id: 1, completed: true, itemName: 'milk', date: '2018-01-01'},
        {id: 2, completed: true, itemName: 'cookies', date: '2018-01-01'},
        {id: 3, completed: true, itemName: 'ice cream', date: '2018-01-02'},
        {id: 4, completed: true, itemName: 'potatoes', date: '2018-01-02'},
        {id: 5, completed: true, itemName: 'cereal', date: '2018-01-03'},
        {id: 6, completed: true, itemName: 'bread', date: '2018-01-03'},
        {id: 7, completed: true, itemName: 'eggs', date: '2018-01-04'},
        {id: 8, completed: true, itemName: 'tortillas', date: '2018-01-04'}
    ];
    
    groceryService.findById = function(id) {
        for(var item in groceryService.groceryItems) {
            if(groceryService.groceryItems[item].id === id)
            return groceryService.groceryItems[item];
        }
    }

    groceryService.getNewId = function () {
        if(groceryService.newId) {
            groceryService.newId++;
            return groceryService.newId;
        }else {
            var maxId = _.max(groceryService.groceryItems, function(entry){ return entry.id;})
            groceryService.newId = maxId.id + 1;
            return groceryService.newId;
        }
    };
    
    groceryService.save = function(entry) {
        entry.id = groceryService.getNewId();
        groceryService.groceryItems.push(entry);
    };
    return groceryService;
});

app.controller("HomeController", ["$scope", function($scope) {
    
    $scope.appTitle = "Grocery List";
    
}]);

app.controller("GroceryListItemsController", ["$scope", "$routeParams", "$location", "GroceryService", function($scope, $routeParams, $location, GroceryService){
    
    $scope.groceryItems = GroceryService.groceryItems;
    
    $scope.groceryItem = { id: 7, completed: true, itemName: "cheese", date: new Date() }
    
    $scope.save = function() {
        GroceryService.save( $scope.groceryItem );
        $location.path("/");
    }
    
    console.log($scope.groceryItems);
}]);