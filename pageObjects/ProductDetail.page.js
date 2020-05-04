const NavBarPage = require('./NavBar.page');

const ProductDetailPage = {
  ...NavBarPage,
  productTitle: () => browser.$('h2.name'),
  buttonAddToCart: () => browser.$('a=Add to cart'),

  clickAddToCart: () => {
    ProductDetailPage.buttonAddToCart().click();
    browser.waitUntil(
      () => browser.getAlertText(),
      { timeout: 3000}
    )
    browser.acceptAlert();
    return ProductDetailPage;
  }
};

module.exports = ProductDetailPage;
