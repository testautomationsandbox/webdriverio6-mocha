describe('Demoblaze - Product', () => {
  it('User can add a product to the cart', () => {
    ProductDetailPage
      .getPage()
      .clickAddToCart();
    const alertMessage = browser.getAlertText();
    browser.acceptAlert();
    expect(alertMessage).toEqual('Product added');
  })
});
