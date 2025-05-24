class InventoryPage{
    get productsTitle(){
        cy.get('#inventory_filter_container > div.product_label');
    }

    validatePage(){
        this.productsTitle.should('be.visible');
    }
}