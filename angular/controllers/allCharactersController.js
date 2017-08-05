myApp.controller('allCharacterController',['$http','BookService',function($http,BookService) {
//for all characters
  //create a context
  var main = this;
  this.character=[];

this.totalDisplayed = 20;
this.sortvar = "name";

this.sort = function(){
  if(main.sortvar=="name"){
    main.sortvar="-name";
  }else{
    main.sortvar="name";
  }
}

this.loadMore = function () {
  main.totalDisplayed += 20;  
};

// there were 50 pages to get data from thats why i have made a loop
  

  this.allCharacters = function(){
   for(i=1;i<50;i++){
      BookService.getAllCharacters([i])
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response.data);
          if(response.data.length>0){
              main.character.push.apply(main.character,response.data);
                  }
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    }

  }// end load all blogs
  this.allCharacters();
   


}]); // end controller
