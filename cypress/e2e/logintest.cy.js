import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";

let loginPage;
let user = 'standardUser'
let inventoryPage;

describe("Login test",()=>{
    beforeEach(()=>{
        cy.session(user, ()=>{
            cy.fixture(Cypress.env('environment')).then((data)=>{
                loginPage = new LoginPage(data.domain, Cypress.env("users")[user]);
                inventoryPage  = new InventoryPage(`${data.domain}${data.inventoryPath}`);
                loginPage.login();
            })
        })

    })
    it("Login as standard user", ()=>{
        inventoryPage.visit();
        inventoryPage.validatePage();
    })
})