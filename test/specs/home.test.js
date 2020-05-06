const { StoreHomePage } = require('../../pageObjects');

describe('Demoblaze - Home', () => {

  beforeEach(()=> {
    StoreHomePage.getPage();
    expect(StoreHomePage.divNavBar()).toBeDisplayed();
    expect(StoreHomePage.productCards()).toBeElementsArrayOfSize({ eq: 9 });
    expect(StoreHomePage.footerContainer()).toBeDisplayed();
  });

  it('User selects a product on home page by clicking the product image', () => {
    StoreHomePage.clickProductCardImageByIndex(0)
    expect(browser).toHaveUrl('prod.html?idp_=', { containing: true });
  });

  it('User selects a product on home page by clicking the product title and adds it to cart', () => {
    StoreHomePage.clickProductCardTitleByIndex(0)
    expect(browser).toHaveUrl('prod.html?idp_=', { containing: true });
  });

  const categories = [
    { label: 'Phones', expected: 7 },
    { label: 'Laptops', expected: 6 },
    { label: 'Monitors', expected: 2 }
  ]

  categories.forEach((categoryTest) => {
    it(`User selects ${categoryTest.label} category and the product grid has ${categoryTest.expected} products`, () => {
      StoreHomePage.clickCategoryByLabel(categoryTest.label);
      expect(StoreHomePage.productCards()).toBeElementsArrayOfSize({ eq: categoryTest.expected });
    });
  });

  const navBarLinks = [
    { label: '', expectedUrl: ''},
  ]
});
