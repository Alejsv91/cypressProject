class LoginPage {
    credentials = {};

    constructor(baseUrl, credentials){
        this.baseUrl = baseUrl;
        this.credentials = credentials;
    }

    //selectors
    get usernameField(){
        return cy.get('#user-name');
    }

    get passwordField(){
        return cy.get('#password');
    }

    get loginButton(){
        return cy.get('#login-button');
    }

    //actions
    fillUsername(){
        this.usernameField.clear().type(this.credentials.username);
    }

    fillPassword(){
        this.passwordField.clear().type(this.credentials.password);
    }

    clickLoginButton(){
        this.loginButton.click();
    }

    login(){
        this.visit();
        this.fillUsername();
        this.fillPassword();
        this.clickLoginButton();
    }

    visit(){
        cy.visit(this.baseUrl);
    }
}

export default LoginPage;