myApp.directive('showTab', function () {
    return {

          //materialise tabs dont work in angular so i had to create this custom directive
            link: function (scope, element, attrs) {

                element.on("click",function() {
                      $('#a,#b,#c,#d').removeClass("active");
                      $("#"+attrs.id).addClass("active");
                      $('#a,#b,#c,#d').css({"border-bottom" : "0"}); 
                      $("#"+attrs.id).css({"border-bottom" : "solid 2px #f6b2b5"});                      
                });
            }
        };
});


myApp.directive('allTile', function () {
    return {

          templateUrl:"views/all-tile.html"

        };
});
myApp.directive('allBooks', function () {
    return {

          templateUrl:"views/book-tile.html"

        };
});
myApp.directive('allHouse', function () {
    return {

          templateUrl:"views/house-tile.html"

        };
});
myApp.directive('allCharacters', function () {
    return {

          templateUrl:"views/character-tile.html"

        };
});
