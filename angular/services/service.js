myApp.service('BookService', function($http){
	
	var baseUrl = 'https://www.anapioficeandfire.com/api/';

	this.getAllBooks = function(){

		return $http.get(baseUrl+'books?page=1&pageSize=50')

	} 

	this.getAllHouses = function (Id){
		return $http.get(baseUrl+"houses?page="+Id+"&pageSize=50")
	} 

	this.getAllCharacters = function (i){
		return $http.get(baseUrl+"characters?page="+i+"&pageSize=50")
	} 

	this.getBook = function (id){
		return $http.get(baseUrl + "books/" + id)
	} 

	this.getHouse = function (id){
		return $http.get(baseUrl + "houses/" + id)
	} 

	this.getCharacter = function (id){
		return $http.get(baseUrl + "characters/" + id)
	}
	
});