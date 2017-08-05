myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            /*controller 		: 'allBooksController',
            // what is the alias of that controller.
        	controllerAs 	: 'myBook'*/
        })
        .when('/books/:bookId',{
        	templateUrl     : 'views/singleBook-view.html',
        	controller 		: 'bookController',
        	controllerAs 	: 'currentBook'
        })
        .when('/houses/:houseId',{

        	templateUrl     : 'views/singleHouse-view.html',
        	controller 		: 'houseController',
        	controllerAs 	: 'currentHouse'
        })
        .when('/characters/:characterId',{

            templateUrl     : 'views/singleCharacter-view.html',
            controller      : 'characterController',
            controllerAs    : 'currentCharacter'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);