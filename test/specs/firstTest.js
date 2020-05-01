const { StoreHomePage, ProductDetailPage } = require('../../pageObjects');

describe('Demoblaze Store - Purchase flow', () => {

  beforeEach(()=> {
    StoreHomePage.getPage();
    expect(StoreHomePage.navBar()).toBeDisplayed();
    expect(StoreHomePage.productCards()).toBeElementsArrayOfSize({ eq: 9 });
    expect(StoreHomePage.footer()).toBeDisplayed();
  });

  it('User selects a product on home page by clicking the product image', () => {
    StoreHomePage.clickProductCardImageByIndex(0);
    expect(ProductDetailPage.buttonAddToCart()).toBeClickable();
  });
});
