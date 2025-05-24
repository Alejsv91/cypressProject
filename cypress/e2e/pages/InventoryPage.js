class InventoryPage{
    constructor(path){
        this.path = path;

    }

    get productsTitle(){
        return cy.get('#inventory_filter_container > div.product_label');
    }

    visit(){
        cy.visit(this.path);
    }

    validatePage(){
        this.productsTitle.should('be.visible');
    }
}

export default InventoryPage