const ContactPage = {
  inputContactEmail: () => browser.$('#recipient-email'),
  inputContactName: () => browser.$('#recipient-name'),
  textareaMessage: () => browser.$('#message-text'),
  buttonSendMessage: () => browser.$('button=Send message'),

  /**
   * Fills the message form in the Contact page object.
   *
   * @param email The sender email addredd
   * @param name The sender name
   * @param message The message content
   */
  sendMessage: ({email, name, message}) => {
    ContactPage.inputContactEmail().waitForEnabled();
    ContactPage.inputContactEmail().setValue(email);
    ContactPage.inputContactName().setValue(name);
    ContactPage.textareaMessage().setValue(message);
    ContactPage.buttonSendMessage().click();
  }
};

module.exports = ContactPage;
