const NavBarPage = require('./NavBar.page');
const ProductDetailPage = require('./ProductDetail.page');

const StoreHomePage = {
  ...NavBarPage,
  productCards: () => browser.$$('div.card'),
  footer: () => browser.$('#footc'),

  getPage: () => {
    browser.maximizeWindow();
    browser.url('/');
    return StoreHomePage;
  },
  clickProductCardImageByIndex: index => {
    StoreHomePage.productCards()[index].waitForClickable();
    StoreHomePage.productCards()[index].$('a:not(.hrefch)').click();
    return ProductDetailPage;
  },
  clickProductCardTitleByIndex: index =>{
    StoreHomePage.productCards()[index].waitForClickable();
    StoreHomePage.productCards()[index].$('a.hrefch');
    return ProductDetailPage;
  }
};

module.exports = StoreHomePage;
