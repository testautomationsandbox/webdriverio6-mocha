const SignUpPage = {
  inputUsername: () => browser.$('#sign-username'),
  inputPassword: () => browser.$('#sign-password'),
  buttonSignUp: () => browser.$('button=Sign up')
};

module.exports = SignUpPage;
