const NavBarPage = require('./NavBar.page');
const FooterPage = require('./Footer.page');
const ProductDetailPage = require('./ProductDetail.page');

const StoreHomePage = {
  ...NavBarPage,
  ...FooterPage,
  productCards: () => browser.$$('div.card'),
  buttonsCategories: () => browser.$('div.list-group'),

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
    StoreHomePage.productCards()[index].$('a.hrefch').click();
    return ProductDetailPage;
  },
  clickCategoryByLabel: label => StoreHomePage.buttonsCategories().$(`a=${label}`).click()
};

module.exports = StoreHomePage;
