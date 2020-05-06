const FooterPage = {
  footerContainer: () => browser.$('div#fotcont'),
  footerSections: () => FooterPage.footerContainer().$$('div')
};

module.exports = FooterPage;
