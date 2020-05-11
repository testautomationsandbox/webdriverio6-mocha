const uuid = require('uuid/v4');
const axios = require('axios')

const CartPage = {
  userCookieValue: '',
  addToCartEndpoint: 'https://api.demoblaze.com/addtocart',
  buttonPlaceOrder: () => browser.$('button=Place Order'),
  tableRowsProducts: () => browser.$$('tr.success'),

  getPage: () => {
    browser.maximizeWindow();
    browser.url('/');

    browser.waitUntil(
      () => browser.getCookies().length > 0
    );

    CartPage.userCookieValue = browser.getCookies(['user'])[0].value;
    browser.call(() => CartPage.sendAddToCartRequest('2'));
    browser.url('/cart.html');
    browser.pause(3000);

    return CartPage;
  },
  generateRequestBody: (prodId) => {
    const body = {
      id: uuid(),
      cookie: `user=${CartPage.userCookieValue}`,
      prod_id: prodId,
      flag: false
    }

    return body;
  },

  sendAddToCartRequest: async (prodId) => axios.post(CartPage.addToCartEndpoint, CartPage.generateRequestBody(prodId))
};

module.exports = CartPage;
