const PlaceOrderPage = {
  buttonPurchase: () => browser.$('button=Purchase'),
  buttonClose: () => browser.$('button=Close'),
  buttonOk: () => browser.$('button=OK'),
  thankYouAlert: () => browser.$('div.showSweetAlert'),
  inputName: () => browser.$('input#name'),
  inputCountry: () => browser.$('input#country'),
  inputCity: () => browser.$('input#city'),
  inputCard: () => browser.$('input#card'),
  inputMonth: () => browser.$('input#month'),
  inputYear: () => browser.$('input#year'),

  /**
   * Clicks the Purchase button to checkout order
   */
  clickPurchase: () => PlaceOrderPage.buttonPurchase().click(),

  /**
   * Fills the Place Order form to checkout order
   * @param name The buyer name
   * @param country The buyer country
   * @param city The buyer city
   * @param card The buyer card
   * @param month The card expire month
   * @param year The card expire year
   *
   * @returns PlaceOrderPage the Place Order form page object
   */
  fillPlaceOrderForm: ({name, country, city, card, month, year}) => {
    PlaceOrderPage.inputName().setValue(name);
    PlaceOrderPage.inputCountry().setValue(country);
    PlaceOrderPage.inputCity().setValue(city);
    PlaceOrderPage.inputCard().setValue(card);
    PlaceOrderPage.inputMonth().setValue(month);
    PlaceOrderPage.inputYear().setValue(year);

    return PlaceOrderPage;
  }
};

module.exports = PlaceOrderPage;
