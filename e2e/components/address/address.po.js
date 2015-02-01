'use strict';

var AddressPage = function (argument) {
  
  // element
  this.paymentBtnEl = element(by.css('.btn-payment'));

  // input
  this.lastNameEl = element(by.name('lastName'));
  this.firstNameEl = element(by.name('firstName'));
  this.telEl = element(by.name('tel'));
  this.addressEl = element(by.name('addresss'));
  this.mailEl = element(by.name('mail'));

  // validation
  this.validation = {
    name: element(by.css('.message-name')),
    tel: element(by.css('.message-tel')),
    address: element(by.css('.message-address')),    
    mail: element(by.css('.message-mail'))
  };

}

module.exports = new AddressPage();