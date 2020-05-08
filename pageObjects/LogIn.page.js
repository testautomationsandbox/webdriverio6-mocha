const LogInPage = {
  inputUsername: () => browser.$('#loginusername'),
  inputPassword: () => browser.$('#loginpassword'),
  buttonLogIn: () => browser.$('button=Log in')
};

module.exports = LogInPage;
