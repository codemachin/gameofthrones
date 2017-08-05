myApp.controller('characterController',['$http','$routeParams','BookService',function($http,$routeParams,BookService) {
//gets data of a single character
  //create a context
  var main = this;
  this.id = $routeParams.characterId;
console.log(this.id);


  this.allCharacter = function(){
   
      BookService.getCharacter(main.id)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response.data);
          main.character=response.data;



        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
  this.allCharacter();


   


}]); // end controller
