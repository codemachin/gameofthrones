myApp.controller('bookController',['$http','$routeParams','BookService',function($http,$routeParams,BookService) {
// gets data from a single book
  //create a context
  var main = this;
  this.id = $routeParams.bookId;
console.log(this.id);


  this.allBooks = function(){
   
      BookService.getBook(main.id)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response.data);
          main.book=response.data;



        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
  this.allBooks();


   


}]); // end controller
