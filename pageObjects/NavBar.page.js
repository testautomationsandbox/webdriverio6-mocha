const ContactPage = require('./Contact.page');
const CartPage = require('./Cart.page');

const NavBarPage = {
  divNavBar: () => browser.$('div#navbarExample'),
  clickNavBarLink: (label) => {
    const pages = {
      Contact: () => ContactPage,
      Cart: () => CartPage
    }
    NavBarPage.divNavBar().$(`a=${label}`).click();
    return pages[label]();
  }
};

module.exports = NavBarPage;
