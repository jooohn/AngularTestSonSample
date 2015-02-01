'use strict';

describe('配達先入力画面のテスト', function(){

  var homePage, page;

  beforeEach(function(){
    browser.get('/cart/settlement.HTML');
    //homePage = require('../../components/home/home.po');
    page = require('../../components/address/address.po');
  });

  describe('初期表示', function(){

    beforeEach(function(){});

    it('決済するボタンが表示されないこと', function(done){
      browser.wait(function() {
        return page.paymentBtnEl.isPresent();
      }, 1000).then(function(){
        expect(page.paymentBtnEl.isDisplayed()).toBe(false);
        done();
      });
    });    

    it('入力エラーが表示されていること', function(done){
      browser.wait(function() {
        return page.paymentBtnEl.isPresent();
      }, 1000).then(function(){
        expect(page.validation.name.getText()).toContain('名前(姓)は必須です');
        expect(page.validation.name.getText()).toContain('名前(名)は必須です');
        expect(page.validation.tel.getText()).toContain('電話番号は必須です');
        expect(page.validation.address.getText()).toContain('住所は必須です');
        expect(page.validation.mail.getText()).toContain('メールアドレスは必須です');
        done();
      });

    });    

  });

  describe('入力チェック', function(){

    beforeEach(function(){});
    
    it('電話番号に数値以外を入力してエラーとなること', function(done){
      browser.wait(function() {
        return page.telEl.isPresent();
      }, 1000).then(function(){
        return page.telEl.sendKeys('aaaaaaa');
      }).then(function(){
        expect(page.validation.tel.getText()).not.toContain('電話番号は必須です');
        expect(page.validation.tel.getText()).toContain('電話番号は数値のみ入力できます');
        done();
      });
    });    

    it('メールアドレスに不正フォーマットを入力してエラーとなること', function(){

    });    

  });


  describe('注文確定', function(){

  });

});