myApp.controller('allBooksController',['$http','BookService',function($http,BookService) {
//gets all books
  //create a context
  var main = this;
  this.sortvar = "name";

this.sort = function(){
  if(main.sortvar=="name"){
    main.sortvar="-name";
  }else{
    main.sortvar="name";
  }
}




  this.allBooks = function(){

    BookService.getAllBooks()
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response.data);
          main.books=response.data;



        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
  this.allBooks();


   


}]); // end controller
