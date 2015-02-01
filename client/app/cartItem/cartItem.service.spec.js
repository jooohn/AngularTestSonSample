'use strict';

describe('Service: cartItem', function () {

  // load the service's module
  beforeEach(module('AngularJsTestson'));

  // instantiate service
  var cartItem, 
    $log,
    product = [];

  beforeEach(inject(function (_cartItem_, _$log_) {
    cartItem = _cartItem_;
    $log = _$log_;
    cartItem.clear();

    // dummy data
    product.push({
      price: 2000,
      productId: 10,
      productName: 'はじめてのAngularJS(和書)'
    });
    product.push({
      price: 1000,
      productId: 11,
      productName: 'AngularJSリファレンス'
    });

    spyOn($log, 'warn');

  }));

  describe('add()のテスト', function(){

    beforeEach(function(){});

    it('新規で1件追加できること', function(){

      expect(cartItem.getCartItems().length).toBe(0);
      cartItem.add(product[0]);
      expect(cartItem.getCartItems().length).toBe(1);
      expect(cartItem.getCartItems()[0]).toEqual({
        productId: 10,
        productName: 'はじめてのAngularJS(和書)',
        price: 2000,
        count: 1,
        totalAmount: 2000,
        product: product[0]
      });

    });

    it('既にカート内に存在する場合はインクリメントされること', function(){

      cartItem.add(product[0]);
      expect(cartItem.getCartItems().length).toBe(1);

      cartItem.add(product[0]);
      expect(cartItem.getCartItems().length).toBe(1);
      expect(cartItem.getCartItems()[0]).toEqual({
        productId: 10,
        productName: 'はじめてのAngularJS(和書)',
        price: 2000,
        count: 2,
        totalAmount: 4000,
        product: product[0]
      });

    });

  });

  describe('remove()のテスト', function(){

    var actual;

    beforeEach(function(){
      cartItem.add(product[0]);
      cartItem.add(product[0]);
      cartItem.add(product[1]);
    });

    it('削除後にまだ商品数が残る場合は、数量などが減少すること', function(){

      expect(cartItem.getCartItems().length).toBe(2);

      actual = cartItem.getCartItems()[0];
      expect(actual.productId).toBe(10);
      expect(actual.count).toBe(2);
      expect(actual.totalAmount).toBe(4000);

      cartItem.remove(product[0].productId);
      expect(cartItem.getCartItems().length).toBe(2);

      actual = cartItem.getCartItems()[0];
      expect(actual.productId).toBe(10);
      expect(actual.count).toBe(1);
      expect(actual.totalAmount).toBe(2000);

    });
    
    it('削除後に商品数が0になる場合は、レコードごと削除されること', function(){

      expect(cartItem.getCartItems().length).toBe(2);      
      cartItem.remove(product[1].productId);
      expect(cartItem.getCartItems().length).toBe(1);

      actual = cartItem.getCartItems()[0];
      expect(actual.productId).toBe(10);
      expect(actual.count).toBe(2);
      expect(actual.totalAmount).toBe(4000);

    });

    it('productIdが存在しない場合はwarnログを出力すること', function(){
      expect(cartItem.getCartItems().length).toBe(2);      
      cartItem.remove('hoge');
      expect(cartItem.getCartItems().length).toBe(2);      
      expect($log.warn).toHaveBeenCalledWith('指定したproductIDがカート内に存在しません。productId=hoge');
    });

  });

  describe('clear()のテスト', function(){

    beforeEach(function(){
      cartItem.add(product[0]);
      cartItem.add(product[1]);
    });

    it('カートがクリアされること', function(){
      expect(cartItem.getCartItems().length).toBe(2);
      cartItem.clear();
      expect(cartItem.getCartItems().length).toBe(0);
    });

  });

  describe('getCartItems()のテスト', function(){

    beforeEach(function(){
      cartItem.add(product[0]);
      cartItem.add(product[1]);
    });

    it('itemsが取得できること', function(){
      expect(cartItem.getCartItems().length).toBe(2);
      expect(cartItem.getCartItems()[0].productId).toBe(10);
      expect(cartItem.getCartItems()[1].productId).toBe(11);
    });

  });

});
