import LoginPage from "./pages/LoginPage"

let loginPage;
let user = 'standardUser'

describe("Login test",()=>{
    beforeEach(()=>{
        cy.session(user, ()=>{
            cy.fixture(Cypress.env('environment')).then((data)=>{
                loginPage = new LoginPage(data.domain, Cypress.env("users")[user]);
                loginPage.login();
            })
        })

    })
    it("Login as standard user", ()=>{
        


    })
})