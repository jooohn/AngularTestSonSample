'use strict';

angular.module('AngularJsTestson')
  .factory('cartItem', function () {

    var items = [];

    /////////////////////
    // private API here

    function indexOfCartItem(productId) {
      var result = -1;
      angular.forEach(items, function(item, index){
        if(this.keepGoing) {
          if(item.productId === productId) {
            result = index;
          }
        }
      }, {
        keepGoing: true
      });
      return result;
    }

    function increment(index) {

      items[index].count++;
      items[index].totalAmount += items[index].price;
      return items;

    }

    function append(product){

      var newProduct = {
        productId: product.productId,
        productName: product.productName,
        price: product.price,
        count: 1,
        totalAmount: product.price,
        product: product
      };
      items.push(newProduct);
      return items;

    }

    ///////////////////// 
    // Public API here
    return {
      add: function (product) {
        var index = indexOfCartItem(product.productId);
        return (index > -1) ? increment(index): append(product);
      },
      remove: function(productId) {
        var index = indexOfCartItem(productId);
        if(index > -1) {
          items.splice(index, 1);
        }
      },
      clear: function() {
        items.length = 0;
      },
      getCartItems: function(){
        // [MEMO] 参照渡しなので取り扱い注意。値渡しにする場合は、cloneとかしてね
        return items;
      }
    };
    
  });
