describe('Demoblaze - Cart', () => {
  beforeEach(()=> {
    CartPage.getPage();
  });

  // it('User can delete a product', () => {
  //   CartPage.clickDeleteByIndex(0);
  //   expect(CartPage.tableRowsProducts()).not.toBeDisplayed();
  // });

  it('User places an order', () => {
    const orderData = {
      name: 'John Doe',
      country: 'Argentina',
      city: 'Buenos Aires',
      card: '201616007469588',
      month: '06',
      year: '2020'
    }
    CartPage
      .clickPalceOrder()
      .fillPlaceOrderForm(orderData)
      .clickPurchase();

    expect(PlaceOrderPage.thankYouAlert()).toBeDisplayed();
  });
})
