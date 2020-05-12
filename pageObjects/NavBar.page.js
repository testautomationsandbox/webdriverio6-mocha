const NavBarPage = {
  divNavBar: () => browser.$('div#navbarExample'),

  /**
   * Clicks the nav bar button based on the label param
   * @param label The label of the link to click
   * @returns pageObject Returns a page object based on the clicked link
   */
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
