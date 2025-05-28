import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";

let loginPage;
let user = 'standardUser'
let inventoryPage;

describe("Login test", () => {
    beforeEach(() => {
        cy.fixture(Cypress.env('environment')).then((data) => {
            loginPage = new LoginPage(data.domain, Cypress.env("users")[user]);
            inventoryPage = new InventoryPage(`${data.domain}${data.inventoryPath}`);
        });
        cy.session(user, () => {
            loginPage.login();
        });
    })

    it("Login as standard user and validate inventory page", () => {
        inventoryPage.visit();
        inventoryPage.validatePage();
    })

    it('Add items to cart', () =>{
        let itemText = 'Sauce Labs Bolt T-Shirt';
    })
})