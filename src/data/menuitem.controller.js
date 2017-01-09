(function () {
'use strict';

angular.module('Data')
.controller('MenuItemController', MenuItemController);


//MenuDataController.$inject = ['MenuDataService'];



MenuItemController.$inject = ['nitems'];
function MenuItemController(nitems) {
  var mt = this;
  mt.items = nitems.data.menu_items;

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
