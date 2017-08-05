myApp.controller('houseController',['$http','$routeParams','BookService',function($http,$routeParams,BookService) {
// gets single house data
  //create a context
  var main = this;
  this.id = $routeParams.houseId;
console.log(this.id);

 
  this.allHouse = function(){
      
      BookService.getHouse(main.id)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response.data);
          main.house=response.data;



        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
  this.allHouse();


   


}]); // end controller
