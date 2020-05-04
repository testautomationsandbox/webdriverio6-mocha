const CartPage = {
  buttonPlaceOrder: () => browser.$('button=Place Order'),
  tableRowsProducts: () => browser.$$('tr.success')
};

module.exports = CartPage;
