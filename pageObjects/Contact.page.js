const ContactPage = {
  inputContactEmail: () => browser.$('#recipient-email'),
  inputContactName: () => browser.$('#recipient-name'),
  textareaMessage: () => browser.$('#message-text'),
  buttonSendMessage: () => browser.$('button=Send message'),

  sendMessage: ({email, name, message}) => {
    ContactPage.inputContactEmail().waitForEnabled();
    ContactPage.inputContactEmail().setValue(email);
    ContactPage.inputContactName().setValue(name);
    ContactPage.textareaMessage().setValue(message);
    ContactPage.buttonSendMessage().click();
  }
};

module.exports = ContactPage;
