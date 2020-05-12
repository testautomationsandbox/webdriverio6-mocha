const NavBarPage = require('./NavBar.page');

const ProductDetailPage = {
  ...NavBarPage,
  productTitle: () => browser.$('h2.name'),
  buttonAddToCart: () => browser.$('a=Add to cart'),

  /**
   * Gets the product details page for the Product ID 1
   *
   * @returns ProductDetailPage The product details page object
   */
  getPage: () => {
    browser.maximizeWindow();
    browser.url('/prod.html?idp_=1');
    return ProductDetailPage;
  },

  /**
   * Clicks the add to cart button in the product details page
   * @returns ProductDetailPage The product details page object
   */
  clickAddToCart: () => {
    ProductDetailPage.buttonAddToCart().click();
    browser.waitUntil(
      () => browser.getAlertText(),
      { timeout: 3000}
    );
    return ProductDetailPage;
  }
};

module.exports = ProductDetailPage;
