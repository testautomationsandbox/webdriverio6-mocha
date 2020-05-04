const { StoreHomePage, CartPage } = require('../../pageObjects');

describe('Demoblaze Store - Purchase flow', () => {

  beforeEach(()=> {
    StoreHomePage.getPage();
    expect(StoreHomePage.divNavBar()).toBeDisplayed();
    expect(StoreHomePage.productCards()).toBeElementsArrayOfSize({ eq: 9 });
    expect(StoreHomePage.footer()).toBeDisplayed();
  });

  it('User selects a product on home page by clicking the product image and adds it to cart', () => {
    StoreHomePage
      .clickProductCardImageByIndex(0)
      .clickAddToCart()
      .clickNavBarLink('Cart');
    expect(CartPage.tableRowsProducts()).toBeElementsArrayOfSize({ eq: 1 });
  });
});
