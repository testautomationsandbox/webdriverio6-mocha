const NavBarPage = require('./NavBar.page');

const ProductDetailPage = {
  ...NavBarPage,
  productTitle: () => browser.$('h2.name'),
  buttonAddToCart: () => browser.$('a=Add to cart'),

  getPage: () => {
    browser.maximizeWindow();
    browser.url('/prod.html?idp_=1');
    return ProductDetailPage;
  },
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
