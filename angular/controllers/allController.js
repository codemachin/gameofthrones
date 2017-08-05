myApp.controller('allController',['$http','BookService',function($http,BookService) {
// gets all data of books,houses and characters
  //create a context
  var main = this;
  this.houses=[];
  this.character=[];
  this.all=[];

  this.totalDisplayed = 20;

this.loadMore = function () {
  main.totalDisplayed += 20;  
};


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
          console.log(main.books);
          main.all.push.apply(main.all,main.books);



        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
  
    
                   
  
    this.allHouses = function(){
   for(i=1;i<12;i++){
      BookService.getAllHouses([i])
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          /*console.log(response.data);*/
          if(response.data.length>0){
              main.all.push.apply(main.all,response.data);
                  }
          /*console.log(main.houses);*/
           //main.all.push.apply(main.all,main.houses);


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    }

  }// end load all blogs
  

  
                   


  this.allCharacters = function(){
   for(i=1;i<50;i++){
      BookService.getAllCharacters([i])
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response.data);
          if(response.data.length>0){
              main.all.push.apply(main.all,response.data);
                  }

                  
                    
                    //main.all.push.apply(main.all,main.character);
                    console.log(main.all)
                 
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    }

  }// end load all blogs
  
  this.callAll = function(){
    main.allBooks();
     main.allHouses();
    main.allCharacters(); 
  }
                    
}]); // end controller
