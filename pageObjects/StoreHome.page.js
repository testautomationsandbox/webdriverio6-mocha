const StoreHomePage = {
  navBar: () => browser.$('#narvbarx'),
  productCards: () => browser.$$('div.card'),
  footer: () => browser.$('#footc'),

  getPage: () => {
    browser.maximizeWindow();
    browser.url('/');
  },
  clickProductCardImageByIndex: index => {
    StoreHomePage.productCards()[index].waitForClickable();
    StoreHomePage.productCards()[index].$('a:not(.hrefch)').click();
  },
  clickProductCardTitleByIndex: index =>{
    StoreHomePage.productCards()[index].waitForClickable();
    StoreHomePage.productCards()[index].$('a.hrefch');
  }
};

module.exports = StoreHomePage;
