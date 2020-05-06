const { ContactPage, CartPage, AboutUsPage, LogInPage, SignUpPage } = require('./');

const NavBarPage = {
  divNavBar: () => browser.$('div#navbarExample'),
  clickNavBarLink: (label) => {
    const pages = {
      Contact: () => ContactPage,
      Cart: () => CartPage,
      'About us': () => AboutUsPage,
      'Log in': () => LogInPage,
      'Sign up': () => SignUpPage
    }
    NavBarPage.divNavBar().$(`a=${label}`).click();
    return pages[label]();
  }
};

module.exports = NavBarPage;
