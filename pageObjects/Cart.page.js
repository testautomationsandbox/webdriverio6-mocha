const uuid = require('uuid/v4');
const axios = require('axios')

const CartPage = {
  userCookieValue: '',
  addToCartEndpoint: 'https://api.demoblaze.com/addtocart',
  buttonPlaceOrder: () => browser.$('button=Place Order'),
  linksDeleteProduct: () => browser.$$('tr a'),
  tableRowsProducts: () => browser.$$('tr.success'),

  /**
   * Clicks the place order button in the Cart page
   * @returns The Place Order form page object
   */
  clickPalceOrder: () => {
    CartPage.buttonPlaceOrder().click();
    return PlaceOrderPage;
  },

  /**
   * Deletes a product from the cart by the zero-based index
   * for the $$ array
   * @param index The zero-based index to be deleted in the array
   */
  clickDeleteByIndex: (index) => {
    CartPage.linksDeleteProduct()[index].waitForClickable();
    CartPage.linksDeleteProduct()[index].click();
  },

  /**
   * Loads the cart page with a product added
   * and ready to place an order.
   * @returns CartPage the Cart page object
   */
  getPage: () => {
    browser.maximizeWindow();
    browser.url('/');

    browser.waitUntil(
      () => browser.getCookies().length > 0
    );

    CartPage.userCookieValue = browser.getCookies(['user'])[0].value;
    browser.call(() => CartPage.sendAddToCartRequest('2'));
    browser.pause(3000);
    browser.url('/cart.html');
    browser.waitUntil(
      () => CartPage.tableRowsProducts().length > 0,
      {
        timeoutMsg: 'The cart page is still empty after waiting for 5 seconds.'
      }
    )
    return CartPage;
  },

  /**
   * Generates the JSON body to be send in an API request
   * @param prodId The ID of the product to be added to the body payload
   * @returns Object the JSON body
   */
  generateRequestBody: (prodId) => {
    const body = {
      id: uuid(),
      cookie: `user=${CartPage.userCookieValue}`,
      prod_id: prodId,
      flag: false
    }
    return body;
  },

  /**
   Sends a request to the addtocart API endpoint,
   to programmatically have products in the cart to set preconditions
   @param prodId The id of the product to add to the cart
   */
  sendAddToCartRequest: async (prodId) => {
    try {
      return axios.post(CartPage.addToCartEndpoint, CartPage.generateRequestBody(prodId));
    } catch (ex) {
      throw new Error(ex);
    }
  }
};

module.exports = CartPage;
