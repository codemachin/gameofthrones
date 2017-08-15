myApp.controller('allHousesController',['$http','BookService',function($http,BookService) {
//gets all houses data
  //create a context
  var main = this;
  this.houses=[];
  this.sortvar = "name";

  this.sort = function(){
    if(main.sortvar=="name"){
      main.sortvar="-name";
    }else{
      main.sortvar="name";
    }
  }

  this.totalDisplayed = 20;

  this.loadMore = function () {
    main.totalDisplayed += 20;  
  };


 

  this.allHouses = function(){
    // Runs the loop 12 times as data is paginated 
   for(var i=1;i<12;i++){
      BookService.getAllHouses([i])
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          /*console.log(response.data);*/
          if(response.data.length>0){
              main.houses.push.apply(main.houses,response.data);
                  }
          /*console.log(main.houses);*/


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          if(response.status != -1){
            alert("some error occurred. Check the console.");
            console.log(response);
          }
        });
    }

  }// end load all blogs
  

  
   


}]); // end controller