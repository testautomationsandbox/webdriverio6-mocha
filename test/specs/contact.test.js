const { StoreHomePage } = require('../../pageObjects');

describe('Demoblaze - Contact', () =>{

  it('User sends a contact message', () => {
    StoreHomePage
      .getPage()
      .clickNavBarLink('Contact')
      .sendMessage({
        email: 'sarasa@email.com',
        name: 'Juan Perez',
        message: 'This is the message'
      });

    const actualMessage = browser.getAlertText();
    browser.acceptAlert();

    // toBe jest matcher does not have a custom message param :(
    expect(actualMessage).toBe('Thanks for the message!!');
  });
});
