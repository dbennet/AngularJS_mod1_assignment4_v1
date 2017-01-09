(function () {
'use strict';

angular.module('Data')
.controller('MenuItemController', MenuItemController);


//MenuDataController.$inject = ['MenuDataService'];



MenuItemController.$inject = ['items'];
function MenuItemController(items) {
  var mt = this;
  mt.items = nitems.data;

   //var promise = MenuDataService.getAllCategories();
  
    //promise.then(function (response) {
    //  md.categories = response.data;     
    //})
    //.catch(function (error) {
    //    console.log("Something went terribly wrong.");
    //    md.categories = [];
    //});
  
    // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
  
  
  //console.log(md.categories);
  //md.items = MenuDataService.getItemsForCategory();
  
}

})();
