const NavBarPage = require('./NavBar.page');
const FooterPage = require('./Footer.page');
const ProductDetailPage = require('./ProductDetail.page');

const StoreHomePage = {
  ...NavBarPage,
  ...FooterPage,
  productCards: () => browser.$$('div.card'),
  buttonsCategories: () => browser.$('div.list-group'),

  /**
   * Gets the Demoblaze store homepage
   * @returns StoreHomePage The Store Home page object
   */
  getPage: () => {
    browser.maximizeWindow();
    browser.url('/');
    return StoreHomePage;
  },

  /**
   * Clicks the Product image by zero based index in the Product grid
   *
   * @param index The zero based index of the product image to click
   * @returns ProductDetailPage The product details page object
   */
  clickProductCardImageByIndex: index => {
    StoreHomePage.productCards()[index].waitForClickable();
    StoreHomePage.productCards()[index].$('a:not(.hrefch)').click();
    return ProductDetailPage;
  },

  /**
   * Clicks the Product title by zero based index in the Product grid
   *
   * @param index The zero based index of the product title to click
   * @returns ProductDetailPage The product details page object
   */
  clickProductCardTitleByIndex: index =>{
    StoreHomePage.productCards()[index].waitForClickable();
    StoreHomePage.productCards()[index].$('a.hrefch').click();
    return ProductDetailPage;
  },

  /**
   * Clicks a Category button based on the label param
   *
   * @param label The category label to click
   * @returns StoreHomePage The Store home page object
   */
  clickCategoryByLabel: label => {
    StoreHomePage.buttonsCategories().$(`a=${label}`).click();
    return StoreHomePage;
  }
};

module.exports = StoreHomePage;
